import { aboutDetails } from "@/data/about";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto flex min-h-screen w-[90vw] flex-col items-center py-40 md:w-[45rem] lg:w-[50rem]"
    >
      <div className="bg-surface dark:border-surface-border self-start rounded-lg p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:border dark:shadow-none">
        <p className="text-muted-foreground text-xs">
          {aboutDetails.sectionLabel}
        </p>
      </div>

      <div className="mt-5 flex w-full flex-col items-center justify-center gap-5">
        <h1 className="text-muted-foreground text-xl font-semibold md:text-2xl">
          {aboutDetails.description}
        </h1>

        <div className="flex h-[30rem] w-full flex-col items-center gap-4 md:h-[6rem] md:flex-row">
          {aboutDetails.features.map((item, idx) => (
            <div
              key={idx}
              className="bg-muted-surface border-muted-surface-border flex h-full w-[15rem] flex-col items-center justify-center gap-3 rounded-2xl border md:w-full"
            >
              {item.icon}
              <p className="text-sm font-semibold">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 h-[30rem] max-h-[30rem] w-full">
          <video
            src={aboutDetails.videoSrc}
            className="border-muted-surface-border h-full w-full rounded-4xl border-[7px] object-cover"
            loop
            autoPlay
            playsInline
            muted
          />
        </div>
      </div>
    </section>
  );
}
