"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const BurgerMenu = () => {
	const [showMenu, setShowMenu] = useState(false);

	const handleClick = () => {
		setShowMenu(!showMenu);
	};

	return (
		<div>
			<button onClick={handleClick} className="cursor-pointer z-50">
				<Menu className="size-8" />
			</button>
			{showMenu && (
				<nav className="fixed top-0 bottom-0 right-0 bg-secondary h-dvh w-screen md:w-[40rem]">
					<ul className="px-20 py-40 text-7xl flex flex-col gap-12 relative">
						<li>
							<Link href={"/"}>Home</Link>
						</li>
						<li>
							<Link href={"/about"}>About</Link>
						</li>
						<li>
							<Link href={"/contact"}>Contact Us</Link>
						</li>

						{/* Close button */}
						<button
							onClick={() => setShowMenu(false)}
							className="absolute top-10 right-10"
						>
							<X className="size-12" />
						</button>
					</ul>
				</nav>
			)}
		</div>
	);
};

export default BurgerMenu;
