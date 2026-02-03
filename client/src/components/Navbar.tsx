import { Link } from "wouter";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 md:py-8 bg-background/80 backdrop-blur-sm transition-all duration-300">
      <Link href="/">
        <a className="text-sm font-semibold tracking-tight uppercase hover:opacity-60 transition-opacity">
          Kaelen
        </a>
      </Link>

      <div className="flex items-center gap-8 md:gap-12">
        <Link href="/">
          <a className="text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Work</a>
        </Link>
        <Link href="/about">
          <a className="text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
        </Link>
        <a 
          href="mailto:hello@kaelen.com" 
          className="text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}