import image from "../assets/image.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

function Hero() {
  const navigate = useNavigate();
  return (
    <>
      <section
        id="home"
        className="text-gray-600 body-font h-screen flex justify-center items-center"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            {/* <div className="flex justify-center">
              <button onClick={()=> navigate("./login")} label="Login" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                LogIn
              </button>
              <button onClick={()=> navigate("./signup")} label= "Signup" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                SignUp
              </button>
            </div> */}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <motion.img
              className="object-cover object-center rounded"
              alt="image"
              src={image}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
