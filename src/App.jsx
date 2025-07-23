import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const askQuestion = async () => {
    if (!question.trim()) {
      setResponse('Please enter a question first.');
      return;
    }

    setResponse('Processing your question...');
    
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY; // Get API key from environment variables
      
      if (!apiKey) {
        setResponse('API key not found. Please check your environment variables.');
        return;
      }
      
      const result = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
        {
          contents: [
            {
              parts: [
                {
                  text: question,
                },
              ],
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-goog-api-key': apiKey,
          },
        }
      );
      
      // Log the full response to debug
      console.log('Full API Response:', result.data);
      
      // Handle different possible response structures
      if (result.data && result.data.candidates && result.data.candidates[0] && result.data.candidates[0].content && result.data.candidates[0].content.parts && result.data.candidates[0].content.parts[0]) {
        setResponse(result.data.candidates[0].content.parts[0].text);
      } else if (result.data && result.data.contents && result.data.contents[0] && result.data.contents[0].parts && result.data.contents[0].parts[0]) {
        setResponse(result.data.contents[0].parts[0].text);
      } else {
        setResponse('Received response but unable to parse the content.');
      }
    } catch (error) {
      console.error('Error fetching response:', error.response ? error.response.data : error.message);
      console.error('Full error object:', error);
      setResponse(
        error.response && error.response.data
          ? `Error: ${JSON.stringify(error.response.data)}`
          : 'Sorry, there was an error processing your request.'
      );
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-4xl font-bold mb-8">AI Chatbot</h1>
        <div className="bg-white text-black w-3/4 max-w-lg p-4 rounded-lg shadow-lg">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ask your question here..."
          />
          <button
            onClick={askQuestion}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Ask
          </button>
          {response && (
            <div className="mt-4 p-3 bg-gray-100 rounded-lg shadow-md">
              <p className="text-gray-800">{response}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
