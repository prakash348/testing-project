export const userDetails = {
  allQuesitons: [
    {
      id: 1,
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces. \nIt is maintained by Facebook and is used to develop web applications. \nReact allows developers to create large web applications that can change data, without reloading the page.",
    },
    {
      id: 2,
      question:
        "What is the difference between var, let, and const in JavaScript?",
      answer:
        "1. var: Function-scoped or globally scoped. Can be redeclared and updated. \n2. let: Block-scoped and can be updated but not redeclared. \n3. const: Block-scoped, cannot be updated or redeclared. \nEach of these serves different use cases when managing variables.",
    },
    {
      id: 3,
      question: "What is an API?",
      answer:
        "An API (Application Programming Interface) is a set of rules that allows one software application to interact with another. \nIt defines methods and data formats that applications use to communicate. \nAPIs are essential for integrating third-party services or building microservices architectures.",
    },
    {
      id: 4,
      question: "What is the purpose of Git?",
      answer:
        "Git is a distributed version control system used to track changes in code. \nIt allows multiple developers to work on the same project without overriding each other's work. \nGit offers features like branching, merging, and rollbacks, making it indispensable for collaborative development.",
    },
    {
      id: 5,
      question: "What is a REST API?",
      answer:
        "REST (Representational State Transfer) is an architectural style for designing networked applications. \nREST APIs use HTTP methods like GET, POST, PUT, and DELETE to interact with resources. \nThey are stateless, meaning each request contains all necessary information for the server to fulfill it.",
    },
    {
      id: 6,
      question: "What are Promises in JavaScript?",
      answer:
        "Promises represent the eventual completion (or failure) of an asynchronous operation. \nThey allow you to write asynchronous code in a more manageable and readable way. \nPromises can be in one of three states: pending, fulfilled, or rejected.",
    },
    {
      id: 7,
      question: "What is closure in JavaScript?",
      answer:
        "A closure is the combination of a function and its lexical environment. \nClosures allow a function to access variables from its outer scope even after the outer function has returned. \nThey are commonly used in callback functions and event listeners.",
    },
    {
      id: 8,
      question: "What is Docker?",
      answer:
        "Docker is a platform used to develop, ship, and run applications inside containers. \nContainers are lightweight and include everything needed to run an application, such as code, runtime, and system libraries. \nThis ensures consistency across different environments like development, staging, and production.",
    },
    {
      id: 9,
      question: "What is Node.js?",
      answer:
        "Node.js is a runtime environment that allows JavaScript to be run on the server-side. \nIt uses an event-driven, non-blocking I/O model, making it lightweight and efficient. \nNode.js is commonly used for building scalable network applications, including web servers and APIs.",
    },
    {
      id: 10,
      question: "What is SQL?",
      answer:
        "SQL (Structured Query Language) is a domain-specific language used for managing and querying relational databases. \nIt allows users to insert, update, delete, and query data. \nPopular SQL databases include MySQL, PostgreSQL, and SQLite.",
    },
    {
      id: 11,
      question: "What is MongoDB?",
      answer:
        "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. \nIt is designed for high availability, scalability, and flexibility. \nUnlike SQL databases, MongoDB uses collections and documents instead of tables and rows.",
    },
    {
      id: 12,
      question: "What is the difference between HTTP and HTTPS?",
      answer:
        "HTTP (Hypertext Transfer Protocol) is used for transferring data over the web. \nHTTPS (HTTP Secure) is HTTP with encryption via SSL/TLS. \nHTTPS ensures data confidentiality and integrity between the client and server.",
    },
    {
      id: 13,
      question: "What is a CSS Flexbox?",
      answer:
        "Flexbox is a layout model in CSS that allows for the easy arrangement of elements within a container. \nIt helps in building responsive web designs. \nThe Flexbox layout is one-dimensional, meaning it can arrange items in a row or column.",
    },
    {
      id: 14,
      question: "What is the Virtual DOM in React?",
      answer:
        "The Virtual DOM is an abstraction of the actual DOM. \nReact keeps a lightweight representation of the actual DOM in memory and updates it before applying changes to the real DOM. \nThis improves performance by minimizing expensive DOM manipulations.",
    },
    {
      id: 15,
      question: "What is the use of the 'this' keyword in JavaScript?",
      answer:
        "'this' refers to the object from which a function was called. \nIts value is determined by how a function is called (runtime binding). \nIn global scope, 'this' refers to the global object (window in browsers).",
    },
    {
      id: 16,
      question: "What is a service worker?",
      answer:
        "A service worker is a script that runs in the background of your web application, separate from the web page. \nIt can intercept and handle network requests, cache resources, and deliver push notifications. \nService workers are essential for enabling Progressive Web Apps (PWAs) with offline capabilities.",
    },
    {
      id: 17,
      question: "What is JWT?",
      answer:
        "JWT (JSON Web Token) is a compact, URL-safe token used for securely transmitting information between parties. \nIt is commonly used for authentication in web applications. \nA JWT consists of three parts: Header, Payload, and Signature.",
    },
    {
      id: 18,
      question: "What are the key features of Python?",
      answer:
        "Python is a high-level, interpreted language known for its simplicity and readability. \nIt supports multiple programming paradigms, including object-oriented, procedural, and functional programming. \nPython is widely used for web development, data analysis, machine learning, and automation.",
    },
    {
      id: 19,
      question: "What is CSS Grid?",
      answer:
        "CSS Grid is a two-dimensional layout system that allows you to build complex layouts on the web. \nIt can handle both rows and columns, making it ideal for designing responsive layouts. \nGrid simplifies the process of placing elements precisely on a webpage.",
    },
    {
      id: 20,
      question: "What is continuous integration (CI)?",
      answer:
        "Continuous Integration (CI) is the practice of regularly merging code changes into a shared repository. \nAutomated tests and builds are run to detect issues early. \nCI helps in identifying integration issues, improving the quality of the software.",
    },
    {
      id: 21,
      question: "What is TypeScript?",
      answer:
        "TypeScript is a superset of JavaScript that adds static typing. \nIt allows developers to catch type-related errors at compile time rather than runtime. \nTypeScript is especially beneficial for large-scale applications.",
    },
    {
      id: 22,
      question: "What is a Progressive Web App (PWA)?",
      answer:
        "A PWA is a web application that uses modern web capabilities to deliver an app-like experience. \nPWAs can be installed on the user's home screen and work offline using service workers. \nThey offer features like push notifications and background sync.",
    },
    {
      id: 23,
      question: "What is CORS?",
      answer:
        "CORS (Cross-Origin Resource Sharing) is a security feature implemented by browsers. \nIt restricts web pages from making requests to a domain different from the one that served the web page. \nServers use CORS headers to control which domains are allowed to access resources.",
    },
    {
      id: 24,
      question: "What is DevOps?",
      answer:
        "DevOps is a set of practices that combine software development (Dev) and IT operations (Ops). \nIts goal is to shorten the development lifecycle and provide continuous delivery with high software quality. \nDevOps relies heavily on automation and monitoring throughout the development process.",
    },
    {
      id: 25,
      question: "What is microservices architecture?",
      answer:
        "Microservices is an architectural style where an application is composed of small, independent services. \nEach service is responsible for a specific functionality and can be deployed independently. \nMicroservices improve scalability, maintainability, and flexibility.",
    },
    {
      id: 26,
      question: "What is GraphQL?",
      answer:
        "GraphQL is a query language for APIs and a runtime for executing those queries. \nIt allows clients to request only the data they need, improving performance. \nGraphQL provides a flexible and efficient way to interact with APIs, offering more control compared to REST.",
    },
    {
      id: 27,
      question: "What is the difference between '==' and '===' in JavaScript?",
      answer:
        "'==' checks for value equality after type conversion, meaning it allows type coercion. \n'===' checks for both value and type equality, making it a stricter comparison. \nIt's generally recommended to use '===' for accurate comparison to avoid unexpected type coercion.",
    },
    {
      id: 28,
      question: "What is Kubernetes?",
      answer:
        "Kubernetes is an open-source platform designed to automate the deployment, scaling, and management of containerized applications. \nIt orchestrates clusters of containers, ensuring high availability and fault tolerance. \nKubernetes has become the industry standard for container orchestration.",
    },
    {
      id: 29,
      question: "What is the difference between GET and POST methods in HTTP?",
      answer:
        "GET requests data from a specified resource without modifying it. \nGET is idempotent, meaning repeated requests will return the same result. \nPOST is used to submit data to be processed by the server, often resulting in state changes or side effects.",
    },
    {
      id: 30,
      question: "What is OAuth?",
      answer:
        "OAuth is an open standard for access delegation, commonly used for granting websites or applications limited access to user information. \nIt allows third-party services to exchange data without exposing user credentials. \nOAuth is widely used for secure authorization in APIs.",
    },
  ],
  users: [
    {
      id: 1,
      user_name: "prakash",
      password: "prakash",
    },
    {
      id: 2,
      user_name: "suresh",
      password: "suresh",
    },
    {
      id: 3,
      user_name: "swathi",
      password: "swathi",
    },
  ],
  students: [
    {
      id: 1,
      name: "Alice",
      age: 20,
      major: "Computer Science",
      description:
        "Alice is a dedicated Computer Science student with a passion for programming and technology. She has been actively involved in various coding competitions, including hackathons and coding challenges, and has won several awards. Alice is particularly skilled in Python, JavaScript, and front-end development frameworks such as React. Her favorite project so far has been developing a web application to help users track their daily habits and set goals, which she presented at a regional tech conference. Beyond coding, Alice enjoys mentoring new students and organizing tech meetups for the local community.",
    },
    {
      id: 2,
      name: "Bob",
      age: 21,
      major: "Engineering",
      description:
        "Bob is an enthusiastic Engineering student with a strong focus on mechanical and electrical engineering. He has a talent for solving complex problems and enjoys working on hands-on projects. Bob has designed and built several mechanical prototypes, including a custom robotic arm and a solar-powered vehicle, which were showcased at a university engineering fair. He is also a dedicated member of the university’s robotics club, where he helps mentor younger students and participates in national robotics competitions. Bob aspires to work in aerospace engineering and is currently working on a research project related to drone technology.",
    },
    {
      id: 3,
      name: "Eve",
      age: 19,
      major: "Art History",
      description:
        "Eve is a creative and insightful Art History student with a deep appreciation for both classical and contemporary art. She has a particular interest in the Renaissance period and its impact on modern art movements. Eve has conducted extensive research on the influence of Renaissance artists on contemporary culture and has presented her findings at academic conferences. She regularly visits museums and art galleries to stay updated with current exhibitions and enjoys writing detailed critiques and reviews. In addition to her academic pursuits, Eve volunteers at a local art gallery, where she helps curate exhibitions and organize educational workshops for the public.",
    },
    {
      id: 4,
      name: "John",
      age: 22,
      major: "Biology",
      description:
        "John is a Biology student with a keen interest in molecular biology and genetics. He has been involved in several research projects focused on gene editing and its applications in medicine. John is currently working on a project that investigates the effects of CRISPR technology on genetic diseases and hopes to contribute to groundbreaking advancements in medical science. He is also an active member of the university’s environmental conservation club, where he helps organize initiatives aimed at promoting sustainability and protecting local ecosystems.",
    },
    {
      id: 5,
      name: "Sophia",
      age: 20,
      major: "Psychology",
      description:
        "Sophia is a Psychology student with a strong interest in cognitive behavioral therapy and mental health. She has volunteered at local mental health organizations, providing support and resources to individuals in need. Sophia is currently working on a research project examining the impact of mindfulness practices on anxiety and stress levels in college students. Her goal is to become a licensed therapist and contribute to improving mental health services in her community. Outside of her studies, Sophia enjoys practicing yoga and participating in community outreach programs.",
    },
    {
      id: 6,
      name: "Michael",
      age: 23,
      major: "Business Administration",
      description:
        "Michael is a Business Administration student with a focus on finance and entrepreneurship. He has interned at several financial firms, gaining valuable experience in investment analysis and financial planning. Michael is also working on a startup idea related to sustainable business practices and has participated in pitch competitions to present his business plan. He is an active member of the university’s business club and enjoys mentoring fellow students on business strategy and career development.",
    },
    {
      id: 7,
      name: "Olivia",
      age: 21,
      major: "Environmental Science",
      description:
        "Olivia is an Environmental Science student with a passion for climate change and renewable energy. She has been involved in research projects related to sustainable energy solutions and has participated in fieldwork to study the effects of climate change on local wildlife. Olivia is also a dedicated advocate for environmental policy and works with local organizations to promote green initiatives and raise awareness about environmental issues. Her long-term goal is to work as an environmental consultant and contribute to global sustainability efforts.",
    },
    {
      id: 8,
      name: "Daniel",
      age: 22,
      major: "Physics",
      description:
        "Daniel is a Physics student with a deep fascination for quantum mechanics and astrophysics. He has conducted research on dark matter and its implications for the universes expansion. Daniel is involved in the university’s observatory, where he helps with telescope operations and data analysis. He is also passionate about science communication and regularly writes articles for the campus science magazine. Daniel aims to pursue a PhD and contribute to advancements in theoretical physics.",
    },
    {
      id: 9,
      name: "Isabella",
      age: 19,
      major: "Chemistry",
      description:
        "Isabella is a Chemistry student with a keen interest in organic chemistry and pharmacology. She has worked on several research projects involving drug synthesis and is currently developing a new compound with potential therapeutic applications. Isabella is also an active member of the chemistry club, where she helps organize laboratory workshops and science fairs. Her goal is to work in pharmaceutical research and contribute to the development of new medications.",
    },
    {
      id: 10,
      name: "Lucas",
      age: 22,
      major: "Mathematics",
      description:
        "Lucas is a Mathematics student with a strong focus on theoretical mathematics and statistics. He has conducted research on complex number theory and its applications in cryptography. Lucas is also a tutor for introductory mathematics courses and enjoys helping other students understand challenging concepts. He is planning to pursue a career in data science and hopes to work on developing innovative algorithms and models for various industries.",
    },
    {
      id: 11,
      name: "Mia",
      age: 21,
      major: "Sociology",
      description:
        "Mia is a Sociology student with a passion for social justice and community development. She has been involved in several community outreach programs and research projects related to urban development and social inequality. Mia is also an intern at a local non-profit organization, where she helps with program evaluation and advocacy efforts. Her goal is to work as a social researcher and contribute to policy development and social reform.",
    },
    {
      id: 12,
      name: "Ethan",
      age: 20,
      major: "History",
      description:
        "Ethan is a History student with a particular interest in medieval history and ancient civilizations. He has conducted research on the impact of historical events on modern society and enjoys writing historical fiction based on his studies. Ethan is also involved in the university’s history club, where he helps organize lectures and historical reenactments. He plans to pursue a career in academia and become a history professor.",
    },
    {
      id: 13,
      name: "Charlotte",
      age: 22,
      major: "Literature",
      description:
        "Charlotte is a Literature student with a focus on comparative literature and creative writing. She has written several short stories and poems that have been published in literary magazines. Charlotte is also involved in the university’s creative writing club, where she leads workshops and provides feedback to fellow writers. Her goal is to become a published author and work as a literary critic.",
    },
    {
      id: 14,
      name: "Aiden",
      age: 21,
      major: "Philosophy",
      description:
        "Aiden is a Philosophy student with a deep interest in ethics and political philosophy. He has been involved in debates and discussions on contemporary moral issues and is currently working on a research paper about the ethics of artificial intelligence. Aiden is also a member of the university’s philosophy club, where he helps organize lectures and philosophical discussions. He aspires to become a professor and contribute to ethical discourse in modern society.",
    },
    {
      id: 15,
      name: "Harper",
      age: 20,
      major: "Music",
      description:
        "Harper is a Music student with a passion for classical music and composition. She plays the violin and has performed in several orchestras and chamber ensembles. Harper is also involved in composing original music and has had her compositions performed at university concerts. Her goal is to become a professional composer and conductor, and to contribute to the development of new musical works.",
    },
    {
      id: 16,
      name: "Jackson",
      age: 22,
      major: "Theater",
      description:
        "Jackson is a Theater student with a focus on acting and stage design. He has participated in numerous stage productions and has experience in both performing and designing sets. Jackson is also involved in the university’s theater club, where he helps with directing and producing student plays. He aims to pursue a career in professional theater and film, and to become a well-rounded performer and director.",
    },
    {
      id: 17,
      name: "Amelia",
      age: 19,
      major: "Education",
      description:
        "Amelia is an Education student with a strong interest in early childhood education and special needs. She has volunteered at local schools and is currently working on a research project about inclusive education practices. Amelia is also involved in student teaching and helps with organizing educational workshops for children. Her goal is to become an elementary school teacher and advocate for educational equity.",
    },
    {
      id: 18,
      name: "Logan",
      age: 21,
      major: "Journalism",
      description:
        "Logan is a Journalism student with a passion for investigative reporting and media ethics. He has interned at several news outlets and has written articles on various social issues. Logan is also involved in the university’s newspaper and helps with editing and publishing. His goal is to become a professional journalist and to contribute to meaningful reporting and public discourse.",
    },
    {
      id: 19,
      name: "Ella",
      age: 20,
      major: "International Relations",
      description:
        "Ella is an International Relations student with a focus on diplomacy and global security. She has been involved in several model United Nations conferences and has conducted research on conflict resolution. Ella is also an intern at a diplomatic organization, where she helps with policy analysis and international negotiations. Her goal is to work in international diplomacy and contribute to global peace efforts.",
    },
    {
      id: 20,
      name: "James",
      age: 22,
      major: "Engineering",
      description:
        "James is an Engineering student with a specialization in civil engineering and urban planning. He has worked on several infrastructure projects, including bridge design and urban development. James is also an active member of the engineering society and participates in community development projects. He aspires to become a licensed civil engineer and work on sustainable infrastructure solutions.",
    },
    {
      id: 21,
      name: "Mia",
      age: 21,
      major: "Health Sciences",
      description:
        "Mia is a Health Sciences student with an interest in public health and epidemiology. She has been involved in research related to disease prevention and health education. Mia is also an intern at a local health department, where she assists with health campaigns and community outreach. Her goal is to become a public health researcher and contribute to improving community health outcomes.",
    },
    {
      id: 22,
      name: "Benjamin",
      age: 23,
      major: "Economics",
      description:
        "Benjamin is an Economics student with a focus on macroeconomics and economic policy. He has interned at several financial institutions and has conducted research on economic forecasting and policy analysis. Benjamin is also a member of the economics club and helps organize guest lectures and workshops. His goal is to work as an economic analyst and contribute to policy development and economic planning.",
    },
    {
      id: 23,
      name: "Harper",
      age: 20,
      major: "Computer Science",
      description:
        "Harper is a Computer Science student with a keen interest in cybersecurity and data protection. She has participated in several cybersecurity workshops and has worked on projects related to network security. Harper is also involved in the university’s cybersecurity club, where she helps organize hackathons and security awareness events. Her goal is to work in cybersecurity and help protect organizations from digital threats.",
    },
    {
      id: 24,
      name: "Zoe",
      age: 19,
      major: "Graphic Design",
      description:
        "Zoe is a Graphic Design student with a passion for visual storytelling and digital art. She has worked on various design projects, including branding and marketing materials for local businesses. Zoe is also involved in the university’s design club, where she helps with organizing design exhibitions and workshops. Her goal is to become a freelance graphic designer and work on creative projects for diverse clients.",
    },
    {
      id: 25,
      name: "Alexander",
      age: 22,
      major: "Astronomy",
      description:
        "Alexander is an Astronomy student with a strong interest in observational astronomy and space exploration. He has been involved in research projects related to planetary science and astrophysics. Alexander is also a member of the university’s astronomy club, where he helps with organizing stargazing events and telescope operations. His goal is to work in space research and contribute to advancements in our understanding of the universe.",
    },
    {
      id: 26,
      name: "Avery",
      age: 21,
      major: "Public Policy",
      description:
        "Avery is a Public Policy student with a focus on urban policy and community development. She has been involved in research related to housing policy and social services. Avery is also an intern at a policy think tank, where she assists with policy analysis and recommendations. Her goal is to work in public policy and contribute to shaping effective and equitable policies for urban communities.",
    },
    {
      id: 27,
      name: "Gabriel",
      age: 22,
      major: "Neuroscience",
      description:
        "Gabriel is a Neuroscience student with a keen interest in cognitive neuroscience and neuropsychology. He has been involved in research on brain function and mental health disorders. Gabriel is also an active member of the neuroscience club and helps with organizing research seminars and discussions. His goal is to pursue a PhD and contribute to understanding and treating neurological conditions.",
    },
    {
      id: 28,
      name: "Lily",
      age: 20,
      major: "Pharmacy",
      description:
        "Lily is a Pharmacy student with a focus on clinical pharmacy and drug therapy. She has completed internships at local pharmacies and hospitals, gaining hands-on experience in medication management and patient care. Lily is also involved in the pharmacy student association, where she helps with organizing health fairs and educational events. Her goal is to become a licensed pharmacist and contribute to improving patient outcomes through effective medication management.",
    },
    {
      id: 29,
      name: "Ethan",
      age: 21,
      major: "Engineering",
      description:
        "Ethan is an Engineering student with a specialization in electrical engineering and robotics. He has worked on several projects related to automation and control systems. Ethan is also a member of the robotics team and participates in national robotics competitions. His goal is to work in the field of robotics and contribute to developing innovative automation technologies.",
    },
    {
      id: 30,
      name: "Nora",
      age: 22,
      major: "Environmental Studies",
      description:
        "Nora is an Environmental Studies student with a focus on conservation and sustainable development. She has been involved in field research related to ecosystem management and wildlife protection. Nora is also an intern at an environmental NGO, where she assists with conservation projects and community education programs. Her goal is to work in environmental conservation and contribute to protecting natural habitats and promoting sustainability.",
    },
    {
      id: 31,
      name: "Mason",
      age: 20,
      major: "Finance",
      description:
        "Mason is a Finance student with an interest in investment banking and financial analysis. He has completed internships at financial firms and has experience in financial modeling and portfolio management. Mason is also involved in the finance club, where he helps organize investment seminars and workshops. His goal is to work in investment banking and contribute to financial strategy and planning.",
    },
    {
      id: 32,
      name: "Emily",
      age: 21,
      major: "Biochemistry",
      description:
        "Emily is a Biochemistry student with a focus on molecular biology and biochemical research. She has been involved in research projects related to protein structure and function. Emily is also an active member of the biochemistry club and helps with organizing research presentations and scientific discussions. Her goal is to pursue a career in biochemical research and contribute to advancements in medical science.",
    },
    {
      id: 33,
      name: "Owen",
      age: 22,
      major: "Architecture",
      description:
        "Owen is an Architecture student with a passion for sustainable design and urban planning. He has worked on several architectural projects, including residential and commercial buildings. Owen is also involved in the architecture student association, where he helps with organizing design competitions and exhibitions. His goal is to become an architect and work on innovative and sustainable building designs.",
    },
    {
      id: 34,
      name: "Grace",
      age: 19,
      major: "Linguistics",
      description:
        "Grace is a Linguistics student with an interest in language acquisition and sociolinguistics. She has conducted research on bilingualism and language development in children. Grace is also involved in the linguistics club, where she helps with organizing language workshops and cultural events. Her goal is to work in language education and contribute to understanding and teaching multiple languages.",
    },
    {
      id: 35,
      name: "Jacob",
      age: 21,
      major: "Social Work",
      description:
        "Jacob is a Social Work student with a focus on child welfare and family services. He has completed internships at social service agencies and has experience in case management and support services. Jacob is also involved in community outreach programs and helps with organizing support groups and educational workshops. His goal is to become a licensed social worker and contribute to improving the well-being of families and children.",
    },
    {
      id: 36,
      name: "Zara",
      age: 22,
      major: "Public Relations",
      description:
        "Zara is a Public Relations student with a focus on media relations and corporate communication. She has interned at PR agencies and has experience in managing media campaigns and writing press releases. Zara is also involved in the PR student association, where she helps organize networking events and workshops. Her goal is to work in public relations and contribute to managing brand image and media relations.",
    },
    {
      id: 37,
      name: "William",
      age: 21,
      major: "Criminal Justice",
      description:
        "William is a Criminal Justice student with an interest in law enforcement and criminal investigation. He has been involved in research related to criminal behavior and justice system reform. William is also an intern at a local police department, where he assists with investigations and community policing. His goal is to work in law enforcement and contribute to improving public safety and justice.",
    },
    {
      id: 38,
      name: "Ella",
      age: 20,
      major: "Economics",
      description:
        "Ella is an Economics student with a focus on development economics and international trade. She has conducted research on economic development strategies and trade policies. Ella is also a member of the economics club, where she helps organize guest lectures and discussions on economic issues. Her goal is to work in international development and contribute to global economic growth and policy-making.",
    },
    {
      id: 39,
      name: "Aiden",
      age: 21,
      major: "Mathematics",
      description:
        "Aiden is a Mathematics student with a focus on applied mathematics and statistics. He has worked on several projects related to data analysis and mathematical modeling. Aiden is also involved in the mathematics club, where he helps with organizing math competitions and tutoring sessions. His goal is to work in data science and contribute to solving real-world problems using mathematical techniques.",
    },
    {
      id: 40,
      name: "Sophie",
      age: 20,
      major: "Creative Writing",
      description:
        "Sophie is a Creative Writing student with a passion for fiction and poetry. She has written several short stories and poems that have been published in literary magazines and anthologies. Sophie is also involved in the university’s creative writing group, where she leads workshops and provides feedback to fellow writers. Her goal is to become a published author and work as a literary editor.",
    },
    {
      id: 41,
      name: "Jackson",
      age: 22,
      major: "Engineering",
      description:
        "Jackson is an Engineering student with a specialization in civil engineering and structural design. He has worked on several large-scale construction projects and has experience in project management. Jackson is also a member of the engineering society, where he helps organize technical seminars and industry tours. His goal is to become a licensed civil engineer and work on innovative infrastructure projects.",
    },
    {
      id: 42,
      name: "Lila",
      age: 21,
      major: "Philosophy",
      description:
        "Lila is a Philosophy student with a focus on existentialism and metaphysics. She has conducted research on the philosophy of consciousness and personal identity. Lila is also involved in the university’s philosophy club, where she helps organize philosophical discussions and guest lectures. Her goal is to become a philosophy professor and contribute to academic research and teaching.",
    },
    {
      id: 43,
      name: "Ryan",
      age: 20,
      major: "Health Sciences",
      description:
        "Ryan is a Health Sciences student with an interest in health informatics and medical technology. He has been involved in research related to electronic health records and health data management. Ryan is also an intern at a health technology company, where he assists with developing software solutions for healthcare providers. His goal is to work in health informatics and contribute to improving healthcare through technology.",
    },
    {
      id: 44,
      name: "Chloe",
      age: 22,
      major: "Political Science",
      description:
        "Chloe is a Political Science student with a focus on international relations and policy analysis. She has interned at several governmental and non-governmental organizations, gaining experience in policy research and advocacy. Chloe is also involved in the political science club, where she helps organize debates and discussions on current political issues. Her goal is to work in international policy and contribute to global diplomacy.",
    },
    {
      id: 45,
      name: "Henry",
      age: 21,
      major: "Business Administration",
      description:
        "Henry is a Business Administration student with a specialization in marketing and strategic management. He has completed internships at several marketing agencies and has experience in market research and campaign development. Henry is also a member of the business club, where he helps organize networking events and business seminars. His goal is to work in marketing and contribute to developing effective business strategies.",
    },
    {
      id: 46,
      name: "Maya",
      age: 19,
      major: "Film Studies",
      description:
        "Maya is a Film Studies student with a passion for film production and screenwriting. She has worked on several student film projects and has experience in directing, editing, and writing scripts. Maya is also involved in the university’s film club, where she helps organize film screenings and discussions. Her goal is to work in the film industry and contribute to creating compelling and innovative films.",
    },
    {
      id: 47,
      name: "Eli",
      age: 22,
      major: "Public Health",
      description:
        "Eli is a Public Health student with a focus on epidemiology and health promotion. He has been involved in research related to disease prevention and health education programs. Eli is also an intern at a public health organization, where he assists with health assessments and community outreach. His goal is to work in public health and contribute to improving health outcomes and reducing health disparities.",
    },
    {
      id: 48,
      name: "Samantha",
      age: 21,
      major: "Engineering",
      description:
        "Samantha is an Engineering student with a focus on mechanical engineering and thermodynamics. She has worked on several projects related to energy systems and thermal management. Samantha is also a member of the engineering club, where she helps organize technical workshops and industry tours. Her goal is to become a mechanical engineer and work on innovative solutions for energy efficiency and sustainability.",
    },
    {
      id: 49,
      name: "David",
      age: 20,
      major: "Economics",
      description:
        "David is an Economics student with a specialization in microeconomics and behavioral economics. He has conducted research on consumer behavior and market dynamics. David is also involved in the economics society, where he helps organize seminars and discussion groups on economic trends. His goal is to work as an economist and contribute to understanding and influencing economic policies.",
    },
    {
      id: 50,
      name: "Ariana",
      age: 22,
      major: "Veterinary Medicine",
      description:
        "Ariana is a Veterinary Medicine student with a focus on animal health and surgery. She has completed internships at veterinary clinics and has experience in diagnosing and treating various animal conditions. Ariana is also involved in animal welfare organizations, where she helps with community outreach and animal care. Her goal is to become a licensed veterinarian and contribute to improving animal health and welfare.",
    },
  ],
};
