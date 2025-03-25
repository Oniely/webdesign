import { FOOTER_LINKS } from "@/lib/constant";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="h-full w-full max-container pb-8 pt-14 space-y-10 border-t border-neutral-400">
			<div className="max-w-7xl mx-auto px-6">
				<h1 className="text-xl md:text-[4.5vw] w-full leading-none text-center">
					Sign up to our Newsletter to Stay Up-to-date about
					Responsible Consumption & Production of the World
				</h1>
				<div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-4">
					<p className="">Be updated and be ready:</p>
					<div className="flex items-center gap-2">
						<p>Send us your Email:</p>
						<a
							href="mailto:betterfuture@gmail.com"
							className="bg-primary text-background py-2 px-14"
						>
							Subscribe
						</a>
					</div>
				</div>
			</div>
			<div className="h-[1px] w-full bg-neutral-400" />
			<div className="flex items-start justify-start md:justify-between px-10 flex-wrap gap-10">
				{FOOTER_LINKS.map((item, i) => (
					<FooterColumn links={item} key={i} />
				))}
			</div>
			<div className="h-[1px] w-full bg-neutral-400" />
			<div className="flex items-center justify-start md:justify-between px-10 flex-wrap gap-4">
				<a href="#" className="w-[15rem]">
					&copy; 2025 Better Future, Inc.
				</a>
				<a href="#" className="w-[15rem]">
					Privacy Policy
				</a>
				<a href="#" className="w-[15rem]">
					Terms of Use
				</a>
				<a href="#" className="w-[15rem]">
					Careers
				</a>
			</div>
		</footer>
	);
};

const FooterColumn = ({ links }: { links: any }) => {
	return (
		<div className="flex flex-col items-start w-[15rem]">
			<h3 className="font-semibold mb-2">{links.header}</h3>
			<div className="flex flex-col gap-1">
				{links.links.map((link: any, i: number) => (
					<Link href={link.url} key={i} className="hover:underline">
						{link.label}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Footer;
