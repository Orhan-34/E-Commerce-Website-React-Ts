import { assets } from "../assets/assets";

export default function OurPolicy() {
	return (
		<div className="flex flex-col justify-around sm:flex-row gap-12 sm:gap-2 text-center p-20 text-xs sm:text-sm md:text-base text-gray-700">
			<div>
				<img
					src={assets.exchange_icon}
					alt="exchange"
					className="w-14  m-auto mb-5"
				/>
				<div>
					<h2 className="font-semibold text-xl  text-black">
						Easy Exchange Policy
					</h2>
					<p className="text-lg text-gray-400 leading-normal font-medium">
						We offer hassle free exchange policy
					</p>
				</div>
			</div>
			<div>
				<img
					src={assets.quality_icon}
					alt="exchange"
					className="w-14 m-auto mb-5"
				/>
				<div>
					<h2 className="font-semibold text-xl text-black">
						7 Days Return Policy
					</h2>
					<p className="text-lg text-gray-400 leading-normal font-medium">
						We provide 7 days free return policy
					</p>
				</div>
			</div>
			<div>
				<img
					src={assets.support_img}
					alt="exchange"
					className="w-14 m-auto mb-5"
				/>
				<div>
					<h2 className="font-semibold text-xl text-black">
						Best customer support
					</h2>
					<p className="text-lg text-gray-400 leading-normal font-medium">
						we provide 24/7 customer support
					</p>
				</div>
			</div>
		</div>
	);
}
