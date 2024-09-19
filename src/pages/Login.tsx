import { useState } from "react";

const Login = () => {
	const [currentState, setCurrentState] = useState<string>("Sign Up");

	const changeCurrentState = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setCurrentState(currentState === "Sign Up" ? "Login" : "Sign Up");
	};

	const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<form
			onSubmit={submitFormHandler}
			className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
		>
			<div className="inline-flex items-center gap-2 mb-2 mt-10 ">
				<p className="prata-regular text-3xl">{currentState}</p>
				<hr className="border-none h-[1.5px] w-8 bg-gray-800" />
			</div>
			{currentState === "Sign Up" && (
				<input
					type="text"
					placeholder="Name"
					required
					className="w-full border border-black px-1 py-2 rounded-lg"
				/>
			)}
			<input
				type="email"
				required
				placeholder="Email address"
				className="w-full border border-black px-1 py-2 rounded-lg"
			/>
			<input
				type="password"
				required
				placeholder="Password"
				className="w-full border border-black px-1 py-2 rounded-lg"
			/>
			<div className="w-full flex justify-between mt-[1px]">
				<p>
					<a href="/" className="font-medium text-sm">
						Forgot your password?
					</a>
				</p>
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button
					onClick={(e) => changeCurrentState(e)}
					className="font-medium text-sm"
				>
					{currentState === "Login" ? "Create an account" : "Login here"}
				</button>
			</div>
			<button
				type="submit"
				className="bg-black text-white px-2 py-2 w-full sm:w-32 rounded-lg"
			>
				{currentState === "Sign Up" ? "Sign Up" : "Login"}
			</button>
		</form>
	);
};

export default Login;
