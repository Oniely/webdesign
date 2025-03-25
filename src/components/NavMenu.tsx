"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavMenu = () => {
	const [showMenu, setShowMenu] = useState(false);
	const pathname = usePathname();

	console.log(pathname);

	const handleClick = () => {
		setShowMenu(!showMenu);
	};

	const NAVS = ["Home", "About", "Contact Us"];

	return (
		<div>
			<nav className="hidden md:block">
				<ul className="flex items-center gap-6">
					{NAVS.map((nav) => {
						const path =
							nav === "Home"
								? "/"
								: `/${nav.split(" ")[0].toLowerCase()}`;

						const isActive = path === pathname;

						return (
							<li key={nav}>
								<a
									href={`${
										nav === "Home"
											? "/"
											: `/${nav
													.split(" ")[0]
													.toLowerCase()}`
									}`}
									className={`hover:underline hover:text-primary underline-offset-3 font-medium ${
										isActive
											? "text-primary underline"
											: "text-foreground"
									}`}
								>
									{nav}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
			<button
				onClick={handleClick}
				className="cursor-pointer z-50 p-2 rounded-full md:hidden"
			>
				<Menu className="size-8" />
			</button>
			{showMenu && (
				<nav className="fixed top-0 bottom-0 right-0 bg-secondary h-dvh w-screen md:w-[40rem] block md:hidden">
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

export default NavMenu;
