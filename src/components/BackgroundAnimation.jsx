import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const BackgroundAnimation = ({ theme }) => {
  const shapes = ["circle", "triangle", "square"];
  const colors =
    theme === "dark"
      ? ["#A1A1AA", "#D4D4D8", "#E4E4E7"]
      : ["#BFDBFE", "#93C5FD", "#60A5FA"];

  // Store positions and animations
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(
      Array.from({ length: 15 }).map(() => ({
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 80 + 30,
        controls: useAnimation(), // Controls for manual animations
      }))
    );

    // Start movement animations
    items.forEach((item) => {
      moveShape(item);
    });
  }, []);

  // Function to make shapes float randomly
  const moveShape = async (item) => {
    while (true) {
      await item.controls.start({
        x: item.x + (Math.random() * 200 - 100),
        y: item.y + (Math.random() * 200 - 100),
        rotate: [0, Math.random() * 360, 0],
        transition: { duration: Math.random() * 8 + 5, ease: "easeInOut" },
      });
    }
  };

  // Handle mouse hover - push shape away from cursor
  const handleHover = (item) => {
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;

    item.controls.start({
      x: newX,
      y: newY,
      transition: { duration: 0.5, ease: "easeOut" },
    });
  };

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute ${shapes[Math.floor(Math.random() * shapes.length)]}`}
          style={{
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            width: `${item.size}px`,
            height: `${item.size}px`,
            borderRadius: Math.random() > 0.5 ? "50%" : "0%",
            position: "absolute",
          }}
          animate={item.controls}
          whileHover={{ scale: 1.5 }} // Scale up on hover
          onMouseEnter={() => handleHover(item)}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
