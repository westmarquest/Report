import React from "react";

const GameModal = ({ onClose }) => {
  return (
    <div className="game-modal">
      <div className="game-content">
        <button className="close-game-button" onClick={onClose}>
          Close
        </button>
        <iframe
          title="game"
          src="https://www.onlinegames.io/games/2021/2/rescue-helicopter/index.html"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default GameModal;
