import zionaWordmark from "@/assets/ziona-wordmark.png";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container text-center space-y-4">
        <img src={zionaWordmark} alt="Ziona" className="h-8 mx-auto" />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ZionKing LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
