"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Dot = ({ x, y }: { x: number; y: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const angle = useTransform([mouseX, mouseY], ([mx, my]) => {
    const dx = mx - x;
    const dy = my - y;
    return (Math.atan2(dy, dx) * 180) / Math.PI;
  });

  return (
    <motion.ellipse
      cx={x}
      cy={y}
      rx="25"
      ry="15"
      fill="white"
      style={{
        rotate: angle,
        transformBox: "fill-box",
        transformOrigin: "center",
      }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    />
  );
};

const Grid = () => {
  const [grid, setGrid] = useState<{ x: number; y: number; id: string }[]>([]);

  useEffect(() => {
    const rows = 7;
    const cols = 7;
    const arr = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        arr.push({ x: j * 80 + 50, y: i * 80 + 50, id: `${i}-${j}` });
      }
    }
    setGrid(arr);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <svg width="700" height="700">
        {grid.map((dot) => (
          <Dot key={dot.id} x={dot.x} y={dot.y} />
        ))}
      </svg>
    </div>
  );
};

export default Grid;
