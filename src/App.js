import { useState } from "react";
import "./App.css";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameInput || !emailInput || !messageInput) {
      alert("All fields are required");
    }
    setIsSubmitted(true);
  };

  return (
    <div className="bg-container">
      <form className="form-el" onSubmit={handleSubmit}>
        <div className="input-el">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </div>
        <div className="input-el">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>
        <div className="input-el">
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            cols="6"
            rows="6"
            required
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className={`modal ${isSubmitted ? "show" : "hide"}`}>
        <h2>Form submitted successfully!</h2>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setNameInput("");
            setEmailInput("");
            setMessageInput("");
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default App;
