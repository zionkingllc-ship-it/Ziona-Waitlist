import feedMockup from "@/assets/ziona-feed-mockup.png";

const HeroSection = () => {
  return (
    <section className="bg-hero-gradient pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-6">
              A Social Platform That Puts{" "}
              <span className="text-gradient">Christian Faith</span> First.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-2 font-medium">
              Create. Share. Engage.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
              A modern, safe space built for faith-centered community.
            </p>
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
            >
              Join the Waitlist
            </a>
            <div className="mt-6 space-y-1 text-sm text-muted-foreground">
              <p>Built by <span className="font-semibold text-foreground">ZionKing LLC</span></p>
              <p>Limited early beta access. Launching soon.</p>
            </div>
            <div className="mt-8 flex items-center gap-2 justify-center md:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-primary-tint border-2 border-background flex items-center justify-center text-xs font-semibold text-primary"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Early believers joining the movement.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-[280px] md:w-[320px]">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 border-[8px] border-foreground/10">
                <img
                  src={feedMockup}
                  alt="Ziona app feed preview"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
