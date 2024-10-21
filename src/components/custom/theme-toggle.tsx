"use client";

import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import useMounted from "@/components/hooks/use-mounted";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <>
      <Button
        size='sm'
        variant='ghost'
        onClick={() => {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
        }}
      >
        {resolvedTheme === "dark" ? (
          <Sun className='w-5 h-5' />
        ) : (
          <Moon className='w-5 h-5' />
        )}
        <span className='sr-only'>Toggle theme</span>
      </Button>
    </>
  );
}
