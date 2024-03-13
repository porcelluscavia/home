// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sam",
  middleName: "",
  lastName: "Tureski",
  message: " Passionate about Machine Learning, NLP and Data Science. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/porcelluscavia",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sam-tureski-88947145/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/sam.png"),
  imageSize: 375,
  message: "My name is Sam Tureski. I'm an AI Engineer who has specialized in conversational AI (including LLMs!) and Computer Vision. In my last position at Posh Technologies, I made voice and text chatbots for financial institutions. Some other great AI projects I've been part of have involved explainable audio recognition, self-driving cars, recommender systems at IBM, and many other neat topics! I’m a 2022 graduate of the Machine Learning M.Sc. program at the University of Tübingen, Germany, and hold a B.A. in Natural Language Processing (Computerlinguistik) from the same university. I also completed two years of coursework in Computer Science and Linguistics from Trinity College Dublin. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the fields of machine learning and data science. In my free time I love to travel, play the trumpet and hang out with my dog.",
  resume: "https://docs.google.com/document/d/1lFGaX-PVT2WrmBiYZLyu7n1_fMyPs1BTQKTUB2KPjMc/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "porcelluscavia", //i.e."johnDoe12Gh"
  reposLength: 0,
  //specificRepos: ["CyberWallE-propaganda-detection"],
  specificRepos: ["vectors-webtool", "audio-model", "speechrecognition", "NamedEntityRecognition"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/sam.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    // { 
    //   img: require("../editable-stuff/hashirshoaeb.png"), 
    //   label: "Second slide label", 
    //   paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    // },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Machine Learning", value: 85 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 80 },
    { name: "Java", value: 70 },
    { name: "NLP", value: 90 },
    { name: "Flask", value: 75 },
    { name: "HTML/CSS", value: 55 },
    { name: "JavaScript", value: 50 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Machine Learning opportunities, or any software roles with a focus in Natural Language Processing! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "samtureski [at] gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'AI Engineer - NLP Team', // Here Add Company Name
      companylogo: require("../editable-stuff/chatbot.png"),
      date: 'May 22 - Sept 23',
    },
    {
      role: 'ML Research Engineer, University of Tübingen', // Here Add Company Name
      companylogo: require("../editable-stuff/tuebingenlogo.png"),
      date: 'Jan 21 - Sep 21, Dec 19 - Jul 20',
    },
        {
      role: 'AI Research Engineer, IBM', // Here Add Company Name
      companylogo: require("../editable-stuff/ibm_logo.png"),
      date: 'Jul 20 – Dec 20',
    },
            {
      role: 'NLP Intern, Aurora: AI Assisted Assessments', // Here Add Company Name
      companylogo: require("../editable-stuff/auroralogo.png"),
      date: 'Aug 19 - Sep 19',
    },
    {
      role: 'Conversational English Teacher, italki', // Here Add Company Name
      companylogo: require("../editable-stuff/italkilogo.png"),
      date: 'Mar 13 – Jul 14',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };
// equire('../assets/img/dell.png'),
//       date: 'June 2018 – Present',
//     },
    // {
    //   role: 'Front-End Developer',
    //   companylogo: require('../assets/img/boeing.png'),
export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
