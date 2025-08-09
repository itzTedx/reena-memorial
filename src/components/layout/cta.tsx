import Image from "next/image";

export function Cta() {
  return (
    <section className="bg-gradient-to-b from-50% from-background to-50% to-sky-100">
      <div className="container relative max-w-7xl border-x px-0 py-20">
        <div className="container relative max-w-5xl overflow-hidden rounded-3xl bg-sky-500 py-12">
          <p className="relative z-10 max-w-md text-pretty p-9 font-light font-sans text-4xl text-primary-foreground leading-snug">
            Together, we can make life <span className="font-medium">kinder and happier,</span> as Reena always did.
          </p>
          <div className="absolute inset-0 z-1 bg-gradient-to-r from-25% from-sky-500 to-85% to-transparent" />
          <Image alt="" className="object-cover" fill src="/images/cta-bg.webp" />
        </div>
      </div>
    </section>
  );
}
