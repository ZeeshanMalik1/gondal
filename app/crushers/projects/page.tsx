import type { Metadata } from "next";
import { crushers } from "@/config/crushers";
import { makeMetadata } from "@/lib/metadata";
import { CrushersInteriorHero } from "@/components/crushers/CrushersInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `Projects — ${crushers.name}`,
  description: "Supply projects across roads, concrete, structures and rail — placeholder project list.",
  path: "/crushers/projects",
  image: crushers.metadata.ogImage,
  keywords: crushers.metadata.keywords,
});

export default function CrushersProjectsPage() {
  return (
    <>
      <CrushersInteriorHero eyebrow="Projects" title="WORK IN THE GROUND SPEAKS LOUDER." current="Projects" lead="Project details are placeholders — replace with the works’ actual reference list before going live." />
      <Section ariaLabel="Project list" className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 border-t border-line-var lg:grid-cols-2">
            {crushers.projects?.map((project, i) => (
              <Reveal key={project.title} delay={(i % 2) * 0.1} className="flex flex-col justify-between border border-line-var bg-white p-8">
                <div>
                  <p className="font-eyebrow text-muted-var">{project.client}</p>
                  <h2 className="mt-1 font-display text-2xl font-bold uppercase text-ink">{project.title}</h2>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-muted-var">{project.body}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-[#F6F7F5] px-2.5 py-1 text-xs uppercase text-muted-var">{tag}</span>
                    ))}
                  </div>
                </div>
                {project.stat ? (
                  <p className="mt-6 flex items-baseline gap-3 border-t border-line-var pt-4">
                    <Icon name="gauge" className="h-5 w-5 text-[#E4A11B]" />
                    <span className="font-display text-3xl font-bold text-ink">{project.stat.value}<span className="text-[#E4A11B]">{project.stat.suffix}</span></span>
                    <span className="text-sm text-muted-var">{project.stat.label}</span>
                  </p>
                ) : null}
              </Reveal>
            )) ?? null}
          </div>
          {crushers.placeholderNote ? <PlaceholderNotice note={crushers.placeholderNote} className="mt-8" /> : null}
        </Container>
      </Section>
    </>
  );
}