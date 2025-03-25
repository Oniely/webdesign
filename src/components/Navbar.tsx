import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
	return (
		<div className="w-full padding-container max-container fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
			<div className="w-full flex items-center justify-between h-[5rem]">
				<div>
					<button className="bg-primary p-3 px-8 text-white">
						Contact
					</button>
				</div>
				<div className="absolute left-1/2 tranform -translate-x-1/2">
					<h1 className="text-3xl">Logo</h1>
				</div>
				<div>
					<BurgerMenu />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
