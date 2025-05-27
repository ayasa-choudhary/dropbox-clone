"use client";
import {
  FaDropbox,
  FaLock,
  FaUnlockAlt
} from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TileData {
    id: number;
    icon: React.ReactElement;
    hoverIcon: React.ReactElement;
    title: string;
    color: string;
    iconColor: string;
    area: string;
  }

  interface TileProps {
    item: TileData;
    hoveredId: number | null;
    setHoveredId: React.Dispatch<React.SetStateAction<number | null>>;
  }

// Custom SVG Components
const FrameworkGraphic = ({ isHovered = false }: { isHovered?: boolean }) => {
  const circleVariants: import('framer-motion').Variants = {
    initial: { scale: 1 },
    hover: { 
      scale: [1, 1.3, 1],
      transition: { 
        duration: 0.8, 
        repeat: Infinity,
        repeatType: "loop" as const
      }
    }
  };

  const lineVariants: import('framer-motion').Variants = {
    initial: { pathLength: 1, opacity: 0.8 },
    hover: { 
      pathLength: [0, 1],
      opacity: 1,
      transition: { 
        duration: 1.2,
        repeat: Infinity,
        repeatType: "loop" as const
      }
    }
  };

  return (
    <svg className="w-36 h-28 md:w-40 md:h-32 lg:w-48 lg:h-36 text-white" viewBox="0 0 120 90">
      <motion.circle 
        cx="20" cy="45" r="5" 
        fill="currentColor"
        variants={circleVariants}
        animate={isHovered ? "hover" : "initial"}
      />
      <motion.circle 
        cx="60" cy="45" r="5" 
        fill="currentColor"
        variants={circleVariants}
        animate={isHovered ? "hover" : "initial"}
      />
      <motion.circle 
        cx="100" cy="45" r="5" 
        fill="currentColor"
        variants={circleVariants}
        animate={isHovered ? "hover" : "initial"}
      />
      <motion.line 
        x1="20" y1="45" x2="60" y2="45" 
        stroke="currentColor" 
        strokeWidth="2"
        variants={lineVariants}
        animate={isHovered ? "hover" : "initial"}
      />
      <motion.line 
        x1="60" y1="45" x2="100" y2="45" 
        stroke="currentColor" 
        strokeWidth="2"
        variants={lineVariants}
        animate={isHovered ? "hover" : "initial"}
      />
    </svg>
  );
};

