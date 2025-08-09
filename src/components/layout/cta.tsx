import Image from "next/image";

export function Cta() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-gradient-to-b from-50% from-background to-50% to-sky-100"
      role="region"
    >
      <div className="container relative max-w-7xl border-x px-4 py-12 md:px-0 md:py-16 lg:py-20">
        <article className="container relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-sky-500 py-8 max-md:px-2 md:py-10 lg:py-12">
          <div className="relative z-10">
            <h2 className="sr-only" id="cta-heading">
              Call to Action - Continue Reena's Legacy
            </h2>
            <p className="max-w-md text-pretty p-6 font-light font-sans text-2xl text-primary-foreground leading-snug md:p-8 md:text-3xl lg:p-9 lg:text-4xl">
              Together, we can make life <span className="font-medium">kinder and happier,</span> as Reena always did.
            </p>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 z-1 bg-gradient-to-r from-25% from-sky-500 to-85% to-transparent"
          />
          <Image
            alt="Background image showing the community and caring environment that Reena helped create"
            aria-describedby="cta-image-desc"
            className="object-cover"
            fill
            role="img"
            src="/images/cta-bg.webp"
          />
        </article>
      </div>
    </section>
  );
}
