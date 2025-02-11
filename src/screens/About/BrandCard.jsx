import { motion } from "framer-motion";
import { IoMegaphoneSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function BrandCard() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="bg-gradient-to-r from-yellow-300 to-yellow-500 w-full h-[40vh] p-8 shadow-xl flex flex-col justify-center items-center text-center relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="absolute top-0 right-0 transform -translate-y-6 translate-x-6 opacity-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <IoMegaphoneSharp className="h-32 w-32 text-white" />
      </motion.div>

      <h1 className="font-extrabold text-4xl text-white z-10 mb-2">
        Become a Brand Ambassador
      </h1>
      <p className="text-lg text-white z-10">
        Join our program, represent our brand, and get rewarded!
      </p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          navigate("/ambassador/signup");
        }}
        className="mt-6 bg-white text-yellow-700 font-bold py-3 px-8 rounded-full shadow-md hover:bg-yellow-400 transition ease-in-out z-10"
      >
        Join Now
      </motion.button>
    </motion.div>
  );
}

export default BrandCard;
