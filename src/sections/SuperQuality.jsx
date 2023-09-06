import Button from "../components/Button";
import { shoe8 } from "../assets/images";
import { FaChevronRight } from "react-icons/fa"; 

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Function meets <span className="text-purple-600">comfort</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium quality and comfort, our shoes are designed to be
          lightweight and durable whether you're training indoors or on the go.
        </p>
        <div className="mt-11 flex flex-wrap gap-7">
          <Button label="Shop now" />
          <span className="my-auto text-xl text-blue-500">
            <a href="/" className="flex gap-3 hover:underline">Learn More <FaChevronRight className="text-md my-auto" /></a></span> 
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
