interface FooterLinks {
	header: string;
	links: {
		label: string;
		url: string;
	}[];
}

export const FOOTER_LINKS: FooterLinks[] = [
	{
		header: "Navigations",
		links: [
			{
				label: "Home",
				url: "/",
			},
			{
				label: "About",
				url: "/",
			},
			{
				label: "Contact Us",
				url: "/",
			},
		],
	},
	{
		header: "Resources",
		links: [
			{
				label: "Blog",
				url: "#",
			},
			{
				label: "Newsletter",
				url: "#",
			},
			{
				label: "Events",
				url: "#",
			},
			{
				label: "Support",
				url: "#",
			},
		],
	},
	{
		header: "Support",
		links: [
			{
				label: "Contact",
				url: "/",
			},
			{
				label: "FAQ's",
				url: "/",
			},
			{
				label: "Policies",
				url: "/",
			},
		],
	},
	{
		header: "Socials",
		links: [
			{
				label: "LinkedIn",
				url: "/",
			},
			{
				label: "Instagram",
				url: "/",
			},
			{
				label: "YouTube",
				url: "/",
			},
			{
				label: "Facebook",
				url: "/",
			},
		],
	},
];
