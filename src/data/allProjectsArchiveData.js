// src/data/allProjectsArchiveData.js

export const allProjectsList = [
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
  