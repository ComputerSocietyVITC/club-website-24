import bci from "./images/projects/bci.gif"
import bonetech from "./images/projects/bonetech.gif"
import weather from "./images/projects/weather.gif"
import livein from "./images/projects/livein.gif"
import falling from "./images/projects/falling.gif"
import dochub from "./images/projects/dochub.webp"
import opencv from "./images/projects/opencv.webp"
import reaction from "./images/projects/reaction.webp"
import hydro from "./images/projects/hydron.gif"

// The description here can use HTML tags for formatting, follow the React return statement syntax to achieve that
const slides = [
    {
        title: "Hydro-Rush",
        description: (
            <div>
                <div>Created for the IEEE ComSoc Arcade Expo Event 2024 at VIT Chennai, India, Hydro-Rush is an action-packed shooter game developed by Shlok. This exciting project was also showcased at our club's tech carnival event.</div>
                <div>In Hydro-Rush, players control a character navigating through challenging levels, dodging obstacles, and managing their health, ammo, and score. The game features indicators for health, ammo, and score to enhance the gaming experience.</div>
                <div>Hydro-Rush exemplifies our commitment to fostering creativity and technical skills among our members. We are proud to present this project as part of our club's achievements.</div>
            </div>
        ),
        img: hydro,
    },
    {
        title: "Brain Computer Interface",
        description: "A brain-computer interface (BCI) is a technology that allows communication between a human or animal brain and an external technology. This term can refer to an interface that takes signals from the brain to an external piece of hardware, or a technology that sends signals to the brain. Various different brain-computer interface technologies have been developed at different times, through different methods and for diverse purposes, including in virtual reality technology.",
        img: bci,
    },
    {
        title: "Bone Conduction",
        description: "Air conduction refers to sound from the outside carried by air waves from the outer ear and transferred to electrical waves in the inner ear. Bone conduction refers to sound conducted as subtle vibration along the bones to the inner ear housing the organs of hearing and balance. The sound vibration actually activates both the sense of hearing and the organ of balance. The vibration, in fact, is carried through the entire skeletal structure. We are working on a device which can facilitate this by using transducers.",
        img: bonetech,
    },
    {
        title: "Weather Application",
        description: "We are working on a weather front end application for our college. In any front end application, the main goal is to make the user experience feel natural and intuitive. Since our application will be displayed around campus televisions we came up with a touchless interface. We use machine learning for gesture controls to control the interface without using touch. The interface is deployed on arm devices locally which are synchronized through cloud.",
        img: weather,
    },
    {
        title: "Live in Arcade",
        description: "With the roaring success of the Falling Blocks Game, IEEE Computer Society returned with an interactive controller based car racing game. Built on Unity 2D and using NodeMCU for the interaction between the sensor and the game,the players competed with each other, avoiding obstacles and trying to get the better of their opponent by using their skill on the wheel. The controllers were built to resemble real life steering wheels and the game was a huge success as an event.",
        img: livein,
    },
    {
        title: "Falling Blocks",
        description: "We worked on an interactive controller-based game to be displayed in our college tech fest. In the game, the player had to balance the falling blocks on a plate which could be controlled by moving a physical box with a gyroscope and accelerometer sensor in it. The game itself was built on Unity 2D and NodeMCU was used for the interaction between the sensor and the game.",
        img: falling,
    },
    {
        title: "DocHub",
        description: (<>The starting point for your tech journey. Get started and explore your favorite domain in tech. Whether you're just starting out or you're an experienced developer looking to take your skills to the next level, our documentation has something for everyone. Visit at <a href="https://docs.ieeecsvitc.com" className="inline-block" target="_blank" rel="noreferrer">docs.ieeecsvitc.com</a>.</>),
        img: dochub,
    },
    {
        title: "OpenCV Racing Interface",
        description: "We developed an innovative project that leverages Python and the OpenCV library (cv2) to create a gesture-controlled gaming experience. By capturing hand positions and angles, our script allows players to control the popular racing games Asphalt 8 and Asphalt 9 with intuitive hand gestures. This project exemplifies our commitment to exploring cutting-edge technologies and enhancing interactive gaming experiences.",
        img: opencv,
    },
    {
        title: "Reaction Time Game",
        description: "Originally designed by Abhijith and refined by Yuganshu and Sinchan, our Reaction Time Game challenges players to test their reflexes. Featuring four red lights that sequentially turn off, players must react swiftly and touch the screen when all lights are extinguished. The fastest reaction times determine the winner, making this game a thrilling test of speed and agility.",
        img: reaction,
    }
];

export default slides;