type TitleProps = {
	text1: string;
	text2: string;
};

const Title = ({ text1, text2 }: TitleProps) => {
	return (
		<div className="inline-flex gap-2 items-center mb-3">
			<p className="text-gray-500 uppercase">
				{text1} <span className="text-gray-700 font-semibold">{text2}</span>
			</p>
			<p className="w-8 sm:w-11 h-[2px] bg-[#414141]" />
		</div>
	);
};

export default Title;
