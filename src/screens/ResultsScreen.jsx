import React from "react";
import PropTypes from "prop-types";
import "./ResultsScreen.css";

const ResultsScreen = ({ 
  score, 
  totalRounds, 
  roundHistory, 
  participantId, 
  difficulty,
  onRestart,
  onExport 
}) => {
  const accuracy = ((score / totalRounds) * 100).toFixed(1);
  const avgResponseTime = roundHistory.length > 0 
    ? (roundHistory.reduce((sum, round) => sum + (round.responseTime || 0), 0) / roundHistory.length / 1000).toFixed(1)
    : 0;

  const getPerformanceMessage = () => {
    if (accuracy >= 80) return { emoji: "🎉", text: "Excellent Communication!", color: "#48bb78" };
    if (accuracy >= 60) return { emoji: "👍", text: "Good Performance!", color: "#ed8936" };
    if (accuracy >= 40) return { emoji: "📈", text: "Room for Improvement", color: "#ed8936" };
    return { emoji: "🎯", text: "Keep Practicing!", color: "#e53e3e" };
  };

  const performance = getPerformanceMessage();

  const exportData = () => {
    const data = {
      participantId: participantId || "anonymous",
      difficulty,
      totalScore: score,
      totalRounds,
      accuracy: parseFloat(accuracy),
      averageResponseTime: parseFloat(avgResponseTime),
      completedAt: new Date().toISOString(),
      roundHistory: roundHistory.map((round, index) => ({
        round: index + 1,
        targetAnimal: round.targetAnimal?.name,
        selectedAnimal: round.selectedAnimal?.name,
        senderColor: round.senderColor,
        correct: round.correct,
        responseTime: round.responseTime,
        colorDistance: round.colorDistance
      }))
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `color-communication-results-${participantId || 'anonymous'}-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    if (onExport) onExport(data);
  };

  return (
    <div className="results-screen">
      <div className="results-container">
        <header className="results-header">
          <div className="performance-badge" style={{ borderColor: performance.color }}>
            <span className="performance-emoji">{performance.emoji}</span>
            <h1 style={{ color: performance.color }}>{performance.text}</h1>
          </div>
          <h2>Experiment Complete</h2>
        </header>

        <div className="results-summary">
          <div className="summary-grid">
            <div className="stat-card primary">
              <div className="stat-value">{score}/{totalRounds}</div>
              <div className="stat-label">Correct Matches</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{accuracy}%</div>
              <div className="stat-label">Accuracy</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{avgResponseTime}s</div>
              <div className="stat-label">Avg Response Time</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{difficulty}</div>
              <div className="stat-label">Difficulty</div>
            </div>
          </div>
        </div>

        <div className="round-history">
          <h3>📊 Round-by-Round Performance</h3>
          <div className="history-grid">
            {roundHistory.map((round, index) => (
              <div 
                key={index} 
                className={`round-card ${round.correct ? 'correct' : 'incorrect'}`}
              >
                <div className="round-number">Round {index + 1}</div>
                <div className="round-details">
                  <div className="animal-info">
                    <span className="label">Target:</span>
                    <span>{round.targetAnimal?.name || 'Unknown'}</span>
                  </div>
                  <div className="animal-info">
                    <span className="label">Selected:</span>
                    <span>{round.selectedAnimal?.name || 'None'}</span>
                  </div>
                  <div className="color-sample" style={{ backgroundColor: round.senderColor }}></div>
                </div>
                <div className="round-result">
                  {round.correct ? '✅' : '❌'}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="insights-section">
          <h3>🧠 Research Insights</h3>
          <div className="insights-grid">
            <div className="insight-card">
              <h4>Color-Animal Associations</h4>
              <p>
                Your performance helps researchers understand how people naturally 
                associate colors with different animals and concepts.
              </p>
            </div>
            <div className="insight-card">
              <h4>Communication Effectiveness</h4>
              <p>
                This data contributes to studies on non-verbal communication 
                and how visual cues can convey meaning across individuals.
              </p>
            </div>
            <div className="insight-card">
              <h4>Cognitive Processing</h4>
              <p>
                Response times reveal information about how quickly people process 
                and interpret color-based information.
              </p>
            </div>
          </div>
        </div>

        <div className="actions-section">
          <div className="action-buttons">
            <button className="secondary-button" onClick={exportData}>
              📁 Export Data
            </button>
            <button className="primary-button" onClick={onRestart}>
              🔄 Try Again
            </button>
          </div>
          <p className="thank-you">
            Thank you for participating in this research study! 
            Your contribution helps advance our understanding of human color perception and communication.
          </p>
        </div>
      </div>
    </div>
  );
};

ResultsScreen.propTypes = {
  score: PropTypes.number.isRequired,
  totalRounds: PropTypes.number.isRequired,
  roundHistory: PropTypes.array.isRequired,
  participantId: PropTypes.string,
  difficulty: PropTypes.string.isRequired,
  onRestart: PropTypes.func.isRequired,
  onExport: PropTypes.func,
};

export default ResultsScreen;
