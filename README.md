# Color Communication Game - Psychology Experiment

A React-based color communication game designed for psychology experiments. Players take turns being a "sender" (who picks colors) and a "receiver" (who matches colors to animals).

## Features

- **Dual Role Gameplay**: Players alternate between sender and receiver roles
- **Visual Color Picker**: Custom canvas-based color picker with gradient interface
- **Animal Matching**: Match colors to animal silhouettes
- **Timer System**: Round-based timing with visual countdown
- **Score Tracking**: Track successful color matches
- **Responsive Design**: Works on various screen sizes
- **Keyboard Navigation**: Arrow keys and Enter for receiver navigation

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/color-communication-game.git
cd color-communication-game
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to Play

### Sender Phase (10 seconds)

1. Look at the animals displayed on the left
2. Use the color picker on the right to select a color that matches one of the animals
3. The game automatically switches to receiver mode after color selection

### Receiver Phase (10 seconds)

1. See the color chosen by the sender
2. Use arrow keys to navigate between animals
3. Press Enter to select the animal that matches the color
4. Score increases for correct matches

### Controls

- **Arrow Keys**: Navigate between animals (receiver mode)
- **Enter**: Select current animal (receiver mode)
- **Mouse Click**: Pick colors (sender mode)

## Technical Details

### Color Matching Algorithm

The game uses Euclidean distance in RGB color space to determine color similarity. The tolerance threshold is set to 60 units.

### Performance Optimizations

- React.memo for component memoization
- useCallback for function memoization
- Proper cleanup of event listeners and timeouts
- Canvas optimization for color picker

## Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run analyze` - Analyze bundle size

## License

This project is licensed under the MIT License.

# 🎨 Psychology Color Communication Game Experiment

