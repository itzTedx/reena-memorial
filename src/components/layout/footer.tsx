import Link from "next/link";

import { IconHeart } from "@/assets/icons/heart";

import { ContactForm } from "../contact-form";
import { Badge } from "../ui/badge";

export function Footer() {
  return (
    <footer className="bg-sky-100">
      <div className="container relative max-w-7xl border-x pb-20">
        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-14">
          <div className="flex flex-col justify-center gap-6">
            <Badge className="tracking-wide" variant="outline">
              Remembered with <IconHeart className="!size-6 shrink-0" />
            </Badge>
            <h2 className="font-light font-sans text-3xl">
              Keep Reena’s spirit alive by <span className="font-medium">making a difference</span> in other’s lives.
            </h2>
          </div>
          <div className="relative col-span-2 ml-12 bg-sky-200 p-2.5">
            <div className="rounded-2xl bg-white">
              <div className="border-b p-4 text-center">
                <h3 className="font-sans text-xl">We welcome your stories, tributes, and messages of support.</h3>
                <p className="text-balance text-sm">
                  Whether you’d like to share a memory of Reena, learn more about our initiatives, or find out how to
                  contribute, please reach out.
                </p>
              </div>
              <div className="p-8">
                <ContactForm />
              </div>
              <div className="absolute bottom-1.5 left-1.5 z-1 size-1.5 rounded-full bg-white" />
              <div className="absolute right-1.5 bottom-1.5 z-1 size-1.5 rounded-full bg-white" />
              <div className="absolute top-1.5 left-1.5 z-1 size-1.5 rounded-full bg-white" />
              <div className="absolute top-1.5 right-1.5 z-1 size-1.5 rounded-full bg-white" />
            </div>
          </div>
        </div>
        <span aria-hidden="true" className="-bottom-1 -left-1 absolute z-1 size-1.5 rounded-full bg-white" />
        <span aria-hidden="true" className="-bottom-1 -right-1 absolute z-1 size-1.5 rounded-full bg-white" />
      </div>
      <div className="border-t">
        <div className="container relative mx-auto flex max-w-7xl items-center justify-between border-x py-4">
          <p>© 2025 Reena Memorial - Honoring a life of care and compassion.</p>
          <p>
            Website designed & developed by <Link href="https://www.zironmedia.com">Ziron Media</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
