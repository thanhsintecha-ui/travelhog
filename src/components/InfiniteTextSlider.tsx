"use client";
import { motion } from "framer-motion";

export default function InfiniteTextSlider() {
  return (
    <section className="w-full h-fit mt-[2rem]">
      <motion.div
        className="w-full h-fit space-y-[0.5rem] lg:hidden"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span className="font-londrina text-5xl font-black text-[#23704D]">
              THE GLADDEST MOMENT
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 39 39"
              fill="none"
              className="w-9 h-9"
            >
              <path
                d="M38.0225 8.88667C38.0225 ..."
                fill="#E64828"
              />
            </svg>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
