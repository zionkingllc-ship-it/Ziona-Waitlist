import zionaWordmark from "@/assets/ziona-wordmark.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <img src={zionaWordmark} alt="Ziona" className="h-8 md:h-10" />
        <a
          href="#waitlist"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
        >
          Join the Waitlist
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
