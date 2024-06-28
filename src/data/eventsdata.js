import bitwars from "./images/events/covers/bitwars.webp";
import ros from "./images/events/covers/ros.webp";
import hacktomania from "./images/events/covers/hacktomania.webp";
import code from "./images/events/covers/code.webp";
import appdev from "./images/events/covers/appdev.webp";
import paradox3 from "./images/events/covers/paradox3.webp";
import paradox2 from "./images/events/covers/paradox2.webp";
import paradox from "./images/events/covers/paradox.webp";
import capturetheflag from "./images/events/covers/capturetheflag.webp";
import hackhub from "./images/events/covers/hackhub.webp";
import datahub from "./images/events/covers/datahub.webp";
import datahub2 from "./images/events/covers/datahub2.webp";
import cybertrunk from "./images/events/covers/cybertrunk.webp";
import expound from "./images/events/covers/expound.webp";
import expo from "./images/events/covers/expo.webp";
import carnival from "./images/events/covers/carnival.webp";

// The description here can use HTML tags for formatting, follow the React return statement syntax to achieve that
export const eventData = {
  bitwars: {
    title: "BitWars",
    description: "Welcome to BitWars, where the digital battlefield awaits! BitWars is an adrenaline-fueled event that combines the best of both worlds - a hands-on coding session and intense competitive programming. Get ready to unleash your coding prowess and engage in epic coding duels.",
    imageUrl: bitwars,
  },
  ros: {
    title: "ROS",
    description: "Embark on a robotic journey like no other at our ROS workshop - your gateway to cutting-edge tech!",
    imageUrl: ros,
  },
  code: {
    title: "Code Warriors",
    description: "Put your programming skills to test by participating in our coding contest in collaboration with Coding Ninjas. Win a Coding Ninjas merch with amazing Goodies",
    imageUrl: code,
  },
  hacktomania: {
    title: "Hacktomania",
    description: "Get ready for Hacktomania, the ultimate open-source tech quiz event! Show off your tech prowess and compete to win prizes worth 13k and exciting goodies. We'll test your knowledge of Open Source, Git, GitHub, and more in this thrilling Halloween-themed challenge. Join us to embrace the spirit of Techtober!",
    imageUrl: hacktomania,
  },
  paradox3: {
    title: "Paradox 2023",
    description: "Presenting to you our flagship event - PARADOX'23 ! The 48-hour online cryptic hunt is aimed at putting your internet surfing skills to test. Sharpen your tools, juggle your brains and fire up those neurons as we put forth a variety of riddles that will compel you to think outside the box and breakdown each round to stay on top of leaderboard! Keep an eye out for the year's largest cryptic hunt!",
    imageUrl: paradox3,
  },
  appdev: {
    title: "App Development Simplified",
    description: "Join us for a workshop on App Development Simplified, where we will guide you through the process of creating your own app from scratch. Learn how to design, develop, and deploy your app with ease!",
    imageUrl: appdev,
  },
  capturetheflag: {
    title: "Capture The Flag",
    description: "CTF or CAPTURE THE FLAG - On the 4th and 5th of October celebrating IEEE Day!",
    imageUrl: capturetheflag,
  },
  paradox2: {
    title: "Paradox 2022",
    description: "IEEE Computer Society VITC presents PARADOX'22 - The 48-hour online cryptic hunt aimed at putting your browsing skills to the test. Rack your brains as we put forth a variety of riddles that will compel you to think outside the box and break down each round to stay on top of leaderboard.",
    imageUrl: paradox2,
  },
  hackhub: {
    title: "HackHub 2022",
    description: "HackHub is the flagship hackathon conducted by IEEE Computer Society VIT Chennai every year to encourage tech enthusiasts from across the country to apply their technical skills to develop solutions for the future.",
    imageUrl: hackhub,
  },
  datahub2: {
    title: "DataHub 2.0",
    description: "DataHub 2.0 was a 3-day Datathon + Workshop event organised by IEEE Computer Society and Data Analytics Club for students interested in Machine Learning to get creative and put their ideas into reality. It was held on Kaggle, and participants were given a problem statement as well as a dataset.",
    imageUrl: datahub2,
  },
  cybertrunk: {
    title: "CyberTrunk",
    description: "CyberTrunk was a 90 min  online treasure hunt organised by IEEE Computer Society on IEEE day. It consisted of several challenging  cryptic puzzles. It was sponsored by IEEE student branch of VIT Chennai.",
    imageUrl: cybertrunk,
  },
  paradox: {
    title: "Paradox 2021",
    description: "PARADOX was a two day online cryptic hunt organised by IEEE Computer Society of VIT Chennai. The hunt consists of several questions in form of pictures and players would require to rack their brains to solve them and reach to an answer.",
    imageUrl: paradox,
  },
  datahub: {
    title: "DataHub",
    description: "DataHub was a 24-hour datathon organised by the IEEE Computer Society on 12 - 13 Dec 2020. It was hosted on skillenza. The participants were given dataset and problem statement to work upon. The winners got substantial financial rewards.",
    imageUrl: datahub,
  },
  expound: {
    title: "Expound",
    description: "Expound, an IOT & ML hackathon organised by IEEE CS in 2019 and sponsored by Einnel Technologies, attracted a large number of tech enthusiasts who competed for prizes of Rs. 25,000 over the course of a week.",
    imageUrl: expound,
  },
  clubexpo: {
    title: "Club Expo",
    description: "Club Expo is an annual event where all the clubs of VIT showcase their work and achievements. IEEE Computer Society VIT Chennai actively participates in this event and showcases its projects and initiatives.",
    imageUrl: expo,
  },
  carnival: {
    title: "Tech Carnival",
    description: "The Tech Carnival, hosted by our club, showcased innovative interactive game projects. Highlights included gesture-controlled versions of Asphalt 8, Asphalt 9, and Pacman. A 2-player Pong game and an original game, Hydro Rush, both developed by club members, were featured. The event celebrated our technical skills and provided an engaging experience for all attendees.",
    imageUrl: carnival,
  }
};

// This is the order in which the events should be displayed; also the folder names for the images of these events should be the same as the keys in this object
export const eventOrder = [
  "bitwars", "ros", "carnival", "code", "hacktomania", "paradox3", "appdev", "capturetheflag",
  "paradox2", "hackhub", "datahub2", "cybertrunk", "paradox", "datahub", "expound", "clubexpo"
];
