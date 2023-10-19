import { useState } from "react";
import "./App.css";

const suggestions = [
  "Channel",
  "CodingLab",
  "CodingNepal",
  "YouTube",
  "YouTuber",
  "YouTube Channel",
  "Blogger",
  "Bollywood",
  "Vlogger",
  "Vehicles",
  "Facebook",
  "Freelancer",
  "Facebook Page",
  "Designer",
  "Developer",
  "Web Designer",
  "Web Developer",
  "Login Form in HTML & CSS",
  "How to learn HTML & CSS",
  "How to learn JavaScript",
  "How to become Freelancer",
  "How to become Web Designer",
  "How to start Gaming Channel",
  "How to start YouTube Channel",
  "What does HTML stand for?",
  "What does CSS stand for?",
];

function App() {
  const [userInput, setUserInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const regexPattern = new RegExp(`\\w{3,}`, "gi");

  const inputChange = (e) => {
    const input = e.target.value;
    setUserInput(input);
    setShowSuggestions(input.length > 0);
  };

  const onSuggestionClick = (selectedValue) => {
    setUserInput(selectedValue);
  };
  return (
    <>
      <div className="wrapper">
        <div className="search-input">
          <input
            type="text"
            placeholder="Type to search..."
            value={userInput}
            onChange={inputChange}
          />
          <div className="autoCom-box">
            {showSuggestions &&
              suggestions
                .filter((data) =>
                  data
                    .toLocaleLowerCase()
                    .startsWith(
                      userInput.toLocaleLowerCase().match(regexPattern)
                    )
                )
                .map((data, index) => (
                  <div
                    key={index}
                    className="autoCom-box-item"
                    onClick={() => onSuggestionClick(data)}
                  >
                    <li>{data}</li>
                  </div>
                ))}
          </div>
          <div className="icon fas fa-search"></div>
        </div>
      </div>
    </>
  );
}

export default App;
