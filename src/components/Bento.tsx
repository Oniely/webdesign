import Image from "next/image";

const Bento = () => {
  return (
    <section className="w-full h-[100dvh] flex">
      <div className="w-[66.67%] flex flex-col h-full">
        <div className="w-full flex h-full gap-2 p-2">
          <div className="w-[50%] p-10 bg-[#76715C]">
            <div className="">
              <h1 className="text-background text-6xl font-old_standard">
                SUBSTANTIALLY REDUCE WASTE GENERATION
              </h1>
            </div>
          </div>
          <div className="w-[50%] p-10 bg-primary">
            <div className="">
              <h1 className="text-background text-6xl font-old_standard">
                RESPONSIBLE MANAGEMENT OF CHEMICALS AND WASTE
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-full p-2">
          <div className="relative w-full h-full">
            <Image
              src="/images/image5.png"
              alt="logo"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-[33.33%] m-2 bento-bg">
        <div className="flex w-full h-full text-center items-center justify-center">
          <div className="justify-center items-center max-h-11/12">
            <h1 className="text-background text-7xl text-center font-old_standard">
              PROMOTE SUSTAINABLE PUBLIC PROCUREMENT PRACTICES{" "}
            </h1>
            <p className="text-background text-center text-lg">
              Promote public procurement practices that are sustainable, in
              accordance with national policies and priorities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bento;
