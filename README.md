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
