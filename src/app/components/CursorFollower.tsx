import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CursorFollower() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-8 h-8 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-full pointer-events-none z-50 mix-blend-multiply blur-sm hidden md:block"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed w-2 h-2 bg-blue-600 rounded-full pointer-events-none z-50 hidden md:block"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}
