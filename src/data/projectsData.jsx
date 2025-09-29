// src/data/projectsData.js

const featuredProjects = [
    {
<<<<<<< HEAD
      title: "BLINK DB - High-Performance Key-Value Database",
      description: "Implemented a high-throughput key-value store with hashmap enabling **O(1) avg lookup time** and **LRU eviction policies**. Incorporated disk persistence, automatic recovery, and engineered thread-safe concurrency control to efficiently handle **1000+ simultaneous client connections** via an **epoll-driven TCP server**. Achieved **80K+ requests/sec** benchmark.",
      technologies: ["C++", "Multithreading", "Concurrency", "TCP/IP", "epoll", "LRU Cache", "DSA"],
      // *** ACTION REQUIRED: Replace [BLINK-DB-REPO] with your actual repo name ***
      github: "https://github.com/param3118/BLINK-DB-REPO", 
      link: "#", // Add live demo link if hosted
      features: ["O(1) Avg Lookup", "LRU Caching", "Disk Persistence", "Thread-Safe (1000+ clients)", "80K+ RPS"],
    },
    {
      title: "Self-Supervised Time-Series Fault Detection",
      description: "Developed a **TF-C inspired self-supervised framework** using **Transformer encoders** for cross-domain fault detection. Designed a time-frequency consistent model achieving **74% fault detection accuracy**, validated with One-Class SVM on benchmark FD-A and FD-B datasets.",
      technologies: ["PyTorch", "Transformers", "Anomaly Detection", "Time-Series", "Machine Learning"],
      // *** ACTION REQUIRED: Replace [SELF-SUPERVISED-FD-REPO] with your actual repo name ***
      github: "https://github.com/param3118/SELF-SUPERVISED-FD-REPO",
      link: "#",
      features: ["TF-C Framework", "Transformer Encoders", "Cross-Domain FD", "74% Accuracy", "One-Class SVM"],
    },
    
    {
      title: "Trie-based Autocomplete & Autocorrect Engine",
      description: "Engineered a **Trie-based autocomplete system** for 333K+ words, achieving ultra-low query latencies. Designed **frequency-ranked autocomplete** using a min-heap (Priority Queue) and developed **Levenshtein edit distance** autocorrect functionality.",
      technologies: ["C++", "Trie", "Priority Queue", "Levenshtein Distance", "Google Web Trillion Word Corpus"],
      // *** ACTION REQUIRED: Replace [TRIE-ENGINE-REPO] with your actual repo name ***
      github: "https://github.com/param3118/TRIE-ENGINE-REPO",
      link: "#",
      features: ["<1ms to ~15ms Latency", "333K+ words", "Min-Heap Ranking", "Levenshtein Autocorrect", "Efficient Prefix Search"],
    },
    {
      title: "CARTIFY: Full-Stack E-Commerce Website",
      description: "Built a full-stack e-commerce website using the **MERN stack** with secure **JWT authentication/authorization** (using bcrypt). Developed and integrated robust **RESTful APIs** and used MongoDB for product, user, and order management.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs", "CRUD"],
      // *** ACTION REQUIRED: Replace [CARTIFY-REPO] with your actual repo name ***
      github: "https://github.com/param3118/CARTIFY-E-COMMERCE-REPO", 
      // *** ACTION REQUIRED: Replace # with your live demo URL if hosted (e.g., https://param3118.github.io/cartify) ***
      link: "#", 
      features: ["MERN Stack", "JWT Authentication", "Bcrypt Hashing", "Product Catalog", "RESTful APIs"],
    },
     {
    title: "To-Do List Application (MERN)",
    technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    githubLink: "#YOUR_TODO_LIST_GITHUB_LINK_HERE", // <<< IMPORTANT: Replace with your actual GitHub link
    description: "A full-stack MERN To-Do List application featuring task management (CRUD), user authentication, and a responsive user interface.",
  },
    {
      title: "Multi-client Chat Server with FAQ Chatbot",
      description: "Developed a **multi-threaded TCP chat server** in C/C++ supporting 50+ clients, 100MB file transfer, authentication, and persistent chat logs. Integrated an **FAQ chatbot with GPT-2 prompts** for server-side query handling and automated responses.",
      technologies: ["C", "C++", "TCP/IP", "Socket Programming", "Multithreading", "GPT-2"],
      // *** ACTION REQUIRED: Replace [CHAT-SERVER-REPO] with your actual repo name ***
      github: "https://github.com/param3118/CHAT-SERVER-REPO",
      link: "#",
      features: ["TCP/IP", "Multi-threaded", "50+ Clients", "100MB File Transfer", "GPT-2 Integration"],
    },

    {
      title: "Fake News Detection using Classical ML",
      description: "Developed a fake news classifier on a COVID-19 social media dataset using **TF-IDF**. Compared Logistic Regression, SVM, KNN, and Neural Net models, achieving **91.4% accuracy** with cross-validation.",
      technologies: ["Python", "scikit-learn", "TF-IDF", "Logistic Regression", "SVM", "Neural Networks"],
      // *** ACTION REQUIRED: Replace [FAKE-NEWS-REPO] with your actual repo name ***
      github: "https://github.com/param3118/FAKE-NEWS-DETECTION-REPO",
      link: "#",
      features: ["91.4% Accuracy", "COVID-19 Dataset", "TF-IDF Vectorization", "Model Optimization"],
=======
      title: "E-Commerce Platform", // Replace with your project details
      description: "Full-stack MERN e-commerce site with Stripe & JWT.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      features: ["User Auth", "Product Catalog", "Cart", "Checkout"],
      github: "#YOUR_GITHUB_LINK_HERE", // Replace with actual link
      link: "#YOUR_LIVE_DEMO_LINK_HERE",   // Replace with actual link
    },
    {
      title: "NLP Sentiment Analyzer", // Replace with your project details
      description: "ML model predicting text sentiment (assignment).",
      technologies: ["Python", "TensorFlow", "NLTK", "Flask"],
      features: ["Text Preprocessing", "Model Training", "REST API"],
      github: "#YOUR_GITHUB_LINK_HERE", // Replace with actual link
      // link: null, // Example: if no live link
>>>>>>> bf84ca9cf3ba90c45026a43d3bc4880abcfaf760
    },
    {
      title: "Real-Time Chat App", // Replace with your project details
      description: "Web socket based chat application using MERN.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      features: ["Live Messaging", "User Status", "Rooms"],
      github: "#YOUR_GITHUB_LINK_HERE", // Replace with actual link
      link: "#YOUR_LIVE_DEMO_LINK_HERE",   // Replace with actual link
    },
