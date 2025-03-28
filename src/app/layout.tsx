import type { Metadata } from "next";
import { Poppins, Old_Standard_TT } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppinsFont = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const oldStandardFont = Old_Standard_TT({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-old_standard",
  weight: [ "400",  "700"],
});

const oldStandard = Old_Standard_TT({
	subsets: ["latin"],
	variable: "--font-old_standard",
	weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Web Design",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={`${poppinsFont.variable} ${oldStandard.variable} antialiased`}
				suppressHydrationWarning
			>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
