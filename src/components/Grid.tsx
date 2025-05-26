"use client";
import {
  TfiVector,
  TfiDropbox,
  TfiPalette
} from "react-icons/tfi";
import {
  LuShare2,
  LuMicOff,
  LuMic,
  LuCaseSensitive,
  LuTrendingDown,
  LuTrendingUp
} from "react-icons/lu";
import {
  FaDropbox,
  FaLock,
  FaUnlockAlt,
  FaPalette,
  FaImage
} from "react-icons/fa";
import { VscCaseSensitive } from "react-icons/vsc";
import { IoImageSharp } from "react-icons/io5";
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

const tilesData = [
  {
    id: 1,
    icon: <LuShare2 size={64} className="text-blue-500" />,
    hoverIcon: <TfiVector size={64} />,
    title: "Framework",
    color: "#2c3a58",
    iconColor: "text-blue-500",
    area: "framework"
  },
  {
    id: 2,
    icon: <LuMicOff size={64} className="text-yellow-900" />,
    hoverIcon: <LuMic size={64} />,
    title: "Voice & Tone",
    color: "#F5C531",
    iconColor: "text-yellow-900",
    area: "voice"
  },
  {
    id: 3,
    icon: <FaDropbox size={64} className="text-cyan-900" />,
    hoverIcon: <TfiDropbox size={64} />,
    title: "Logo",
    color: "#00C2E5",
    iconColor: "text-cyan-900",
    area: "logo"
  },
  {
    id: 4,
    icon: <LuCaseSensitive size={64} className="text-red-900" />,
    hoverIcon: <VscCaseSensitive size={64} />,
    title: "Typography",
    color: "#fa551e",
    iconColor: "text-red-900",
    area: "typography"
  },
  {
    id: 5,
    icon: <LuTrendingDown size={64} className="text-purple-900" />,
    hoverIcon: <LuTrendingUp size={64} />,
    title: "Motion",
    color: "#C9A2E1",
    iconColor: "text-purple-900",
    area: "motion"
  },
  {
    id: 6,
    icon: <FaLock size={64} className="text-green-900" />,
    hoverIcon: <FaUnlockAlt size={64} />,
    title: "Iconography",
    color: "#9BD438",
    iconColor: "text-green-900",
    area: "iconography"
  },
  {
    id: 7,
    icon: <FaPalette size={64} className="text-orange-900" />,
    hoverIcon: <TfiPalette size={64} />,
    title: "Color",
    color: "#ff8c19",
    iconColor: "text-orange-900",
    area: "color"
  },
  {
    id: 8,
    icon: <FaImage size={64} className="text-pink-400" />,
    hoverIcon: <IoImageSharp size={64} />,
    title: "Imagery",
    color: "#972C6C",
    iconColor: "text-pink-400",
    area: "imagery"
  },
  {
    id: 9,
    icon: <FaDropbox size={64} className="text-white-600" />,
    hoverIcon: <TfiDropbox size={64} />,
    title: "",
    color: "#0000ff",
    iconColor: "text-white-400",
    area: "dropbox"
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

  return (
    <motion.div
      key={item.id}
      onMouseEnter={() => setHoveredId(item.id)}
      onMouseLeave={() => setHoveredId(null)}
      onClick={handleClick}
      className={`relative flex items-center justify-center rounded-lg cursor-pointer overflow-hidden ${item.area} h-full`}
      style={{ backgroundColor: item.color }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: item.id * 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(0,0,0,0.1)",
        transition: { type: "spring", stiffness: 300 }
      }}
    >
      <motion.h2
        className={`text-xl font-bold absolute top-4 left-4 ${
          hoveredId ? "text-white" : item.iconColor
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {item.title}
      </motion.h2>
      <motion.div
        className="absolute bg-center z-10"
        whileHover={{ rotate: 15, scale: 1.2 }}
      >
        {hoveredId === item.id ? item.hoverIcon : item.icon}
      </motion.div>
    </motion.div>
  );
};

// Main Component
export default function Data() {
  const mainref = useRef(null);
  const animation = useAnimation();
  const View = useInView(mainref, { once: true });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    if (View) {
      animation.start("visible");
    }
  }, [View, animation]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <section ref={mainref} className="min-h-screen px-2 py-2 md:px-2 bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={animation}
        className="grid gap-2 grid-areas"
      >
        {tilesData.map((item) => (
          <Tile
            key={item.id}
            item={item}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
          />
        ))}
      </motion.div>
    </section>
  );
}
