import Link from "next/link";

export default function NotFound() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <h1 className="max-w-3xl text-5xl font-medium tracking-tight md:text-6xl">
          nothing here.{" "}
          <span className="font-normal italic text-muted-foreground">
            this page doesn&apos;t exist.
          </span>
        </h1>
        <p className="mt-6 text-[17px] text-muted-foreground">
          The link may be old, or the address mistyped.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex h-11 items-center rounded-lg bg-primary px-6 text-[15px] font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
