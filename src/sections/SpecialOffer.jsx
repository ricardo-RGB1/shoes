import { offer2 } from "../assets/images";
import Button from "../components/Button";
// import the chevron right icon from react icons
import { FaChevronRight } from "react-icons/fa";


const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer2} alt="offer" width={773} height={687} className="object-contain w-full" />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="text-purple-600 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
        Prime X <span className="text-black">Black Edition</span> 
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          For long practice sessions on the court, the Prime X Black Edition low profile give you the stability and support you need for quick cuts and fast breaks.
        </p>
        <div className="mt-11 flex flex-wrap gap-7">
          <Button label="Shop now" />
          <span className="my-auto text-xl text-blue-500">
            <a href="/" className="flex gap-3 hover:underline">Learn More <FaChevronRight className="text-md my-auto" /></a></span> 
        </div>
      </div>

    </section>
  );
};

export default SpecialOffer;
