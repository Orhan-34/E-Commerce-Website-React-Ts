import { assets } from "../assets/assets";

export const Footer = () => {
	return (
		<>
			<div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
				<div>
					<img src={assets.logo} alt="logo" className="w-32 mb-5" />
					<p className="text-sm text-gray-600 leading-normal font-medium w-full md:w-2/3">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</p>
				</div>
				<div>
					<p className="text-xl font-semibold mb-5 uppercase ">Company</p>
					<ul className="text-gray-600 leading-normal font-medium">
						<li>Home</li>
						<li>About us</li>
						<li>Delivery</li>
						<li>Privacy policy</li>
					</ul>
				</div>
				<div>
					<p className="text-xl font-semibold mb-5 uppercase">Get in touch</p>
					<ul className="flex flex-col gap-1 text-gray-600 leading-normal font-medium">
						<li>+90545-941-3438</li>
						<li>orhanozcelik3438@gmail.com</li>
						<li>
							<a href="https://github.com/Orhan-34">
								<img
									src={assets.github_icon}
									alt=""
									className="w-10 h-10 rounded-xl overflow-hidden"
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<hr />
				<p className="text-sm text-gray-800 font-semibold py-5 text-center">
					Copyright 2024@ greatstack.dev - All Right Reserved.
				</p>
			</div>
		</>
	);
};
