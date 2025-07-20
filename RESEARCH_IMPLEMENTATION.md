# Color Communication Game - Research Implementation

## Overview

This repository contains a comprehensive research-grade implementation of a color communication experiment designed to study human color perception, communication strategies, and cognitive processing patterns.

## 🧪 Research Features Implemented

### 1. **Enhanced Welcome & Consent Process**

- **File**: `src/screens/EnhancedWelcomeScreen.jsx`
- **Purpose**: Research ethics compliance with informed consent
- **Features**:
  - Comprehensive study information
  - Ethical rights explanation
  - Explicit consent collection
  - Study phase timeline
  - Participant ID generation

### 2. **Demographics Collection**

- **File**: `src/screens/DemographicsScreen.jsx`
- **Purpose**: Collect participant background for cultural analysis
- **Data Collected**:
  - Age ranges
  - Cultural background
  - Device and lighting conditions
  - Technical setup information
  - Form validation and error handling

### 3. **Color Vision Screening**

- **File**: `src/screens/ColorVisionScreen.jsx`
- **Purpose**: Assess color vision capabilities for study accommodation
- **Features**:
  - Ishihara plate simulation
  - Color discrimination testing
  - Vision type classification
  - Adaptive recommendations

### 4. **Association Learning Phase**

- **File**: `src/screens/AssociationScreen.jsx`
- **Purpose**: Establish baseline color-animal associations
- **Data Collection**:
  - Personal color choices for each animal
  - 7-point confidence ratings
  - Reasoning explanations
  - Progress tracking
  - Individual association patterns

### 5. **Enhanced Game Experience**

#### Sender Screen Enhancements

- **File**: `src/screens/SenderScreen.jsx`
- **Research Features**:
  - Strategy collection modal
  - Communication approach categorization:
    - Appearance-based strategies
    - Habitat-based strategies
    - Symbolic associations
    - Personal associations
  - Strategy explanation collection
  - Round-by-round strategy tracking

#### Receiver Screen Enhancements

- **File**: `src/screens/ReceiverScreen.jsx`
- **Research Features**:
  - Confidence rating modal
  - 7-point confidence scale
  - Selection preview system
  - Confidence tracking per round
  - Decision certainty measurement

### 6. **Comprehensive Results Analysis**

- **File**: `src/screens/ResultsScreen.jsx`
- **Research Outputs**:
  - Game performance metrics
  - Strategy distribution analysis
  - Confidence pattern analysis
  - Cultural factor insights
  - Exportable research data
  - Comprehensive JSON data export

## 📊 Data Collection Points

### Demographic Data

```javascript
{
  age: "18-24" | "25-34" | "35-44" | "45-54" | "55-64" | "65+",
  culturalBackground: string,
  deviceType: "desktop" | "laptop" | "tablet" | "mobile",
  lightingConditions: "natural" | "artificial" | "mixed",
  timestamp: ISO8601
}
```

### Color Vision Data

```javascript
{
  plates: [
    {
      plateNumber: number,
      response: string,
      correct: boolean,
      responseTime: number
    }
  ],
  visionType: "normal" | "protanopia" | "deuteranopia" | "tritanopia",
  timestamp: ISO8601
}
```

### Association Data

```javascript
[
  {
    animal: string,
    chosenColor: string,
    confidence: number, // 1-7 scale
    reasoning: string,
    responseTime: number,
  },
];
```

### Game Round Data

```javascript
{
  round: number,
  targetAnimal: object,
  selectedAnimal: object,
  senderColor: string,
  correct: boolean,
  responseTime: number,
  colorDistance: number,
  strategy: {
    type: "appearance" | "habitat" | "symbolic" | "personal",
    explanation: string
  },
  confidence: {
    level: number, // 1-7 scale
    timestamp: ISO8601
  }
}
```

## 🔬 Research Applications

### 1. **Cultural Color Perception Studies**

- Cross-cultural color-concept associations
- Cultural background influence analysis
- Universal vs. culture-specific patterns

### 2. **Communication Strategy Research**

- Non-verbal communication effectiveness
- Strategy preference patterns
- Individual vs. universal approaches

### 3. **Cognitive Load & Confidence Studies**

- Decision confidence correlation with accuracy
- Response time vs. confidence relationships
- Cognitive processing under time pressure

### 4. **Color Vision Accommodation Research**

- Inclusive design validation
- Color accessibility effectiveness
- Alternative communication modalities

## 🛠 Technical Implementation

### Architecture

- **React 18.2+**: Modern component architecture with hooks
- **CSS Modules**: Scoped styling with design system consistency
- **PropTypes**: Runtime type checking for component props
- **Research-Grade UX**: Modal overlays, progress indicators, form validation

### Design System

- **Color Palette**: CSS custom properties for consistent theming
- **Typography**: Inter font family for readability
- **Animations**: Smooth transitions and micro-interactions
- **Responsive**: Mobile-first responsive design
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

### Data Management

- **State Management**: React hooks with proper dependency tracking
- **Data Validation**: Form validation with error handling
- **Export System**: JSON data export for research analysis
- **Privacy**: Client-side data handling with optional anonymization

## 📈 Research Protocol Flow

```
1. Enhanced Welcome → Consent Collection
2. Demographics → Cultural & Technical Background
3. Color Vision → Accommodation Assessment
4. Associations → Personal Baseline Establishment
5. Game Rounds → Communication Performance
   ├── Sender: Strategy Collection
   ├── Receiver: Confidence Rating
   └── Round Analysis
6. Results → Comprehensive Data Export
```

## 🔧 Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## 📝 Research Ethics

This implementation follows research ethics guidelines:

- ✅ Informed consent process
- ✅ Participant rights explanation
- ✅ Data anonymization options
- ✅ Voluntary participation
- ✅ Withdrawal mechanism
- ✅ Transparent data usage

## 📄 Data Export Format

The system exports comprehensive JSON data including:

- Participant demographics
- Color vision assessment
- Baseline associations
- Game performance metrics
- Strategy patterns
- Confidence ratings
- Temporal analysis data

Perfect for integration with research analysis tools like R, Python pandas, SPSS, or specialized psychology research platforms.

## 🤝 Contributing

This research implementation is designed for:

- Psychology researchers studying color perception
- HCI researchers investigating communication interfaces
- Cultural studies examining color symbolism
- Accessibility researchers developing inclusive designs

---

**Research Grade Implementation Complete** ✅
_Ready for ethical review and participant recruitment_
