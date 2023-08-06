"use client";
import Link from "next/link";
import React, {useState} from "react";
import Toggle from '@/app/components/Toggle';
import ListItem from '@/app/components/ListItem';

type ThemeName = "light" | "dark";

const themes = {
  light: {background: "#fff", color: "#000"},
  dark: {background: "#000", color: "#fff"},
};

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
});

export default function Home() {
  const [theme, setTheme] = useState<ThemeName>("dark");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const providerValue = {theme: themes[theme], toggleTheme};

  return (
    <main className={`App theme-${theme}`}>
      <ThemeContext.Provider value={providerValue}>
        <h1 className="text-9xl">Yo</h1>
        <Toggle />
        <ListItem />
        <Link href="/about">About</Link>
      </ThemeContext.Provider>
    </main>
  );
}
