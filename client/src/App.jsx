import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const runAgent = async () => {
    if (!message.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("http://localhost:5000/api/agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await res.json();

      setResponse(data.result);
    } catch (error) {
      console.error(error);
      setResponse("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>🤖 AI Browser Agent</h1>

      <input
        type="text"
        placeholder="Tell the agent what to do..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={runAgent} disabled={loading}>
        {loading ? "Running..." : "Run Agent"}
      </button>

      {response && (
        <div>
          <h3>Agent Response</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default App;
