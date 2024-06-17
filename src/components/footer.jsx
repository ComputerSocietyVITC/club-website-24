import React from "react";
import comsocLogowhite from "../assets/comsocLogowhite.svg";
import { Link } from "react-router-dom";
import { routes } from "../data/routes";
import socialMediaLinks from "../data/socialMediaLinks";

const Footer = () => {
	return (<>
		<div className="w-[90vw] border mx-auto"></div>
		<div className="bg-transparent relative z-0 p-16 scale-90">
			<footer className="font-montserrat">
				<div className="text-gray-800 hidden xl:flex xl:flex-nowrap items-center">			
						<a href="https://ieeecsvitc.com" className="md:self-center flex items-center justify-center order-4 lg:order-1 md:flex-col md:flex sm:flex sm:flex-col mx-12">
							<img src={comsocLogowhite} alt="IEEE CS VITC Logo" height={500} width={500}/>
						</a>
					<div className="mt-3 w-full lg:w-2/12 py-6 lg:py-0 hidden lg:block order-1 lg:order-2">
						<div className="text-lg lg:text-base text-white inline-block mb-3 custom-underline-gradient">
							Quick Links
						</div>
						{routes.map((route, index) => (
							<Link
								key={index}
								to={route.href}
								className="my-3 block text-white hover:text-gray-200 text-sm"
							>
								{route.title}
							</Link>
						))}
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
						<div className="grid grid-cols-4 place-items-center">
                                {socialMediaLinks.map((link, index) => (
                                    <div key={index}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                src={link.icon}
                                                alt={link.platform}
                                                className="h-7 my-5 mx-auto lg:mx-0"
                                            ></img>
                                        </a>
                                    </div>
                                ))}
                            </div>
					</div>
				</div>
				<div className="text-gray-800 hidden lg:flex lg:flex-col items-center xl:hidden">
					<a href="https://ieeecsvitc.com" className="flex items-center justify-center order-1 mx-12">
						<img src={comsocLogowhite} alt="IEEE CS VITC Logo" height={500} width={500} />
					</a>
					<div className="flex w-full justify-around flex-wrap mt-3 order-2">
						<div className="py-6 hidden lg:block">
							<div className="text-lg lg:text-base text-white mb-3 custom-underline-gradient">
								Quick Links
							</div>
							{routes.map((route, index) => (
								<Link
									key={index}
									to={route.href}
									className="my-3 block text-white hover:text-gray-200 text-sm"
								>
									{route.title}
								</Link>
							))}
						</div>
						<div className="mt-3 sm:w-screen md:w-screen w-full lg:w-3/12">
							<div>
								<div className="text-lg lg:text-base text-white mb-3 custom-underline-gradient">
									Address
								</div>
								<a href="https://goo.gl/maps/C9UE9JLWnBAfQPKe7" target="_blank" rel="noreferrer" className="my-3 block text-white hover:text-gray-200 text-base lg:text-sm">
									<section>Kelambakkam - Vandalur Rd,</section>
									<section>Rajan Nagar, Chennai,</section>
									<section></section>
									<section>Tamil Nadu - 600127.</section>
								</a>
							</div>
							<div>
								<div className="text-lg lg:text-base text-white mb-3 custom-underline-gradient">
									Email
								</div>
								<a href="mailto:ieeecomputersociety@vit.ac.in" target="_blank" rel="noreferrer" className="my-3 block text-white hover:text-gray-200 text-base lg:text-sm lg:text-left">
									ieeecomputersociety@vit.ac.in
								</a>
							</div>
						</div>
						<div className="mt-3 w-full lg:w-3/12">
							<div className="text-lg lg:text-base text-center text-white mb-3 custom-underline-gradient">
								Social Media
							</div>
							<div className="grid grid-cols-4 place-items-center">
								{socialMediaLinks.map((link, index) => (
										<div key={index}>
											<a
												href={link.url}
												target="_blank"
												rel="noreferrer"
											>
												<img
													src={link.icon}
													alt={link.platform}
													className="h-7 my-5 mx-auto lg:mx-0"
												></img>
											</a>
										</div>
									))}
							</div>
						</div>
					</div>
				</div>
				<div className="text-gray-800 block lg:hidden items-center">
				<div className="flex justify-center">
					<a href="https://ieeecsvitc.com" className="flex items-center justify-center mx-12">
						<img src={comsocLogowhite} alt="IEEE CS VITC Logo" height={500} width={500} />
					</a>
				</div>
				<div className="flex justify-center items-center mt-3 space-x-10">
					<div className="text-center">
						<div className="text-lg text-white mb-3 custom-underline-gradient">
							Address
						</div>
						<a href="https://goo.gl/maps/C9UE9JLWnBAfQPKe7" target="_blank" rel="noreferrer" className="block text-white hover:text-gray-200 text-base">
							<section>Kelambakkam - Vandalur Rd,</section>
							<section>Rajan Nagar, Chennai,</section>
							<section>Tamil Nadu - 600127.</section>
						</a>
					</div>
					<div className="text-center">
						<div className="text-lg text-white mb-3 custom-underline-gradient">
							Email
						</div>
						<a href="mailto:ieeecomputersociety@vit.ac.in" target="_blank" rel="noreferrer" className="block text-white hover:text-gray-200 text-base">
							ieeecomputersociety@vit.ac.in
						</a>
					</div>
				</div>
				<div className="flex flex-col items-center mt-3">
					<div className="text-lg text-white mb-3 custom-underline-gradient">
						Social Media
					</div>
					<div className="flex justify-around flex-wrap gap-4 w-full">
						{socialMediaLinks.map((link, index) => (
								<div key={index} className="px-6 flex justify-center">
									<a
										href={link.url}
										target="_blank"
										rel="noreferrer"
									>
										<img
											src={link.icon}
											alt={link.platform}
											className="h-7 my-5"
										/>
									</a>
								</div>
							))}
					</div>
				</div>
			</div>
			</footer>
		</div></>
	);
};

export default Footer;