import Link from "next/link";

import { IconHeart } from "@/assets/icons/heart";

import { ContactForm } from "../contact-form";
import { Badge } from "../ui/badge";

export function Footer() {
  return (
    <footer className="overflow-hidden bg-sky-100" role="contentinfo">
      <div className="container relative max-w-7xl border-x pb-12 md:pb-16 lg:pb-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 lg:grid-cols-3 lg:gap-14 lg:px-0">
          <section
            aria-labelledby="footer-message-heading"
            className="flex flex-col justify-center gap-4 text-center md:gap-6 lg:text-left"
          >
            <Badge className="self-center tracking-wide lg:self-start" variant="outline">
              Remembered with <IconHeart aria-label="heart symbol" className="!size-4 md:!size-6 shrink-0" />
            </Badge>
            <h2 className="font-light font-sans text-2xl md:text-3xl" id="footer-message-heading">
              Keep Reena's spirit alive by <span className="font-medium">making a difference</span> in other's lives.
            </h2>
          </section>
          <section
            aria-labelledby="contact-section-heading"
            className="relative col-span-1 bg-sky-200 p-2.5 lg:col-span-2 lg:ml-12"
          >
            <div className="rounded-2xl bg-white">
              <header className="border-b p-4 text-center md:p-6">
                <h3 className="font-sans text-lg md:text-xl" id="contact-section-heading">
                  We welcome your stories, tributes, and messages of support.
                </h3>
                <p className="mt-2 text-balance text-sm md:text-base" id="contact-description">
                  Whether you'd like to share a memory of Reena, learn more about our initiatives, or find out how to
                  contribute, please reach out.
                </p>
              </header>
              <div
                aria-describedby="contact-description"
                aria-labelledby="contact-section-heading"
                className="p-4 md:p-6 lg:p-8"
              >
                <ContactForm />
              </div>
              <div aria-hidden="true" className="absolute bottom-1.5 left-1.5 z-1 size-1.5 rounded-full bg-white" />
              <div aria-hidden="true" className="absolute right-1.5 bottom-1.5 z-1 size-1.5 rounded-full bg-white" />
              <div aria-hidden="true" className="absolute top-1.5 left-1.5 z-1 size-1.5 rounded-full bg-white" />
              <div aria-hidden="true" className="absolute top-1.5 right-1.5 z-1 size-1.5 rounded-full bg-white" />
            </div>
          </section>
        </div>
        <span aria-hidden="true" className="-bottom-1 -left-1 absolute z-1 size-1.5 rounded-full bg-white" />
        <span aria-hidden="true" className="-bottom-1 -right-1 absolute z-1 size-1.5 rounded-full bg-white" />
      </div>
      <div aria-label="Footer credits section" className="border-t">
        <div className="container relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 border-x px-4 py-4 text-center md:flex-row md:gap-0 md:text-left lg:px-0">
          <p className="text-sm md:text-base">
            <span aria-label="Copyright symbol">©</span> 2025 Reena Memorial - Honoring a life of care and compassion.
          </p>
          <p className="text-sm md:text-base">
            Website designed & developed by{" "}
            <Link
              aria-label="Visit Ziron Media website (opens in new tab)"
              className="rounded underline hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
              href="https://www.zironmedia.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Ziron Media
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
