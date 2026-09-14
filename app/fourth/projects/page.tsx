import type { Metadata } from "next";
import { fourth } from "@/config/fourth";
import { makeMetadata } from "@/lib/metadata";
import { FourthInteriorHero } from "@/components/fourth/FourthInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `Projects & Supply Runs — ${fourth.name}`,
  description: "Supply runs across paving works, batching plants and agencies — placeholder reference list.",
  path: "/fourth/projects",
  image: fourth.metadata.ogImage,
  keywords: fourth.metadata.keywords,
});

export default function FourthProjectsPage() {
  return (
    <>
      <FourthInteriorHero
        eyebrow="Projects & supply runs"
        title="Schedules we keep, met in tonnes."
        current="Projects"
        lead="Project details are placeholders — replace with the supply house’s actual reference list before going live."
      />
      <Section ariaLabel="Supply runs" className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 border-t border-line-var lg:grid-cols-2">
            {fourth.projects?.map((project, i) => (
              <Reveal key={project.title} delay={(i % 2) * 0.1} className="flex flex-col justify-between border border-line-var bg-white p-8">
                <div>
                  <p className="font-eyebrow text-muted-var">{project.client}</p>
                  <h2 className="mt-1 font-display text-2xl font-semibold text-ink">{project.title}</h2>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-muted-var">{project.body}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-brand-faint px-2.5 py-1 text-xs uppercase text-muted-var">{tag}</span>
                    ))}
                  </div>
                </div>
                {project.stat ? (
                  <p className="mt-6 flex items-baseline gap-3 border-t border-line-var pt-4">
                    <Icon name="truck" className="h-5 w-5 text-[#C9A227]" />
                    <span className="font-display text-3xl font-semibold text-ink">{project.stat.value}<span className="text-[#C9A227]">{project.stat.suffix}</span></span>
                    <span className="text-sm text-muted-var">{project.stat.label}</span>
                  </p>
                ) : null}
              </Reveal>
            )) ?? null}
          </div>
          {fourth.placeholderNote ? <PlaceholderNotice note={fourth.placeholderNote} className="mt-8" /> : null}
        </Container>
      </Section>
    </>
  );
}