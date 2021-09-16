import emoji from "react-easy-emoji";

const illustration = {
  animated: true
};

const greeting = {
  username: "Daniel Luiz Alves",
  title: "Olá! Sou Daniel",
  subTitle: emoji(
    "Um desenvolvedor de software Full Stack 🚀 com experiência na construção de aplicativos Web e móveis com JavaScript / Reactjs / Nodejs / React Native e algumas outras bibliotecas e estruturas interessantes."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/danielalves96",
  linkedin: "https://www.linkedin.com/in/daniel-luiz-alves-791a7911a/",
  gmail: "daniel.xcoders@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "O que eu faço",
  subTitle: "DESENVOLVEDOR FULL STACK ESPECIALISTA FRONT-END",
  skills: [
    emoji(
      "⚡ Desenvolvo interfaces de usuário / front-end altamente interativas para seus aplicativos da web e móveis;"
    ),
    emoji("⚡ Desenvolvo aplicações web e mobile completas;"),
    emoji("⚡ Desenvolvo API's para consumos externos, dentre outros.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "nextJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "angular js/2",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Rocketseat",
      logo: require("./assets/images/rocketseat.png"),
      subHeader: "Especialização - Desenvolvimento WEB",
      duration: "Agosto 2021 - Dezembro 2021",
      desc: "Objetivo alinhado com o front-end, para construir interfaces modernas e reativas na web utilizando uma biblioteca modular e escalável."
    },
    {
      schoolName: "Faculdade Descomplica",
      logo: require("./assets/images/descomplica.png"),
      subHeader:
        "Pós Graduação - Projetos de aplicativos móveis multiplataforma",
      duration: "Novembro 2020 - Outubro 2021",
      desc: "Curso de pós graduação com foco em:",
      descBullets: [
        "Mercado de aplicações móveis;",
        "Gestão de projetos;",
        "Desenvolvimento em plataformas hibridas: Flutter;",
        "Desenvolvimento em plataformas hibridas: React Native;",
        "Desenvolvimento Web responsivo;",
        "LGPD e aplicações móveis.'"
      ]
    },
    {
      schoolName: "Centro Universitário Campos de Andrade",
      logo: require("./assets/images/uniandrade.jpg"),
      subHeader: "Graduação - Análise e desenvolvimento de sistemas",
      duration: "Janeiro 2018 - Dezembro 2020",
      desc: "O curso superior de Tecnologia em Análise e Desenvolvimento de Sistemas forma profissionais capacitados a atender o mercado da tecnologia, focados no desenvolvimento e análise de softwares, modelagem de sistemas e gestão de projetos. As atividades práticas têm ênfase nos requisitos do mercado, visando às competências do profissional Analista de sistemas. Cada semestre o aluno tem uma certificação do módulo, o que garante atuar como técnico naquela habilidade."
    },
    {
      schoolName: "Senai - PR",
      logo: require("./assets/images/senai.png"),
      subHeader: "Curso Técnico - Em eletrônica",
      duration: "Janeiro 2010 - Dezembro 2012",
      descBullets: [
        "Realizar estudos sobre produtos a serem fabricados, efetuando cálculos, medições e outras operações para a execução de aparelhos diversos;",
        "Montar aparelhos, circuitos ou componentes eletrônicos, orientando-se por desenhos e planos específicos, para permitir sua utilização e diversos setores;",
        "Acompanhar o desempenho dos aparelhos eletrônicos, coletando dados e informações, para avalia-los e planejar a introdução de melhoramento na fabricação, montagem e funcionamento;",
        "Dirigir atividades em equipe nas fazes de fabricação, instalação, operação, reparação e conservação de aparelhos eletrônicos, orientando a execução de tarefas pertinentes, para assegurar a observância de padrões técnicos e prazo estabelecidos;",
        "Comunicar os resultados do desempenho de equipamentos e instalações eletrônicas, aos setores interessados;",
        "Programar e executar treinamentos em eletrônica."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Web Design", //Insert stack or technology you have experience in
      progressPercentage: "98%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Mobile",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Analista de sistemas - Especialista FrontEnd",
      company: "MadeiraMadeira",
      companylogo: require("./assets/images/madeiramadeira.png"),
      date: "Julho 2021 – o momento",
      desc: "Atuo como desenvolvedor web especialista Front-end, predominantemente com a biblioteca React utilizando typescript."
    },
    {
      role: "Co-Fundador & Desenvolvedor Full Stack ",
      company: "SND Music Share",
      companylogo: require("./assets/images/sndLogo.png"),
      date: "Março 2021 – o momento",
      desc: "Fundador e desenvolvedor Full-stack da empresa que promete ser a maior intermediadora entre produtores de música eletrônica e gravadoras do mundo. Atuo principalmente como desenvolvedor Full-stack e web designer utilizando linguagens e ferramentas como: ReactJs, React Native, NodeJs, PostgreSQL, KnexJs, Typescript, JavaScript, Docker, Figma, entre outras."
    },
    {
      role: "Desenvedor Full Stack",
      company: "Clinicarx",
      companylogo: require("./assets/images/clinicarxLogo.png"),
      date: "Junho 2019 – Maio 2021",
      desc: "Atuava como desenvolvedor Full-stack com foco em Frontend trabalhando com o Framework AngularJS. Também utilizando das linguagens PHP, HTML5, CSS3 e Javascript, e banco de dados PostgresSQL, garantindo a boa utilização de códigos entre páginas."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Grandes projetos",
  subtitle: "ALGUMAS STARTUPS E EMPRESAS QUE AJUDEI COM SUAS TECNOLOGIAS",
  projects: [
    {
      image: require("./assets/images/madeira.png"),
      projectName: "MadeiraMadeira",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Ver Website",
          url: "http://madeiramadeira.com.br"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/clinica.png"),
      projectName: "Clincarx",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Ver Website",
          url: "http://clinicarx.com.br"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false
};

const contactInfo = {
  title: emoji("Entre em contato comigo ☎️"),
  subtitle:
    "DISCUTIR UM PROJETO OU APENAS QUER DIZER OI? MINHA CAIXA DE ENTRADA ESTÁ ABERTA PARA TODOS.",
  number: "+55 (41) 984616181",
  email_address: "daniel.xcoders@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