const QuotationMarks = ({ isHovered = false }: { isHovered?: boolean }) => {
  const openQuoteVariants = {
    initial: { scale: 1, x: 0, opacity: 0.75 },
    hover: { 
      scale: 1.2, 
      x: 10, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const closeQuoteVariants = {
    initial: { scale: 1, x: 0, opacity: 0.75 },
    hover: { 
      scale: 1.2, 
      x: -10, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <div className="flex flex-col justify-between h-full w-full p-4">
      <motion.span 
        className="text-7xl md:text-8xl lg:text-9xl text-black font-bold self-start"
        variants={openQuoteVariants}
        animate={isHovered ? "hover" : "initial"}
      >
        &ldquo;
      </motion.span>
      <motion.span 
        className="text-7xl md:text-8xl lg:text-9xl text-black font-bold self-end"
        variants={closeQuoteVariants}
        animate={isHovered ? "hover" : "initial"}
      >
        &rdquo;
      </motion.span>
    </div>
  );
};

const TypographyAa = ({ isHovered = false }: { isHovered?: boolean }) => {
  const textVariants = {
    initial: { letterSpacing: "0px", scale: 1 },
    hover: { 
      letterSpacing: "10px",
      scale: [1, 1.05, 1],
      transition: { 
        letterSpacing: {
          duration: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        },
        scale: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <motion.span 
        className="text-9xl md:text-[10rem] lg:text-[12rem] font-bold text-white"
        variants={textVariants}
        animate={isHovered ? "hover" : "initial"}
      >
        Aa
      </motion.span>
    </div>
  );
};

const ColorShapes = ({ isHovered = false }: { isHovered?: boolean }) => {
  const squareVariants = {
    initial: { rotate: 0, scale: 1 },
    hover: { 
      rotate: 45, 
      scale: 1.1,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const circleVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const smallCircleVariants = {
    initial: { scale: 1, borderColor: "rgba(163, 163, 163, 0.5)" },
    hover: { 
      scale: 1.3,
      borderColor: "rgba(255, 255, 255, 0.8)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <div className="relative w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48">
      <motion.div 
        className="absolute w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-yellow-800 rounded-md"
        variants={squareVariants}
        animate={isHovered ? "hover" : "initial"}
      />
      <motion.div 
        className="absolute top-10 left-10 md:top-12 md:left-12 lg:top-14 lg:left-14 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-neutral-700 rounded-full"
        variants={circleVariants}
        animate={isHovered ? "hover" : "initial"}
      />
      <motion.div 
        className="absolute top-14 left-14 md:top-16 md:left-16 lg:top-20 lg:left-20 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 border-2 border-neutral-400 rounded-full"
        variants={smallCircleVariants}
        animate={isHovered ? "hover" : "initial"}
      />
    </div>
  );
};

const ImageryGraphic = ({ isHovered = false }: { isHovered?: boolean }) => {
  const pathVariants = {
    initial: { 
      pathLength: 0.5, 
      opacity: 0.7,
      strokeDasharray: "5,3"
    },
    hover: { 
      pathLength: 1,
      opacity: 1,
      strokeDasharray: "0,0",
      transition: { 
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    initial: { borderColor: "rgba(255, 255, 255, 0.7)" },
    hover: { 
      borderColor: "rgba(255, 255, 255, 1)",
      boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="border border-white p-3 md:p-4 lg:p-5"
      variants={containerVariants}
      animate={isHovered ? "hover" : "initial"}
    >
      <svg className="w-36 h-28 md:w-40 md:h-32 lg:w-48 lg:h-36 text-white" viewBox="0 0 120 90">
        <motion.path 
          d="M10,70 L30,50 L50,60 L80,30 L110,70" 
          stroke="currentColor" 
          fill="none" 
          strokeWidth="2"
          variants={pathVariants}
          animate={isHovered ? "hover" : "initial"}
        />
      </svg>
    </motion.div>
  );
};

const MotionBezier = ({ isHovered = false }: { isHovered?: boolean }) => {
  const pathVariants = {
    initial: { 
      d: "M10,70 C40,0 80,90 110,20",
      pathLength: 0.5,
      pathOffset: 0
    },
    hover: { 
      d: "M10,70 C40,90 80,0 110,20",
      pathLength: 1,
      pathOffset: [0, 1],
      transition: { 
        d: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        },
        pathOffset: {
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        },
        pathLength: {
          duration: 0.5
        }
      }
    }
  };

  const circleVariants: import('framer-motion').Variants = {
    initial: { 
      scale: 1,
      fill: "#5B21B6"
    },
    hover: { 
      scale: [1, 1.5, 1],
      fill: ["#5B21B6", "#9333EA", "#5B21B6"],
      transition: { 
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <svg className="w-36 h-28 md:w-40 md:h-32 lg:w-48 lg:h-36" viewBox="0 0 120 90">
      <motion.path 
        variants={pathVariants}
        animate={isHovered ? "hover" : "initial"}
        stroke="#5B21B6" 
        fill="none" 
        strokeWidth="2" 
      />
      <motion.circle 
        cx="10" cy="70" r="4" 
        variants={circleVariants}
        animate={isHovered ? "hover" : "initial"}
      />
      <motion.circle 
        cx="40" cy="0" r="4" 
        variants={circleVariants}
        animate={isHovered ? "hover" : "initial"}
      />
      <motion.circle 
        cx="80" cy="90" r="4" 
        variants={circleVariants}
        animate={isHovered ? "hover" : "initial"}
      />
      <motion.circle 
        cx="110" cy="20" r="4" 
        variants={circleVariants}
        animate={isHovered ? "hover" : "initial"}
      />
    </svg>
  );
};

const tilesData = [
  {
    id: 1,
    icon: <FrameworkGraphic />,
    hoverIcon: <FrameworkGraphic />,
    title: "Framework",
    color: "#1e3a8a", // bg-blue-900
    iconColor: "text-blue-300",
    area: "framework"
  },
  {
    id: 2,
    icon: <QuotationMarks />,
    hoverIcon: <QuotationMarks />,
    title: "Voice & Tone",
    color: "#eab308", // bg-yellow-500
    iconColor: "text-yellow-900",
    area: "voice"
  },
  {
    id: 3,
    icon: <FaDropbox className="text-cyan-900 w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32" />,
    hoverIcon: <motion.div
      animate={{ 
        rotateY: 360,
        transition: { duration: 1.5, ease: "easeInOut" }
      }}
    >
      <FaDropbox className="text-cyan-900 w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32" />
    </motion.div>,
    title: "Logo",
    color: "#22d3ee", // bg-cyan-400
    iconColor: "text-cyan-800",
    area: "logo"
  },
  {
    id: 4,
    icon: <TypographyAa />,
    hoverIcon: <TypographyAa />,
    title: "Typography",
    color: "#ef4444", // bg-red-500
    iconColor: "text-red-200",
    area: "typography"
  },
  {
    id: 5,
    icon: <MotionBezier />,
    hoverIcon: <MotionBezier />,
    title: "Motion",
    color: "#c084fc", // bg-purple-400
    iconColor: "text-purple-800",
    area: "motion"
  },
  {
    id: 6,
    icon: <FaLock className="text-green-900 w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 self-start" />,
    hoverIcon: <motion.div
      initial={{ rotateY: 0 }}
      animate={{ 
        rotateY: 180,
        transition: { duration: 0.5, ease: "easeOut" }
      }}
    >
      <FaUnlockAlt className="text-green-900 w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 self-start" />
    </motion.div>,
    title: "Iconography",
    color: "#a3e635", // bg-lime-400
    iconColor: "text-lime-800",
    area: "iconography"
  },
  {
    id: 7,
    icon: <ColorShapes />,
    hoverIcon: <ColorShapes />,
    title: "Color",
    color: "#f97316", // bg-orange-500
    iconColor: "text-orange-900",
    area: "color"
  },
  {
    id: 8,
    icon: <ImageryGraphic />,
    hoverIcon: <ImageryGraphic />,
    title: "Imagery",
    color: "#892055", // burgundy
    iconColor: "text-pink-200",
    area: "imagery"
  }
];

// Tile Component
const Tile: React.FC<TileProps> = ({ item, hoveredId, setHoveredId }) => {
  const handleClick = () => {
    const target = document.getElementById(item.area);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Add row-span-2 class for Framework and Logo tiles
  const getRowSpanClass = () => {
    if (item.area === "framework" || item.area === "logo") {
      return "md:row-span-2";
    }
    return "";
  };

  // Custom content positioning based on tile type
  const getContentPositioning = () => {
    switch (item.area) {
      case "iconography":
        return "flex flex-col justify-between h-full p-4";
      case "imagery":
        return "flex justify-center items-center h-full";
      default:
        return "flex items-center justify-center";
    }
  };

  return (
    <motion.div
      key={item.id}
      onMouseEnter={() => setHoveredId(item.id)}
      onMouseLeave={() => setHoveredId(null)}
      onClick={handleClick}
      className={`relative flex items-center justify-center rounded-lg cursor-pointer overflow-hidden ${item.area} ${getRowSpanClass()} h-full`}
      style={{ backgroundColor: item.color }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: item.id * 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        backgroundColor: "#000000",
        transition: { type: "spring", stiffness: 300 }
      }}
    >
      <motion.h2
        className={`text-2xl md:text-3xl lg:text-4xl font-bold absolute top-2 md:top-3 lg:top-4 left-2 md:left-3 lg:left-4 ${
          hoveredId ? "text-white" : item.iconColor
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {item.title}
      </motion.h2>

      <div className={getContentPositioning()}>
        {item.area === "framework" && <FrameworkGraphic isHovered={hoveredId === item.id} />}
        {item.area === "voice" && <QuotationMarks isHovered={hoveredId === item.id} />}
        {item.area === "logo" && (
          hoveredId === item.id ? 
          <motion.div
            animate={{ 
              rotateY: 360,
              transition: { duration: 1.5, ease: "easeInOut" }
            }}
          >
            <FaDropbox className="text-cyan-900 w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32" />
          </motion.div> :
          <FaDropbox className="text-cyan-900 w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32" />
        )}
        {item.area === "typography" && <TypographyAa isHovered={hoveredId === item.id} />}
        {item.area === "iconography" && (
          hoveredId === item.id ?
          <motion.div
            initial={{ rotateY: 0 }}
            animate={{ 
              rotateY: 180,
              transition: { duration: 0.5, ease: "easeOut" }
            }}
          >
            <FaUnlockAlt className="text-green-900 w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 self-start" />
          </motion.div> :
          <FaLock className="text-green-900 w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 self-start" />
        )}
        {item.area === "color" && <ColorShapes isHovered={hoveredId === item.id} />}
        {item.area === "imagery" && <ImageryGraphic isHovered={hoveredId === item.id} />}
        {item.area === "motion" && <MotionBezier isHovered={hoveredId === item.id} />}

        {/* Fallback to original icons if area doesn't match any custom component */}
        {!["framework", "voice", "logo", "typography", "iconography", "color", "imagery", "motion"].includes(item.area) && (
          <motion.div
            className="absolute bg-center z-10"
            whileHover={{ rotate: 15, scale: 1.2 }}
          >
            {hoveredId === item.id ? item.hoverIcon : item.icon}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

// Dropbox Component
const DropboxTile = () => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-1 rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ 
        rotate: [0, 10, -10, 0],
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
      }}
      transition={{
        rotate: {
          duration: 0.5,
          ease: "easeInOut"
        },
        scale: {
          type: "spring",
          stiffness: 400
        }
      }}
    >
      <div className="bg-blue-600 p-3 rounded-md">
        <FaDropbox className="text-white w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
      </div>
    </motion.div>
  );
};

// Main Component
export default function Data() {
  const mainref = useRef(null);
  const animation = useAnimation();
  const View = useInView(mainref, { once: true });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Effect to handle animation
  useEffect(() => {
    if (View) {
      animation.start("visible");
    }
  }, [View, animation]);

  // Effect to handle window resize and ensure grid fits viewport
  useEffect(() => {
    const handleResize = () => {
      // Force a re-render when window is resized
      setHoveredId(null);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <section ref={mainref} className="h-full px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-6 lg:py-6 bg-white overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={animation}
        className="grid gap-1 sm:gap-2 md:gap-3 grid-areas h-full relative"
      >
        {tilesData.map((item) => (
          <Tile
            key={item.id}
            item={item}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
          />
        ))}
        <DropboxTile />
      </motion.div>
    </section>
  );
}
