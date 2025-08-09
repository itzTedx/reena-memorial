import Image from "next/image";

import { IconHeart } from "@/assets/icons/heart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <header className="bg-sky-100">
        <div className="container relative grid max-w-7xl grid-cols-12 border-x">
          <div className="col-span-7 py-28 pr-24">
            <Badge variant="outline">Empowering People. Enriching Communities.</Badge>
            <h1 className="mt-4 font-sans text-7xl">
              In loving memory of <span className="font-medium text-sky-600">Reena</span>
            </h1>
            <p className="mt-3 text-xl tracking-tight">
              Reena was more than a nurse — she was a friend, a mentor, and a source of hope for everyone she met. Her
              compassion and dedication live on through the lives she touched and the causes she cared about.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <Button>About her story</Button>
              <Button variant="outline">Our Mission</Button>
            </div>
          </div>
          <div className="relative col-span-5 border-l">
            <div className="-top-1 -left-1 absolute z-1999 size-1.5 rounded-full bg-white" />
          </div>
        </div>
      </header>
      <section className="relative bg-gradient-to-b from-50% from-sky-100 to-50% to-background">
        <div className="container relative max-w-7xl border-x px-0 pb-16">
          <div className="relative bg-sky-200 p-2.5">
            <div className="grid grid-cols-12 rounded-2xl bg-white">
              <div className="col-span-5 flex flex-col justify-between border-r p-7">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-red-50" /> <h2>Mrs. Reena</h2>
                </div>
                <p className="text-2xl text-muted-foreground tracking-tight">
                  Reena was more than a nurse - she was a friend, a mentor, and a source of hope for everyone she met.
                  Her compassion and dedication live on through the lives she touched and the causes she cared about.
                </p>
              </div>
              <div className="col-span-4 grid border-r">
                <div className="flex flex-col gap-2 border-b p-7">
                  <div className="size-9 self-end rounded-full bg-sky-100" />
                  <div>
                    <h3 className="text-pretty font-medium font-sans text-xl">
                      Remembering Reena’s Compassionate Care
                    </h3>
                    <p>Honoring a devoted nurse who touched countless lives with kindness and dedication.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-7">
                  <div className="size-9 self-end rounded-full bg-sky-100" />
                  <div>
                    <h3 className="text-pretty font-medium font-sans text-xl">
                      Supporting Nursing Students & Community Causes
                    </h3>
                    <p>Continuing her legacy through scholarships, mentorship, and charitable projects.</p>
                  </div>
                </div>
              </div>
              <div className="col-span-3 flex flex-col justify-between p-7">
                <div className="size-9 self-end rounded-full bg-sky-100" />
                <div>
                  <h3 className="text-pretty font-medium font-sans text-xl">Sharing Memories & Inspiring Hope</h3>
                  <p>A place to celebrate Reena’s life, stories, and the positive impact she made.</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-1.5 left-1.5 z-1 size-1.5 rounded-full bg-white" />
            <div className="absolute right-1.5 bottom-1.5 z-1 size-1.5 rounded-full bg-white" />
            <div className="absolute top-1.5 left-1.5 z-1 size-1.5 rounded-full bg-white" />
            <div className="absolute top-1.5 right-1.5 z-1 size-1.5 rounded-full bg-white" />
          </div>
          <span aria-hidden="true" className="-bottom-1 -left-1 absolute z-1 size-1.5 rounded-full bg-white" />
          <span aria-hidden="true" className="-bottom-1 -right-1 absolute z-1 size-1.5 rounded-full bg-white" />
        </div>
      </section>
      <Separator />
      <section className="relative mx-auto max-w-7xl scroll-mt-12 border-x py-20" id="story">
        <div className="container grid grid-cols-3 gap-3">
          <div>
            <Badge>About Her Story</Badge>
          </div>
          <div className="col-span-2">
            <h2 className="text-xl">Healing Hands, Warm Hearts</h2>
            <p className="mt-3 whitespace-pre-line font-light font-sans text-3xl text-sky-950/80 leading-relaxed">
              <span className="font-medium text-sky-950">
                Reena dedicated her life to caring for others. As a nurse, she went beyond her professional duties
              </span>{" "}
              - offering comfort, a listening ear, and a reassuring smile to patients and families during their most
              difficult moments.
              <br />
              <br />
              Born with a heart for service, she believed that even the smallest act of kindness could make a
              difference. Whether she was working long hours in the hospital, mentoring new nursing students, or simply
              visiting a neighbour in need, Reena lived a life guided by compassion.
            </p>
          </div>
        </div>
        <div className="mt-20 text-pretty rounded-3xl bg-muted-foreground p-20 text-center font-sans text-3xl text-muted leading-relaxed">
          <Badge className="font-light text-base text-muted tracking-wide" variant="outline">
            Remembered with <IconHeart className="!size-6 shrink-0" />
          </Badge>
          <p>
            She is remembered not only for her skill and dedication but for her warmth, humility, and the way she made
            everyone feel seen and valued. Her legacy continues to inspire those who knew her and those who hear her
            story.
          </p>
        </div>
        <span aria-hidden="true" className="-bottom-1 -left-1 absolute z-1 size-1.5 rounded-full bg-white" />
        <span aria-hidden="true" className="-bottom-1 -right-1 absolute z-1 size-1.5 rounded-full bg-white" />
      </section>
      <Separator />
      <section className="scroll-mt-12" id="mission">
        <div className="container relative max-w-7xl border-x px-0 py-20">
          <h2 className="mb-6 text-center font-medium font-sans text-2xl">Mission & Causes</h2>
          <div className="relative bg-sky-200 p-2.5">
            <div className="grid grid-cols-12 rounded-2xl bg-white">
              <div className="col-span-5 flex flex-col justify-between border-r p-7">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-red-50" /> <h2>Mrs. Reena</h2>
                </div>
                <p className="text-2xl text-muted-foreground tracking-tight">
                  Reena was more than a nurse - she was a friend, a mentor, and a source of hope for everyone she met.
                  Her compassion and dedication live on through the lives she touched and the causes she cared about.
                </p>
              </div>
              <div className="col-span-4 grid border-r">
                <div className="flex flex-col gap-2 border-b p-7">
                  <div className="size-9 self-end rounded-full bg-sky-100" />
                  <div>
                    <h3 className="text-pretty font-medium font-sans text-xl">
                      Remembering Reena’s Compassionate Care
                    </h3>
                    <p>Honoring a devoted nurse who touched countless lives with kindness and dedication.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-7">
                  <div className="size-9 self-end rounded-full bg-sky-100" />
                  <div>
                    <h3 className="text-pretty font-medium font-sans text-xl">
                      Supporting Nursing Students & Community Causes
                    </h3>
                    <p>Continuing her legacy through scholarships, mentorship, and charitable projects.</p>
                  </div>
                </div>
              </div>
              <div className="col-span-3 flex flex-col justify-between p-7">
                <div className="size-9 self-end rounded-full bg-sky-100" />
                <div>
                  <h3 className="text-pretty font-medium font-sans text-xl">Sharing Memories & Inspiring Hope</h3>
                  <p>A place to celebrate Reena’s life, stories, and the positive impact she made.</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-1.5 left-1.5 z-1 size-1.5 rounded-full bg-white" />
            <div className="absolute right-1.5 bottom-1.5 z-1 size-1.5 rounded-full bg-white" />
            <div className="absolute top-1.5 left-1.5 z-1 size-1.5 rounded-full bg-white" />
            <div className="absolute top-1.5 right-1.5 z-1 size-1.5 rounded-full bg-white" />
          </div>
          <span aria-hidden="true" className="-bottom-1 -left-1 absolute z-1 size-1.5 rounded-full bg-white" />
          <span aria-hidden="true" className="-bottom-1 -right-1 absolute z-1 size-1.5 rounded-full bg-white" />
        </div>
      </section>
      <Separator />
      <section>
        <div className="container relative max-w-7xl border-x px-0 py-20">
          <div className="container grid grid-cols-2 gap-2">
            <div className="grid gap-2">
              <div className="grid h-fit grid-cols-2 gap-2">
                <div className="relative aspect-6/4 overflow-hidden rounded-xl">
                  <Image alt="Reena" className="object-cover" fill src="/images/happy-person.webp" />
                </div>
                <div className="relative aspect-6/4 overflow-hidden rounded-xl">
                  <Image alt="Reena" className="object-cover" fill src="/images/nurse.webp" />
                </div>
              </div>
              <div className="rounded-xl bg-white p-10">
                <Badge>Photo Gallery</Badge>
                <h2 className="mt-3 text-pretty font-light font-sans text-4xl">
                  A collection of <br />
                  <span className="font-medium">Cherished memories</span>
                </h2>
                <p className="mt-3 text-balance text-lg tracking-tight">
                  From moments at work in her nursing uniform to time spent with family, friends, and the community she
                  loved serving.
                  <br />
                  Through these images, we celebrate not only her professional dedication but also her warmth, joy, and
                  vibrant spirit.
                </p>
                <Button className="mt-6">View gallery</Button>
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative aspect-7/4 overflow-hidden rounded-xl">
                <Image alt="Reena" className="object-cover" fill src="/images/caring.webp" />
              </div>

              <div className="flex gap-2">
                <div className="overflow-hidden rounded-xl">
                  <Image alt="Reena" height={247} src="/images/mother.webp" width={357} />
                </div>
                <div className="overflow-hidden rounded-xl">
                  <Image alt="Reena" height={247} src="/images/family.webp" width={215} />
                </div>
              </div>
            </div>
          </div>
          <span aria-hidden="true" className="-bottom-1 -left-1 absolute z-1 size-1.5 rounded-full bg-white" />
          <span aria-hidden="true" className="-bottom-1 -right-1 absolute z-1 size-1.5 rounded-full bg-white" />
        </div>
      </section>
      <Separator />
    </main>
  );
}
