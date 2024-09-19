import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const Contact = () => {
	return (
		<div>
			<div className="text-2xl text-center border-t pt-10">
				<Title text1="Contact" text2="Us" />
			</div>
			<div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
				<img src={assets.contact_img} alt="" className="w-full md:w-[480px]" />
				<div className="flex flex-col justify-center items-start gap-8">
					<p className="font-semibold text-gray-600 text-xl">Our Store</p>
					<p className="text-gray-500">Uprise Residence / Kartal</p>
					<p className="text-gray-500">Istanbul/Turkey</p>

					<p className="text-gray-500">Tel:(0545) 941-34-78</p>
					<p className="text-gray-500">Email: orhanozcelik3438@gmail.com</p>

					<p className="font-semibold text-gray-600 text-xl">
						Careers at Forever
					</p>

					<p className="text-gray-500">
						Learn more about our teams and job openings.
					</p>
          <button className="bg-black text-white hover:opacity-60 px-4 py-2 rounded-lg" type="submit">Explore Jobs</button>
				</div>
			</div>
      <NewsletterBox />
		</div>
	);
};

export default Contact;
