import Link from "next/link";

import { Logo, LogoWordMark } from "@/assets/logo";

import { Button } from "../ui/button";

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container relative mx-auto flex max-w-7xl items-center justify-between border-x py-2">
        <div className="flex items-center gap-2">
          <Logo />
          <LogoWordMark />
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="#story">Her Story</Link>
          </li>
          <li>
            <Link href="#mission">Mission</Link>
          </li>
          <li>
            <Link href="/gallery">Photo Gallery</Link>
          </li>
        </ul>
        <Button>Contact</Button>
        <span aria-hidden="true" className="-bottom-1 -left-1 absolute size-1.5 rounded-full bg-white" />
        <span aria-hidden="true" className="-bottom-1 -right-1 absolute size-1.5 rounded-full bg-white" />
      </div>
    </nav>
  );
}
