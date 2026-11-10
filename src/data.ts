export const data = {
  personal: {
    name: "KIRITHIKA R S",
    role: "Full Stack Developer",
    tagline: "Full Stack Developer building secure REST APIs and responsive interfaces with Java, Spring Boot, and React.js.",
    email: "kirithikakirithika4@gmail.com",
    phone: "+918508608612",
    github: "https://github.com/kirithikakirithika",
    linkedin: "https://www.linkedin.com/in/kirithika-kirithika-653064260/",
    location: "Dharmapuri, Tamil Nadu, India",
    summary: "Computer Science graduate and Full Stack Developer with hands-on experience in Java, Spring Boot, REST APIs, Hibernate/JPA, MySQL, React.js, and JavaScript. Experienced in developing full-stack applications, designing RESTful APIs, implementing Spring Security, JWT authentication, and role-based access control, and testing web applications. Currently working as a Full Stack Developer Intern at Scalabox Technologies, contributing to CRM and billing applications, application testing, and UI design using Figma. Seeking an entry-level Java Full Stack Developer opportunity.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop", // Fallback image
    sidebarImage: "./sidebar-profile.jpg", // Image for the sidebar
    homeImage: "./profile.jpg",    // Image for the home page (you can change this to another file)
    resumeUrl: "kirithika.pdf",
  },
  skills: {
    languages: ["Java", "JavaScript", "SQL", "Python", "HTML5", "CSS3"],
    backend: ["Spring Boot", "REST APIs", "Hibernate", "JPA", "JDBC", "Servlets", "Flask"],
    frontend: ["React.js", "HTML5", "CSS3", "JavaScript"],
    database: ["MySQL", "PostgreSQL"],
    security: ["Spring Security", "JWT Authentication", "Role-Based Access Control (RBAC)"],
    uiuxTesting: ["Figma", "UI Design", "Web Application Testing", "Postman"],
    tools: ["Git", "VS Code", "Eclipse", "pgAdmin"]
  },
  experience: [
    {
      company: "Scalabox Technologies, Dharmapuri",
      role: "Full Stack Developer Intern",
      period: "2026 – Present",
      tasks: [
        "Contributing to the development and testing of CRM and billing applications, supporting application workflows and feature validation.",
        "Designed the Leads Management page for the CRM application using Figma, focusing on structured information hierarchy, usability, and user-friendly interface design.",
        "Performed web application testing for CRM and billing modules, identifying functional issues and validating application workflows before delivery."
      ]
    },
    {
      company: "Emglitz Technologies, Salem",
      role: "Java Developer Intern",
      period: "2024",
      tasks: [
        "Developed Core Java applications including a functional ATM system with JDBC-based transaction processing, account balance management, and secure PIN validation."
      ]
    },
    {
      company: "Imagecon, Salem",
      role: "Python Developer Intern",
      period: "2023",
      tasks: [
        "Developed Python-based mini-projects and automation scripts, strengthening Python programming, application development, and problem-solving skills."
      ]
    }
  ],
  projects: [
    {
      title: "Full-Stack Banking System",
      role: "Full Stack Developer",
      tags: ["Backend", "UI/UX", "Database", "Security"],
      highlights: [
        "Developed a full-stack banking application using Spring Boot and React.js with account creation, deposits, withdrawals, fund transfers, and balance inquiry.",
        "Designed and tested 15+ RESTful APIs for account management and transaction processing; validated APIs using Postman.",
        "Implemented Spring Security, JWT authentication, and role-based access control for Admin and Customer users.",
        "Integrated MySQL with Hibernate/JPA for persistent storage of customer records and transaction history."
      ],
      github: "",
      live: ""
    },
    {
      title: "Smart Stroke Risk Predictor",
      role: "ML Web App Developer",
      tags: ["Machine Learning", "Data Prep", "Flask API", "Model Evaluation"],
      highlights: [
        "Developed a machine-learning web application using Random Forest and Logistic Regression to predict stroke risk from clinical patient data.",
        "Performed data preprocessing, missing-value handling, SMOTE-based class balancing, and feature scaling; evaluated models using Accuracy, Precision, Recall, F1-Score, and AUC-ROC.",
        "Deployed the selected machine-learning model through a Flask web application and presented the research at ICETS '25."
      ],
      github: "",
      live: ""
    }
  ],
  education: [
    {
      school: "RP Sarathy Institute of Technology",
      degree: "B.E. Computer Science and Engineering",
      period: "2021 – 2025",
      grade: "CGPA: 7.91 / 10"
    }
  ],
  certifications: [
    {
      title: "Full Stack Java Development",
      issuer: "JSpiders (QSpiders)",
      details: "Core Java, Advanced Java, JDBC, Servlets, OOP, HTML/CSS/JavaScript, React.js, SQL/MySQL, and REST APIs"
    },
    {
      title: "Web App Development Workshop",
      issuer: "Global iGate IT Training Center",
      details: "2023"
    },
    {
      title: "Employability Skills Development Training Programme",
      issuer: "Titan Leap, Naandi Foundation",
      details: "2023 – 2024"
    }
  ],
  languages: [
    { name: "Tamil", proficiency: "Native" },
    { name: "Telugu", proficiency: "Native" },
    { name: "English", proficiency: "Professional Working Proficiency" }
  ]
};
