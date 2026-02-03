import { Link, useLocation } from "wouter";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 md:py-8 bg-background/80 backdrop-blur-md transition-all duration-300">
      <Link href="/">
        <a className="text-sm font-semibold tracking-tight uppercase hover:opacity-60 transition-opacity">
          Kaelen
        </a>
      </Link>

      <div className="flex items-center gap-8 md:gap-12">
        <Link href="/">
          <a className={`text-xs md:text-sm font-medium transition-colors ${location === '/' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>Work</a>
        </Link>
        <Link href="/about">
          <a className={`text-xs md:text-sm font-medium transition-colors ${location === '/about' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>About</a>
        </Link>
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </button>
      </div>
    </nav>
  );
}