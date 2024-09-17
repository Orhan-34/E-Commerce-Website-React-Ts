function NewsletterBox() {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	};
	return (
		<div className="text-center">
			<p className="text-2xl text-gray-800 font-bold mb-3">
				Subscribe now & get 20% off
			</p>
			<p className="text-lg text-gray-400 leading-normal font-medium">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
			</p>
			<form 
                onSubmit={handleSubmit}
                className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-xl">
				<input
					type="email"
					placeholder="Enter your email"
					className="w-full sm:flex-1 outline-none p-2"
				/>
				<button
					type="submit"
					className="bg-black text-white px-10 py-4 text-lg uppercase rounded-lg hover:opacity-50"
				>
					subscribe
				</button>
			</form>
		</div>
	);
}

export default NewsletterBox;
