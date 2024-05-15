import React, { useState } from "react";
import { AiFillAudio } from "react-icons/ai";
import { TbPlayerPauseFilled } from "react-icons/tb";

const AudioRecorder = ({ setInputValue }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recognition, setRecognition] = useState(null);

  const startRecording = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition not supported by this browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join("");

      setInputValue(transcript);
    };

    recognition.start();
    setRecognition(recognition);
  };

  const stopRecording = () => {
    if (recognition) {
      recognition.stop();
      setIsRecording(false);
    }
  };

  const handleToggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <div>
      {!isRecording ? (
        <a onClick={handleToggleRecording} className="mic-icon">
          <AiFillAudio className="icon-size" />
        </a>
      ) : (
        <a onClick={handleToggleRecording} className="mic-icon">
          <TbPlayerPauseFilled className="icon-size" />
        </a>
      )}
    </div>
  );
};

export default AudioRecorder;
