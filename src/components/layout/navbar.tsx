import Link from "next/link";

import { MenuIcon } from "lucide-react";

import { Logo, LogoWordMark } from "@/assets/logo";

import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

export function Navbar() {
  return (
    <>
      {/* Skip to main content link for screen readers */}
      <Link
        className="sr-only z-[1000] rounded-md border bg-white px-4 py-2 shadow-lg focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
        href="#main-content"
      >
        Skip to main content
      </Link>

      <nav
        aria-label="Main navigation"
        className="sticky top-0 z-999 overflow-x-clip border-b bg-sky-100/60 backdrop-blur-3xl"
        role="navigation"
      >
        <div className="container relative mx-auto flex max-w-7xl items-center justify-between border-x px-4 py-2 lg:px-0">
          <Link
            aria-label="Reena Memorial - Home"
            className="flex items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
            href="/"
          >
            <Logo />
            <div className="hidden sm:block">
              <LogoWordMark />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-2 font-medium font-sans md:flex" role="menubar">
            <li role="none">
              <Link
                aria-describedby="story-desc"
                className="rounded-md px-4 py-2.5 transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
                href="/#story"
                role="menuitem"
              >
                Her Story
              </Link>
              <span className="sr-only" id="story-desc">
                Learn about Reena's life and legacy
              </span>
            </li>
            <li role="none">
              <Link
                aria-describedby="mission-desc"
                className="rounded-md px-4 py-2.5 transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
                href="/#mission"
                role="menuitem"
              >
                Mission
              </Link>
              <span className="sr-only" id="mission-desc">
                Discover our mission and causes
              </span>
            </li>
            <li role="none">
              <Link
                aria-describedby="gallery-desc"
                className="rounded-md px-4 py-2.5 transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
                href="/gallery"
                role="menuitem"
              >
                Photo Gallery
              </Link>
              <span className="sr-only" id="gallery-desc">
                View photos and memories of Reena
              </span>
            </li>
          </ul>

          {/* Desktop Contact Button */}
          <Button aria-label="Contact us" className="hidden md:block">
            Contact
          </Button>

          {/* Mobile Sheet Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                aria-controls="mobile-menu"
                aria-expanded="false"
                aria-label="Open navigation menu"
                className="md:hidden"
                size="icon"
                variant="outline"
              >
                <MenuIcon aria-hidden="true" className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              aria-describedby="mobile-menu-desc"
              aria-labelledby="mobile-menu-title"
              className="z-9999 w-80 bg-sky-100/95 backdrop-blur-3xl"
              id="mobile-menu"
              side="right"
            >
              <SheetHeader>
                <SheetTitle className="text-left font-sans text-xl" id="mobile-menu-title">
                  Navigation Menu
                </SheetTitle>
                <p className="sr-only" id="mobile-menu-desc">
                  Mobile navigation menu with links to main sections of the website
                </p>
              </SheetHeader>
              <nav aria-label="Mobile navigation" className="mt-4 flex flex-col gap-2 px-4 font-sans" role="navigation">
                <SheetClose asChild>
                  <Link
                    aria-describedby="mobile-story-desc"
                    className="flex items-center rounded-lg px-4 py-3 font-medium text-lg transition-colors hover:bg-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
                    href="/#story"
                  >
                    Her Story
                  </Link>
                </SheetClose>
                <span className="sr-only" id="mobile-story-desc">
                  Learn about Reena's life and legacy
                </span>

                <SheetClose asChild>
                  <Link
                    aria-describedby="mobile-mission-desc"
                    className="flex items-center rounded-lg px-4 py-3 font-medium text-lg transition-colors hover:bg-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
                    href="/#mission"
                  >
                    Mission
                  </Link>
                </SheetClose>
                <span className="sr-only" id="mobile-mission-desc">
                  Discover our mission and causes
                </span>

                <SheetClose asChild>
                  <Link
                    aria-describedby="mobile-gallery-desc"
                    className="flex items-center rounded-lg px-4 py-3 font-medium text-lg transition-colors hover:bg-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
                    href="/gallery"
                  >
                    Photo Gallery
                  </Link>
                </SheetClose>
                <span className="sr-only" id="mobile-gallery-desc">
                  View photos and memories of Reena
                </span>

                <div className="border-sky-200 border-t pt-4">
                  <SheetClose asChild>
                    <Button aria-label="Contact us" className="w-full">
                      Contact
                    </Button>
                  </SheetClose>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          <span aria-hidden="true" className="-bottom-1 -left-1 absolute z-1 size-1.5 rounded-full bg-white" />
          <span aria-hidden="true" className="-bottom-1 -right-1 absolute z-1 size-1.5 rounded-full bg-white" />
        </div>
      </nav>
    </>
  );
}
