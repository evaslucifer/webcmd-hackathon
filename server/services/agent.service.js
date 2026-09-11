const runAgent = async (message) => {
  console.log("Agent received:", message);

  return {
    success: true,
    status: "completed",
    message: "Agent completed the task.",
    data: {
      request: message,
    },
    steps: [
      {
        action: "understand",
        status: "completed",
        message: "Understood user request",
      },
      {
        action: "execute",
        status: "completed",
        message: "Executed agent workflow",
      },
      {
        action: "result",
        status: "completed",
        message: "Generated result",
      },
    ],
  };
};

export { runAgent };
