import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const handleShare = () => {
    const shareLink = "https://giveawayray.netlify.app/";
    const message = `🔥 Free Samsung Phone Giveaway for Nigerians!\n\nClick to claim: ${shareLink}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`);
  };

  return (
    <Router>
      <div className="App">
        <h2>🎁 Win a Free Samsung Galaxy – Limited Promo (Nigeria)</h2>
        <p>This promo is for Nigerians only. No payments, no card. Just follow simple steps to stand a chance of winning a Samsung Galaxy smartphone.</p>
        <a href="https://bit.ly/3I7JqNx" target="_blank" rel="noopener noreferrer">
          <button className="claim-btn">🎉 CLAIM NOW</button>
        </a>

        <h3>📲 Want to Help Others Win Too?</h3>
        <p>Share this link to 5 WhatsApp groups or friends to increase your chances of winning. Let’s spread the blessing!</p>
        <button className="share-btn" onClick={handleShare}>📤 Share on WhatsApp</button>
      </div>
    </Router>
  );
}

export default App;
