// App.jsx
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [question, setQuestion] = useState('');
  const [responses, setResponses] = useState([]);

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/ask', { question });
      setResponses([...responses, { question, answer: response.data.answer }]);
      setQuestion('');
    } catch (error) {
      console.error('Error fetching the response:', error);
    }
  };

  return (
    <div className="App">
      <h1>Ask AgroAegis</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={handleInputChange}
          placeholder="Enter your question"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="responses">
        {responses.map((item, index) => (
          <div key={index} className="response">
            <h3>Question: {item.question}</h3>
            <p>Answer: {item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
