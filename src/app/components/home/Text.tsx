"use client";

import React, { useRef, useEffect } from "react";

const Text = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const animate = () => {
      if (textRef.current) {
        let position = 100;
        const moveText = () => {
          position -= 0.5; // Mengurangi kecepatan pergerakan
          if (position < -100) {
            position = 100;
          }
          if (textRef.current) {
            textRef.current.style.transform = `translateX(${position}%)`;
          }
          requestAnimationFrame(moveText);
        };
        moveText();
      }
    };
    animate();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="p-4">
        <h1
          className="text-2xl font-pertama"
          ref={textRef}
          style={{ position: "relative" }}
        >
          Text bergerak dari kanan ke kiri terus menerus
        </h1>
      </div>
    </div>
  );
};

export default Text;
