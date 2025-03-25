import { FOOTER_LINKS } from "@/lib/constant";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="h-full w-full max-container py-14 space-y-10">
			<div className="max-w-7xl mx-auto">
				<h1 className="text-7xl w-full">
					Sign up to our Newsletter to Stay Up-to-date about
					Responsible Consumption & Production of the World
				</h1>
				<div></div>
			</div>
			<div className="h-[1px] w-full bg-neutral-400" />
			<div className="flex items-center justify-start md:justify-between px-10 flex-wrap gap-10">
				{FOOTER_LINKS.map((item, i) => (
					<FooterColumn links={item} key={i} />
				))}
			</div>
			<div className="h-[1px] w-full bg-neutral-400" />
			<div className="flex items-center justify-start md:justify-between px-10 flex-wrap gap-4">
				<p className="w-[15rem]">&copy; 2025 Better Future, Inc.</p>
				<p className="w-[15rem]">Privacy Policy</p>
				<p className="w-[15rem]">Terms of Use</p>
				<p className="w-[15rem]">Careers</p>
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