[![React](https://img.shields.io/badge/React-18.2+-blue.svg)](https://reactjs.org/)
[![Research Ready](https://img.shields.io/badge/Research-Ready-green.svg)](https://github.com/tmarhguy/Psych_Color_Game_Experiment)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![IRB Ready](https://img.shields.io/badge/IRB-Compliant-purple.svg)](README.md#ethics-compliance)

> **A comprehensive, research-grade psychology experiment studying color-concept communication through animal associations across cultures**

## 📋 Table of Contents

- [🔬 Research Overview](#-research-overview)
- [✨ Key Features](#-key-features)
- [🏗️ Architecture](#️-architecture)
- [🚀 Quick Start](#-quick-start)
- [📊 Research Protocol](#-research-protocol)
- [🎮 User Experience](#-user-experience)
- [💾 Data Collection](#-data-collection)
- [🔧 Technical Implementation](#-technical-implementation)
- [📱 Component Documentation](#-component-documentation)
- [🎨 Design System](#-design-system)
- [🔬 For Researchers](#-for-researchers)
- [👩‍💻 For Developers](#-for-developers)
- [📈 Analytics & Export](#-analytics--export)
- [🌍 Accessibility & Internationalization](#-accessibility--internationalization)
- [🔒 Ethics & Compliance](#-ethics--compliance)
- [🧪 Testing & Quality Assurance](#-testing--quality-assurance)
- [🚀 Deployment](#-deployment)
- [📚 Research Applications](#-research-applications)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🔬 Research Overview

### **Primary Research Question**

_How effectively can colors communicate conceptual categories (animals) between individuals, and what factors influence this communication success?_

### **Study Design**

This application implements a **dyadic communication paradigm** where participants take turns as:

- **Sender**: Selects colors to represent specific animals
- **Receiver**: Identifies animals based on communicated colors

### **Research Objectives**

1. **Color-Concept Communication Efficiency**

   - Measure how well colors can represent conceptual categories
   - Analyze communication success rates across different animal-color pairings
   - Study individual vs. cultural patterns in color associations

2. **Individual Difference Analysis**

   - Document personal color-animal association preferences
   - Compare individual associations with cultural consensus
   - Analyze confidence patterns and decision-making strategies

3. **Cross-Cultural Communication**

   - Study how cultural background influences color-concept associations
   - Measure communication effectiveness across different demographic groups
   - Identify universal vs. culture-specific color meanings

4. **Cognitive Load & Strategy Analysis**
   - Collect strategy descriptions for color selection reasoning
   - Measure confidence ratings and response times
   - Analyze learning effects and adaptation over trials

### **Theoretical Framework**

Based on research by **Brown & Lindsey (2023)** on color communication games, this study extends their methodology from pure color-color communication to **color-concept communication**, offering unique insights into:

- **Ecological Validity**: Animals have natural color associations in the real world
- **Cultural Universality**: Animal concepts exist across cultures with varying associations
- **Cognitive Complexity**: Tests conceptual mapping beyond perceptual matching
- **Practical Applications**: Relevant for design, marketing, and cross-cultural communication

---

## ✨ Key Features

### 🎯 **Research-Grade Data Collection**

- **Comprehensive Demographics**: Age, culture, language, color vision status
- **Association Baselines**: Personal color-animal preference mapping
- **Strategy Documentation**: Qualitative reasoning for color choices
- **Confidence Metrics**: 7-point scale confidence ratings
- **Response Time Tracking**: Precise timing for cognitive load analysis
- **Export Capabilities**: Research-ready JSON data export

### 🎮 **Enhanced Game Mechanics**

- **Six-Phase Protocol**: Welcome → Demographics → Color Vision → Associations → Game → Results
- **Adaptive Difficulty**: Easy (20s), Normal (15s), Hard (10s) timing options
- **Role-Based Interfaces**: Distinct sender and receiver experiences
- **Real-Time Feedback**: Immediate scoring and performance tracking
- **Pause Functionality**: Testing and debugging capabilities

### 💻 **Technical Excellence**

- **Modern React 18.2+**: Hooks, memo, concurrent features
- **Glass Morphism Design**: Professional, research-appropriate aesthetic
- **Responsive Architecture**: Mobile-first, cross-device compatibility
- **Zoom-Compatible Interface**: Grid-based color picker, scalable UI
- **Hardware Acceleration**: Smooth 60fps animations
- **Accessibility Features**: Screen reader support, keyboard navigation

### 🎨 **Advanced Color System**

- **Grid-Based Color Picker**: 12×8 HSL-distributed color palette
- **Zoom-Independent**: Reliable interaction at any zoom level
- **Color Science**: Perceptually uniform color space distribution
- **Visual Feedback**: Real-time selection preview and validation

---

## 🏗️ Architecture

### **System Architecture**

```
┌─ Research Protocol ─────────────────────────────────────┐
│                                                         │
│  Welcome → Demographics → Color Vision → Associations   │
│     ↓                                                   │
│  Enhanced Game Loop → Comprehensive Results             │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─ Technical Stack ───────────────────────────────────────┐
│                                                         │
│  React 18.2+ (Hooks, Memo, Concurrent)                 │
│  Modern CSS (Variables, Grid, Flexbox)                 │
│  SVG Animations (Hardware Accelerated)                 │
│  Glass Morphism Design System                          │
│  Responsive Mobile-First Architecture                  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### **Component Hierarchy**

```
App.jsx (Main State Management)
├── EnhancedWelcomeScreen (Research Consent)
├── DemographicsScreen (Background Data)
├── ColorVisionScreen (Accommodation)
├── AssociationScreen (Baseline Learning)
├── SenderScreen (Color Selection Phase)
│   ├── GameHeader (Stats + Timer + Pause)
│   ├── ColorPicker (Grid-Based Selection)
│   ├── AnimalGrid (Target Display)
│   └── StrategyModal (Reasoning Collection)
├── ReceiverScreen (Animal Identification Phase)
│   ├── GameHeader (Stats + Timer + Pause)
│   ├── ColorDisplay (Sender's Choice)
│   ├── AnimalGrid (Selection Interface)
│   └── ConfidenceModal (Rating Collection)
└── ResultsScreen (Analysis + Export)
    ├── PerformanceMetrics (Success Rates)
    ├── StrategyAnalysis (Qualitative Insights)
    ├── AssociationComparison (Individual vs. Cultural)
    └── DataExport (Research JSON)
```

### **Data Flow Architecture**

```
Research Data Collection:
Demographics → Color Vision → Associations → Game Performance → Export

Game State Management:
App State ← → Component Props ← → User Interactions ← → Data Collection

Timer System:
SVG Circle Progress ← → React State ← → Game Logic ← → Pause Controls
```

---

## 🚀 Quick Start

### **Prerequisites**

- **Node.js**: Version 16.0+ (recommended: 18.0+)
- **npm**: Version 8.0+ or **yarn**: Version 1.22+
- **Modern Browser**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

### **Installation**

1. **Clone the Repository**

```bash
git clone https://github.com/tmarhguy/Psych_Color_Game_Experiment.git
cd Psych_Color_Game_Experiment
```

2. **Install Dependencies**

```bash
npm install
# or
yarn install
```

3. **Start Development Server**

```bash
npm start
# or
yarn start
```

4. **Open in Browser**

```
http://localhost:3000
```

### **Production Build**

```bash
npm run build
# Creates optimized production build in 'build' folder
```

### **Development Scripts**

```bash
npm start          # Start development server (port 3000)
npm run build      # Create production build
npm test           # Run test suite
npm run lint       # Check code quality
npm run lint:fix   # Auto-fix linting issues
npm run analyze    # Analyze bundle size
```

---

## 📊 Research Protocol

### **Phase 0: Pre-Experiment Setup**

#### **🏠 Enhanced Welcome Screen**

```jsx
// Purpose: Research ethics and informed consent
Features:
- Study overview and purpose explanation
- Time commitment disclosure (15-20 minutes)
- Data usage and privacy information
- Informed consent with ethical guidelines
- Contact information for questions
- Right to withdraw at any time
```

#### **📋 Demographics Collection**

```jsx
// Purpose: Control variables and cultural context
Data Collected:
- Age group (18-25, 26-35, 36-45, 46-55, 56-65, 65+)
- Cultural background (open text + predefined options)
- Primary language (affects color term availability)
- Education level (may influence color sophistication)
- Device type (mobile/tablet/desktop)
- Screen size category (affects color perception)
- Previous color/design experience
```

#### **👁️ Color Vision Screening**

```jsx
// Purpose: Accommodate different color vision types
Features:
- Ishihara plate simulation (numbers 8, 3, 6)
- Self-reported color vision status
- Accommodation options for color differences
- Alternative interaction modes if needed
- Documentation for data analysis exclusions
```

### **Phase 1: Association Learning**

#### **🎨 Personal Color-Animal Mapping**

```jsx
// Purpose: Establish individual baseline associations
Process:
1. Present each animal individually
2. Participant selects associated colors
3. Confidence rating (1-7 scale) for each choice
4. Optional reasoning/strategy description
5. Comparison with cultural consensus data

Data Collected:
- Personal color preferences per animal
- Confidence in associations
- Reasoning patterns
- Individual vs. cultural deviation scores
```

### **Phase 2: Enhanced Communication Game**

#### **📤 Sender Phase (Enhanced)**

```jsx
// Purpose: Intentional color selection for communication
Process:
1. View target animal
2. Select color using grid-based picker
3. Strategy description modal
   - "Why did you choose this color?"
   - "How confident are you others will understand?"
4. Automatic progression to receiver phase

Enhancements:
- Strategy collection for qualitative analysis
- Color selection reasoning documentation
- Intention tracking vs. outcome measurement
```

#### **📥 Receiver Phase (Enhanced)**

```jsx
// Purpose: Color-to-concept interpretation
Process:
1. View sender's color choice
2. Select matching animal from grid
3. Confidence rating modal
   - 7-point confidence scale (1=not confident, 7=very confident)
   - Visual color-animal pairing preview
   - Timing data collection
4. Immediate feedback and progression

Enhancements:
- Confidence measurement for uncertainty analysis
- Response time tracking for cognitive load
- Multiple choice accuracy with reasoning
```

### **Phase 3: Results & Analysis**

#### **📈 Comprehensive Results Dashboard**

```jsx
// Purpose: Research insights and data export
Features:
- Overall communication success rate
- Individual animal-color performance breakdown
- Strategy effectiveness analysis
- Confidence-accuracy correlation
- Personal vs. cultural association comparison
- Response time and cognitive load indicators
- Complete data export in research JSON format
```

---

## 🎮 User Experience

### **Visual Design Philosophy**

#### **Glass Morphism Aesthetic**

- **Purpose**: Professional, research-appropriate appearance
- **Implementation**: Subtle transparency, backdrop blur, elegant shadows
- **Psychology**: Minimizes experimental bias through neutral design
- **Accessibility**: High contrast ratios, clear visual hierarchy

#### **Psychology-Optimized Color Scheme**

```css
/* Primary Theme: Perceptual Clarity */
--primary-blue: #3b82f6; /* Trust and reliability */
--secondary-coral: #f97316; /* Engagement without bias */
--neutral-grays: #64748b; /* Professional backgrounds */

/* Rationale: Chosen to minimize color bias in research context */
```

### **Interaction Design**

#### **Responsive Touch Targets**

- **Minimum Size**: 44px × 44px (WCAG AA compliant)
- **Touch Feedback**: Immediate visual response
- **Hover States**: Subtle elevation and color shifts
- **Focus Indicators**: Clear keyboard navigation support

#### **Timing and Animation**

```css
/* Performance-Optimized Animations */
transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
will-change: transform; /* Hardware acceleration */

/* Research-Appropriate Timing */
Easy Mode: 20 seconds    /* Comfortable exploration */
Normal Mode: 15 seconds  /* Standard cognitive load */
Hard Mode: 10 seconds    /* Time pressure effects */
```

### **Accessibility Features**

#### **Screen Reader Support**

```jsx
// ARIA labels and descriptions
<button aria-label="Select blue color for elephant"
        aria-describedby="color-picker-instructions">
```

#### **Keyboard Navigation**

- **Tab Order**: Logical progression through interface
- **Enter/Space**: Activate buttons and selections
- **Arrow Keys**: Navigate color grid and animal selection
- **Escape**: Close modals and return to previous state

#### **Color Vision Accommodation**

- **Pattern Alternatives**: Shape and texture indicators
- **High Contrast Mode**: Enhanced visibility options
- **Alternative Text**: Descriptive color information
- **Customizable Interface**: User-controlled adjustments

---

## 💾 Data Collection

### **Research Data Structure**

#### **Complete Export Format**

```json
{
  "participantId": "uuid-string",
  "timestamp": "2025-01-19T12:00:00Z",
  "studyVersion": "2.0.0",
  "demographics": {
    "age": "26-35",
    "culture": "European American",
    "language": "English",
    "education": "Bachelor's degree",
    "colorVision": "normal",
    "deviceType": "desktop",
    "screenSize": "large"
  },
  "colorVisionTest": {
    "plate1": { "response": "8", "correct": true },
    "plate2": { "response": "3", "correct": true },
    "plate3": { "response": "6", "correct": true },
    "selfReported": "normal"
  },
  "personalAssociations": [
    {
      "animal": "elephant",
      "colorChoice": "#808080",
      "confidence": 6,
      "reasoning": "Elephants are gray in most pictures I've seen"
    }
  ],
  "gameRounds": [
    {
      "roundNumber": 1,
      "difficulty": "normal",
      "senderPhase": {
        "targetAnimal": "lion",
        "colorSelected": "#ffd700",
        "strategy": "Golden color like a lion's mane",
        "responseTime": 8340,
        "confidence": 5
      },
      "receiverPhase": {
        "senderColor": "#ffd700",
        "animalSelected": "lion",
        "correct": true,
        "confidence": 7,
        "responseTime": 4200
      }
    }
  ],
  "results": {
    "overallAccuracy": 0.85,
    "averageConfidence": 5.2,
    "averageResponseTime": 6270,
    "strategyTypes": ["color_association", "cultural_knowledge"],
    "personalVsCulturalAlignment": 0.73
  }
}
```

### **Data Collection Points**

#### **Quantitative Metrics**

- **Success Rates**: Correct animal identification per color
- **Response Times**: Cognitive processing speed indicators
- **Confidence Ratings**: Certainty and decision quality measures
- **Association Consistency**: Individual vs. cultural pattern alignment
- **Learning Effects**: Performance changes over trials

#### **Qualitative Insights**

- **Strategy Descriptions**: Reasoning for color choices
- **Cultural References**: Mentions of cultural color meanings
- **Personal Experiences**: Individual association explanations
- **Decision Confidence**: Uncertainty and doubt expressions

### **Privacy and Ethics**

#### **Data Protection**

- **No Personal Identifiers**: Anonymous UUID assignment only
- **Local Storage**: No server transmission of personal data
- **Export Control**: Researcher-controlled data download
- **Deletion Rights**: Complete data removal capability

#### **Informed Consent**

- **Purpose Disclosure**: Clear research objective explanation
- **Time Commitment**: Accurate duration estimates (15-20 minutes)
- **Data Usage**: Transparent academic research usage
- **Contact Information**: Researcher availability for questions
- **Withdrawal Rights**: No-penalty study exit at any time

---

## 🔧 Technical Implementation

### **Modern React Architecture**

#### **State Management Pattern**

```jsx
// App.jsx - Central State Hub
const [gameState, setGameState] = useState({
  currentScreen: "enhancedWelcome",
  gamePhase: "sender",
  currentRound: 1,
  score: 0,
  difficulty: "normal",
  isPaused: false,
});

const [researchData, setResearchData] = useState({
  demographics: {},
  colorVision: {},
  associations: [],
  gameRounds: [],
  strategies: [],
});

// Optimized Updates with useCallback
const updateResearchData = useCallback((section, data) => {
  setResearchData((prev) => ({
    ...prev,
    [section]: { ...prev[section], ...data },
  }));
}, []);
```

#### **Performance Optimizations**

```jsx
// Component Memoization
const ColorPicker = React.memo(({ onColorSelect, selectedColor }) => {
  // Only re-renders when props actually change
});

// Expensive Calculation Caching
const colorGrid = useMemo(() => generateHSLColorGrid(12, 8), []);

// Event Handler Stability
const handleColorSelect = useCallback(
  (color) => {
    onColorSelect(color);
    recordSelectionTime();
  },
  [onColorSelect]
);
```

### **Advanced Color Picker System**

#### **Grid-Based Architecture**

```jsx
// Replaced canvas for zoom compatibility
const ColorGrid = () => {
  const colors = useMemo(() => {
    const grid = [];
    for (let hue = 0; hue < 360; hue += 30) {
      for (let sat = 40; sat <= 100; sat += 20) {
        grid.push(`hsl(${hue}, ${sat}%, 70%)`);
      }
    }
    return grid;
  }, []);

  return (
    <div className="color-grid">
      {colors.map((color, index) => (
        <ColorSwatch
          key={index}
          color={color}
          selected={selectedColor === color}
          onClick={() => handleColorSelect(color)}
        />
      ))}
    </div>
  );
};
```

#### **Zoom-Independent Interaction**

```css
/* Grid-based layout scales naturally */
.color-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 2px;
  width: 100%;
  height: 100%;
}

.color-swatch {
  border-radius: 4px;
  transition: transform 0.15s ease;
  cursor: pointer;
}

.color-swatch:hover {
  transform: scale(1.1);
  z-index: 10;
}
```

### **Timer System Architecture**

#### **SVG-Based Circular Progress**

```jsx
const TimerDisplay = ({ timeLeft, duration, isPaused }) => {
  const circumference = 2 * Math.PI * 45; // radius = 45
  const progress = (timeLeft / duration) * circumference;

  return (
    <svg className="timer-circle" width="100" height="100">
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="currentColor"
        strokeWidth="4"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress}
        style={{
          transition: isPaused ? "none" : "stroke-dashoffset 1s linear",
          transform: "rotate(-90deg)",
          transformOrigin: "50px 50px",
        }}
      />
    </svg>
  );
};
```

#### **Functional Pause System**

```jsx
// Timer logic with pause support
useEffect(() => {
  if (isPaused || timeLeft <= 0) return;

  const timer = setInterval(() => {
    setTimeLeft((prev) => {
      if (prev <= 1) {
        onTimeUp();
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(timer);
}, [timeLeft, isPaused, onTimeUp]);
```

### **Responsive Design System**

#### **CSS Variable Architecture**

```css
:root {
  /* Spacing System - 12px base unit */
  --spacing-xs: 0.25rem; /* 4px */
  --spacing-sm: 0.5rem; /* 8px */
  --spacing-md: 0.75rem; /* 12px - base */
  --spacing-lg: 1rem; /* 16px */
  --spacing-xl: 1.25rem; /* 20px */
  --spacing-2xl: 1.5rem; /* 24px */

  /* Color System - Psychology Optimized */
  --primary-50: #eff6ff;
  --primary-500: #3b82f6;
  --primary-900: #1e3a8a;

  /* Typography Scale */
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
}
```

#### **Mobile-First Responsive Breakpoints**

```css
/* Mobile First Approach */
.component {
  /* Base styles for mobile */
  padding: var(--spacing-md);
  font-size: var(--text-sm);
}

/* Tablet and up */
@media (min-width: 768px) {
  .component {
    padding: var(--spacing-lg);
    font-size: var(--text-base);
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .component {
    padding: var(--spacing-xl);
    font-size: var(--text-lg);
  }
}
```

---

## 📱 Component Documentation

### **Core Components**

#### **ColorPicker Component**

```jsx
/**
 * Grid-based color selection interface
 * Replaces canvas for zoom compatibility
 */
<ColorPicker
  selectedColor={string}         // Currently selected color (hex)
  onColorSelect={function}       // Callback when color is chosen
  disabled={boolean}             // Disable interaction
  showPreview={boolean}          // Show color preview header
/>

// Implementation Details:
// - 12×8 HSL-distributed color grid
// - Zoom-independent interaction
// - Keyboard navigation support
// - Visual selection feedback
```

#### **TimerDisplay Component**

```jsx
/**
 * SVG-based circular progress timer
 * Hardware accelerated animations
 */
<TimerDisplay
  timeLeft={number}              // Remaining seconds
  duration={number}              // Total duration
  isPaused={boolean}             // Pause state
  onTimeUp={function}            // Callback when timer reaches 0
  size={number}                  // Optional size override
/>

// Features:
// - Smooth circular progress animation
// - Color-coded warning states
// - Pause/resume functionality
// - Responsive sizing
```

#### **AnimalGrid Component**

```jsx
/**
 * Responsive animal display and selection
 * Smart positioning algorithm
 */
<AnimalGrid
  animals={array}                // Animal data array
  role={string}                  // 'sender' | 'receiver'
  onAnimalSelect={function}      // Selection callback
  selectedAnimalIndex={number}   // Currently selected index
  refreshPositions={number}      // Force re-layout trigger
  senderColor={string}           // Color context for receiver
/>

// Animal Data Structure:
// {
//   name: string,     // Animal name
//   image: string,    // Image path
//   color: string     // Associated color
// }
```

#### **GameHeader Component**

```jsx
/**
 * Professional stats and control header
 * Research-appropriate design
 */
<GameHeader
  round={number}                 // Current round number
  score={number}                 // Current score
  difficulty={string}            // 'easy' | 'normal' | 'hard'
  role={string}                  // 'sender' | 'receiver'
  timeLeft={number}              // Timer display
  duration={number}              // Timer duration
  isPaused={boolean}             // Pause state
  onPauseToggle={function}       // Pause control callback
/>

// Features:
// - Stat cards with glass morphism design
// - Functional pause/resume button
// - Role-based styling
// - Professional typography
```

### **Research Components**

#### **DemographicsScreen Component**

```jsx
/**
 * Comprehensive background data collection
 * Research ethics compliant
 */
<DemographicsScreen
  onDemographicsComplete={function}  // Completion callback
/>

// Data Collected:
// - Age group
// - Cultural background
// - Primary language
// - Education level
// - Device information
// - Color experience
```

#### **ColorVisionScreen Component**

```jsx
/**
 * Ishihara plate simulation
 * Accommodation for color vision differences
 */
<ColorVisionScreen
  onColorVisionComplete={function}   // Completion callback
/>

// Features:
// - Three simulated Ishihara plates
// - Self-reported vision status
// - Accommodation options
// - Research documentation
```

#### **AssociationScreen Component**

```jsx
/**
 * Personal color-animal baseline collection
 * Individual preference mapping
 */
<AssociationScreen
  animals={array}                    // Animal list
  onAssociationComplete={function}   // Completion callback
/>

// Process:
// - Individual animal presentation
// - Color selection per animal
// - Confidence rating collection
// - Strategy/reasoning documentation
```

### **Modal Components**

#### **StrategyModal Component**

```jsx
/**
 * Qualitative strategy collection
 * Sender reasoning documentation
 */
<StrategyModal
  isOpen={boolean}                   // Modal visibility
  animal={object}                    // Target animal
  selectedColor={string}             // Chosen color
  onSubmit={function}                // Strategy submission
  onClose={function}                 // Modal close
/>

// Data Collected:
// - Strategy description
// - Reasoning explanation
// - Confidence in communication
```

#### **ConfidenceModal Component**

```jsx
/**
 * Receiver confidence rating
 * Decision certainty measurement
 */
<ConfidenceModal
  isOpen={boolean}                   // Modal visibility
  selectedAnimal={object}            // Chosen animal
  senderColor={string}               // Received color
  onSubmit={function}                // Confidence submission
  onClose={function}                 // Modal close
/>

// Features:
// - 7-point confidence scale
// - Visual selection preview
// - Response time tracking
```

---

## 🎨 Design System

### **Visual Hierarchy**

#### **Typography Scale**

```css
/* Research-Appropriate Typography */
.heading-1 {
  font-size: var(--text-2xl);
  font-weight: 700;
}
.heading-2 {
  font-size: var(--text-xl);
  font-weight: 600;
}
.heading-3 {
  font-size: var(--text-lg);
  font-weight: 600;
}
.body-text {
  font-size: var(--text-base);
  font-weight: 400;
}
.caption {
  font-size: var(--text-sm);
  font-weight: 400;
}
.label {
  font-size: var(--text-sm);
  font-weight: 500;
}

/* Font Family: Inter (optimized for screens) */
font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
```

#### **Color Psychology**

```css
/* Primary: Trust and Reliability */
--primary-blue: #3b82f6;
/* Usage: Primary actions, important information */

/* Secondary: Engagement without Bias */
--secondary-coral: #f97316;
/* Usage: Secondary actions, highlights */

/* Neutral: Professional Background */
--neutral-gray: #64748b;
/* Usage: Text, backgrounds, subtle elements */

/* Semantic Colors */
--success: #10b981; /* Correct answers */
--warning: #f59e0b; /* Time warnings */
--error: #ef4444; /* Errors, time up */
```

### **Glass Morphism Implementation**

#### **Core Glass Effect**

```css
.glass-morphism {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* Interactive States */
.glass-morphism:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

#### **Component-Specific Applications**

```css
/* Stat Cards */
.stat-card {
  @apply glass-morphism;
  padding: var(--spacing-lg);
  text-align: center;
}

/* Modal Overlays */
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal-content {
  @apply glass-morphism;
  max-width: 500px;
  margin: 0 auto;
}
```

### **Animation System**

#### **Performance-Optimized Transitions**

```css
/* Hardware Acceleration */
.animated-element {
  will-change: transform;
  transform: translateZ(0); /* Force GPU layer */
}

/* Smooth State Transitions */
.fade-in {
  animation: fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up {
  animation: slideUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Micro-Interactions */
.button-press {
  transform: scale(0.98);
  transition: transform 0.1s ease;
}

.hover-lift {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}
```

#### **Research-Appropriate Timing**

```css
/* Quick Feedback: 150ms */
.immediate-feedback {
  transition: all 0.15s ease;
}

/* Standard Transitions: 300ms */
.standard-transition {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Page Transitions: 500ms */
.page-transition {
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

---

## 🔬 For Researchers

### **IRB Preparation**

#### **Research Protocol Documentation**

```markdown
Study Title: Color-Concept Communication Through Animal Associations

Primary Investigator: [Your Name]
Institution: [Your Institution]
Duration: 15-20 minutes per participant
Risk Level: Minimal (no more than daily life)

Participant Requirements:

- Age 18+ (can be adjusted for developmental studies)
- Normal or corrected vision
- Ability to distinguish basic colors
- Informed consent capability

Data Collection:

- Anonymous UUID identification only
- No personal identifiers stored
- Local browser storage only
- Researcher-controlled export
```

#### **Informed Consent Elements**

```jsx
// Already implemented in EnhancedWelcomeScreen
✅ Study purpose and procedures
✅ Time commitment disclosure
✅ Voluntary participation emphasis
✅ Right to withdraw without penalty
✅ Data usage explanation
✅ Anonymity assurance
✅ Contact information for questions
✅ Benefits and risks disclosure
```

### **Research Applications**

#### **Cross-Cultural Studies**

```jsx
// Demographic controls built in
const culturalAnalysis = {
  variables: [
    "culturalBackground",
    "primaryLanguage",
    "educationLevel",
    "colorExperience",
  ],
  analyses: [
    "association_patterns_by_culture",
    "communication_success_by_background",
    "confidence_differences",
    "strategy_variations",
  ],
};
```

#### **Developmental Psychology**

```jsx
// Age-appropriate modifications
const developmentalAdaptations = {
  visualDesign: "larger_animals_and_colors",
  timing: "extended_durations",
  instructions: "simplified_language",
  interaction: "touch_optimized",
};
```

#### **Cognitive Load Studies**

```jsx
// Built-in timing variations
const cognitiveLoad = {
  easy: "20_seconds", // Comfortable exploration
  normal: "15_seconds", // Standard processing
  hard: "10_seconds", // Time pressure condition
  responseTime: "millisecond_precision",
  confidence: "uncertainty_measurement",
};
```

### **Data Analysis Recommendations**

#### **Quantitative Analyses**

```r
# Suggested R analysis framework
library(tidyverse)
library(lme4)
library(ggplot2)

# Communication Success Analysis
model1 <- glmer(correct ~ culture + animal + color_distance +
                (1|participant_id),
                family = binomial, data = game_data)

# Confidence-Accuracy Correlation
cor_analysis <- cor.test(data$confidence, data$accuracy)

# Response Time Analysis
rt_model <- lmer(response_time ~ difficulty + confidence +
                 (1|participant_id), data = game_data)
```

#### **Qualitative Analysis**

```python
# Strategy coding framework
strategy_codes = {
    'perceptual': 'direct color matching',
    'conceptual': 'symbolic associations',
    'cultural': 'cultural knowledge',
    'personal': 'personal experience',
    'linguistic': 'color term knowledge'
}

# Thematic analysis of strategy descriptions
import nltk
from sklearn.feature_extraction.text import TfidfVectorizer
```

### **Publication-Ready Features**

#### **Methodology Section Template**

```markdown
Participants played a color communication game implemented in React 18.2+.
The study consisted of six phases: (1) informed consent, (2) demographic
data collection, (3) color vision screening, (4) personal color-animal
association mapping, (5) dyadic communication game, and (6) results review.

During the communication game, participants alternated between sender and
receiver roles. Senders selected colors to represent target animals using
a grid-based color picker with 96 HSL-distributed options. Receivers
identified animals based on the communicated colors. All interactions,
response times, and confidence ratings were recorded with millisecond precision.
```

#### **Ethics Statement Template**

```markdown
This study was approved by [Institution] IRB (Protocol #[Number]). All
participants provided informed consent before beginning the study. Data
collection was anonymous, with no personal identifiers stored. Participants
could withdraw at any time without penalty. The study posed no more than
minimal risk, equivalent to daily computer use.
```

---

## 👩‍💻 For Developers

### **Development Workflow**

#### **Project Structure**

```
src/
├── components/           # Reusable UI components
│   ├── ColorPicker/     # Grid-based color selection
│   ├── TimerDisplay/    # SVG circular timer
│   ├── AnimalGrid/      # Animal display/selection
│   ├── GameHeader/      # Stats and controls
│   └── ColorDisplay/    # Color preview component
├── screens/             # Full-screen application views
│   ├── EnhancedWelcomeScreen.jsx    # Research consent
│   ├── DemographicsScreen.jsx       # Background data
│   ├── ColorVisionScreen.jsx        # Vision testing
│   ├── AssociationScreen.jsx        # Baseline mapping
│   ├── SenderScreen.jsx             # Color selection phase
│   ├── ReceiverScreen.jsx           # Animal identification
│   └── ResultsScreen.jsx            # Analysis and export
├── assets/              # Static resources
│   ├── images/         # Animal images and icons
│   └── styles/         # Global CSS and variables
└── utils/              # Helper functions and constants
```

#### **Adding New Features**

**1. New Research Screen**

```jsx
// Create new screen component
const NewResearchScreen = ({ onComplete }) => {
  const [data, setData] = useState({});

  const handleSubmit = () => {
    // Validate data
    if (validateData(data)) {
      onComplete(data);
    }
  };

  return <div className="screen-container">{/* Screen content */}</div>;
};

// Add to App.jsx
const [gameState, setGameState] = useState({
  currentScreen: "enhancedWelcome", // Add 'newScreen'
  // ... other state
});

// Add screen handler
const handleNewScreenComplete = useCallback(
  (data) => {
    updateResearchData("newSection", data);
    setGameState((prev) => ({
      ...prev,
      currentScreen: "nextScreen",
    }));
  },
  [updateResearchData]
);

// Add to render logic
{
  gameState.currentScreen === "newScreen" && (
    <NewResearchScreen onComplete={handleNewScreenComplete} />
  );
}
```

**2. New Animal**

```jsx
// Add to animals array in App.jsx
const animals = [
  // ... existing animals
  {
    name: "newAnimal",
    image: "/images/animals/new-animal.png",
    color: "#defaultColor",
  },
];

// Animal image requirements:
// - Format: PNG with transparency
// - Size: 400x400px minimum
// - Style: Silhouette or simple illustration
// - Background: Transparent
```

**3. New Data Collection Point**

```jsx
// Add to research data structure
const [researchData, setResearchData] = useState({
  demographics: {},
  colorVision: {},
  associations: [],
  gameRounds: [],
  strategies: [],
  newDataType: [], // Add new collection
});

// Update collection function
const collectNewData = useCallback((newData) => {
  setResearchData((prev) => ({
    ...prev,
    newDataType: [
      ...prev.newDataType,
      {
        timestamp: Date.now(),
        ...newData,
      },
    ],
  }));
}, []);
```

### **Customization Options**

#### **Timing Adjustments**

```jsx
// Modify difficulty settings in App.jsx
const difficultySettings = {
  easy: { duration: 25, name: "Extended" }, // Increased from 20
  normal: { duration: 15, name: "Standard" }, // Keep standard
  hard: { duration: 8, name: "Challenge" }, // Decreased from 10
};
```

#### **Color Palette Modification**

```jsx
// Modify ColorPicker.jsx color generation
const generateColorGrid = () => {
  const colors = [];

  // Adjust hue range (0-360)
  for (let hue = 0; hue < 360; hue += 30) {
    // 12 hues
    // Adjust saturation range (40-100)
    for (let sat = 40; sat <= 100; sat += 15) {
      // 5 saturations
      // Adjust lightness (fixed at 70% for consistency)
      colors.push(`hsl(${hue}, ${sat}%, 70%)`);
    }
  }

  return colors;
};
```

#### **Styling Customization**

```css
/* Modify CSS variables in main.css */
:root {
  /* Adjust primary theme */
  --primary-500: #your-color;

  /* Adjust spacing scale */
  --spacing-md: 1rem; /* Increase base unit */

  /* Adjust border radius */
  --border-radius: 8px; /* More/less rounded */

  /* Adjust glass morphism intensity */
  --glass-opacity: 0.15; /* More/less transparent */
  --glass-blur: 12px; /* More/less blur */
}
```

### **Testing Guidelines**

#### **Component Testing**

```jsx
// Example component test
import { render, screen, fireEvent } from "@testing-library/react";
import ColorPicker from "../ColorPicker";

test("ColorPicker selects color on click", () => {
  const mockOnSelect = jest.fn();
  render(<ColorPicker onColorSelect={mockOnSelect} />);

  const firstColor = screen.getAllByTestId("color-swatch")[0];
  fireEvent.click(firstColor);

  expect(mockOnSelect).toHaveBeenCalled();
});
```

#### **Integration Testing**

```jsx
// Example flow test
test("Complete research flow", async () => {
  render(<App />);

  // Test consent process
  fireEvent.click(screen.getByText("Begin Study"));

  // Test demographics
  fireEvent.change(screen.getByLabelText("Age"), {
    target: { value: "26-35" },
  });
  fireEvent.click(screen.getByText("Continue"));

  // Test game flow
  // ... additional test steps
});
```

#### **Performance Testing**

```jsx
// Monitor component re-renders
import { Profiler } from "react";

const onRenderCallback = (id, phase, actualDuration) => {
  console.log(`${id} (${phase}) took ${actualDuration}ms`);
};

<Profiler id="ColorPicker" onRender={onRenderCallback}>
  <ColorPicker />
</Profiler>;
```

---

## 📈 Analytics & Export

### **Research Data Export**

#### **Export Functionality**

```jsx
// Complete data export in ResultsScreen
const exportData = () => {
  const exportData = {
    metadata: {
      exportTimestamp: new Date().toISOString(),
      studyVersion: "2.0.0",
      participantId: participantId,
      totalDuration: Date.now() - studyStartTime,
    },
    ...researchData,
  };

  const dataStr = JSON.stringify(exportData, null, 2);
  const dataBlob = new Blob([dataStr], { type: "application/json" });

  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `color-communication-data-${participantId}.json`;
  link.click();

  URL.revokeObjectURL(url);
};
```

#### **Data Validation**

```jsx
// Ensure data completeness before export
const validateExportData = (data) => {
  const required = [
    "demographics.age",
    "demographics.culture",
    "colorVision.selfReported",
    "gameRounds.length",
  ];

  return required.every((path) =>
    path.split(".").reduce((obj, key) => obj?.[key], data)
  );
};
```

### **Real-Time Analytics**

#### **Performance Metrics**

```jsx
// Track key performance indicators
const analytics = {
  responseTime: {
    sender: gameRounds.map((r) => r.senderPhase.responseTime),
    receiver: gameRounds.map((r) => r.receiverPhase.responseTime),
  },
  accuracy: {
    overall:
      gameRounds.filter((r) => r.receiverPhase.correct).length /
      gameRounds.length,
    byAnimal: groupBy(gameRounds, "senderPhase.targetAnimal"),
    byColor: groupBy(gameRounds, "senderPhase.colorSelected"),
  },
  confidence: {
    sender: gameRounds.map((r) => r.senderPhase.confidence),
    receiver: gameRounds.map((r) => r.receiverPhase.confidence),
    correlation: correlate("confidence", "accuracy"),
  },
};
```

#### **Strategy Analysis**

```jsx
// Categorize and analyze strategies
const analyzeStrategies = (strategies) => {
  const categories = {
    perceptual: ["looks like", "color of", "same color"],
    cultural: ["traditionally", "culturally", "society"],
    personal: ["reminds me", "my experience", "I think"],
    linguistic: ["called", "word for", "term"],
  };

  return strategies.map((strategy) => {
    const category =
      Object.keys(categories).find((cat) =>
        categories[cat].some((keyword) =>
          strategy.description.toLowerCase().includes(keyword)
        )
      ) || "other";

    return { ...strategy, category };
  });
};
```

### **Visualization Components**

#### **Performance Charts**

```jsx
// Built-in results visualization
const PerformanceChart = ({ data }) => {
  const accuracyByRound = data.gameRounds.map((round, index) => ({
    round: index + 1,
    accuracy: round.receiverPhase.correct ? 100 : 0,
    confidence: (round.receiverPhase.confidence * 100) / 7,
  }));

  return (
    <div className="performance-chart">
      {accuracyByRound.map((point) => (
        <div key={point.round} className="chart-bar">
          <div
            className="accuracy-bar"
            style={{ height: `${point.accuracy}%` }}
          />
          <div
            className="confidence-bar"
            style={{ height: `${point.confidence}%` }}
          />
        </div>
      ))}
    </div>
  );
};
```

#### **Association Heatmap**

```jsx
// Color-animal association patterns
const AssociationHeatmap = ({ associations, gameResults }) => {
  const matrix = animals.map((animal) =>
    colorCategories.map((color) => ({
      animal: animal.name,
      color: color,
      strength: calculateAssociationStrength(animal, color, associations),
      success: calculateSuccessRate(animal, color, gameResults),
    }))
  );

  return (
    <div className="association-heatmap">
      {matrix.map((row) =>
        row.map((cell) => (
          <div
            key={`${cell.animal}-${cell.color}`}
            className="heatmap-cell"
            style={{
              opacity: cell.strength,
              backgroundColor: cell.success > 0.5 ? "green" : "red",
            }}
          />
        ))
      )}
    </div>
  );
};
```

---

## 🌍 Accessibility & Internationalization

### **Accessibility Features**

#### **Screen Reader Support**

```jsx
// Comprehensive ARIA implementation
<div
  role="button"
  tabIndex={0}
  aria-label={`Select ${animal.name} - confidence ${confidence}/7`}
  aria-describedby={`animal-${index}-description`}
  onClick={handleSelect}
  onKeyDown={handleKeySelect}
>
  <img
    src={animal.image}
    alt={`${animal.name} silhouette`}
    aria-hidden="false"
  />
  <span id={`animal-${index}-description`} className="sr-only">
    {animal.name} - {animal.description}
  </span>
</div>
```

#### **Keyboard Navigation**

```jsx
// Complete keyboard accessibility
const handleKeyNavigation = (event) => {
  switch (event.key) {
    case "ArrowLeft":
    case "ArrowUp":
      event.preventDefault();
      selectPrevious();
      break;
    case "ArrowRight":
    case "ArrowDown":
      event.preventDefault();
      selectNext();
      break;
    case "Enter":
    case " ":
      event.preventDefault();
      confirmSelection();
      break;
    case "Escape":
      event.preventDefault();
      cancelSelection();
      break;
  }
};
```

#### **Color Vision Accommodation**

```jsx
// Alternative visual indicators
const ColorSwatch = ({ color, selected }) => (
  <div
    className={`color-swatch ${selected ? "selected" : ""}`}
    style={{ backgroundColor: color }}
    aria-label={`Color: ${getColorName(color)}`}
  >
    {selected && (
      <div className="selection-indicator">
        <CheckIcon aria-hidden="true" />
        <span className="sr-only">Selected</span>
      </div>
    )}
    <div
      className="color-pattern"
      style={{
        backgroundImage: getColorPattern(color),
      }}
    />
  </div>
);
```

### **Internationalization Preparation**

#### **Text Externalization**

```jsx
// Translation-ready text structure
const strings = {
  en: {
    welcome: {
      title: "Color-Animal Communication Research",
      subtitle: "Understanding how colors communicate concepts across cultures",
      beginButton: "Begin Study",
    },
    demographics: {
      title: "Background Information",
      age: "Age Group",
      culture: "Cultural Background",
      language: "Primary Language",
    },
    game: {
      senderInstructions: "Select a color that represents this animal",
      receiverInstructions: "Which animal does this color represent?",
      confidenceQuestion: "How confident are you in this choice?",
    },
  },
  es: {
    welcome: {
      title: "Investigación de Comunicación Color-Animal",
      subtitle:
        "Entendiendo cómo los colores comunican conceptos entre culturas",
      beginButton: "Comenzar Estudio",
    },
    // ... Spanish translations
  },
};

// Usage in components
const { t } = useTranslation();
<h1>{t("welcome.title")}</h1>;
```

#### **Cultural Adaptations**

```jsx
// Region-specific animal sets
const animalSets = {
  global: ["lion", "elephant", "dolphin", "butterfly"],
  northAmerican: ["bear", "eagle", "deer", "wolf"],
  african: ["zebra", "giraffe", "rhinoceros", "cheetah"],
  asian: ["panda", "tiger", "dragon", "crane"],
};

// Color term variations
const colorTerms = {
  en: { blue: "blue", green: "green" },
  ru: { blue: "синий/голубой", green: "зелёный" }, // Russian light/dark blue distinction
  jp: { blue: "青", green: "緑" }, // Japanese blue-green continuum
};
```

### **Responsive Design**

#### **Device Adaptation**

```css
/* Touch-optimized interface */
@media (hover: none) and (pointer: coarse) {
  .color-swatch {
    min-width: 44px;
    min-height: 44px;
    border: 2px solid transparent;
  }

  .animal-option {
    padding: var(--spacing-lg);
    margin: var(--spacing-sm);
  }
}

/* High-resolution displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  .animal-image {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

#### **Viewport Optimization**

```css
/* Ensure 100% viewport usage */
.screen-container {
  height: 100vh;
  height: 100dvh; /* Dynamic viewport height for mobile */
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Safe area handling for mobile devices */
.safe-area-content {
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
}
```

---

## 🔒 Ethics & Compliance

### **IRB Documentation**

#### **Research Protocol Summary**

```markdown
Study Title: Cross-Cultural Color-Concept Communication Through Animal Associations

Principal Investigator: [Your Name]
Institution: [Your Institution]  
IRB Protocol: [Protocol Number]

Study Design: Between-subjects experimental design
Duration: 15-20 minutes per participant
Risk Level: Minimal (equivalent to daily computer use)
```

#### **Participant Protection Measures**

```jsx
// Built-in ethical safeguards
const ethicalFeatures = {
  informedConsent: {
    purpose: "Clearly explained study objectives",
    procedures: "Detailed description of all phases",
    timeCommitment: "Accurate duration estimates",
    voluntaryParticipation: "No coercion or incentive pressure",
    rightToWithdraw: "Exit available at any point",
  },
  dataProtection: {
    anonymization: "UUID-only identification",
    localStorage: "No server transmission",
    noPersonalData: "No identifiable information collected",
    researcherControl: "Export only when authorized",
  },
  inclusivity: {
    colorVisionSupport: "Alternative interaction modes",
    multipleLanguages: "Translation-ready architecture",
    deviceFlexibility: "Mobile, tablet, desktop support",
    accessibilityCompliance: "WCAG 2.1 AA standards",
  },
};
```

### **Data Privacy Implementation**

#### **No Personal Identifiers**

```jsx
// UUID-only participant tracking
import { v4 as uuidv4 } from "uuid";

const generateParticipantId = () => {
  const id = uuidv4();
  // Store only in local browser session
  sessionStorage.setItem("participantId", id);
  return id;
};

// No collection of:
// - Names, emails, phone numbers
// - IP addresses or device fingerprints
// - Location data or geographic information
// - Social media or external account linking
```

#### **Local Data Storage**

```jsx
// All data remains in browser until export
const storeResearchData = (data) => {
  try {
    const encrypted = btoa(JSON.stringify(data));
    sessionStorage.setItem("researchData", encrypted);
  } catch (error) {
    console.error("Data storage failed:", error);
  }
};

// Automatic cleanup on session end
window.addEventListener("beforeunload", () => {
  if (!studyCompleted) {
    sessionStorage.clear();
  }
});
```

#### **Researcher Data Access**

```jsx
// Export only when explicitly requested
const exportResearchData = () => {
  // Require researcher confirmation
  const confirmed = window.confirm(
    "Export participant data? This will download anonymized research data to your device."
  );

  if (confirmed) {
    downloadDataFile();
    // Optional: Clear local storage after export
    if (window.confirm("Clear local data after export?")) {
      sessionStorage.clear();
    }
  }
};
```

### **Consent Management**

#### **Comprehensive Consent Process**

```jsx
// Multi-stage consent verification
const ConsentProcess = () => {
  const [consentSteps, setConsentSteps] = useState({
    studyPurpose: false,
    procedures: false,
    timeCommitment: false,
    dataUsage: false,
    voluntaryParticipation: false,
    contactInformation: false,
  });

  const allConsentsGiven = Object.values(consentSteps).every(Boolean);

  return (
    <div className="consent-process">
      {Object.entries(consentSteps).map(([step, agreed]) => (
        <ConsentStep
          key={step}
          step={step}
          agreed={agreed}
          onAgree={() => updateConsent(step, true)}
        />
      ))}

      <button disabled={!allConsentsGiven} onClick={proceedToStudy}>
        Begin Study
      </button>
    </div>
  );
};
```

### **Institutional Compliance**

#### **FERPA Compliance (Educational Settings)**

```jsx
// No educational records or grades collected
const nonEducationalData = {
  noGrades: "No academic performance data",
  noAttendance: "No class or session attendance",
  noInstitutionalId: "No student ID numbers",
  anonymousParticipation: "University affiliation not recorded",
};
```

#### **HIPAA Compliance (Healthcare Settings)**

```jsx
// No protected health information
const nonHealthData = {
  noMedicalHistory: "No medical conditions recorded",
  noTreatmentInfo: "No healthcare information",
  limitedVisionScreening: "Basic color vision test only",
  noPersonalHealthIds: "No medical record numbers",
};
```

#### **GDPR Considerations (International Participants)**

```jsx
// European privacy regulation alignment
const gdprCompliance = {
  lawfulBasis: "Informed consent for research",
  dataMinimization: "Only necessary data collected",
  purposeLimitation: "Research use only",
  rightToWithdraw: "Implemented at any time",
  dataPortability: "JSON export format",
  rightToErasure: "Local storage clearing",
};
```

---

## 🧪 Testing & Quality Assurance

### **Automated Testing Suite**

#### **Unit Tests**

```jsx
// Component functionality tests
describe("ColorPicker", () => {
  test("renders all color swatches", () => {
    render(<ColorPicker />);
    expect(screen.getAllByTestId("color-swatch")).toHaveLength(96);
  });

  test("calls onColorSelect when swatch clicked", () => {
    const mockSelect = jest.fn();
    render(<ColorPicker onColorSelect={mockSelect} />);

    fireEvent.click(screen.getAllByTestId("color-swatch")[0]);
    expect(mockSelect).toHaveBeenCalledWith(expect.any(String));
  });

  test("shows selected state correctly", () => {
    render(<ColorPicker selectedColor="#ff0000" />);
    expect(screen.getByLabelText(/selected/i)).toBeInTheDocument();
  });
});

describe("TimerDisplay", () => {
  test("updates progress correctly", () => {
    const { rerender } = render(<TimerDisplay timeLeft={10} duration={20} />);

    rerender(<TimerDisplay timeLeft={5} duration={20} />);
    // Test SVG progress update
  });

  test("handles pause state", () => {
    render(<TimerDisplay timeLeft={10} duration={20} isPaused={true} />);
    // Verify paused animation state
  });
});
```

#### **Integration Tests**

```jsx
// Full workflow testing
describe("Research Protocol Flow", () => {
  test("completes full consent to results flow", async () => {
    render(<App />);

    // Consent process
    fireEvent.click(screen.getByText("Begin Study"));
    await waitFor(() => screen.getByText("Background Information"));

    // Demographics
    fireEvent.change(screen.getByLabelText("Age"), {
      target: { value: "26-35" },
    });
    fireEvent.click(screen.getByText("Continue"));

    // Color vision
    await waitFor(() => screen.getByText("Color Vision"));
    fireEvent.click(screen.getByText("I can see the number"));

    // Association learning
    await waitFor(() => screen.getByText("Color Associations"));
    // ... complete association phase

    // Game rounds
    await waitFor(() => screen.getByText("Sender Phase"));
    // ... complete game

    // Results
    await waitFor(() => screen.getByText("Study Complete"));
    expect(screen.getByText("Export Data")).toBeInTheDocument();
  });
});
```

#### **Performance Tests**

```jsx
// Render performance validation
describe('Performance', () => {
  test('ColorPicker renders within performance budget', () => {
    const startTime = performance.now();
    render(<ColorPicker />);
    const renderTime = performance.now() - startTime;

    expect(renderTime).toBeLessThan(16); // 60fps budget
  });

  test('Timer animations are smooth', async () => {
    const { container } = render(
      <TimerDisplay timeLeft={10} duration={10} />
    );

    const circle = container.querySelector('circle');
    const computedStyle = window.getComputedStyle(circle);

    expect(computedStyle.transition).toContain('stroke-dashoffset');
  });<!-- filepath: /Users/tyronemarhguy/Color Communication Game/Psych_Color_Game_Experiment/README.md -->
# 🎨 Psychology Color Communication Game Experiment

[![React](https://img.shields.io/badge/React-18.2+-blue.svg)](https://reactjs.org/)
[![Research Ready](https://img.shields.io/badge/Research-Ready-green.svg)](https://github.com/tmarhguy/Psych_Color_Game_Experiment)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![IRB Ready](https://img.shields.io/badge/IRB-Compliant-purple.svg)](README.md#ethics-compliance)

> **A comprehensive, research-grade psychology experiment studying color-concept communication through animal associations across cultures**

## 📋 Table of Contents

- [🔬 Research Overview](#-research-overview)
- [✨ Key Features](#-key-features)
- [🏗️ Architecture](#️-architecture)
- [🚀 Quick Start](#-quick-start)
- [📊 Research Protocol](#-research-protocol)
- [🎮 User Experience](#-user-experience)
- [💾 Data Collection](#-data-collection)
- [🔧 Technical Implementation](#-technical-implementation)
- [📱 Component Documentation](#-component-documentation)
- [🎨 Design System](#-design-system)
- [🔬 For Researchers](#-for-researchers)
- [👩‍💻 For Developers](#-for-developers)
- [📈 Analytics & Export](#-analytics--export)
- [🌍 Accessibility & Internationalization](#-accessibility--internationalization)
- [🔒 Ethics & Compliance](#-ethics--compliance)
- [🧪 Testing & Quality Assurance](#-testing--quality-assurance)
- [🚀 Deployment](#-deployment)
- [📚 Research Applications](#-research-applications)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🔬 Research Overview

### **Primary Research Question**
*How effectively can colors communicate conceptual categories (animals) between individuals, and what factors influence this communication success?*

### **Study Design**
This application implements a **dyadic communication paradigm** where participants take turns as:
- **Sender**: Selects colors to represent specific animals
- **Receiver**: Identifies animals based on communicated colors

### **Research Objectives**

1. **Color-Concept Communication Efficiency**
   - Measure how well colors can represent conceptual categories
   - Analyze communication success rates across different animal-color pairings
   - Study individual vs. cultural patterns in color associations

2. **Individual Difference Analysis**
   - Document personal color-animal association preferences
   - Compare individual associations with cultural consensus
   - Analyze confidence patterns and decision-making strategies

3. **Cross-Cultural Communication**
   - Study how cultural background influences color-concept associations
   - Measure communication effectiveness across different demographic groups
   - Identify universal vs. culture-specific color meanings

4. **Cognitive Load & Strategy Analysis**
   - Collect strategy descriptions for color selection reasoning
   - Measure confidence ratings and response times
   - Analyze learning effects and adaptation over trials

### **Theoretical Framework**

Based on research by **Brown & Lindsey (2023)** on color communication games, this study extends their methodology from pure color-color communication to **color-concept communication**, offering unique insights into:

- **Ecological Validity**: Animals have natural color associations in the real world
- **Cultural Universality**: Animal concepts exist across cultures with varying associations
- **Cognitive Complexity**: Tests conceptual mapping beyond perceptual matching
- **Practical Applications**: Relevant for design, marketing, and cross-cultural communication

---

## ✨ Key Features

### 🎯 **Research-Grade Data Collection**
- **Comprehensive Demographics**: Age, culture, language, color vision status
- **Association Baselines**: Personal color-animal preference mapping
- **Strategy Documentation**: Qualitative reasoning for color choices
- **Confidence Metrics**: 7-point scale confidence ratings
- **Response Time Tracking**: Precise timing for cognitive load analysis
- **Export Capabilities**: Research-ready JSON data export

### 🎮 **Enhanced Game Mechanics**
- **Six-Phase Protocol**: Welcome → Demographics → Color Vision → Associations → Game → Results
- **Adaptive Difficulty**: Easy (20s), Normal (15s), Hard (10s) timing options
- **Role-Based Interfaces**: Distinct sender and receiver experiences
- **Real-Time Feedback**: Immediate scoring and performance tracking
- **Pause Functionality**: Testing and debugging capabilities

### 💻 **Technical Excellence**
- **Modern React 18.2+**: Hooks, memo, concurrent features
- **Glass Morphism Design**: Professional, research-appropriate aesthetic
- **Responsive Architecture**: Mobile-first, cross-device compatibility
- **Zoom-Compatible Interface**: Grid-based color picker, scalable UI
- **Hardware Acceleration**: Smooth 60fps animations
- **Accessibility Features**: Screen reader support, keyboard navigation

### 🎨 **Advanced Color System**
- **Grid-Based Color Picker**: 12×8 HSL-distributed color palette
- **Zoom-Independent**: Reliable interaction at any zoom level
- **Color Science**: Perceptually uniform color space distribution
- **Visual Feedback**: Real-time selection preview and validation

---

## 🏗️ Architecture

### **System Architecture**
```

┌─ Research Protocol ─────────────────────────────────────┐
│ │
│ Welcome → Demographics → Color Vision → Associations │
│ ↓ │
│ Enhanced Game Loop → Comprehensive Results │
│ │
└─────────────────────────────────────────────────────────┘

┌─ Technical Stack ───────────────────────────────────────┐
│ │
│ React 18.2+ (Hooks, Memo, Concurrent) │
│ Modern CSS (Variables, Grid, Flexbox) │
│ SVG Animations (Hardware Accelerated) │
│ Glass Morphism Design System │
│ Responsive Mobile-First Architecture │
│ │
└─────────────────────────────────────────────────────────┘

```

### **Component Hierarchy**
```

App.jsx (Main State Management)
├── EnhancedWelcomeScreen (Research Consent)
├── DemographicsScreen (Background Data)
├── ColorVisionScreen (Accommodation)
├── AssociationScreen (Baseline Learning)
├── SenderScreen (Color Selection Phase)
│ ├── GameHeader (Stats + Timer + Pause)
│ ├── ColorPicker (Grid-Based Selection)
│ ├── AnimalGrid (Target Display)
│ └── StrategyModal (Reasoning Collection)
├── ReceiverScreen (Animal Identification Phase)
│ ├── GameHeader (Stats + Timer + Pause)
│ ├── ColorDisplay (Sender's Choice)
│ ├── AnimalGrid (Selection Interface)
│ └── ConfidenceModal (Rating Collection)
└── ResultsScreen (Analysis + Export)
├── PerformanceMetrics (Success Rates)
├── StrategyAnalysis (Qualitative Insights)
├── AssociationComparison (Individual vs. Cultural)
└── DataExport (Research JSON)

```

### **Data Flow Architecture**
```

Research Data Collection:
Demographics → Color Vision → Associations → Game Performance → Export

Game State Management:
App State ← → Component Props ← → User Interactions ← → Data Collection

Timer System:
SVG Circle Progress ← → React State ← → Game Logic ← → Pause Controls

````

---

## 🚀 Quick Start

### **Prerequisites**
- **Node.js**: Version 16.0+ (recommended: 18.0+)
- **npm**: Version 8.0+ or **yarn**: Version 1.22+
- **Modern Browser**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

### **Installation**

1. **Clone the Repository**
```bash
git clone https://github.com/tmarhguy/Psych_Color_Game_Experiment.git
cd Psych_Color_Game_Experiment
````

2. **Install Dependencies**

```bash
npm install
# or
yarn install
```

3. **Start Development Server**

```bash
npm start
# or
yarn start
```

4. **Open in Browser**

```
http://localhost:3000
```

### **Production Build**

```bash
npm run build
# Creates optimized production build in 'build' folder
```

### **Development Scripts**

```bash
npm start          # Start development server (port 3000)
npm run build      # Create production build
npm test           # Run test suite
npm run lint       # Check code quality
npm run lint:fix   # Auto-fix linting issues
npm run analyze    # Analyze bundle size
```

---

## 📊 Research Protocol

### **Phase 0: Pre-Experiment Setup**

#### **🏠 Enhanced Welcome Screen**

```jsx
// Purpose: Research ethics and informed consent
Features:
- Study overview and purpose explanation
- Time commitment disclosure (15-20 minutes)
- Data usage and privacy information
- Informed consent with ethical guidelines
- Contact information for questions
- Right to withdraw at any time
```

#### **📋 Demographics Collection**

```jsx
// Purpose: Control variables and cultural context
Data Collected:
- Age group (18-25, 26-35, 36-45, 46-55, 56-65, 65+)
- Cultural background (open text + predefined options)
- Primary language (affects color term availability)
- Education level (may influence color sophistication)
- Device type (mobile/tablet/desktop)
- Screen size category (affects color perception)
- Previous color/design experience
```

#### **👁️ Color Vision Screening**

```jsx
// Purpose: Accommodate different color vision types
Features:
- Ishihara plate simulation (numbers 8, 3, 6)
- Self-reported color vision status
- Accommodation options for color differences
- Alternative interaction modes if needed
- Documentation for data analysis exclusions
```

### **Phase 1: Association Learning**

#### **🎨 Personal Color-Animal Mapping**

```jsx
// Purpose: Establish individual baseline associations
Process:
1. Present each animal individually
2. Participant selects associated colors
3. Confidence rating (1-7 scale) for each choice
4. Optional reasoning/strategy description
5. Comparison with cultural consensus data

Data Collected:
- Personal color preferences per animal
- Confidence in associations
- Reasoning patterns
- Individual vs. cultural deviation scores
```

### **Phase 2: Enhanced Communication Game**

#### **📤 Sender Phase (Enhanced)**

```jsx
// Purpose: Intentional color selection for communication
Process:
1. View target animal
2. Select color using grid-based picker
3. Strategy description modal
   - "Why did you choose this color?"
   - "How confident are you others will understand?"
4. Automatic progression to receiver phase

Enhancements:
- Strategy collection for qualitative analysis
- Color selection reasoning documentation
- Intention tracking vs. outcome measurement
```

#### **📥 Receiver Phase (Enhanced)**

```jsx
// Purpose: Color-to-concept interpretation
Process:
1. View sender's color choice
2. Select matching animal from grid
3. Confidence rating modal
   - 7-point confidence scale (1=not confident, 7=very confident)
   - Visual color-animal pairing preview
   - Timing data collection
4. Immediate feedback and progression

Enhancements:
- Confidence measurement for uncertainty analysis
- Response time tracking for cognitive load
- Multiple choice accuracy with reasoning
```

### **Phase 3: Results & Analysis**

#### **📈 Comprehensive Results Dashboard**

```jsx
// Purpose: Research insights and data export
Features:
- Overall communication success rate
- Individual animal-color performance breakdown
- Strategy effectiveness analysis
- Confidence-accuracy correlation
- Personal vs. cultural association comparison
- Response time and cognitive load indicators
- Complete data export in research JSON format
```

---

## 🎮 User Experience

### **Visual Design Philosophy**

#### **Glass Morphism Aesthetic**

- **Purpose**: Professional, research-appropriate appearance
- **Implementation**: Subtle transparency, backdrop blur, elegant shadows
- **Psychology**: Minimizes experimental bias through neutral design
- **Accessibility**: High contrast ratios, clear visual hierarchy

#### **Psychology-Optimized Color Scheme**

```css
/* Primary Theme: Perceptual Clarity */
--primary-blue: #3b82f6; /* Trust and reliability */
--secondary-coral: #f97316; /* Engagement without bias */
--neutral-grays: #64748b; /* Professional backgrounds */

/* Rationale: Chosen to minimize color bias in research context */
```

### **Interaction Design**

#### **Responsive Touch Targets**

- **Minimum Size**: 44px × 44px (WCAG AA compliant)
- **Touch Feedback**: Immediate visual response
- **Hover States**: Subtle elevation and color shifts
- **Focus Indicators**: Clear keyboard navigation support

#### **Timing and Animation**

```css
/* Performance-Optimized Animations */
transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
will-change: transform; /* Hardware acceleration */

/* Research-Appropriate Timing */
Easy Mode: 20 seconds    /* Comfortable exploration */
Normal Mode: 15 seconds  /* Standard cognitive load */
Hard Mode: 10 seconds    /* Time pressure effects */
```

### **Accessibility Features**

#### **Screen Reader Support**

```jsx
// ARIA labels and descriptions
<button aria-label="Select blue color for elephant"
        aria-describedby="color-picker-instructions">
```

#### **Keyboard Navigation**

- **Tab Order**: Logical progression through interface
- **Enter/Space**: Activate buttons and selections
- **Arrow Keys**: Navigate color grid and animal selection
- **Escape**: Close modals and return to previous state

#### **Color Vision Accommodation**

- **Pattern Alternatives**: Shape and texture indicators
- **High Contrast Mode**: Enhanced visibility options
- **Alternative Text**: Descriptive color information
- **Customizable Interface**: User-controlled adjustments

---

## 💾 Data Collection

### **Research Data Structure**

#### **Complete Export Format**

```json
{
  "participantId": "uuid-string",
  "timestamp": "2025-01-19T12:00:00Z",
  "studyVersion": "2.0.0",
  "demographics": {
    "age": "26-35",
    "culture": "European American",
    "language": "English",
    "education": "Bachelor's degree",
    "colorVision": "normal",
    "deviceType": "desktop",
    "screenSize": "large"
  },
  "colorVisionTest": {
    "plate1": { "response": "8", "correct": true },
    "plate2": { "response": "3", "correct": true },
    "plate3": { "response": "6", "correct": true },
    "selfReported": "normal"
  },
  "personalAssociations": [
    {
      "animal": "elephant",
      "colorChoice": "#808080",
      "confidence": 6,
      "reasoning": "Elephants are gray in most pictures I've seen"
    }
  ],
  "gameRounds": [
    {
      "roundNumber": 1,
      "difficulty": "normal",
      "senderPhase": {
        "targetAnimal": "lion",
        "colorSelected": "#ffd700",
        "strategy": "Golden color like a lion's mane",
        "responseTime": 8340,
        "confidence": 5
      },
      "receiverPhase": {
        "senderColor": "#ffd700",
        "animalSelected": "lion",
        "correct": true,
        "confidence": 7,
        "responseTime": 4200
      }
    }
  ],
  "results": {
    "overallAccuracy": 0.85,
    "averageConfidence": 5.2,
    "averageResponseTime": 6270,
    "strategyTypes": ["color_association", "cultural_knowledge"],
    "personalVsCulturalAlignment": 0.73
  }
}
```

### **Data Collection Points**

#### **Quantitative Metrics**

- **Success Rates**: Correct animal identification per color
- **Response Times**: Cognitive processing speed indicators
- **Confidence Ratings**: Certainty and decision quality measures
- **Association Consistency**: Individual vs. cultural pattern alignment
- **Learning Effects**: Performance changes over trials

#### **Qualitative Insights**

- **Strategy Descriptions**: Reasoning for color choices
- **Cultural References**: Mentions of cultural color meanings
- **Personal Experiences**: Individual association explanations
- **Decision Confidence**: Uncertainty and doubt expressions

### **Privacy and Ethics**

#### **Data Protection**

- **No Personal Identifiers**: Anonymous UUID assignment only
- **Local Storage**: No server transmission of personal data
- **Export Control**: Researcher-controlled data download
- **Deletion Rights**: Complete data removal capability

#### **Informed Consent**

- **Purpose Disclosure**: Clear research objective explanation
- **Time Commitment**: Accurate duration estimates (15-20 minutes)
- **Data Usage**: Transparent academic research usage
- **Contact Information**: Researcher availability for questions
- **Withdrawal Rights**: No-penalty study exit at any time

---

## 🔧 Technical Implementation

### **Modern React Architecture**

#### **State Management Pattern**

```jsx
// App.jsx - Central State Hub
const [gameState, setGameState] = useState({
  currentScreen: "enhancedWelcome",
  gamePhase: "sender",
  currentRound: 1,
  score: 0,
  difficulty: "normal",
  isPaused: false,
});

const [researchData, setResearchData] = useState({
  demographics: {},
  colorVision: {},
  associations: [],
  gameRounds: [],
  strategies: [],
});

// Optimized Updates with useCallback
const updateResearchData = useCallback((section, data) => {
  setResearchData((prev) => ({
    ...prev,
    [section]: { ...prev[section], ...data },
  }));
}, []);
```

#### **Performance Optimizations**

```jsx
// Component Memoization
const ColorPicker = React.memo(({ onColorSelect, selectedColor }) => {
  // Only re-renders when props actually change
});

// Expensive Calculation Caching
const colorGrid = useMemo(() => generateHSLColorGrid(12, 8), []);

// Event Handler Stability
const handleColorSelect = useCallback(
  (color) => {
    onColorSelect(color);
    recordSelectionTime();
  },
  [onColorSelect]
);
```

### **Advanced Color Picker System**

#### **Grid-Based Architecture**

```jsx
// Replaced canvas for zoom compatibility
const ColorGrid = () => {
  const colors = useMemo(() => {
    const grid = [];
    for (let hue = 0; hue < 360; hue += 30) {
      for (let sat = 40; sat <= 100; sat += 20) {
        grid.push(`hsl(${hue}, ${sat}%, 70%)`);
      }
    }
    return grid;
  }, []);

  return (
    <div className="color-grid">
      {colors.map((color, index) => (
        <ColorSwatch
          key={index}
          color={color}
          selected={selectedColor === color}
          onClick={() => handleColorSelect(color)}
        />
      ))}
    </div>
  );
};
```

#### **Zoom-Independent Interaction**

```css
/* Grid-based layout scales naturally */
.color-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 2px;
  width: 100%;
  height: 100%;
}

.color-swatch {
  border-radius: 4px;
  transition: transform 0.15s ease;
  cursor: pointer;
}

.color-swatch:hover {
  transform: scale(1.1);
  z-index: 10;
}
```

### **Timer System Architecture**

#### **SVG-Based Circular Progress**

```jsx
const TimerDisplay = ({ timeLeft, duration, isPaused }) => {
  const circumference = 2 * Math.PI * 45; // radius = 45
  const progress = (timeLeft / duration) * circumference;

  return (
    <svg className="timer-circle" width="100" height="100">
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="currentColor"
        strokeWidth="4"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress}
        style={{
          transition: isPaused ? "none" : "stroke-dashoffset 1s linear",
          transform: "rotate(-90deg)",
          transformOrigin: "50px 50px",
        }}
      />
    </svg>
  );
};
```

#### **Functional Pause System**

```jsx
// Timer logic with pause support
useEffect(() => {
  if (isPaused || timeLeft <= 0) return;

  const timer = setInterval(() => {
    setTimeLeft((prev) => {
      if (prev <= 1) {
        onTimeUp();
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(timer);
}, [timeLeft, isPaused, onTimeUp]);
```

### **Responsive Design System**

#### **CSS Variable Architecture**

```css
:root {
  /* Spacing System - 12px base unit */
  --spacing-xs: 0.25rem; /* 4px */
  --spacing-sm: 0.5rem; /* 8px */
  --spacing-md: 0.75rem; /* 12px - base */
  --spacing-lg: 1rem; /* 16px */
  --spacing-xl: 1.25rem; /* 20px */
  --spacing-2xl: 1.5rem; /* 24px */

  /* Color System - Psychology Optimized */
  --primary-50: #eff6ff;
  --primary-500: #3b82f6;
  --primary-900: #1e3a8a;

  /* Typography Scale */
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
}
```

#### **Mobile-First Responsive Breakpoints**

```css
/* Mobile First Approach */
.component {
  /* Base styles for mobile */
  padding: var(--spacing-md);
  font-size: var(--text-sm);
}

/* Tablet and up */
@media (min-width: 768px) {
  .component {
    padding: var(--spacing-lg);
    font-size: var(--text-base);
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .component {
    padding: var(--spacing-xl);
    font-size: var(--text-lg);
  }
}
```

---

## 📱 Component Documentation

### **Core Components**

#### **ColorPicker Component**

```jsx
/**
 * Grid-based color selection interface
 * Replaces canvas for zoom compatibility
 */
<ColorPicker
  selectedColor={string}         // Currently selected color (hex)
  onColorSelect={function}       // Callback when color is chosen
  disabled={boolean}             // Disable interaction
  showPreview={boolean}          // Show color preview header
/>

// Implementation Details:
// - 12×8 HSL-distributed color grid
// - Zoom-independent interaction
// - Keyboard navigation support
// - Visual selection feedback
```

#### **TimerDisplay Component**

```jsx
/**
 * SVG-based circular progress timer
 * Hardware accelerated animations
 */
<TimerDisplay
  timeLeft={number}              // Remaining seconds
  duration={number}              // Total duration
  isPaused={boolean}             // Pause state
  onTimeUp={function}            // Callback when timer reaches 0
  size={number}                  // Optional size override
/>

// Features:
// - Smooth circular progress animation
// - Color-coded warning states
// - Pause/resume functionality
// - Responsive sizing
```

#### **AnimalGrid Component**

```jsx
/**
 * Responsive animal display and selection
 * Smart positioning algorithm
 */
<AnimalGrid
  animals={array}                // Animal data array
  role={string}                  // 'sender' | 'receiver'
  onAnimalSelect={function}      // Selection callback
  selectedAnimalIndex={number}   // Currently selected index
  refreshPositions={number}      // Force re-layout trigger
  senderColor={string}           // Color context for receiver
/>

// Animal Data Structure:
```
