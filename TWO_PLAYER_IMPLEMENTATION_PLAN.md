# Two-Player Implementation Plan

## 🎯 Executive Summary

The current implementation is a sophisticated single-player research platform that simulates color communication by having one person play both sender and receiver roles. However, the true research objective requires **real communication between two different people**, where success depends on shared understanding rather than individual color-animal associations.

**Key Discovery**: We built an excellent individual psychology research tool, but we need a communication research tool.

---

## 📋 Current vs. Required Implementation

### ❌ What We Have Now

```
Single Player Journey:
1. Player sees animal (e.g., elephant)
2. Player picks color (e.g., gray)
3. SAME player sees gray color
4. SAME player picks elephant
5. Success = color distance calculation to predefined elephant color

Research Focus: Individual color-animal associations
Success Metric: Color similarity to predetermined animal colors
```

### ✅ What We Actually Need

```
Two-Player Communication:
1. Player 1 (Sender) sees animal (e.g., elephant)
2. Player 1 picks color (e.g., gray)
3. Player 2 (Receiver) sees ONLY the gray color
4. Player 2 picks animal based on color interpretation
5. Success = Both players agree on same animal

Research Focus: Communication effectiveness between people
Success Metric: Agreement between different people's interpretations
```

---

## 🔧 Technical Architecture Changes

### 1. **Real-Time Communication Infrastructure**

#### Socket.io Server Setup

```bash
# Install dependencies
npm install socket.io socket.io-client express cors

# Create server/websocket-server.js
```

```javascript
// Basic WebSocket server architecture
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Game session management
const gameSessions = new Map();

io.on("connection", (socket) => {
  console.log("Player connected:", socket.id);

  // Player joins lobby
  socket.on("joinLobby", (playerName) => {
    socket.playerName = playerName;
    socket.emit("lobbyJoined", { playerId: socket.id });
    matchPlayers();
  });

  // Game actions
  socket.on("colorSelected", (data) => {
    io.to(data.sessionId).emit("colorReceived", data);
  });

  socket.on("animalSelected", (data) => {
    io.to(data.sessionId).emit("roundComplete", data);
  });
});
```

### 2. **Client-Side Architecture Transformation**

#### App.jsx Complete Redesign

```javascript
// Remove single-player state management
// Add multi-player session management

import io from "socket.io-client";

export default function App() {
  const [gameMode, setGameMode] = useState("lobby"); // lobby, waiting, playing
  const [socket, setSocket] = useState(null);
  const [gameSession, setGameSession] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(null);

  // Initialize WebSocket connection
  useEffect(() => {
    const newSocket = io("ws://localhost:3001");
    setSocket(newSocket);

    // Socket event handlers
    newSocket.on("gameSessionCreated", (session) => {
      setGameSession(session);
      setGameMode("playing");
    });

    newSocket.on("gameStateUpdate", (update) => {
      setGameSession(update);
    });

    return () => newSocket.close();
  }, []);
}
```

### 3. **Component Architecture Updates**

#### Lobby Component (New)

```javascript
const LobbyScreen = ({ onJoinGame, socket }) => {
  const [playerName, setPlayerName] = useState("");
  const [waitingForMatch, setWaitingForMatch] = useState(false);

  const handleJoinLobby = () => {
    socket.emit("joinLobby", playerName);
    setWaitingForMatch(true);
  };

  return (
    <div className="lobby-screen">
      {!waitingForMatch ? (
        <PlayerNameInput onSubmit={handleJoinLobby} />
      ) : (
        <WaitingForMatch />
      )}
    </div>
  );
};
```

#### SenderScreen Redesign

```javascript
// Current: Shows all animals, player picks target + color
// Required: Shows pre-selected target, player picks color only

const SenderScreen = ({ targetAnimal, onColorSelected, socket, sessionId }) => {
  const handleColorChoice = (color) => {
    socket.emit("colorSelected", {
      sessionId,
      color,
      targetAnimal: targetAnimal.id,
    });
    onColorSelected(color);
  };

  return (
    <div className="sender-screen">
      <h2>🎨 You are the Sender</h2>
      <div className="target-animal">
        <h3>Communicate this animal using a color:</h3>
        <AnimalDisplay animal={targetAnimal} />
      </div>
      <ColorPicker onColorSelect={handleColorChoice} />
      <div className="instruction">
        Choose a color that will help your partner identify this animal
      </div>
    </div>
  );
};
```

#### ReceiverScreen Redesign

