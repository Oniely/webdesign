import Hero from "@/components/Hero";

const Home = () => {
	return (
		<>
			<Hero />
			<section className="grid-cols-3 h-dvh w-full">
				<div className="col-span-2 w-full h-full flex">
					<div className="bg-red-200 w-full h-full"></div>
					<div className="bg-green-200 w-full h-full"></div>
				</div>
				<div className="bg-amber-200 w-full h-full col-span-1 flex"></div>
			</section>
		</>
	);
};

export default Home;
