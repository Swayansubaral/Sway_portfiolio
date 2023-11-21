import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Social Worker",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "MTAB TECHNOLOGIES PVT LTD.",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2023 - Aug 2023",
      points: [
        "Designed and implemented a dashboard using React and TypeScript to visualize data stored in DynamoDB, decreasing time to understand work sessions by over 10 times.",
        "Advised internal users on web service capabilities, principles and protocols.",
        "Created efficient algorithms to process data from a custom REST API, so it could scale to handle thousands of Deliveries",
      ],
    },
    {
      title: "Student Ambassador Intern",
      company_name: "VJSS(N.G.O)",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Sep 2020 - April 2021",
      points: [
        "Engaged in professional networking to maintain strong relationships with communications and media professionals.",
        "Conduct in-depth research and analysis to gather information on 20 times more business objectives, vision, brand strategies, competition, and industry trends to strengthen public relations presentations and plans.",
        "Increase research scope by 15 times for developing impactful public relations strategies that shape public opinion andpromote ideas.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "HuBert",
      description:
        "Engineered a cutting-edge predictive model utilizing the Hilbert-Huang Transform in conjunction with Complementary Ensemble Empirical Mode Decomposition. Achieved an exceptional Root Mean Square Error(RMSE) of 0.23for accurate trend forecasting.Expertly trained on a diverse dataset encompassing key financial indicators including the 10-year Treasury yield index and the CBOE Volatility Index.Leveraged Py-torch to create the model.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "PycharmCE",
          color: "green-text-gradient",
        },
        {
          name: "ML",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Swayansubaral/HuBert_",
    },
    {
      name: "VEDANT.AI",
      description:
        "VEDANT.AI's robust healthcare platform stands out as a pinnacle of innovation, seamlessly integrating state-of-the-art machine learning methodologies to conduct risk assessments. Leveraging its expansive dataset, VEDANT.AI achieves an impressive accuracy rate of nearly 80 percent, solidifying its position as a trusted and dependable solution for precise healthcare risk evaluations setting new standards in the realm of reliable risk assessment.",
      tags: [
        {
          name: "flask",
          color: "blue-text-gradient",
        },
        {
          name: "PycharmCE",
          color: "green-text-gradient",
        },
        {
          name: "sqlalchemy",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Swayansubaral/vedant.AI",
    },
    {
      name: "Thapar BloodBank App",
      description:
        "Implemented on a MERN (MongoDB, Express.js, React.js, Node.js), our application revolutionizes blood donation processes, aiming to enhance user accessibility by factor of 20. The incorporation of React.js and Node.js not only ensures a highly responsive user interface but also optimizes data management and storage efficiency through the utilization of MongoDB.Showcasing our commitment to technological advancements in the healthcare sector.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Swayansubaral/MERN-BloodBank-App",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };