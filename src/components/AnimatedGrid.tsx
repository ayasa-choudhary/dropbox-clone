"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaDropbox } from "react-icons/fa";
import Data from "./Grid";

// Intro Section Component
const IntroSection = ({ scrollYProgress }: { scrollYProgress: import('framer-motion').MotionValue<number> }) => {
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.15], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05, 0.15], [1, 1, 0.95]);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10"
      style={{ opacity, scale }}
    >
      <div className="max-w-2xl text-center">
        <FaDropbox className="text-blue-600 w-16 h-16 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">
          At Dropbox, our Brand Guidelines help us infuse everything we make with identity.
        </h1>
      </div>
    </motion.div>
  );
};

// Transforming Tile Component
const TransformingTile = ({ scrollYProgress }: { scrollYProgress: import('framer-motion').MotionValue<number> }) => {
  // Scale animation: tiny -> large with text -> peak size -> slightly larger than final -> final size
  const scale = useTransform(
    scrollYProgress,
    [0.05, 0.2, 0.4, 0.7, 0.9],
    [0.2, 1.5, 2.5, 1.2, 1]
  );

  // Text opacity: invisible -> visible -> invisible
  const textOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3, 0.4],
    [0, 1, 1, 0]
  );

  // Width animation: starts small, gets large during text phase, then becomes small again
  const width = useTransform(
    scrollYProgress,
    [0.05, 0.2, 0.4, 0.7, 0.9],
    ["40px", "300px", "400px", "100px", "64px"]
  );

  // Height animation: follows similar pattern to width
  const height = useTransform(
    scrollYProgress,
    [0.05, 0.2, 0.4, 0.7, 0.9],
    ["40px", "200px", "300px", "100px", "64px"]
  );

  // Padding animation: more padding during text phase, less at beginning and end
  const padding = useTransform(
    scrollYProgress,
    [0.05, 0.2, 0.4, 0.9],
    ["4px", "16px", "16px", "8px"]
  );

  // Z-index: stays on top during main animation, then goes behind grid at the end
  const zIndex = useTransform(
    scrollYProgress,
    [0.05, 0.3, 0.5],
    [20, 20, 1]
  );

  // Logo size: small at start, smaller during text phase, larger at peak, then final size
  const logoSize = useTransform(
    scrollYProgress,
    [0.05, 0.2, 0.4, 0.7, 0.9],
    ["24px", "32px", "48px", "32px", "24px"]
  );

  // Position animation: centered during intro, moves to final position
  const x = useTransform(
    scrollYProgress,
    [0.05, 0.9],
    ["-50%", "-50%"]
  );

  const y = useTransform(
    scrollYProgress,
    [0.05, 0.9],
    ["-50%", "-50%"]
  );

  // Background color animation: blue -> darker blue -> blue
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.05, 0.2, 0.4, 0.7, 0.9],
    ["#2563eb", "#1d4ed8", "#1e40af", "#2563eb", "#2563eb"]
  );

  // Border radius animation: more rounded during text phase
  const borderRadius = useTransform(
    scrollYProgress,
    [0.05, 0.2, 0.4, 0.7, 0.9],
    ["4px", "8px", "12px", "8px", "4px"]
  );

  // Shadow animation: larger shadow during peak size
  const boxShadow = useTransform(
    scrollYProgress,
    [0.05, 0.2, 0.4, 0.7, 0.9],
    [
      "0 4px 6px rgba(0, 0, 0, 0.1)",
      "0 10px 15px rgba(0, 0, 0, 0.1)",
      "0 20px 25px rgba(0, 0, 0, 0.15)",
      "0 10px 15px rgba(0, 0, 0, 0.1)",
      "0 4px 6px rgba(0, 0, 0, 0.1)"
    ]
  );

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 flex items-center justify-center"
      style={{
        scale,
        zIndex,
        width,
        height,
        padding,
        x,
        y,
        backgroundColor,
        borderRadius,
        boxShadow,
        transformOrigin: "center center"
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.div
        className="text-white w-full h-full flex flex-col justify-center"
        style={{ opacity: textOpacity }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <p className="text-sm md:text-base lg:text-lg px-4 text-center">
          From icons to illustration, logos to language, this collection is the foundation for how Dropbox looks, feels, and sounds like Dropbox.
        </p>
      </motion.div>

      <motion.div
        className="text-white absolute"
        style={{
          width: logoSize,
          height: logoSize,
          bottom: useTransform(scrollYProgress, [0.05, 0.2, 0.4, 0.9], ["auto", "16px", "16px", "auto"]),
          right: useTransform(scrollYProgress, [0.05, 0.2, 0.4, 0.9], ["auto", "16px", "16px", "auto"]),
          opacity: useTransform(scrollYProgress, [0.05, 0.15, 0.3, 0.5, 0.9], [1, 0.7, 0.7, 0.9, 1])
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <FaDropbox className="w-full h-full" />
      </motion.div>
    </motion.div>
  );
};

// Animated Grid Component
export default function AnimatedGrid() {
  const scrollContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"]
  });

  // Animation for the 8 surrounding tiles
  const tilesOpacity = useTransform(scrollYProgress, [0.5, 0.9], [0, 1]);
  const tilesScale = useTransform(scrollYProgress, [0.5, 0.9], [0.9, 1]);

  // Background color animation for the container
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.9],
    ["#ffffff", "#ffffff", "#f8fafc", "#ffffff"]
  );

  return (
    <div
      ref={scrollContainerRef}
      className="h-[250vh] w-full relative"
    >
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden bg-white"
        style={{ backgroundColor: bgColor }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Intro Section */}
        <IntroSection scrollYProgress={scrollYProgress} />

        {/* Transforming Tile */}
        <TransformingTile scrollYProgress={scrollYProgress} />

        {/* Final Grid */}
        <motion.div
          className="absolute inset-0 z-10"
          style={{
            opacity: tilesOpacity,
            scale: tilesScale
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Data />
        </motion.div>
      </motion.div>
    </div>
  );
}
