export const Mission = () => {
  return (
    <section aria-labelledby="mission-heading" className="scroll-mt-12" id="mission">
      <div className="container relative max-w-7xl border-x px-0 py-12 md:py-16 lg:py-20">
        <h2 className="mb-6 px-4 text-center font-medium font-sans text-xl md:px-0 md:text-2xl" id="mission-heading">
          Mission & Causes
        </h2>
        <div className="relative mx-2 bg-sky-200 p-2.5 md:mx-0">
          <article className="grid grid-cols-1 divide-y rounded-2xl bg-white md:grid-cols-4 md:divide-x md:divide-y-0">
            <div className="border-b p-4 md:col-span-2 md:p-6">
              <h3 className="text-balance font-sans text-lg md:text-xl lg:text-2xl">
                Keeping Her <span className="font-medium">Spirit Alive</span> by:
              </h3>
            </div>
            <div className="col-span-1 border-b p-4 md:col-span-2 md:border-r-0 md:p-6">
              <p className="text-balance text-lg md:text-xl lg:text-2xl">At reenalives.org, we aim to:</p>
            </div>
            <div className="p-4 md:p-6">
              <h4 className="mb-3 text-balance font-bold text-xl md:text-2xl">Community Health Support</h4>
              <p className="text-base text-muted-foreground tracking-tight md:text-lg">
                Support community health initiatives in underserved areas.
              </p>
            </div>
            <div className="p-4 md:p-6">
              <h4 className="mb-3 text-balance font-bold text-xl md:text-2xl">Empowering Women in Healthcare</h4>
              <p className="text-base text-muted-foreground tracking-tight md:text-lg">
                Provide scholarships & mentorship for aspiring female healthcare professionals.
              </p>
            </div>
            <div className="p-4 md:p-6">
              <h4 className="mb-3 text-balance font-bold text-xl md:text-2xl">Wellness & Awareness</h4>
              <p className="text-base text-muted-foreground tracking-tight md:text-lg">
                Organize health camps & awareness drives to promote well-being.
              </p>
            </div>
            <div className="p-4 md:p-6">
              <h4 className="mb-3 text-balance font-bold text-xl md:text-2xl">Youth for Change</h4>
              <p className="text-base text-muted-foreground tracking-tight md:text-lg">
                Promote volunteerism & social responsibility among youth.
              </p>
            </div>
          </article>
          <div aria-hidden="true" className="absolute bottom-1.5 left-1.5 z-1 size-1.5 rounded-full bg-white" />
          <div aria-hidden="true" className="absolute right-1.5 bottom-1.5 z-1 size-1.5 rounded-full bg-white" />
          <div aria-hidden="true" className="absolute top-1.5 left-1.5 z-1 size-1.5 rounded-full bg-white" />
          <div aria-hidden="true" className="absolute top-1.5 right-1.5 z-1 size-1.5 rounded-full bg-white" />
        </div>
        <span aria-hidden="true" className="-bottom-1 -left-1 absolute z-1 size-1.5 rounded-full bg-white" />
        <span aria-hidden="true" className="-bottom-1 -right-1 absolute z-1 size-1.5 rounded-full bg-white" />
      </div>
    </section>
  );
};
