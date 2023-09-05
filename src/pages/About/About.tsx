import DP from "./assets/maveli-digital-art-onam-kerala_985274-23.avif";

function About() {
  return (
    <div className="bg-white flex flex-row justify-center w-full overflow-hidden rounded-2xl">
      <div className="bg-white w-[1280px] h-[800px]  p-36 ">
        {/* <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl "> */}
        <div className="py-16">
          <div className="container m-auto px-6">
            <div className="lg:flex justify-between items-center">
              <div className="lg:w-6/12 lg:p-0 p-7">
                <h1 className="text-4xl font-bold leading-tight mb-5 text-black capitalize">
                  {" "}
                  I'm <span className="text-5xl">Mahabali</span>{" "}
                </h1>
                <p className="text-xl text-slate-900">
                  {" "}
                  a legendary figure from Indian mythology known for unwavering
                  commitment to justice and righteousness. In the Mahabharata, I
                  stood firm, upholding truth and honor. My legacy embraces
                  wisdom and compassion, fostering prosperity and harmony.
                  Explore my life and principles in this portfolio, and carry
                  Mahabali's timeless lessons with you.{" "}
                </p>
              </div>
              <div className="lg:w-5/12 order-2">
                <img src={DP} alt="" className="rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default About;