```javascript
// Current: Shows color + all animals for selection
// Required: Shows only color, then animal choices

const ReceiverScreen = ({
  receivedColor,
  onAnimalSelected,
  socket,
  sessionId,
  waitingForSender,
}) => {
  const handleAnimalChoice = (animal) => {
    socket.emit("animalSelected", {
      sessionId,
      selectedAnimal: animal.id,
      originalColor: receivedColor,
    });
    onAnimalSelected(animal);
  };

  if (waitingForSender) {
    return <WaitingForSenderScreen />;
  }

  return (
    <div className="receiver-screen">
      <h2>🔍 You are the Receiver</h2>
      <div className="received-color">
        <h3>Your partner sent this color:</h3>
        <ColorDisplay color={receivedColor} />
        <p>Which animal do you think they meant?</p>
      </div>
      <AnimalGrid onAnimalSelect={handleAnimalChoice} />
    </div>
  );
};
```

---

## 🗂️ File Structure Changes

### New Files Required

```
server/
  ├── websocket-server.js      # Real-time communication server
  ├── session-manager.js       # Game session management
  └── player-matching.js       # Lobby and matching logic

src/components/
  ├── LobbyScreen/            # Player matching interface
  ├── WaitingScreen/          # Waiting for partner states
  └── SessionManager/         # WebSocket state management

src/hooks/
  ├── useSocket.js            # WebSocket connection hook
  └── useGameSession.js       # Session state management
```

### Major File Modifications

```
src/App.jsx                   # Complete architecture overhaul
src/screens/SenderScreen.jsx  # True sender experience
src/screens/ReceiverScreen.jsx # True receiver experience
src/components/GameHeader.jsx # Two-player stats display
```

---

## 📊 Data Collection Changes

### Current Data Structure (Individual)

```javascript
const roundData = {
  participantId: "single-player",
  round: 1,
  targetAnimal: "elephant",
  colorSelected: "#808080",
  animalSelected: "elephant",
  correct: true, // Based on color distance
  responseTime: 5000,
  colorDistance: 25, // RGB distance calculation
};
```

### Required Data Structure (Communication)

```javascript
const communicationData = {
  sessionId: "session-abc123",
  round: 1,
  sender: {
    playerId: "player1",
    targetAnimal: "elephant",
    colorSelected: "#808080",
    responseTime: 4000,
  },
  receiver: {
    playerId: "player2",
    animalSelected: "elephant",
    responseTime: 6000,
    confidence: 7,
  },
  communication: {
    successful: true, // Based on agreement
    colorTransmitted: "#808080",
    agreement: "elephant",
    communicationEfficiency: 1.0,
  },
  timestamp: "2025-07-19T10:30:00Z",
};
```

---

## 🔬 Research Questions Transformation

### From Individual Psychology → Communication Research

#### Old Research Focus

- What color-animal associations do individuals have?
- How consistent are personal color choices?
- What strategies do people use for color selection?

#### New Research Focus

- How effective is color-based conceptual communication?
- Which animal-color pairs have highest communication success?
- Do players adapt their strategies based on partner feedback?
- What factors predict successful communication?

---

## 🚀 Implementation Timeline

### Phase 1: Foundation (Week 1)

- [ ] Set up Socket.io server infrastructure
- [ ] Create basic lobby system
- [ ] Implement player matching logic
- [ ] Add WebSocket connection to client

### Phase 2: Core Game Mechanics (Week 2)

- [ ] Redesign App.jsx for multi-player architecture
- [ ] Convert SenderScreen to true sender experience
- [ ] Convert ReceiverScreen to true receiver experience
- [ ] Implement shared scoring system

### Phase 3: Real-Time Features (Week 3)

- [ ] Add turn coordination between players
- [ ] Implement waiting states and player readiness
- [ ] Create real-time game state synchronization
- [ ] Add round progression and role swapping

### Phase 4: Enhancement & Testing (Week 4)

- [ ] Add communication success feedback
- [ ] Implement results analysis for both players
- [ ] Create association pattern tracking
- [ ] Comprehensive testing and debugging

---

## ✅ Success Criteria

The implementation will be considered successful when:

1. **Two separate players can join a game session**
2. **Player 1 sees an animal and selects a color to represent it**
3. **Player 2 sees only the color and selects which animal it represents**
4. **Success is measured by agreement between players, not color calculations**
5. **Players can swap roles and continue multiple rounds**
6. **Game tracks communication success patterns over time**
7. **Data collected focuses on communication effectiveness between people**

---

## 🎯 MVP vs. Current Implementation

| Feature           | Current             | Required MVP            | Priority |
| ----------------- | ------------------- | ----------------------- | -------- |
| Player System     | Single              | Two simultaneous        | Critical |
| Communication     | Simulated           | Real between people     | Critical |
| Success Metric    | Color distance      | Player agreement        | Critical |
| Role System       | Sequential          | Simultaneous roles      | Critical |
| Real-time Sync    | None                | WebSocket required      | Critical |
| Research Protocol | Complex 6-phase     | Simple consent only     | High     |
| UI Architecture   | Single view         | Dual simultaneous views | High     |
| Data Collection   | Individual patterns | Communication patterns  | High     |

This transformation represents a fundamental shift from individual psychology research to communication research, requiring significant architectural changes while maintaining the excellent UI/UX foundation already built.
