export const getTechIcon = (tech) => {
    const techIcons = {
      React: "react",
      Node: "node",
      MongoDB: "database",
      Python: "python",
      TensorFlow: "brain",
      "Machine Learning": "robot",
      JavaScript: "js",
      TypeScript: "code",
      Express: "server",
      NLP: "language",
      "Data Analysis": "chart-bar",
    };
    return techIcons[tech] || "code";
  };