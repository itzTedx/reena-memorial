import Link from "next/link";

import { IconHeart } from "@/assets/icons/heart";

import { Badge } from "../ui/badge";

export function Footer() {
  return (
    <footer className="bg-sky-100">
      <div className="container relative max-w-7xl border-x py-2">
        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-3">
          <div>
            <Badge className="font-light text-base text-muted tracking-wide" variant="outline">
              Remembered with <IconHeart className="!size-6 shrink-0" />
            </Badge>
            <p className="font-light font-sans text-3xl">
              Keep Reena’s spirit alive by <span className="font-medium">making a difference</span> in other’s lives.
            </p>
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
