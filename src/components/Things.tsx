import Image from "next/image";

const Things = () => {
  return (
    <section className="relative justify-start padding-container z-1 h-full">
      <h1 className="text-9xl">THINGS TO DO</h1>
      <div className="justify-center items-center p-10 flex w-full h-full text-3xl">
        <div className="flex items-center gap-20 w-[50%] p-5">
          <div className="relative w-[10rem] h-[10rem]">
            <Image
              src="/images/bulb.png"
              alt="logo"
              fill
              className="object-contain w-full"
            />
          </div>
          <h3>
            Shop, eat and drink locally. Supporting neighbourhood businesses
            keeps people employed and circulates money back into your community.
          </h3>
        </div>
        <div className="flex items-center gap-20 w-[50%] p-5">
          <div className="relative w-[10rem] h-[10rem]">
            <Image
              src="/images/bulb.png"
              alt="logo"
              fill
              className="object-contain w-full"
            />
          </div>
          <h3>
            Shop, eat and drink locally. Supporting neighbourhood businesses
            keeps people employed and circulates money back into your community.
          </h3>
        </div>
      </div>{" "}
      <div className="justify-center items-center p-10 flex w-full h-full text-3xl">
        <div className="flex items-center gap-20 w-[50%] p-5">
          <div className="relative w-[10rem] h-[10rem]">
            <Image
              src="/images/bulb.png"
              alt="logo"
              fill
              className="object-contain w-full"
            />
          </div>
          <h3>
            Do some research and buy from companies you know have sustainable
            practices and don’t harm the environment.
          </h3>
        </div>
        <div className="flex items-center gap-20 w-[50%] p-5">
          <div className="relative w-[10rem] h-[10rem]">
            <Image
              src="/images/bulb.png"
              alt="logo"
              fill
              className="object-contain w-full"
            />
          </div>
          <h3>
            Download and use food sharing applications. You can download apps to
            donate your leftover food and decrease the amount of food waste you
            produce.
          </h3>
        </div>
      </div>{" "}
      <div className="justify-center items-center p-10 flex w-full h-full text-3xl">
        <div className="flex items-center gap-20 w-[50%] p-5">
          <div className="relative w-[10rem] h-[10rem]">
            <Image
              src="/images/bulb.png"
              alt="logo"
              fill
              className="object-contain w-full"
            />
          </div>
          <h3>
            Choose reusable products. Use an eco-bag for shopping, a reusable
            water bottle or a cup to reduce your plastic waste.
          </h3>
        </div>
        <div className="flex items-center gap-20 w-[50%] p-5">
          <div className="relative w-[10rem] h-[10rem]">
            <Image
              src="/images/bulb.png"
              alt="logo"
              fill
              className="object-contain w-full"
            />
          </div>
          <h3>
            Advocate for corporate responsibility. Join petitions and campaigns
            calling out businesses with unsustainable practices.
          </h3>
        </div>
      </div>{" "}
    </section>
  );
};

export default Things;
