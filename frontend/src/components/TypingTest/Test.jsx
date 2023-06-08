import React from "react";
import "../../styles.css";

export const TextDisplay = ({ userInput, sentence}) => {
  const sentenceArray = sentence.split("");

  return (
    <div className="text-box-container">
      <p>
        {sentenceArray.map((char, index) => {
          let color;
          if (index < userInput.length) {
            color = userInput[index] === char ? "#fc4903" : "red";
          }
          return (
            <span key={index} style={{ color: color }}>
              {char}
            </span>
          );
        })}
      </p>
    </div>
  );
};

export const TextBox = ({ handleTyping }) => {
  return (
    <div className="text-box-container">
      <textarea
        className="text-box"
        onChange={handleTyping}
        placeholder="Start typing when ready..."
      />
    </div>
  );
};

export const ResultDisplay = ({wpm, mistakes}) => {
  return (
    <div className="button">
      <div className="result-display">
      <p>WPM: {wpm}</p>
      <p>Mistakes: {mistakes}</p>
      </div>
    </div>
  );
};
