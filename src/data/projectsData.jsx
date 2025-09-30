// src/data/projectsData.js

const featuredProjects = [
    {
      title: "BLINK DB - High-Performance Key-Value Database",
      description: "Implemented a high-throughput key-value store with hashmap enabling **O(1) avg lookup time** and **LRU eviction policies**. Incorporated disk persistence, automatic recovery, and engineered thread-safe concurrency control to efficiently handle **1000+ simultaneous client connections** via an **epoll-driven TCP server**. Achieved **80K+ requests/sec** benchmark.",
      technologies: ["C++", "Multithreading", "Concurrency", "TCP/IP", "epoll", "LRU Cache", "DSA"],
      // *** ACTION REQUIRED: Replace [BLINK-DB-REPO] with your actual repo name ***
      github: "https://github.com/param3118/BLINK-DB---High-Performance-Key-Value-Database", 
      // link: "#", // Add live demo link if hosted
      features: ["O(1) Avg Lookup", "LRU Caching", "Disk Persistence", "Thread-Safe (1000+ clients)", "80K+ RPS"],
    },    
    {
      title: "Trie-based Autocomplete & Autocorrect Engine",
      description: "Engineered a **Trie-based autocomplete system** for 333K+ words, achieving ultra-low query latencies. Designed **frequency-ranked autocomplete** using a min-heap (Priority Queue) and developed **Levenshtein edit distance** autocorrect functionality.",
      technologies: ["C++", "Trie", "Priority Queue", "Levenshtein Distance", "Google Web Trillion Word Corpus"],
      // *** ACTION REQUIRED: Replace [TRIE-ENGINE-REPO] with your actual repo name ***
      github: "https://github.com/param3118/Trie-based-Autocomplete-and-Autocorrect-Engine",
      // link: "#",
      features: ["<1ms to ~15ms Latency", "333K+ words", "Min-Heap Ranking", "Levenshtein Autocorrect", "Efficient Prefix Search"],
    },
    {
      title: "KapdaBazaar: Full-Stack E-Commerce Website",
      description: "Built a full-stack e-commerce website using the **MERN stack** with secure **JWT authentication/authorization** (using bcrypt). Developed and integrated robust **RESTful APIs** and used MongoDB for product, user, and order management.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs", "CRUD"],
      // *** ACTION REQUIRED: Replace [CARTIFY-REPO] with your actual repo name ***
      github: "https://github.com/param3118/KapdaBazaar", 
      // *** ACTION REQUIRED: Replace # with your live demo URL if hosted (e.g., https://param3118.github.io/cartify) ***
      link: "kapdaa-bazaarr.vercel.app/", 
      features: ["MERN Stack", "JWT Authentication", "Bcrypt Hashing", "Product Catalog", "RESTful APIs"],
    },
    {
  title: "DSA Tracker (Sheeter)",
  description: "A static, browser-based **DSA progress tracker** to manage and monitor over **10,000 categorized problems**. Designed for speed, offline usage, and complete client-side storage with no backend required.",
  technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
  features: [
    "Categorized Problem List (10,000+ problems)",
    "Track Status: Not Started, In Progress, Solved, Review",
    "Personal Notes Section (saved locally)",
    "Search & Filter by keyword or status",
    "Responsive design for desktop & mobile"
  ],
  github: "https://github.com/param3118/SHEETER",
  link: "https://param3118.github.io/SHEETER/"
},

     {
    title: "To-Do List Application (MERN)",
    technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/param3118/TO-DO-LIST", // <<< IMPORTANT: Replace with your actual GitHub link
    description: "A full-stack MERN To-Do List application featuring task management (CRUD), user authentication, and a responsive user interface.",
  },
    {
      title: "Multi-client Chat Server with FAQ Chatbot",
      description: "Developed a **multi-threaded TCP chat server** in C/C++ supporting 50+ clients, 100MB file transfer, authentication, and persistent chat logs. Integrated an **FAQ chatbot with GPT-2 prompts** for server-side query handling and automated responses.",
      technologies: ["C", "C++", "TCP/IP", "Socket Programming", "Multithreading", "GPT-2"],
      // *** ACTION REQUIRED: Replace [CHAT-SERVER-REPO] with your actual repo name ***
      github: "https://github.com/param3118/CHAT-SERVER-REPO",
      // link: "#",
      features: ["TCP/IP", "Multi-threaded", "50+ Clients", "100MB File Transfer", "GPT-2 Integration"],
    },

    {
      title: "Fake News Detection using Classical ML",
      description: "Developed a fake news classifier on a COVID-19 social media dataset using **TF-IDF**. Compared Logistic Regression, SVM, KNN, and Neural Net models, achieving **91.4% accuracy** with cross-validation.",
      technologies: ["Python", "scikit-learn", "TF-IDF", "Logistic Regression", "SVM", "Neural Networks"],
      // *** ACTION REQUIRED: Replace [FAKE-NEWS-REPO] with your actual repo name ***
      github: "https://github.com/param3118/COVID-FAKE-NEWS-DETECTION",
      // link: "#",
      features: ["91.4% Accuracy", "COVID-19 Dataset", "TF-IDF Vectorization", "Model Optimization"],
    },
    {
      title: "Real-Time Chat App", // Replace with your project details
      description: "Web socket based chat application using MERN.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      features: ["Live Messaging", "User Status", "Rooms"],
      github: "https://github.com/ShakirFarhan/Realtime-Chat", // Replace with actual link
      link: "talk-time.netlify.app",   // Replace with actual link
    },
     {
      title: "Amazon Price Change Monitor (Web Scraper)",
      description: "Automated Python scraper extracting data from **50+ Amazon pages**, storing results in SQLite. Implemented logic to detect **price changes** and preserve **complete historical trends**.",
      technologies: ["Python", "BeautifulSoup", "Selenium", "SQLite", "Data Engineering"],
      features: ["50+ Pages Scraped", "Price Change Detection", "Historical Data Preservation", "SQLite Storage"],
      github: "https://github.com/param3118/amazon-price-tracker",
      // link: "#",
    },
     {
      title: "B.Tech Final Project: Social Media Sentiment Analysis",
      description: "Built a multilingual sentiment analysis system using **BERT**, achieving **~84% accuracy** on real-world tweets. Developed an English-Hindi translation pipeline (**Meta's NLLB-200**) and applied **zero-shot classification** for misinformation detection.",
      technologies: ["BERT", "DeBERTa", "NLLB-200", "NLP", "PyTorch", "Transformers"],
      features: ["Multilingual BERT (~84% Acc)", "English-Hindi Translation (NLLB-200)", "Zero-shot Misinformation Detection"],
      // *** ACTION REQUIRED: Replace [MULTILINGUAL-NLP-REPO] with your actual repo name ***
      github: "https://github.com/param3118/Social-Media-Sentiment-Analysis",
      // link: "#", 
    },
  ];
  
  // Empty array placeholder for academic projects, relying on the AllProjectsArchive
  const academicProjects = [];
  
  export { featuredProjects };

