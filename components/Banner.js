import React, { useState, useEffect } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import Image from "next/image";

function Banner() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        alt="banner"
      />
      {/* <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect!</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 hover:animate-pulse">
          I'm flexible
        </button>
      </div> */}

      <div className="hidden sm:block absolute top-[30%] md:top-[35%] lg:top-[35%] xl:top-[40%] w-full text-center">
        <motion.div
          style={{
            perspective: 2000,
            x,
            y,
            rotateX,
            rotateY,
            z: 100,
            cursor: "grab",
          }}
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          className="w-full"
        >
          <div className="flex flex-col justify-center place-items-center rounded-lg   md:w-[800px] md:h-[200px] mx-auto">
            <motion.div
              style={{ perspective: 2000, x, y, rotateX, rotateY, z: 100 }}
              drag
              dragElastic={0.16}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileTap={{ cursor: "grabbing" }}
              className=" w-[300px] h-[250px]  md:h-[300px] lg:w-full lg:h-[350px] xl:h-96 sm:left-0     bg-[#f9dc9b] bg-opacity-80 rounded-2xl"
            >
              <motion.div
                style={{
                  perspective: 2000,
                  x,
                  y,
                  rotateX,
                  rotateY,
                  z: 100,
                  cursor: "grab",
                }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
                className="w-full h-full"
              >
                <div className="sm:visible relative w-[300px] h-[250px]  md:h-[300px] lg:w-full lg:h-[350px] xl:h-96 ">
                  <Image
                    src="https://media.giphy.com/media/WT8liQbmP3CdbVUJSx/giphy.gif"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-2xl pointer-events-none shadow-lg"
                  />
                </div>
              </motion.div>
              <motion.div
                style={{ x, y, rotateX, rotateY, z: 2000, cursor: "grab" }}
                drag
                dragElastic={0.1}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
                className="hidden lg:block absolute top-[12px]  md:top-[20%] lg:top-20 xl:top-32 left-12 backdrop-blur-xl p-5 rounded-md shadow-2xl z-40 "
              >
                <h3 className="text-4xl font-semibold mb-3 w-64 ">
                  Want to go on an adventure?
                </h3>
                <p className="-ml-5 ">Go on now. be spontaneous!</p>
                <button className="text-sm text-white hover:bg-red-400  hover:shadow-md transform transition-all duration-300 shadow-xl -ml-8 bg-gray-900 px-4 py-2 rounded-lg mt-5">
                  Take me to nirvana!
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Banner;
