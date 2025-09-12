import { IconHands } from "@/assets/icons/hand";
import { IconHandHeart } from "@/assets/icons/hand-heart";

import { Button } from "../ui/button";

export const Donation = () => {
  return (
    <section aria-labelledby="donation-heading" className="scroll-mt-12" id="donation">
      <div className="container relative max-w-7xl border-x px-0 py-12 md:py-16 lg:py-20">
        <h2 className="mb-2 px-4 text-center font-medium font-sans text-xl md:px-0 md:text-2xl" id="donation-heading">
          How You Can Help
        </h2>
        <p className="mb-6 px-6 text-center text-base text-muted-foreground md:px-0 md:text-lg">
          Be Part of Reena’s Legacy
        </p>
        <div className="container relative max-w-5xl">
          <div className="grid grid-cols-1 gap-3 rounded-xl bg-white/70 p-2 backdrop-blur-md md:grid-cols-2 md:p-3">
            <article className="group hover:-translate-y-0.5 flex flex-col justify-between rounded-xl border bg-white p-5 shadow-sm transition-transform duration-200 focus-within:ring-2 focus-within:ring-sky-500">
              <header className="mb-3 flex items-start gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-700 ring-1 ring-sky-200">
                  <IconHandHeart />
                </span>
                <div>
                  <h3 className="text-balance font-bold text-xl md:text-2xl">Volunteer</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Join our outreach programs and health camps.
                  </p>
                </div>
              </header>
              <div className="mt-2">
                <Button
                  className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 font-medium text-sm text-white transition-colors hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                  type="button"
                >
                  Get Involved
                </Button>
              </div>
            </article>
            {/* <article className="group hover:-translate-y-0.5 flex flex-col justify-between rounded-xl border bg-white p-5 shadow-sm transition-transform duration-200 focus-within:ring-2 focus-within:ring-sky-500">
              <header className="mb-3 flex items-start gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200">
                  <IconHeart2 />
                </span>
                <div>
                  <h3 className="text-balance font-bold text-xl md:text-2xl">Donate</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Support our initiatives — from scholarships to medical kits.
                  </p>
                </div>
              </header>
              <div className="mt-2">
                <Button
                  className="inset-shadow-emerald-100/5 inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 font-medium text-sm text-white shadow-emerald-600/25 transition-colors hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  type="button"
                >
                  Make a Gift
                </Button>
              </div>
            </article> */}
            <article className="group hover:-translate-y-0.5 flex flex-col justify-between rounded-xl border bg-white p-5 shadow-sm transition-transform duration-200 focus-within:ring-2 focus-within:ring-sky-500">
              <header className="mb-3 flex items-start gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 ring-1 ring-indigo-200">
                  <IconHands />
                </span>
                <div>
                  <h3 className="text-balance font-bold text-xl md:text-2xl">Partner With Us</h3>
                  <p className="text-muted-foreground text-sm md:text-base">Collaborate on community-based projects.</p>
                </div>
              </header>
              <div className="mt-2">
                <Button
                  className="inset-shadow-indigo-100/5 inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 font-medium text-sm text-white shadow-indigo-600/25 transition-colors hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  type="button"
                >
                  Explore Partnerships
                </Button>
              </div>
            </article>
          </div>
          <div aria-hidden="true" className="absolute bottom-1.5 left-1.5 z-1 size-1.5 rounded-full bg-white" />
          <div aria-hidden="true" className="absolute right-1.5 bottom-1.5 z-1 size-1.5 rounded-full bg-white" />
          <div aria-hidden="true" className="absolute top-1.5 left-1.5 z-1 size-1.5 rounded-full bg-white" />
          <div aria-hidden="true" className="absolute top-1.5 right-1.5 z-1 size-1.5 rounded-full bg-white" />
        </div>
        <p className="mt-6 px-6 text-center text-base md:px-0 md:text-lg">
          Together, we can carry Reena’s light into places it’s needed the most.
        </p>
        <span aria-hidden="true" className="-bottom-1 -left-1 absolute z-1 size-1.5 rounded-full bg-white" />
        <span aria-hidden="true" className="-bottom-1 -right-1 absolute z-1 size-1.5 rounded-full bg-white" />
      </div>
    </section>
  );
};
