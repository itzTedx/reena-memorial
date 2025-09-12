export const Overview = () => {
  return (
    <section
      aria-labelledby="overview-heading"
      className="relative bg-gradient-to-b from-50% from-sky-100 to-50% to-background"
    >
      <div className="container relative max-w-7xl border-x px-0 pb-8 md:pb-12 lg:pb-16">
        <h2 className="sr-only" id="overview-heading">
          Overview of Reena's Impact and Legacy
        </h2>
        <div className="relative mx-2 bg-sky-200 p-2.5 md:mx-0">
          <article className="grid grid-cols-1 rounded-2xl bg-white lg:grid-cols-12">
            <div className="col-span-1 flex flex-col justify-between border-b p-4 md:p-6 lg:col-span-5 lg:border-r lg:border-b-0 lg:p-7">
              <div className="flex items-center gap-2">
                <div aria-hidden="true" className="size-6 rounded-full bg-red-50" />
                <h3 className="font-medium">Mrs. Reena</h3>
              </div>
              <p className="mt-4 text-lg text-muted-foreground tracking-tighter md:text-xl lg:mt-0 lg:text-2xl">
                Reena was more than a nurse - she was a friend, a mentor, and a source of hope for everyone she met. Her
                compassion and dedication live on through the lives she touched and the causes she cared about.
              </p>
            </div>
            <div className="col-span-1 grid border-b lg:col-span-4 lg:border-r lg:border-b-0">
              <article className="flex flex-col gap-2 border-b p-4 md:p-6 lg:p-7">
                <div aria-hidden="true" className="size-9 self-end rounded-full bg-sky-100" />
                <div>
                  <h4 className="text-pretty font-medium font-sans text-lg md:text-xl">
                    Remembering Reena's Compassionate Care
                  </h4>
                  <p className="text-sm md:text-base">
                    Honoring a devoted nurse who touched countless lives with kindness and dedication.
                  </p>
                </div>
              </article>
              <article className="flex flex-col gap-2 p-4 md:p-6 lg:p-7">
                <div aria-hidden="true" className="size-9 self-end rounded-full bg-sky-100" />
                <div>
                  <h4 className="text-pretty font-medium font-sans text-lg md:text-xl">
                    Supporting Nursing Students & Community Causes
                  </h4>
                  <p className="text-sm md:text-base">
                    Continuing her legacy through scholarships, mentorship, and charitable projects.
                  </p>
                </div>
              </article>
            </div>
            <article className="col-span-1 flex flex-col justify-between p-4 md:p-6 lg:col-span-3 lg:p-7">
              <div aria-hidden="true" className="size-9 self-end rounded-full bg-sky-100" />
              <div className="mt-4 lg:mt-0">
                <h4 className="text-pretty font-medium font-sans text-lg md:text-xl">
                  Sharing Memories & Inspiring Hope
                </h4>
                <p className="text-sm md:text-base">
                  A place to celebrate Reena's life, stories, and the positive impact she made.
                </p>
              </div>
            </article>
          </article>
          <div aria-hidden="true" className="absolute bottom-1.5 left-1.5 z-1 size-1.5 rounded-full bg-white" />
          <div aria-hidden="true" className="absolute right-1.5 bottom-1.5 z-1 size-1.5 rounded-full bg-white" />
          <div aria-hidden="true" className="absolute top-1.5 left-1.5 z-1 size-1.5 rounded-full bg-white" />
          <div aria-hidden="true" className="absolute top-1.5 right-1.5 z-1 size-1.5 rounded-full bg-white" />
        </div>
        <span aria-hidden="true" className="-bottom-1 -left-1 absolute z-1 size-1.5 rounded-full bg-white" />
        <span aria-hidden="true" className="-bottom-1 -right-1 absolute z-1 size-1.5 rounded-full bg-white" />
      </div>
    </section>
  );
};
