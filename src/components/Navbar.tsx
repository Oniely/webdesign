import Image from "next/image";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
	return (
		<div className="w-full fixed top-0 left-1/2 transform -translate-x-1/2 z-50 bg-background">
			<div className="w-full flex items-center justify-between h-[5rem] padding-container max-container ">
				<div>
					<button className="bg-primary p-3 px-8 text-white">
						Contact
					</button>
				</div>
				<div className="absolute left-1/2 tranform -translate-x-1/2">
					<div className="relative w-[8rem] h-[4rem]">
						<Image
							src="/images/logo.png"
							alt="logo"
							fill
							className="object-cover"
						/>
					</div>
				</div>
				<div>
					<BurgerMenu />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
