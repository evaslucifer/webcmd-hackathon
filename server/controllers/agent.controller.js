import { runAgent } from "../services/agent.service.js";

const handleAgentRequest = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        error: "Message is required",
      });
    }

    const result = await runAgent(message);

    res.json(result);
  } catch (error) {
    console.error("Agent error:", error);

    res.status(500).json({
      success: false,
      error: "Something went wrong while running the agent",
    });
  }
};

export { handleAgentRequest };
