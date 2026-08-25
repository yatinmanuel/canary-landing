import { container } from "@/components/basic/primitives";

/* Compatibility is a standard, not a per-brand certification: the docs record
   the target as post-2009 vehicles speaking CAN over OBD-II (ISO 15765-4), which
   has been mandatory on cars sold in the US since 2008. These names illustrate
   that range. None of them is a tested-and-certified claim, which is why the
   caption talks about the standard rather than promising any one make.

   Deliberately absent: Tesla, Rivian, Lucid and other EV-only makes. The OBD-II
   diagnostic mandate covers emissions, so EVs are not required to expose the
   standard PID set, and Tesla does not use a standard OBD-II connector at all.
   Confirm on a real vehicle before adding any of them. */
type Brand = { name: string; logo?: string };

/* Two sources, both permissively licensed, both rewritten to a single fill and a
   viewBox cropped to the artwork's real bounding box. That crop is what lets the
   row size on height: a 24x24 box padded a wide oval and a tall crest by different
   amounts, so identical box sizes produced visibly different marks.

   Simple Icons (CC0-1.0) covers most of these. car-makes-icons (MIT, Dan G Nelson)
   fills the gaps Simple Icons has no mark for: Mercedes-Benz, Lexus, Dodge, GMC,
   Land Rover, Genesis, Lotus, Alfa Romeo, Jaguar and RAM.

   The brands are trademarks of their owners and appear here to state
   compatibility, nothing more.

   Ordered so the exotics are spread through the row rather than clumped, since
   the marquee only ever shows a slice of it at a time. */
const brands: Brand[] = [
  { name: "Toyota", logo: "/brands/toyota.svg" },
  { name: "BMW", logo: "/brands/bmw.svg" },
  { name: "Porsche", logo: "/brands/porsche.svg" },
  { name: "Honda", logo: "/brands/honda.svg" },
  { name: "Lamborghini", logo: "/brands/lamborghini.svg" },
  { name: "Ford", logo: "/brands/ford.svg" },
  { name: "Mercedes-Benz", logo: "/brands/mercedes.svg" },
  { name: "Audi", logo: "/brands/audi.svg" },
  { name: "Ferrari", logo: "/brands/ferrari.svg" },
  { name: "Nissan", logo: "/brands/nissan.svg" },
  { name: "Lexus", logo: "/brands/lexus.svg" },
  { name: "McLaren", logo: "/brands/mclaren.svg" },
  { name: "Chevrolet", logo: "/brands/chevrolet.svg" },
  { name: "Subaru", logo: "/brands/subaru.svg" },
  { name: "Aston Martin", logo: "/brands/astonmartin.svg" },
  { name: "Volkswagen", logo: "/brands/volkswagen.svg" },
  { name: "Dodge", logo: "/brands/dodge.svg" },
  { name: "Mazda", logo: "/brands/mazda.svg" },
  { name: "Maserati", logo: "/brands/maserati.svg" },
  { name: "Hyundai", logo: "/brands/hyundai.svg" },
  { name: "Jaguar", logo: "/brands/jaguar.svg" },
  { name: "Jeep", logo: "/brands/jeep.svg" },
  { name: "Bentley", logo: "/brands/bentley.svg" },
  { name: "Kia", logo: "/brands/kia.svg" },
  { name: "Land Rover", logo: "/brands/landrover.svg" },
  { name: "Acura", logo: "/brands/acura.svg" },
  { name: "Lotus", logo: "/brands/lotus.svg" },
  { name: "Rolls-Royce", logo: "/brands/rollsroyce.svg" },
  { name: "Volvo", logo: "/brands/volvo.svg" },
  { name: "GMC", logo: "/brands/gmc.svg" },
  { name: "Infiniti", logo: "/brands/infiniti.svg" },
  { name: "Alfa Romeo", logo: "/brands/alfaromeo.svg" },
  { name: "Bugatti", logo: "/brands/bugatti.svg" },
  { name: "Cadillac", logo: "/brands/cadillac.svg" },
  { name: "Genesis", logo: "/brands/genesis.svg" },
  { name: "Mitsubishi", logo: "/brands/mitsubishi.svg" },
  { name: "RAM", logo: "/brands/ram.svg" },
  { name: "Chrysler", logo: "/brands/chrysler.svg" },
  { name: "Suzuki", logo: "/brands/suzuki.svg" },
  { name: "Koenigsegg", logo: "/brands/koenigsegg.svg" },
  { name: "Mini", logo: "/brands/mini.svg" },
];

function BrandMark({ brand }: { brand: Brand }) {
  /* Height is what makes a logo row read as even, so every mark is set to the
     same height and takes its width from the cropped viewBox. `max-w` catches the
     wordmark-shaped ones (McLaren, Chrysler, GMC) — without it a 6:1 mark would
     run six times the width of a crest and swamp the row; with it, they cap on
     width and sit slightly shorter, which is how a real logo row behaves.
     eslint-disable-next-line @next/next/no-img-element: these are small local
     SVGs, and next/image would strip the intrinsic sizing the row depends on. */
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={brand.logo}
      alt={brand.name}
      className="h-[38px] w-auto max-w-[118px] shrink-0 object-contain opacity-40 transition-opacity duration-200 hover:opacity-75"
    />
  );
}

export function Brands() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className={container}>
        <p className="text-center text-[13.5px] leading-[1.6] text-black/50">
          Works with most cars built since 2009
        </p>
      </div>

      <div
        className="canary-marquee-wrap relative mt-8 overflow-hidden"
        /* Fades the row into the page at both edges instead of cutting it off
           at the viewport. */
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {/* Two self-contained copies, each carrying its own trailing gap as
            padding. That padding is what makes the loop seamless: with a single
            flex row of 2N items, `gap` sits *between* items, so half the track is
            N items plus N-0.5 gaps while one copy plus its following gap is N
            items plus N gaps. Shifting by -50% is then half a gap short and the
            row visibly jumps. Giving each copy `pr` equal to the gap makes one
            copy exactly half the track, so -50% lands on an identical frame. */}
        <div
          className="canary-marquee flex w-max"
          style={{ ["--marquee-duration" as string]: `${brands.length * 3.1}s` }}
          aria-hidden
        >
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-x-20 pr-20">
              {brands.map((b) => (
                <BrandMark key={`${copy}-${b.name}`} brand={b} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* The moving row is decorative and duplicated, so it is hidden from
          assistive tech; this carries the same list once, in reading order. */}
      <p className="sr-only">
        Canary works with vehicles from {brands.map((b) => b.name).join(", ")}, and any other
        car that reports CAN over OBD-II.
      </p>
    </section>
  );
}
