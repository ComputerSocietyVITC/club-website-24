import React from "react";
import comsocLogowhite from "../assets/comsocLogowhite.svg";
import instagram from "../assets/socialmedia/instagram.png";
import github from "../assets/socialmedia/github.png";
import linkedin from "../assets/socialmedia/linkedin.png";
import discord from "../assets/socialmedia/discord.png";
import youtube from "../assets/socialmedia/youtube.png";
import twitter from "../assets/socialmedia/twitter.png";
import telegram from "../assets/socialmedia/telegram.png";
import devto from "../assets/socialmedia/devto.png";
import { Link } from "react-router-dom";

const Footer = () => {
	return (<>
		<div className="w-[90vw] border mx-auto"></div>
		<div className="bg-transparent relative z-0 p-16 scale-90">
			<footer className="font-montserrat">
				<div className="text-gray-800 flex flex-wrap lg:flex-nowrap items-stretch">
					
						<a href="https://ieeecsvitc.com" className="md:self-center flex items-center justify-center order-4 lg:order-1 md:flex-col md:flex sm:flex sm:flex-col mx-12">
							<img src={comsocLogowhite} alt="IEEE CS VITC Logo" height={500} width={500}/>
						</a>
					
					<div className="mt-3 w-full lg:w-2/12 py-6 lg:py-0 hidden lg:block order-1 lg:order-2">
						<div className="text-lg lg:text-base text-white inline-block mb-3 custom-underline-gradient">
							Menu
						</div>
						<Link
							to="/"
							className="my-3 block text-white hover:text-gray-200 text-sm "
						>
							Home
						</Link>
						<Link
							to="/team"
							className="my-3 block text-white hover:text-gray-200 text-sm"
						>
							Team
						</Link>
						<Link
							to="/events"
							className="my-3 block text-white hover:text-gray-200 text-sm"
						>
							Events
						</Link>
						<Link
							to="/projects"
							className="my-3 block text-white hover:text-gray-200 text-sm"
						>
							Projects
						</Link>
						<Link
							to="/gallery"
							className="my-3 block text-white hover:text-gray-200 text-sm"
						>
							Gallery
						</Link>
						<Link
							to="/blogs"
							className="my-3 block text-white hover:text-gray-200 text-sm"
						>
							Blogs
						</Link>
					</div>
					<div className="mt-3 sm:w-screen md:flex-col md:w-screen md:flex sm:flex sm:flex-col w-full lg:w-3/12 order-2 lg:order-3 ">
						<div>
						<div className="text-lg sm:self-center md:self-center lg:text-base text-white inline-block mb-3 custom-underline-gradient">
							Address
						</div>
						<a
							href="https://goo.gl/maps/C9UE9JLWnBAfQPKe7"
							target="_blank"
							rel="noreferrer"
							className="my-3 block text-white hover:text-gray-200 text-base lg:text-sm md:self-center sm:self-center"
						>
							<section>Kelambakkam - Vandalur Rd,</section>
							<section>Rajan Nagar, Chennai,</section>
							<section></section>
							<section>Tamil Nadu - 600127.</section>
						</a>
						</div>
						<div>
						<div className="text-lg sm:self-center md:self-center lg:text-base text-white inline-block mb-3 custom-underline-gradient">
							Email
						</div>
						<a
							href="mailto:ieeecomputersociety@vit.ac.in"
							target="_blank"
							rel="noreferrer"
							className="my-3 block text-white hover:text-gray-200 text-base lg:text-sm lg:text-left md:text-center sm:text-center"
						>
							ieeecomputersociety@vit.ac.in
						</a>
						</div>
					</div>
					<div className="mt-3 w-full sm:w-screen sm:flex md:flex-col md:w-screen md:flex sm:flex-col lg:w-3/12 order-3 lg:order-4">
						<div className="text-lg lg:text-base lg:text-center text-white inline-block mb-3 md:self-center sm:self-center custom-underline-gradient">
							Social Media
						</div>
						<div>
						<div className="grid grid-cols-4 place-items-center">
							<div>
								<a
									href="https://www.instagram.com/compsoc.vitcc/"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={instagram}
										alt="Instagram"
										className="h-7 my-5 mx-auto lg:mx-0"
									></img>
								</a>
							</div>
							<div>
								<a
									href="https://discord.gg/6vkY3kcZnE"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={discord}
										alt="Discord"
										className="h-7 my-5 mx-auto lg:mx-0"
									></img>
								</a>
							</div>
							<div>
								<a
									href="https://github.com/ComputerSocietyVITC"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={github}
										alt="Github"
										className="h-7 my-5 mx-auto lg:mx-0"
									></img>
								</a>
							</div>
							<div>
								<a
									href="https://www.linkedin.com/company/ieee-computer-society-vit-chennai/"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={linkedin}
										alt="LinkedIn"
										className="h-7 my-5 mx-auto lg:mx-0"
									></img>
								</a>
							</div>
							<div>
								<a
									href="https://www.youtube.com/channel/UCOgwDinZGau4rwv3swAe-nQ"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={youtube}
										alt="youtube"
										className="h-7 my-5 mx-auto lg:mx-0"
									></img>
								</a>
							</div>
							<div>
								<a
									href="https://t.me/IEEE_CS_VIT_Chennai"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={telegram}
										alt="telegram"
										className="h-7 my-5 mx-auto lg:mx-0"
									></img>
								</a>
							</div>
							<div>
								<a
									href="https://twitter.com/ieeecsvitc"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={twitter}
										alt="twitter"
										className="h-7 my-5 mx-auto lg:mx-0"
									></img>
								</a>
							</div>
							<div>
								<a
									href="https://dev.to/ieeecsvitc"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={devto}
										alt="devto"
										className="h-7 my-5 mx-auto lg:mx-0"
									></img>
								</a>
							</div>
						</div>
						</div>
					</div>
				</div>
			</footer>
		</div></>
	);
};

export default Footer;