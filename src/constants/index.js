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
    tailwind,
    nodejs,
    mongodb,
    git,
    cpp,
    python,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    i2v, 
    iit, 
    tu,
    dps,
    tensorflow,
    scikit
  } from "../assets";
  
  export const navLinks = [
    {
      id:"resume",
      title: "Resume"
    },
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
      title: "Software Developer",
      icon: web,
    },
    {
      title: "ML Engineer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Entrepreneur",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "cpp",
      icon: cpp,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "Tensorflow",
      icon: tensorflow,
    },
    {
      name: "scikit",
      icon: scikit,
    },
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Machine Learning Intern",
      company_name: "i2v Systems",
      icon: i2v,
      iconBg: "#ffffff",
      date: "May 2023 - July 2023",
      points: [
        "Video Analytics: Was responsible for developing architecture of a ResNet based model for object detection.",
        "Face Recognition Software: Developed algorithms to produce a functional and quality dataset from a videos without the use of manual intervention.",
        "DCAI: Implemented and explored AI techniques which were DataCentric and Robust to different models",
        "Participated in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Exchange Student - CSE",
      company_name: "Technische Universitat Braunschweig, Germany ",
      icon: tu,
      iconBg: "#FFFFFF",
      date: "Nov 2021 - Jun 2025",
      points: [
        "Semester exchange at TU Braunschweig",
      ],
    },
    {
      title: "Bachelor in Technology, CSE",
      company_name: "Indian Institute of Technology, Mandi",
      icon: iit,
      iconBg: "#000000",
      date: "Oct 2023 - March 2024",
      points: [
        "Relevent Courses: Data Structures and Algorithms, DataScience 1,2,3, Computer Organisations, Mathematical Foundataion of CS",
        "Developed Softwares for institutional use - IIT Mandi App"
      ],
    },
    {
      title: "Grade 12th",
      company_name: "Delhi Public School, RK Puram",
      icon: dps,
      iconBg: "#FFFFFF",
      date: "April 2019 - June 2021",
      points: [
        "Scored 97.2% in CBSE AISSCE, with 99 in Maths and Physics", 
        "Graduated 7th in class (Class size - 1000)"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Geoffrey Hinton Fellow",
      name: "Univ AI",
      designation: "Scholar",
      company: "Univ AI",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTBbeZTjJLN56Eg8w2g0LblVzmomwLYWKFw&usqp=CAU",
    },
    {
      testimonial:
        "Android Dev Lead",
      name: "Google Developer Student Club",
      designation: "Lead",
      company: "GDSC IIT Mandi",
      image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/chapter_banners/logo_4osUi1m.jpg",
    },
    {
      testimonial:
        "Top 5 in InterIIT Tech Meet",
      name: "Growsimple PS - IIT Kanpur, Feb-2023",
      designation: "",
      company: "23 IITs",
      image: "data:image/png;base64,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",
    },
    {
      testimonial:
        "Core Team",
      name: "E-Cell and KamandPrompt(PC)",
      designation: "Core team member",
      company: "E-Cell and KamandPrompt(PC)",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEUaGhr+3Ez7+/sAAAD///8AABf/300AABUUFBT/4U2pqan/5E40NDSjkDeaizXUukIQEhl0ZywIDRhWTCU8PDzy8vLLsUCIiIh/f3+xnDrfxUUKCgoSEhIWFxpDOyHq6uqTk5Nzc3MiIBteXl7ExMS0tLTR0dGcm5smJiYuLi7x1ErV1dUgICBERERLS0tnZ2dpXinh4eF5eXkzLh5/by6PgDLawESGdzC1oDsrKB1JQiL/7lFdUya/pz3pzEhZWFiIuxWBAAAIRElEQVR4nO2de1/aOhiAKwkkUJzKqOhaBs5yExSZ0+2co+77f6uT9H4JkJYAKb/3+WOzpa15TJpb3xTDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7KZYfUy0A6l8dOugR9Qupff71+KcPr1XdCOsc22EyfXL6+NU2zWQ7TPLu+IuTYFhvodG6bZuNsFxrmw2+ibWElz2fNnfR8zG8vmmYjOTcV+DEajWctFckfRYIM85eGiuRWnSBT1C8X679UCp6dNV80q276/6ioYxI0vmmWieRaseGZ+Vsrxct/1ZZRzoNWhuSP6ixkmXilUweurtyP3YnXGmXi5Vf1hZQpamRIXrOFlHWiC5Pt0Jr/6tNg5G7D5sfzVVGeP7OGGt2I5Drz92+ek05RyLfsRV71KabkImdYL36RnOGX0zcsfpF9AYZyFwHDYwKGchcBw2MChnIXOYAh3bC1kaoY2u3kljMrkLhqGNrtAUpsTS20/ths4iphaLdrCScmWDsxQ7tt4diQCeITM6TdGo7zkDLdmo6GSIjU5VGPKUWG3paGhmiysnKshlIJzRje6GBoZg3RHAsZy6RUQ8PGw0s/ncYJT5UA3JNI6t4NO9vjFNKGjYcfmak2tOKpymYg3zXXwJBc/bndxsNmQQPx6g/30gz5vsHxDcmVRPDCFsHAMFuP6mHIBM8KIRIMDO3UPjrVwlCN4DpDRsKQ2mkOYqhIcI3hfDweu1FS0WJ5l2Rpp9r4/RiqEhQaGjTVq0GtXGMZtiT7M1QmKDZMHyFoMfEN2q+hOsHthpTmGky2ae3XUKHgdkN7yZN9k4Bb4S7do2EJQWPtQ8PthndeshO0+RmPzv4MlQrKGjrxDtrds6FaQQ0NFQsWMaQ+9n4NSwguNj64lzdE05nPE2ZdOmNPNU3n938FIxU252ABQ5b8qLVggn6xVW/Yf/9akLXNREFDP/VBe28FgvsopZdF6W/5LWLDRK8taC16iRY/EtRhFmMrQsPFkBH0PX3DtjuKmUY1a1UN/dGTlTS0k01+/PClwobxCDjXHqbOrowhcmgCZ3F6hrN2isecYW5K3C+plTAcrJtNXAWG93yrlWHU3ufYQilotG5GuBWO42uCP8FexxZqoYYlVMSWQ6N0Cwb51TE0nNlY+NhiETd6P63850+hIY6fGPrdAu0MDYqm3RyLRKPHejjt7OePC/8j79To0PTWVg5lGA2LUmw7IvlJ+jj536vCsF+0m3pQFBj2v2d50UlRgSF5y4wW/7vVJyJKjWHuEmB4UASx+vV+MQ5XHZeCfGTXW0gm70dEPWeo0VoEw6ifZ9fMNGSXp69fMSNYT+K3YPzfdFsX/kDDA+JPKY1PSp9VpDk0Os/q1z2Z/+RaCzrj/RPK+iKLoL/iDxto0D1Z+Dvs8NMZZad0u1PKuzB8I+zmeL214GQ5+obyxXmNz3whRS28tPkwEf0Nupz+wBCx8cQEGcjF2EWG8xR2SF1/3xzxkSM/IPyAjbaoIRXBEZGrJ3ZGdCejCb5nhgMLtYfDIV71hjfenAayRmwfRdidc6kJbvHpqQkesY3Rasy63sxwyDxvxj0+b7XCbVZE5QKNQtQXU1PQpYkNKRu5syxC/qQNsuY3+B4N8Qz7hvd8aN/1DfET2+kboonlDfrdEoYG+VSbic0PQU0aG3pTUNHTe2RZLP/QYI4CQ1aWDecxMJzN8RT5hjWvVJcz7LwrXqz+Q9Ar3WQ4wvd4KTTsLnErMLR2MFT9woFfovZ0k+ETnzV1QkP/6ahv+IgGNRWGrOusrj41/whb+02GaMUcQsN7L0gzMuzh3lKBYZ98qlI016xx3mRo380XNDR0x4x5aOiw+0+FIVN8U1NQTVEts83QsBGNDO9TpdTh7WgtMCxdl/qKtzu+fofTMNd2SFlKuaEXY58zNLxoE0FN8+jQGWvl/bo0eLLIu2zFWvwA8v65o2PTvHhZ22m3f7pPDvMc8aQt3Cj6GY2CCVPK99l3/CjWRXN7TKrnss4ZGrruHfvbBA+k3CU/3J2UMDQ65PmiaTabjVI0zcbH102vULIRnxgMHhcmItijH70f/KN4PJi3h3r/ep2DcJ7fzpxf0LH/fP5x8VaCiy/vRN9XRCXod+qkHHW95tcAAAAAABDjiNcHFuLYDhtx7rNxEMWRW0x4LFIxcyUpM6Q5HH6s/E7Egz4tcZ52N2xpbUid3Q31vg+DuKydDP+uCbzTBOTubLhpWZMG+KvcdxHUuyoN4ll3MtT8NmSZON5NES+KPJg9Bn6EZ3lBvVtDDzTfRRHPdM9C1uh3dzDEpeZoDw26EwSxSgpWoIxy0N9VuT63pX09GmKjabsMmg8NU4jCXLdz7FQDAAAAAFCCywLfRlbJh9ud3+aZbAyGKNJSfzoFvllHGIioPUViahv9KhoW+eaZB51WVkjT/yFtKAparwL1h+1ugaFOXyhTAPImG8On03u7i1C/lQ2oNd/1+baVIshXpo2KhrP1Zb8Dqqq3oWBB27pCqtFXAhXj8rtUMW1UszX0IOemTFxwResZD/J6vZ3n6mYhQyYwuMI5CAAAAACy0HxsrGBXhaGz0ch1x6vVoBY+pXcMyxqsVmPXHekdiCgJmgSP6Wt45C8S5OF9wT7Nw/QkQa0wNsMLJqFxxA1enkIWGsmARf4G+DguLHxZ+gmQkLqL35unf5CePNT/+hRPKxY8iVomxHGi2OHo/4rEP8niTDNvPCyxUlxz7HRAH16hkwsQQn8TinhweoJMcRnH6NUWJ9HSZ0E/W5PezU1vOBk9ah6QX5b4LdQnmYMAAAAAAAAAAAAAAAAAAAAAABya/wHZ1R1vOtetBQAAAABJRU5ErkJggg==",
    },
    {
      testimonial:
        "Winner",
      name: "Intersteller Wars and CP101, 2022",
      designation: "Winner",
      company: "Intersteller Wars and CP101, 2022",
      image: "https://m.media-amazon.com/images/M/MV5BODMyZmYxZmQtYTBhYy00MjQ3LTg2OTEtMzY3NGIwNjExZjAwXkEyXkFqcGdeQXVyMDU5NDcxNw@@._V1_.jpg",
    },
    {
      testimonial:
        "Specialist",
      name: "Codeforces",
      designation: "Specialist",
      company: "Codeforces",
      image: "https://repository-images.githubusercontent.com/390296311/0f6c1240-462e-47ff-870d-e2d0ebb181f1",
    },
  ];
  
  const projects = [
    {
      name: "FastAPI for V2 Model Inference (FastAPI, Kubertenes, HuggingFace,V2)",
      description:
        "Developed API for simplified inferencing in V2 models on HuggingFace to reduce the request to inputs and params while preserving the same backbone Tech: Python, AWS, Huggingface, TrueFoundry",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Aws",
          color: "green-text-gradient",
        },
        {
          name: "HuggingFace",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/yxjat/simple-v2-wrapper",
    },
    {
      name: "Volume Estimation and Shape Classification (Deep Learning, Computer Vision)",
      description:
        "Led the Machine Learning Team for InterIIT-Tech at IIT Kanpur. Developed and deployed IOT device based on my own ML Model to accurately classify the shape of the package and estimated its Volume. Tech: Python, Arduino, ReactJS (Feb’23)",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Arduino",
          color: "green-text-gradient",
        },
        {
          name: "ReactJs",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/yxjat/inter-iit",
    },
    {
      name: "Hilly Healy (Flutter, ReactJS, Project Management)",
      description:
        "Built a realtime watchOS App to monitor real time health of clients. Implemented RESTful methods on watchOS using flutter and jetpack compose. Had SOS services, health monitoring alerts. Tech: Kotlin, Flutter, FireStore, ReactJS (Apr’23)",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Dart",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://www.youtube.com/watch?v=-NYOEYHAUjc",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };