# MVP Requirements Analysis & Implementation Roadmap

## Current Implementation vs. True Requirements

### ❌ CURRENT STATE: Single-Player Research Protocol

**What we have now:**

- Single participant plays both sender and receiver roles sequentially
- Same person sees the animal, picks color, then sees color and picks animal
- No real communication between different people
- Research focuses on individual color-animal associations
- Complex multi-phase research protocol (demographics, color vision, associations)

### ✅ REQUIRED STATE: Two-Player Communication System

**What we actually need:**

- **Player 1 (Sender)**: Sees pre-selected animal → Chooses color to communicate it
- **Player 2 (Receiver)**: Sees only the color → Identifies which animal it represents
- **Success Metric**: Both players agree on the same animal (shared scoring)
- **Role Swapping**: Players alternate roles each round
- **Real Communication**: Success depends on shared understanding between different people

---

## Core Architecture Changes Required

### 1. **Multi-Player State Management**

```jsx
// Current: Single player state
const [role, setRole] = useState("sender");

// Required: Two-player session state
const [gameSession, setGameSession] = useState({
  player1: { id: "p1", currentRole: "sender", ready: false },
  player2: { id: "p2", currentRole: "receiver", ready: false },
  currentRound: 1,
  sharedScore: 0,
  roundInProgress: false,
});
```

### 2. **Real-Time Communication System**

```jsx
// Required: Socket.io or WebRTC for real-time sync
import io from "socket.io-client";

const socket = io("ws://localhost:3001");

// Sync game state between players
socket.on("gameStateUpdate", (newState) => {
  setGameSession(newState);
});

socket.emit("playerAction", {
  type: "COLOR_SELECTED",
  payload: { color: selectedColor, playerId: "p1" },
});
```

### 3. **Role-Based UI Adaptation**

```jsx
// Current: Single player sees both views sequentially
{
  role === "sender" ? <SenderScreen /> : <ReceiverScreen />;
}

// Required: Different players see different views simultaneously
{
  currentPlayer.role === "sender" ? (
    <SenderScreen targetAnimal={currentAnimal} />
  ) : (
    <ReceiverScreen waitingForSender={true} />
  );
}
```

### 4. **Shared Success Tracking**

```jsx
// Current: Individual scoring based on color distance
const isCorrect = colorsAreSimilar(senderColor, animalColor, COLOR_TOLERANCE);

// Required: Shared success when both players pick same animal
const isSuccess = senderTargetAnimal.name === receiverSelectedAnimal.name;
if (isSuccess) {
  incrementSharedScore();
}
```

---

## Immediate Implementation Plan

### Phase 1: Simplify Current System (Remove Research Complexity)

1. **Remove multi-phase research protocol**
   - Eliminate demographics, color vision, associations screens
   - Go straight to core game after simple consent/name entry
2. **Simplify game flow to focus on core mechanics**
   - Remove strategy collection modals
   - Remove confidence rating systems
   - Focus purely on color-animal communication

### Phase 2: Two-Player Architecture Foundation

1. **Add Socket.io server for real-time communication**
2. **Implement session management system**
3. **Create lobby system for player pairing**
4. **Add player identification and role assignment**

### Phase 3: True Two-Player Game Logic

1. **Implement simultaneous player views**
2. **Add shared scoring mechanism**
3. **Create role-swapping system**
4. **Add waiting states and turn coordination**

### Phase 4: Enhanced Two-Player Features

1. **Add player-to-player feedback**
2. **Implement round-by-round results sharing**
3. **Add post-game analysis for both players**

---

## Key Files That Need Major Changes

### 1. **App.jsx** - Complete Architecture Overhaul

- Remove single-player role switching
- Add multi-player session management
- Implement WebSocket integration
- Add lobby and player matching logic

### 2. **SenderScreen.jsx** - True Sender Experience

- Show pre-selected target animal (chosen by system/other player)
- Remove target animal selection
- Add "waiting for receiver" states
- Implement real-time color transmission

### 3. **ReceiverScreen.jsx** - True Receiver Experience

- Show only received color (no animal context)
- Add "waiting for sender" states
- Implement animal selection with real-time transmission
- Show success/failure feedback based on agreement

### 4. **GameHeader.jsx** - Two-Player Stats

- Show both player names/IDs
- Display shared score (not individual)
- Show current roles for both players
- Add turn indicator and waiting states

### 5. **New: Server/server.js** - Real-Time Backend

- WebSocket server for player communication
- Session management for game rooms
- State synchronization between players
- Player matching and lobby system

---

## Research Focus Realignment

### Current Research Questions (Individual)

- What are personal color-animal associations?
- How do demographics affect color choices?
- What strategies do individuals use?

### Required Research Questions (Communication)

- How effectively can colors communicate concepts between people?
- What color-animal pairs have highest communication success?
- Do players learn to adapt their color choices based on partner feedback?
- What cultural/individual factors affect communication success?

---

## Next Steps

1. **Create simplified single-player version** that matches true game flow
2. **Build WebSocket server architecture**
3. **Implement basic two-player lobby system**
4. **Convert game logic to true two-player communication**
5. **Add research data collection for communication patterns**

---

## Success Metrics for MVP

✅ **Two separate players can join a game session**  
✅ **Player 1 sees an animal and selects a color**  
✅ **Player 2 sees only the color and selects an animal**  
✅ **Success is measured by agreement, not color distance**  
✅ **Players can swap roles and continue playing**  
✅ **Shared score increases only when both agree**  
✅ **Game tracks communication success patterns**

This represents a fundamental shift from individual research to communication research, requiring significant architectural changes but maintaining the excellent UI/UX foundation already built.
