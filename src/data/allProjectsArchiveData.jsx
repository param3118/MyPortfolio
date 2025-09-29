// src/data/allProjectsArchiveData.js

export const allProjectsList = [
    // --- Featured (Core) Projects for Archive ---
    {
      id: "mtech003",
      name: "BLINK DB - High-Performance Key-Value Database",
      type: "M.Tech Course Project (Design Lab)",
      technologies: ["C++", "Multithreading", "TCP/IP", "epoll", "LRU Cache", "DSA"],
      githubLink: "https://github.com/param3118/BLINK-DB-REPO", // Placeholder
      description: "Implemented a high-throughput key-value store with LRU policies and disk persistence. Engineered thread-safe concurrency to handle 1000+ simultaneous clients, achieving 80K+ requests/sec.",
    },
    
    {
      id: "mtech004",
      name: "Self-Supervised Time-Series Fault Detection",
      type: "M.Tech Project / Internship",
      technologies: ["PyTorch", "Transformers", "Anomaly Detection", "Time-Series", "One-Class SVM"],
      githubLink: "https://github.com/param3118/SELF-SUPERVISED-FD-REPO", // Placeholder
      description: "Developed a TF-C inspired framework using Transformer encoders for cross-domain fault detection, achieving 74% accuracy.",
    },
    {
      id: "mtech005",
      name: "Trie-based Autocomplete & Autocorrect Engine",
      type: "C++ Project",
      technologies: ["C++", "Trie", "Priority Queue", "Levenshtein Distance", "DSA"],
      githubLink: "https://github.com/param3118/TRIE-ENGINE-REPO", // Placeholder
      description: "Engineered a high-speed Trie-based C++ engine for 333K+ words with frequency-ranked autocomplete and Levenshtein edit distance autocorrect.",
    },
    {
      id: "mtech006",
      name: "Multi-lingual Tweet Sentiment Analysis & Translation",
      type: "M.Tech Course Project",
      technologies: ["BERT", "DeBERTa", "NLLB-200", "NLP", "Transformers"],
      githubLink: "https://github.com/param3118/MULTILINGUAL-NLP-REPO", // Placeholder
      description: "Built a BERT-based multilingual sentiment analysis system (~84% accuracy) and used DeBERTa with NLI for misinformation detection.",
    },
    {
      id: "mtech007",
      name: "Multi-client TCP Chat Server with FAQ Bot",
      type: "C/C++ Systems Project",
      technologies: ["C", "C++", "TCP/IP", "Socket Programming", "Multithreading", "GPT-2"],
      githubLink: "https://github.com/param3118/CHAT-SERVER-REPO", // Placeholder
      description: "Developed a multi-threaded TCP chat server supporting 50+ clients, file transfer, authentication, and an integrated FAQ chatbot.",
    },
    {
      id: "mtech008",
      name: "Amazon Price Change Monitor (Web Scraper)",
      type: "Data Engineering / Automation",
      technologies: ["Python", "BeautifulSoup", "Selenium", "SQLite", "Web Scraping"],
      githubLink: "https://github.com/param3118/AMAZON-SCRAPER-REPO", // Placeholder
      description: "Developed an automated Python scraper to extract Amazon product data, detect price changes, and maintain complete historical price trends in SQLite.",
    },
    {
      id: "btech001_final", 
      name: "Social Media Sentiment Analysis",
      type: "B.Tech Final Project (NLP/ML)",
      technologies: ["NLP","Naive Bayes","ML Techniques"],
      githubLink: "https://github.com/param3118/MULTILINGUAL-NLP-REPO",
      description: "B.Tech Final Project | Built a multilingual sentiment analysis system (~84% accuracy on real-world tweets) and used NLI with DeBERTa for misinformation detection.",
    },
        {
      id: "ml001",
      name: "COVID-19 Fake News Detection (ML)",
      type: "ML Assignment (Classification)",
      technologies: ["Python", "scikit-learn", "TF-IDF", "SVM", "Logistic Regression", "Neural Networks"],
      githubLink: "https://github.com/param3118/COVID-FAKE-NEWS-DETECTION",
      description: "Developed a fake news classifier on a COVID-19 social media dataset, achieving 91.4% accuracy by comparing and optimizing multiple classical ML algorithms.",
    },
     {
      id: "dataeng001",
      name: "Amazon Price Change Monitor (Web Scraper)",
      type: "Data Engineering / Automation",
      technologies: ["Python", "BeautifulSoup", "Selenium", "SQLite", "Data Engineering"],
      githubLink: "https://github.com/param3118/AMAZON-PRICE-MONITOR",
      description: "Automated Python scraper extracting data from 50+ Amazon pages, detecting price changes, and maintaining complete historical trends in SQLite.",
    },
    // --- Web/MERN Projects (Consolidated) ---
    {
      id: "web002_cartify",
      name: "CARTIFY: Full-Stack E-Commerce Website (MERN)",
      type: "Self-made (MERN Stack)",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Tailwind CSS"],
      githubLink: "https://github.com/param3118/CARTIFY-E-COMMERCE-REPO",
      description: "Full-stack e-commerce site with secure **JWT authentication**, RESTful APIs, and MongoDB for product and order management. (Includes features often seen in modern e-commerce projects.)",
    },
    {
      id: "web003_todo",
      name: "To-Do List Application (MERN)",
      type: "Self-made (MERN Stack)",
      technologies: ["React", "Node.js", "Express", "MongoDB", "CRUD", "Context API"],
      githubLink: "https://github.com/param3118/MERN-TODO-LIST-APP",
      description: "A foundational full-stack MERN To-Do List application featuring CRUD operations, user authentication, and a clean, responsive user interface.",
    },
    {
      id: "web004_realtime",
      name: "Real-Time Chat Application (MERN/Socket.io)",
      type: "Self-made (WebSockets)",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "WebSockets"],
      githubLink: "https://github.com/param3118/REALTIME-CHAT-APP-MERN",
      description: "A real-time, bi-directional chat application using Socket.io for instant messaging, featuring user status, rooms, and a responsive interface.",
    },
    {
      id: "web001_hotel",
      name: "Hotel Reservation System (MERN)",
      type: "Full-Stack Web Development",
      technologies: ["MERN Stack", "React", "JWT", "Context API", "Custom Hooks"],
      githubLink: "https://github.com/param3118/HOTEL-RESERVATION-REPO", 
      description: "Developed a full-stack hotel reservation system with JWT auth, Context API state management, and a responsive calendar for seamless booking.",
    },

    // --- Other Academic/ML Projects from Resume ---
    // {
    //   id: "ml001",
    //   name: "Fake News Detection using Classical ML Models",
    //   type: "ML Assignment (Classification)",
    //   technologies: ["Python", "scikit-learn", "TF-IDF", "SVM", "Logistic Regression"],
    //   githubLink: "https://github.com/param3118/FAKE-NEWS-DETECTION-REPO", // Placeholder
    //   description: "Developed a fake news classifier on a COVID-19 social media dataset, achieving 91.4% accuracy by comparing and optimizing multiple classical ML algorithms.",
    // },
    {
      id: "ml002",
      name: "Clustering Acoustic Patterns of Frog Species",
      type: "ML Assignment (Clustering/PCA)",
      technologies: ["Python", "K-Means", "PCA", "Feature Engineering"],
      githubLink: "https://github.com/param3118/FROG-CLUSTERING-REPO", // Placeholder
      description: "Used feature engineering (22 features expanded to 275) and PCA (reduced to 18 key features) for K-Means clustering, achieving a silhouette score of 0.2195 for k=7.",
    },
    {
      id: "ml003",
      name: "Diabetes Prediction Model",
      type: "ML Assignment (Classification)",
      technologies: ["Python", "Decision Tree", "Scikit-learn"],
      githubLink: "https://github.com/param3118/DIABETES-PREDICTION-REPO", // Placeholder
      description: "Implemented a decision tree model to predict diabetes, achieving 75.97% accuracy on a noiseless dataset and 60.54% on a noisy dataset.",
    },
    {
      id: "ml004",
      name: "Text Summarization Project (PageRank)",
      type: "NLP / ML Assignment",
      technologies: ["Python", "NLTK", "Scikit-learn", "PageRank Algorithm"],
      githubLink: "https://github.com/param3118/TEXT-SUMMARIZATION-REPO", // Placeholder
      description: "Built a text summarization system using NLTK and Scikit-learn. Applied the PageRank algorithm to rank sentences and selected the top K sentences for the final extractive summary.",
    },
    {
      id: "core001",
      name: "CPU Scheduling Algorithms Simulation",
      type: "B.Tech OS Assignment",
      technologies: ["C++", "OS Concepts", "Algorithms"],
      githubLink: "https://github.com/param3118/CPU-SCHEDULING-ALGORITHMS",
      description: "Implementation and comparative analysis of classic CPU scheduling algorithms: FCFS, SJF (Preemptive/Non-Preemptive), and Round Robin. Focus on maximizing throughput and minimizing waiting time.",
    },
  
    // Add more of your other assignments here if you have more...
];
