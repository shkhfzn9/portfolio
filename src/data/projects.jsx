import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "AI Medical Chatbot",
    description:
      "This project is an AI-powered medical chatbot designed to assist users by interpreting symptoms, providing preliminary diagnostic suggestions, and offering relevant medical information—all through a simple, intuitive chat interface. The system leverages state-of-the-art LLMs (Gemini) integrated with a Retrieval-Augmented Generation (RAG) architecture for highly accurate, real-time responses. By incorporating Pinecone as the vector database and allowing ingestion of medical PDF documents (like clinical guides, symptom databases, and drug references), the chatbot can ground its answers in verified medical sources. It functions as a virtual assistant for patients, medical staff, or anyone seeking fast, trustworthy, and contextualized health-related answers—without replacing licensed medical professionals.",
    shortDescription:
      "AI-powered medical assistant for preliminary symptom analysis and health information.",
    technologies: [
      "Python",
      "Streamlit",
      "Gemini API",
      "LangChain",
      "RAG (Retrieval Augmented Generation)",
      "Pinecone Vector DB",
      "NLP",
    ],

    image:
      "https://readdy.ai/api/search-image?query=A%20modern%20medical%20AI%20chatbot%20interface%20with%20a%20clean%20design%2C%20showing%20a%20conversation%20between%20a%20patient%20and%20an%20AI%20doctor.%20The%20interface%20has%20a%20professional%20medical%20aesthetic%20with%20soft%20blue%20tones%20and%20health-related%20icons.%20The%20background%20is%20minimalist%20white%20with%20subtle%20medical%20symbols.&width=600&height=400&seq=1&orientation=landscape",
    githubLink: "https://github.com/shkhfzn9/MedicalChatBot",
    demoLink: "Not Available", // deployed link
    // youtubeLink: "https://www.youtube.com/embed/dQw4w9WgXcQ", // YouTube demo video
    YoutubeLink: "https://www.youtube.com/embed/-n53stb_30E",
    gallery: [
      "https://readdy.ai/api/search-image?query=Medical%20chatbot%20interface%20showing%20symptom%20analysis%20with%20anatomical%20diagrams%20and%20health%20metrics.%20Clean%20medical%20UI%20with%20diagnostic%20information%20displayed%20in%20an%20organized%20layout.%20Professional%20healthcare%20design%20with%20blue%20and%20white%20color%20scheme%20on%20a%20minimalist%20background.&width=600&height=400&seq=2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=AI%20medical%20dashboard%20showing%20patient%20health%20analytics%20and%20treatment%20recommendations.%20Professional%20medical%20interface%20with%20charts%2C%20graphs%20and%20health%20indicators.%20Clean%20design%20with%20medical%20icons%20and%20a%20blue%20and%20white%20color%20palette%20on%20a%20minimalist%20background.&width=600&height=400&seq=3&orientation=landscape",
    ],
    Key_Features: [
      "Real-time data processing and analysis with advanced monitoring capabilities",
      "Uses Google's Gemini LLM for accurate and intelligent medical responses",
      "RAG-based architecture using Pinecone for fast and relevant medical context retrieval",
      "Supports ingestion of PDF documents for fact-based medical conversations",
      "Strictly handles only health-related queries and rejects irrelevant topics",
      "State-of-the-art AI algorithms delivering highly accurate predictions and insights",
      "Intuitive user interface designed for optimal user experience and efficiency",
      "Interactive chat interface focused on medical assistance and guidance",
      "Provides verified health information based on trusted sources",
      "Good chat interface with smooth user interaction flow",
    ],

    Technical_Implementation: [
      // {
      //   Title: "Modern Architecture",
      //   Description:
      //     "Built using clean architecture principles and SOLID design patterns for maintainability.",
      // },
      {
        Title: "Data Management",
        Description:
          "Optimized data storage and retrieval using Pinecone vector database integrated with RAG for efficient semantic querying of medical documents.",
      },
      {
        Title: "Security",
        Description:
          "Implements strict input sanitization, domain-restricted interactions, and anonymous sessions to ensure privacy and safe handling of user inputs.",
      },
      {
        Title: "LLM Integration",
        Description:
          "Uses Google's Gemini for natural language understanding and reasoning, enabling conversational symptom analysis and medical recommendations.",
      },
      {
        Title: "Knowledge Grounding",
        Description:
          "Supports PDF ingestion and indexing for document-based contextual answers, enhancing credibility of medical information through RAG.",
      },
      // {
      //   Title: "Scalability",
      //   Description:
      //     "Designed for modular deployment, allowing expansion across new medical domains or user groups with minimal code changes.",
      // },
    ],
  },
  {
    id: 2,
    title: "AI Source Code Analyzer",
    description:
      "AI Source Code Analyzer is an intelligent developer tool designed to analyze and understand source code by leveraging Large Language Models (LLMs) and vector databases. It allows users to clone any public Git repository, parse the codebase, and store the code semantics into ChromaDB using embeddings. Once ingested, developers can ask natural language questions about the code — such as function purpose, class relationships, architectural patterns, or logic flow — and receive contextual, accurate answers from the LLM. This tool streamlines codebase onboarding, documentation, and understanding, making it ideal for developers, code reviewers, and engineering managers.",

    shortDescription:
      "ML-powered code analysis tool for bug detection and optimization suggestions.",
    technologies: [
      "Python",
      "Streamlit",
      "LangChain",
      "ChromaDB",
      "GitPython",
      "Gemini ",
    ],

    image:
      "https://readdy.ai/api/search-image?query=A%20professional%20code%20analysis%20interface%20showing%20source%20code%20with%20highlighted%20sections%20for%20bugs%20and%20optimizations.%20The%20UI%20features%20syntax%20highlighting%2C%20code%20metrics%2C%20and%20suggestion%20panels.%20Clean%2C%20developer-focused%20design%20with%20dark%20mode%20coding%20environment%20on%20a%20minimalist%20background.&width=600&height=400&seq=4&orientation=landscape",
    githubLink: "https://github.com/shkhfzn9/AiSourceCodeAnalyser",
    demoLink: "Not Available", // deployed link,
    // youtubeLink: "https://www.youtube.com/embed/dQw4w9WgXcQ", // YouTube demo video
    YoutubeLink: "https://www.youtube.com/embed/UHbrEjSiUPo",
    gallery: [
      "https://readdy.ai/api/search-image?query=Code%20optimization%20dashboard%20showing%20performance%20metrics%20and%20suggestions%20for%20improvement.%20Developer%20interface%20with%20code%20snippets%2C%20optimization%20graphs%20and%20technical%20indicators.%20Professional%20dark%20mode%20UI%20with%20syntax%20highlighting%20on%20a%20minimalist%20background.&width=600&height=400&seq=5&orientation=landscape",
      "https://readdy.ai/api/search-image?query=AI%20code%20review%20interface%20with%20bug%20detection%20visualization%20and%20code%20quality%20metrics.%20Developer%20dashboard%20showing%20code%20analysis%20results%20with%20technical%20charts%20and%20suggestions.%20Professional%20dark%20theme%20coding%20environment%20with%20colored%20syntax%20highlighting%20on%20a%20minimalist%20background.&width=600&height=400&seq=6&orientation=landscape",
    ],
    Key_Features: [
      "Clone and analyze public Git repositories for deep code understanding",
      "Ingest source code into ChromaDB with vector embeddings for efficient retrieval",
      "Ask natural language questions and receive precise answers from an LLM",
      "Supports multi-language codebases with structured parsing and tokenization",
      "Ideal for onboarding, refactoring, or auditing complex repositories",
      "Real-time interaction with the codebase through a chat-like interface",
      "Reduces dependency on outdated or missing documentation",
    ],
    Technical_Implementation: [
      // {
      //   Title: "Modern Architecture",
      //   Description:
      //     "Designed using clean architecture principles with clearly separated layers for ingestion, embedding, storage, and query handling, ensuring maintainability and scalability.",
      // },
      {
        Title: "LLM Integration",
        Description:
          "Leverages state-of-the-art Large Language Models (e.g., Gemini, GPT) to interpret and answer natural language questions about the source code contextually.",
      },
      {
        Title: "Vector Database (ChromaDB)",
        Description:
          "Code files are parsed, chunked, embedded, and stored in ChromaDB for efficient semantic search and retrieval using Retrieval-Augmented Generation (RAG).",
      },
      {
        Title: "Git Repository Ingestion",
        Description:
          "Supports cloning and scanning public GitHub repositories with automatic detection of programming languages, file structure, and documentation.",
      },
      {
        Title: "Modular Pipeline",
        Description:
          "Built with a modular ingestion-query-answering pipeline, allowing easy upgrades or replacements of components like the vector DB or LLM.",
      },
      // {
      //   Title: "Security",
      //   Description:
      //     "Implements sandboxed analysis to ensure cloned repositories are read-only and processed securely, minimizing the risk of executing malicious code.",
      // },
      {
        Title: "Extensibility",
        Description:
          "Designed to support multiple programming languages and frameworks with minimal configuration changes.",
      },
    ],
  },
  {
    id: 3,
    title: "AI EduQuiz",
    description:
      "AI EduQuiz is an adaptive learning platform that generates personalized quizzes and educational content based on individual learning patterns and knowledge gaps. The platform gamifies the learning experience with a dynamic leaderboard, rewards, and performance-based suggestions. Users can take quizzes, receive rankings, win rewards, and even contribute by adding their own quizzes or uploading PDFs which are automatically converted into quizzes using LLMs. An integrated chatbot assists users in navigating the platform, understanding concepts, and identifying areas for improvement. Built using React and Node.js with Firebase for real-time data handling and storage.",
    shortDescription:
      "Adaptive learning platform with AI-generated personalized quizzes.",
    technologies: [
      "React",
      "OpenAI LLM / Gemini",
      "Express.js",
      "HTML/CSS",
      "JavaScript",
      "Firebase",
      "eCharts (for analytics)",
    ],
    image:
      "https://readdy.ai/api/search-image?query=Educational%20quiz%20application%20interface%20showing%20interactive%20questions%20and%20learning%20progress%20tracking.%20The%20UI%20features%20colorful%20educational%20elements%2C%20progress%20charts%2C%20and%20knowledge%20assessment%20visuals.%20Modern%20e-learning%20design%20with%20engaging%20educational%20graphics%20on%20a%20minimalist%20background.&width=600&height=400&seq=7&orientation=landscape",
    githubLink: "https://github.com/shkhfzn9/QuizGamify",
    demoLink: "quiz-gamify.vercel.app", //
    YoutubeLink: "https://www.youtube.com/embed/TZKk2xEgywo",
    gallery: [
      "https://readdy.ai/api/search-image?query=Personalized%20learning%20dashboard%20showing%20student%20progress%20and%20adaptive%20quiz%20generation.%20Educational%20interface%20with%20learning%20analytics%2C%20knowledge%20gap%20visualization%20and%20quiz%20history.%20Modern%20e-learning%20design%20with%20colorful%20educational%20elements%20on%20a%20minimalist%20background.&width=600&height=400&seq=8&orientation=landscape",
      "https://readdy.ai/api/search-image?query=AI%20quiz%20generation%20interface%20showing%20question%20creation%20and%20learning%20path%20customization.%20Educational%20platform%20with%20content%20adaptation%20tools%20and%20learning%20analytics.%20Modern%20e-learning%20design%20with%20interactive%20educational%20elements%20on%20a%20minimalist%20background.&width=600&height=400&seq=9&orientation=landscape",
    ],
    Key_Features: [
      "Adaptive quiz generation based on user performance and knowledge gaps",
      "Gamified learning with real-time leaderboard and rewards",
      "AI chatbot to assist with concept clarification and quiz suggestions",
      "User-driven quiz creation via manual entry or LLM-powered PDF-to-quiz conversion",
      "Dynamic feedback system to suggest areas of improvement",
      "Multiplayer leaderboard to compare scores with peers in real-time",
      "Mobile-friendly UI with a clean, responsive design",
      "Secure login  and performance analytics",
    ],
    Technical_Implementation: [
      {
        Title: "Gamified Learning System",
        Description:
          "Implements point-based ranking and reward mechanisms tied to quiz performance, updating a dynamic leaderboard stored in Firebase.",
      },
      {
        Title: "LLM-Powered PDF to Quiz",
        Description:
          "Uses large language models to extract meaningful content from uploaded PDFs and generate quizzes tailored to the extracted data.",
      },
      {
        Title: "Chatbot Assistant",
        Description:
          "An AI chatbot integrated into the platform guides users through quiz selection, answers concept-related questions, and suggests improvement areas based on user history.",
      },
      {
        Title: "Custom Quiz Builder",
        Description:
          "Users can manually add quizzes using a user-friendly interface with support for multiple question types and categories.",
      },
      {
        Title: "Real-Time Ranking",
        Description:
          "Firebase enables real-time data updates for leaderboards, ensuring scores and ranks are always current.",
      },
      {
        Title: "Progress Tracking",
        Description:
          "Stores user performance data to personalize quiz recommendations and show long-term progress trends.",
      },
    ],
  },
  {
    id: 4,
    title: "AI Stock Assistant",
    description:
      "AI Stock Assistant is a simple yet powerful financial tool that leverages AI to analyze market trends, interpret company financials, and provide personalized investment insights. Users can search for a specific company, and the app fetches real-time financial data—such as balance sheets, cash flow, and P&L statements—from an external API. The integrated Gemini-powered chatbot enables natural language interaction, allowing users to ask investment-related questions and receive AI-generated responses contextualized with the retrieved financial data. The tool supports retail investors, students, and finance enthusiasts in making smarter, data-driven decisions.",

    shortDescription:
      "AI-powered financial assistant for stock analysis and investment recommendations.",
    technologies: [
      "JavaScript",
      "React",
      "Node.js",
      "Gemini API (LLM)",
      "Financial Data API ",
      "Tailwind CSS ",
      "Express.js ",
    ],
    image:
      "https://readdy.ai/api/search-image?query=Financial%20dashboard%20showing%20stock%20market%20analysis%20with%20AI%20predictions%20and%20investment%20recommendations.%20The%20interface%20features%20stock%20charts%2C%20trend%20analysis%2C%20and%20financial%20metrics.%20Professional%20financial%20design%20with%20blue%20and%20green%20elements%20indicating%20market%20movements%20on%20a%20minimalist%20background.&width=600&height=400&seq=10&orientation=landscape",
    githubLink: "https://github.com/shkhfzn9/AiEquityResearch",
    demoLink: "https://ai-stock-assistant.demo.com",
    YoutubeLink: "https://www.youtube.com/embed/6F5gd2hLiFU",
    gallery: [
      "https://readdy.ai/api/search-image?query=Stock%20prediction%20interface%20showing%20market%20trend%20analysis%20and%20investment%20opportunity%20visualization.%20Financial%20dashboard%20with%20stock%20charts%2C%20prediction%20models%20and%20risk%20assessment%20tools.%20Professional%20financial%20design%20with%20data%20visualization%20elements%20on%20a%20minimalist%20background.&width=600&height=400&seq=11&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Portfolio%20management%20dashboard%20showing%20AI-recommended%20investments%20and%20performance%20tracking.%20Financial%20interface%20with%20asset%20allocation%20charts%20and%20investment%20analytics.%20Professional%20financial%20design%20with%20data%20visualization%20and%20stock%20trend%20indicators%20on%20a%20minimalist%20background.&width=600&height=400&seq=12&orientation=landscape",
    ],
    Key_Features: [
      "Fetches company financials (P&L, Balance Sheet, Cash Flow) from external APIs in real-time",
      "Integrates Gemini LLM chatbot for interactive financial question-answering",
      "AI-generated insights based on user queries and real-time financial data",
      "User-friendly search to explore companies by name or symbol",
      "Simplifies complex financial data into natural language explanations",
      "Helps users assess company health, trends, and investment suitability",
      "Lightweight and fast application focused on usability",
      "Personalized responses considering user investment preferences and risk profile",
    ],
    Technical_Implementation: [
      {
        Title: "Real-Time Financial Data Integration",
        Description:
          "Utilizes an external stock market/financial API to fetch live financial statements including balance sheet, P&L, and cash flow for any searched company.",
      },
      {
        Title: "LLM-Powered Assistant",
        Description:
          "Gemini chatbot is used to interpret user questions and generate contextual financial responses based on the retrieved data.",
      },
      {
        Title: "Query-Aware Chat Interface",
        Description:
          "Natural language interface allows users to ask things like 'Is this company profitable?' or 'How has their revenue changed over time?'",
      },
      {
        Title: "Clean Search System",
        Description:
          "Search field enables users to explore companies by ticker or name and auto-fetches structured financials for analysis.",
      },
      {
        Title: "Stateless Design",
        Description:
          "Focuses on frontend interactions with minimal backend complexity, allowing for easier deployment and scale.",
      },
    ],
  },
];
export default projects;
