import React from 'react';

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

function ScreenSection({ children }: { children: React.ReactElement }) {
  const ref = useRef(null);

  return (
    <section>
      <div ref={ref} className='h-full w-screen'>
        {children}
      </div>
    </section>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>

      <motion.div className="progress  px-8" style={{ scaleX }} />
    </>
  );
}
