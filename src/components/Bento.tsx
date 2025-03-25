const Bento = () => {
	return (
		<section className="w-full h-[100dvh] flex">
			<div className="w-[66.67%] flex flex-col h-full">
				<div className="w-full flex h-full">
					<div className="w-[50%] p-10 bg-[#76715C]">1</div>
					<div className="w-[50%] p-10 bg-[#424F45]">2</div>
				</div>
				<div className="w-full h-full p-10 bg-red-200">3</div>
			</div>
			<div className="w-[33.33%] p-10 bg-amber-200">4</div>
		</section>
	);
};

export default Bento;
