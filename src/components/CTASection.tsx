import WaitlistForm from "./WaitlistForm";

const CTASection = () => {
  return (
    <section id="waitlist" className="py-16 md:py-24 bg-cta-gradient">
      <div className="container max-w-2xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground mb-4">
          Be part of the first faith-first social platform.
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-10">
          Sign up for early access to Ziona.
        </p>
        <div className="rounded-2xl bg-card p-8 shadow-2xl">
          <WaitlistForm />
        </div>
        <div className="mt-8 space-y-1 text-sm text-primary-foreground/60">
          <p>Built by <span className="font-semibold text-primary-foreground/80">ZionKing LLC</span></p>
          <p>Limited early beta access.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
