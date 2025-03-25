"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const SplashScreen = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      router.push("/");
    }, 4000);

    return () => clearTimeout(timeout);
  }, [router]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-background z-100 absolute">
        <div className="flex items-center justify-center">
          <motion.div
            className="w-24 h-24 border-4 border-b-primary border-t-primary rounded-full animate-spin"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    );
  }

  return null;
};

export default SplashScreen;
