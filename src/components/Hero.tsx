import { assets } from "../assets/assets";

const Hero = () => {
	return (
		<div className="flex flex-col sm:flex-row border border-gray-400">
			{/*Hero left side*/}
			<div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
				<div className="text-[#414141]">
					{" "}
					{/* #ffdbd6*/}
					<div className="flex items-center gap-2">
						<p className="w-8 sm:w-11 h-[2px] bg-[#414141]" />
						<p className="text-sm font-medium sm:text-base">OUR BESTSELLERS</p>
					</div>
					<h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed prata-regular">
						Latest Arrivals
					</h1>
					<div className="flex items-center gap-2">
						<p className="text-sm font-bold md:text-base">SHOP NOW</p>
						<p className="w-8 sm:w-11 h-[2px] bg-[#414141]" />
					</div>
				</div>
			</div>
			{/*Hero right side*/}
			<img src={assets.hero_img} alt="hero-image" className="w-full sm:w-1/2" />
		</div>
	);
};

export default Hero;
