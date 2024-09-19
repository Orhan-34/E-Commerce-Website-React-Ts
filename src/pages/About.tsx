import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const About = () => {
	return (
		<div className="">
			<div className="text-2xl text-center pt-8 border-t">
				<Title text1={"About"} text2={"Us"} />
			</div>
			<div className="flex flex-col sm:flex-row gap-16 my-10">
				<img src={assets.about_img} alt="" className="md:w-[450px]" />
				<div className="flex flex-col md:w-2/4 text-gray-600 mt-20">
					<p>
						Forever was born out of a passion for innovation and a desire to
						revolutionize the way people shop online. Our journey began with a
						simple idea: to provide a platform where customers can easily
						discover, explore, and purchase a wide range of products from the
						comfort of their homes.
					</p>
					<br />
					<p>
						Since our inception, we've worked tirelessly to curate a diverse
						selection of high-quality products that cater to every taste and
						preference. From fashion and beauty to electronics and home
						essentials, we offer an extensive collection sourced from trusted
						brands and suppliers.
					</p>
					<br />
					<h3 className="font-semibold text-black">Our Mission</h3>
					<br />
					<p>
						Our mission at Forever is to empower customers with choice,
						convenience, and confidence. We're dedicated to providing a seamless
						shopping experience that exceeds expectations, from browsing and
						ordering to delivery and beyond.
					</p>
				</div>
			</div>
			<div className="text-xl my-5">
				<Title text1={"Why"} text2={"Choose us"} />
			</div>
			<div className="flex flex-col md:flex-row border border-gray-500 text-sm mb-20">
				<div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
					<b>Quality Assurance:</b>
					We meticulously select and vet each product to ensure it meets our
					stringent quality standards.
				</div>
				<div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
					<b>Convenience:</b>
					With our user-friendly interface and hassle-free ordering process,
					shopping has never been easier.
				</div>
				<div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
					<b>Exceptional Customer Service:</b>
					Our team of dedicated professionals is here to assist you the way,
					ensuring your satisfaction is our top priority.
				</div>
			</div>
			<NewsletterBox />
		</div>
	);
};

export default About;
