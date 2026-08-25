import { WaitlistModalButton } from "@/components/ui/waitlistmodal";
import { Section, headingClass } from "@/components/basic/primitives";

export function BasicCTA() {
  return (
    <Section tone="dark" className="lg:py-36">
      <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <h2 className={`max-w-[640px] ${headingClass} text-white`}>
          Ready to see what happens when you&apos;re not in the car?
        </h2>
        <WaitlistModalButton className="h-[46px] shrink-0 rounded-full bg-white px-6 text-[13.5px] font-medium text-[#0c0a09] hover:bg-white/90" />
      </div>
    </Section>
  );
}
