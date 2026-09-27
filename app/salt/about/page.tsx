import type { Metadata } from "next";
import { salt } from "@/config/salt";
import { makeMetadata } from "@/lib/metadata";
import { SaltInteriorHero } from "@/components/salt/SaltInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `About — ${salt.name}`,
  description: "The company behind the salt works — history, approach and operating principles.",
  path: "/salt/about",
  image: salt.metadata.ogImage,
  keywords: salt.metadata.keywords,
});

export default function SaltAboutPage() {
  return (
    <>
      <SaltInteriorHero
        eyebrow="About the works"
        title="A mineral business, built on a mountain."
        current="About"
        lead={salt.intro.body}
      />

      <Section ariaLabel="Company profile" className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="space-y-5 text-[1.02rem] leading-8 text-ink lg:col-span-7">
              <p>{salt.intro.body}</p>
              <p className="text-muted-var">{salt.intro.bodySecondary}</p>
              <p className="text-muted-var">
                The works runs under a simple rule: ownership from mine to market. What we cannot
                control, we do not claim — and what we do control, we warrant in writing on every
                load.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="card h-full bg-brand text-white">
                <h2 className="font-display text-2xl font-medium text-white">Boring on purpose.</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  Three commitments that decide every other decision in the plant.
                </p>
                <ul className="mt-7 grid gap-4">
                  {salt.intro.points.map((point, i) => (
                    <li key={point.title} className="flex gap-4 border-t border-white/15 pt-4">
                      <span className="font-display text-xl font-medium text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">{point.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-white/70">{point.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-[var(--grid-gap)] md:grid-cols-3">
            {salt.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={(i % 3) * 0.08} className="card card-lift">
                <p className="font-display text-3xl font-medium text-brand">
                  {stat.value}
                  {stat.suffix ? <span className="text-accent">{stat.suffix}</span> : null}
                </p>
                <p className="mt-2 text-sm text-muted-var">{stat.label}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <div className="card flex flex-col gap-5 bg-brand-faint sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-relaxed text-muted-var">
                Want the plant, the lab or the mine face? Ask for a visit and we will show you.
              </p>
              <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand">
                <Icon name="crystal" className="h-4 w-4" />
                {salt.contact.email}
              </span>
            </div>
          </Reveal>

          {salt.placeholderNote ? <PlaceholderNotice note={salt.placeholderNote} className="mt-8" /> : null}
        </Container>
      </Section>
    </>
  );
}
