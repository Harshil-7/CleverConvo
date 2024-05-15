import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdSend } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import { AudioRecorder } from "./index";

const Form = ({ close, active }) => {
  const [inputValue, setInputValue] = useState("");
  let loadInterval;

  function loader(element) {
    element.textContent = "";

    loadInterval = setInterval(() => {
      element.textContent += ".";

      if (element.textContent === "....") {
        element.textContent = "";
      }
    }, 300);
  }

  function typeText(element, text) {
    let index = 0;

    let interval = setInterval(() => {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  }

  function showImage(element, url) {
    const imgElement = document.createElement("img");

    imgElement.src = url;

    imgElement.style.width = 500 + "px";
    imgElement.style.height = 500 + "px";

    element.appendChild(imgElement);
  }

  function showVideo(element, url) {
    const videoElement = document.createElement("video");

    videoElement.src = url;
    videoElement.controls = true; // Add controls to allow the user to play/pause the audio

    element.appendChild(videoElement);
  }

  function showMusic(element, url) {
    const audioElement = document.createElement("audio");

    audioElement.src = url;
    audioElement.controls = true; // Add controls to allow the user to play/pause the audio

    element.appendChild(audioElement);
  }

  function generateUniqueiD() {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);
    return `id-${timestamp}-${hexadecimalString}`;
  }

  function chatStripe(isAi, value, uniqueId) {
    return `
    <div class ="wrapper ${isAi && "ai"}">
        <div class = "chat">
            <div class = "profile">
                <img src="${isAi ? "bot.svg" : "user.svg"}" alt="${
      isAi ? "bot" : "user"
    }"/>
            </div>
                <div class = "message" id=${uniqueId}>${value.trim()}
            </div>
        </div>
    </div>
    `;
  }
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event);
      close(event);
    }
  };

  async function fetchData(url, prompt, active, messageDiv) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
          active: active,
        }),
      });
      clearInterval(loadInterval);
      messageDiv.innerHTML = " ";

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const parsedData = data.bot;
        console.log(parsedData);

        if (active == "Music Generator") {
          showMusic(messageDiv, parsedData);
        } else if (active == "Video Generator") {
          showVideo(messageDiv, parsedData);
        } else if (active == "Image Generator") {
          showImage(messageDiv, parsedData);
        } else {
          typeText(messageDiv, parsedData);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function scrollToLatestMessage() {
    var chatContainer = document.getElementById("chat_container");
    var lastMessage = chatContainer.lastElementChild;
    lastMessage.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const chatContainer = document.getElementById("chat_container");

    setInputValue("");

    // const data = new FormData(form);

    chatContainer.innerHTML += chatStripe(false, inputValue);

    const uniqueId = generateUniqueiD();
    chatContainer.innerHTML += chatStripe(true, "", uniqueId);

    const messageDiv = document.getElementById(uniqueId);

    loader(messageDiv);
    scrollToLatestMessage();

    // switch (active) {
    //   case "Image Generator":
    //     fetchData(
    //       "http://127.0.0.1:8000/generate-image/",
    //       inputValue,
    //       active,
    //       messageDiv
    //     );
    //   case "Audio Generator":
    //     fetchData(
    //       "http://127.0.0.1:8000/generate-audio/",
    //       inputValue,
    //       active,
    //       messageDiv
    //     );
    //   case "Video Generator":
    //     fetchData(
    //       "http://127.0.0.1:8000/generate-video/",
    //       inputValue,
    //       active,
    //       messageDiv
    //     );
    //   default:
    //     fetchData(
    //       "http://127.0.0.1:8000/generate-text/",
    //       inputValue,
    //       active,
    //       messageDiv
    //     );
    // }
    const response = await fetch("http://127.0.0.1:8000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: inputValue,
        active: active,
      }),
    });
    clearInterval(loadInterval);
    messageDiv.innerHTML = " ";

    if (response.ok) {
      const data = await response.json();
      const parsedData = data.bot;
      console.log(parsedData);
      if (active == "Music Generator") {
        showMusic(messageDiv, parsedData);
      } else if (active == "Video Generator") {
        showVideo(messageDiv, parsedData);
      } else if (active == "Image Generator") {
        showImage(messageDiv, parsedData);
      } else {
        typeText(messageDiv, parsedData);
      }
    } else {
      const error = await response.text();

      messageDiv.innerHTML = "Somthing went wrong, Please Reload the page.";
      alert(error);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form id="form_input_data" className="msger-inputarea">
      <button
        className="navbar-toggler d-lg-none d-block msger-send-btn"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggele navigation"
      >
        <BiMenu className="icon-size" />
      </button>
      <textarea
        type="text"
        name="prompt"
        className="msger-input"
        placeholder="Ask any Questions Here..."
        rows="100"
        cols="100"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        value={inputValue}
        id="prompt"
      />
      {/* <a href="" className="scan-icon">
        <AiFillPicture className="icon-size" />
      </a> */}
      <AudioRecorder setInputValue={setInputValue} />
      <button
        className="msger-send-btn"
        type="submit"
        onClick={(e) => {
          close(e);
          handleSubmit(e);
        }}
      >
        <MdSend className="icon-size" />
      </button>
    </form>
  );
};

export default Form;
