import Link from "next/link";

import { Logo, LogoWordMark } from "@/assets/logo";

import { Button } from "../ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-999 border-b bg-sky-100/60 backdrop-blur-3xl">
      <div className="container relative mx-auto flex max-w-7xl items-center justify-between border-x py-2">
        <Link className="flex items-center gap-2" href="/">
          <Logo />
          <LogoWordMark />
        </Link>
        <ul className="flex items-center gap-2 font-medium font-sans">
          <li>
            <Link className="rounded-md px-4 py-2.5 transition-colors hover:bg-white" href="/#story">
              Her Story
            </Link>
          </li>
          <li>
            <Link className="rounded-md px-4 py-2.5 transition-colors hover:bg-white" href="/#mission">
              Mission
            </Link>
          </li>
          <li>
            <Link className="rounded-md px-4 py-2.5 transition-colors hover:bg-white" href="/gallery">
              Photo Gallery
            </Link>
          </li>
        </ul>
        <Button className="rounded-full border-sky-200 border-b bg-gradient-to-b from-sky-700 to-sky-900">
          Contact
        </Button>
        <span aria-hidden="true" className="-bottom-1 -left-1 absolute z-1 size-1.5 rounded-full bg-white" />
        <span aria-hidden="true" className="-bottom-1 -right-1 absolute z-1 size-1.5 rounded-full bg-white" />
      </div>
    </nav>
  );
}
