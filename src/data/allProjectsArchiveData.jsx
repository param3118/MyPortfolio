// src/data/allProjectsArchiveData.js

export const allProjectsList = [
<<<<<<< HEAD
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
=======
    // --- M.Tech & Advanced Projects ---
    {
      id: "mtech001",
      name: "Advanced Sentiment Analysis with Transformers",
      type: "M.Tech Course Project",
      technologies: ["Python", "PyTorch", "Hugging Face Transformers", "NLP"],
      githubLink: "https://github.com/yourusername/adv-sentiment-transformer",
      description: "Fine-tuned a BERT-based model for nuanced sentiment classification on a custom dataset.",
    },
    {
      id: "mtech002",
      name: "In-Memory File System (MemFS)",
      type: "M.Tech Course Project (OS)",
      technologies: ["C++17", "Data Structures", "System Calls API"],
      githubLink: "https://github.com/yourusername/memfs-iitkgp",
      description: "Developed a thread-safe in-memory file system supporting CRUD operations and directory structures.",
    },
    {
      id: "assign004",
      name: "Foundational NLP Tasks & Text Classification",
      type: "M.Tech NLP Assignment (Task A)",
      technologies: ["Python", "NLTK", "Scikit-learn", "Matplotlib"],
      githubLink: "https://github.com/yourusername/nlp-foundation-tasks",
      description: "Implemented Zipf’s Law, n-gram analysis, stopword removal, and text classification using simple neural networks on a custom dataset.",
    },
    {
      id: "assign005",
      name: "Neural Title Generation with Transformers & RNNs",
      type: "M.Tech NLP Assignment (Tasks B–C)",
      technologies: ["PyTorch", "Hugging Face", "GloVe", "Flan-T5", "T5"],
      githubLink: "https://github.com/yourusername/nlp-title-generation",
      description: "Developed Seq2Seq models using RNNs with attention and GloVe embeddings. Fine-tuned T5 and Flan-T5 for article title generation using beam search and prompt engineering.",
    },
    {
      id: "mtech_blinkdb_001", // Unique ID for the project
      name: "BLINK DB - High-Performance In-Memory Key-Value DB",
      type: "M.Tech Course Project (Design Lab)",
      technologies: ["C/C++", "Linux", "epoll", "TCP Sockets", "RESP-2", "Doxygen"],
      githubLink: "#YOUR_BLINKDB_GITHUB_LINK_HERE", // <<< IMPORTANT: Replace with your actual GitHub link
      description: "Built a Redis-inspired in-memory key-value DB with a custom storage engine, TCP server (epoll), and RESP-2 protocol for benchmarking.",
    },
    // END: BLINK DB project added
  
    // --- Existing M.Tech & Advanced Projects ---
    {
      id: "mtech00",
      name: "Advanced Sentiment Analysis with Transformers",
      type: "M.Tech Course Project",
      technologies: ["Python", "PyTorch", "Hugging Face Transformers", "NLP"],
      githubLink: "https://github.com/yourusername/adv-sentiment-transformer",
      description: "Fine-tuned a BERT-based model for nuanced sentiment classification on a custom dataset.",
    },
    {
      id: "mtech_blinkdb_001", // Unique ID for the project
      name: "BLINK DB - High-Performance In-Memory Key-Value DB",
      type: "M.Tech Course Project (Design Lab)",
      technologies: ["C/C++", "Linux", "epoll", "TCP Sockets", "RESP-2", "Doxygen"],
      githubLink: "#YOUR_BLINKDB_GITHUB_LINK_HERE", // <<< IMPORTANT: Replace with your actual GitHub link
      description: "Built a Redis-inspired in-memory key-value DB with a custom storage engine, TCP server (epoll), and RESP-2 protocol for benchmarking.",
    },
    
    // --- B.Tech & MERN Projects ---
    {
      id: "btech001",
      name: "E-Commerce Platform (MERN)",
      type: "Self-made (B.Tech Capstone)",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe API"],
      githubLink: "https://github.com/yourusername/mern-ecommerce",
      description: "Full-stack e-commerce website with user authentication, product management, and payment gateway.",
    },
    {
      id: "btech002",
      name: "Real-Time Collaborative Whiteboard",
      type: "Self-made",
      technologies: ["React", "Socket.io", "Node.js", "Canvas API"],
      githubLink: "https://github.com/yourusername/collab-whiteboard",
      description: "A web application allowing multiple users to draw simultaneously on a shared canvas.",
    },
    // --- Other Assignments & Smaller Projects ---
    {
      id: "assign001",
      name: "Decision Tree from Scratch",
      type: "B.Tech ML Assignment",
      technologies: ["Python", "NumPy", "Pandas"],
      githubLink: "https://github.com/yourusername/decision-tree-scratch",
      description: "Implemented the ID3 decision tree algorithm without using ML libraries.",
    },
    {
      id: "assign002",
      name: "K-Means Clustering for Customer Segmentation",
      type: "B.Tech ML Assignment",
      technologies: ["Python", "Scikit-learn", "Matplotlib"],
      githubLink: "https://github.com/yourusername/kmeans-customers",
      description: "Applied K-Means to segment customers based on purchasing behavior.",
    },
    {
      id: "assign003",
      name: "CPU Scheduling Algorithms",
      type: "B.Tech OS Assignment",
      technologies: ["C++"],
      githubLink: "https://github.com/yourusername/cpu-scheduler",
      description: "Implementation and comparison of FCFS, SJF, and Round Robin scheduling.",
    },
    {
      id: "ml_assign_covid_fake_news",
      name: "COVID-19 Fake News Detection",
      type: "ML Assignment (NLP, Classification)",
      technologies: ["Python", "scikit-learn", "PyTorch", "TF-IDF"],
      githubLink: "https://github.com/yourusername/covid-fake-news-detection",
      description: "Built and compared multiple ML models to classify social media posts as real or fake news using the Constraint@AAAI-2021 dataset. Included full pipeline: text preprocessing, TF-IDF vectorization, hyperparameter tuning, and model evaluation (accuracy, F1, confusion matrix)."
    },
    {
      id: "dataeng_webscraping",
      name: "Web Scraping & Data Engineering Assignments",
      type: "Data Engineering Assignment",
      technologies: ["Python", "BeautifulSoup", "Selenium", "SQLite3", "Requests", "Multiprocessing"],
      githubLink: "https://github.com/yourusername/webscraping-assignments",
      description: "Automated data collection from sports and e-commerce sites using BeautifulSoup, Selenium, and Requests. Stored structured and unstructured data in SQLite databases, performed analysis and visualization, and implemented multi-process scraping for speedup."
    },
    {
      id: "mern_todo_list_app_001", // Unique ID for the project
      name: "To-Do List Application (MERN)",
      type: "Self-made Project",
      technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
      githubLink: "#YOUR_TODO_LIST_GITHUB_LINK_HERE", // <<< IMPORTANT: Replace with your actual GitHub link
      description: "A full-stack MERN To-Do List application featuring task management (CRUD), user authentication, and a responsive user interface.",
    },
    
    // Add ALL your other assignments and minor projects here...
  ];
  
>>>>>>> bf84ca9cf3ba90c45026a43d3bc4880abcfaf760
