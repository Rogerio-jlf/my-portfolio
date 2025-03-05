"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      variant="outline"
      size="default"
      className="relative flex items-center justify-center w-20 h-10 rounded-full overflow-hidden p-0 border-2 border-slate-300 dark:border-slate-700 transition-all duration-500 ease-in-out"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 dark:from-indigo-700 dark:to-purple-900 transition-colors duration-500"></div>

      <motion.div
        className="absolute h-8 w-8 rounded-full bg-white dark:bg-slate-950 flex items-center justify-center shadow-md z-10"
        animate={{
          x: isDark ? 18 : -18,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <Moon className="w-5 h-5 text-indigo-300" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.3 }}
            >
              <Sun className="w-5 h-5 text-amber-400" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Button>
  );
}
