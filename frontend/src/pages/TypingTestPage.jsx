import React from "react";
import {
  StartTestButton,
  RestartButton,
} from "../components/TypingTest/Buttons.jsx";
import {
  TextBox,
  TextDisplay,
  ResultDisplay,
} from "../components/TypingTest/Test.jsx";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios"; // Import axios to make HTTP requests

export const TypingTest = () => {
  const [testStarted, setTestStarted] = React.useState(false);
  const [userInput, setUserInput] = React.useState("");
  const [startTime, setStartTime] = React.useState(null);
  const [testEnded, setTestEnded] = React.useState(false);
  const [wpm, setWpm] = React.useState(0);
  const [mistakes, setMistakes] = React.useState(0);
  const { currentUser } = useAuth();

  const sentence = "The quick brown fox jumps over the lazy dog";

  const handleStartClick = () => {
    setTestStarted((prev) => !prev);
    setStartTime(Date.now());
  };

  const handleTyping = (e) => {
    let newValue = e.target.value;
    setUserInput(newValue);

    // Compare new character with corresponding character in sentence
    if (newValue[newValue.length - 1] !== sentence[newValue.length - 1]) {
      setMistakes((prev) => prev + 1);
    }

    if (newValue === sentence) {
      const endTime = Date.now();
      setTestEnded(true);
      const totalTime = (endTime - startTime) / 1000 / 60;
      const totalWords = sentence.split(" ").length;
      const calculatedWpm = Math.round(totalWords / totalTime);
      setWpm(calculatedWpm);

      // Send POST request to backend
      console.log(calculatedWpm);
      axios
        .post(`${import.meta.env.VITE_REACT_APP_API_URL}/submissions`, {
          userId: currentUser.uid, // Assuming you have access to the current user's ID
          typingSpeed: calculatedWpm,
          mistakes: mistakes,
          date: new Date(),
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const reset = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="modern">
        {testStarted ? (
          testEnded ? (
            <>
              <ResultDisplay wpm={wpm} mistakes={mistakes} />
              <RestartButton reset={reset} />
            </>
          ) : (
            <>
              <TextDisplay userInput={userInput} sentence={sentence} />
              <TextBox userInput={userInput} handleTyping={handleTyping} />
            </>
          )
        ) : (
          <>
            <h1>Typing Test</h1>
            <StartTestButton onStartClick={handleStartClick} />
          </>
        )}
      </div>
    </div>
  );
};
