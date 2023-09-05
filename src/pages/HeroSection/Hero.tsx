import Maveli from "./assets/maveli.png";
import Flower1 from "./assets/foreG1.png";
import Flower2 from "./assets/foreG2.png";
import Flower3 from "./assets/bg-plant1.png";
import Flower4 from "./assets/bg-plant2.png";
import bg from "./assets/bg.png";

const Hero = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full overflow-hidden rounded-2xl">
      <div
        className="bg-white w-[1280px] h-[800px] bg-[100%_100%]  "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="relative h-[832px]">
          <img
            className="absolute w-[550px] h-[776px] top-[56px] left-[730px] animate-fade-left  animate-duration-1000"
            alt="New project"
            src={Flower4}
          />
          <img
            className="absolute w-[548px] h-[776px] top-[56px] left-0 animate-fade-right animate-duration-1000"
            alt="New project"
            src={Flower3}
          />
          <img
            className="absolute w-[928px] h-[706px] top-[126px] left-[176px] animate-fade-up"
            alt="Maveli"
            src={Maveli}
          />
          <img
            className="absolute w-[450px] h-[418px] top-[414px] left-0 animate-flip-up"
            alt="Flower"
            src={Flower2}
          />
          <img
            className="absolute w-[475px] h-[444px] top-[388px] left-[805px] animate-flip-up"
            alt="Flower"
            src={Flower1}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