<<<<<<< HEAD
     {
      title: "Amazon Price Change Monitor (Web Scraper)",
      description: "Automated Python scraper extracting data from **50+ Amazon pages**, storing results in SQLite. Implemented logic to detect **price changes** and preserve **complete historical trends**.",
      technologies: ["Python", "BeautifulSoup", "Selenium", "SQLite", "Data Engineering"],
      features: ["50+ Pages Scraped", "Price Change Detection", "Historical Data Preservation", "SQLite Storage"],
      github: "https://github.com/param3118/AMAZON-PRICE-MONITOR",
      link: "#",
    },
     {
      title: "B.Tech Final Project: Social Media Sentiment Analysis",
      description: "Built a multilingual sentiment analysis system using **BERT**, achieving **~84% accuracy** on real-world tweets. Developed an English-Hindi translation pipeline (**Meta's NLLB-200**) and applied **zero-shot classification** for misinformation detection.",
      technologies: ["BERT", "DeBERTa", "NLLB-200", "NLP", "PyTorch", "Transformers"],
      features: ["Multilingual BERT (~84% Acc)", "English-Hindi Translation (NLLB-200)", "Zero-shot Misinformation Detection"],
      // *** ACTION REQUIRED: Replace [MULTILINGUAL-NLP-REPO] with your actual repo name ***
      github: "https://github.com/param3118/MULTILINGUAL-NLP-REPO",
      link: "#", 
    },
  ];
  
  // Empty array placeholder for academic projects, relying on the AllProjectsArchive
  const academicProjects = [];
  
  export { featuredProjects };
=======
    {
      title: "COVID-19 Fake News Detection",
      technologies: ["Python", "scikit-learn", "PyTorch", "TF-IDF"],
      githubLink: "https://github.com/yourusername/covid-fake-news-detection",
      description: "Built and compared multiple ML models to classify social media posts as real or fake news using the Constraint@AAAI-2021 dataset. Included full pipeline: text preprocessing, TF-IDF vectorization, hyperparameter tuning, and model evaluation (accuracy, F1, confusion matrix)."
    },
    {
      title: "Neural Title Generation & NLP Pipeline",
      description:
        "Explored classic and modern NLP techniques—from Zipf’s Law and n-grams to transformer-based title generation using fine-tuned T5 and Flan-T5.",
      technologies: ["Python", "PyTorch", "T5", "Flan-T5", "NLTK"],
      github: "https://github.com/yourusername/nlp-title-generation", // or a combined repo link
    },
    
    
    // Add more of your featured projects here
  ];
  
  const academicProjects = [
    
    {
      id: "dataeng_webscraping",
      title: "Web Scraping & Data Engineering Assignments",
      type: "Data Engineering Assignment",
      technologies: ["Python", "BeautifulSoup", "Selenium", "SQLite3", "Requests", "Multiprocessing"],
      githubLink: "https://github.com/yourusername/webscraping-assignments",
      description: "Automated data collection from sports and e-commerce sites using BeautifulSoup, Selenium, and Requests. Stored structured and unstructured data in SQLite databases, performed analysis and visualization, and implemented multi-process scraping for speedup."
    },
    {
      title: "Database Design Project", // Replace with your project details
      description: "Designed and implemented a relational database schema.",
      technologies: ["SQL", "MySQL", "ERD"],
      github: "#YOUR_GITHUB_LINK_HERE", // Replace with actual link
    },
    {
      title: "Customer Segmentation using Clustering",
      description:
          "Implemented K-Means, Hierarchical Clustering, DBSCAN, and Gaussian Mixture Models on Mall Customer data to uncover spending patterns. Evaluated with Silhouette Score and PCA visualization.",
      technologies: ["K-Means", "DBSCAN", "GMM", "Hierarchical Clustering", "Python", "Sklearn", "Matplotlib"],
      github: "https://github.com/yourusername/customer-segmentation-clustering", // Replace with actual repo URL
  },
  {
    title: "Neural Title Generation & NLP Pipeline",
    description:
      "Explored classic and modern NLP techniques—from Zipf’s Law and n-grams to transformer-based title generation using fine-tuned T5 and Flan-T5.",
    technologies: ["Python", "PyTorch", "T5", "Flan-T5", "NLTK"],
    github: "https://github.com/yourusername/nlp-title-generation", // or a combined repo link
  },
  {
    title: "To-Do List Application (MERN)",
    technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    githubLink: "#YOUR_TODO_LIST_GITHUB_LINK_HERE", // <<< IMPORTANT: Replace with your actual GitHub link
    description: "A full-stack MERN To-Do List application featuring task management (CRUD), user authentication, and a responsive user interface.",
  },
  
    // Add more of your academic projects here
  ];
  
  export   { featuredProjects };
  
>>>>>>> bf84ca9cf3ba90c45026a43d3bc4880abcfaf760
