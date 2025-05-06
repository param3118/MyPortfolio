// src/data/projectsData.js

const featuredProjects = [
    {
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
    },
    {
      title: "Real-Time Chat App", // Replace with your project details
      description: "Web socket based chat application using MERN.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      features: ["Live Messaging", "User Status", "Rooms"],
      github: "#YOUR_GITHUB_LINK_HERE", // Replace with actual link
      link: "#YOUR_LIVE_DEMO_LINK_HERE",   // Replace with actual link
    },
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
  
  export { featuredProjects, academicProjects };
  