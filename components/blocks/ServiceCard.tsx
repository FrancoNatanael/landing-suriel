import Image from "next/image";

type ServiceCardProps = {
  n: string;
  title: string;
  keys: readonly string[];
  /** Etiqueta del placeholder (mientras no haya foto real). */
  image: string;
  /** Foto real: cuando existe reemplaza al placeholder. */
  imageSrc?: string;
};

export function ServiceCard({ n, title, keys, image, imageSrc }: ServiceCardProps) {
  return (
    <article className="reveal group relative isolate flex min-h-112 flex-col justify-between overflow-hidden bg-hero-base p-6 text-white md:p-8 lg:min-h-144 lg:p-10">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 transition-transform duration-1000 ease-brand group-hover:scale-110"
      >
        {imageSrc ? (
          <Image src={imageSrc} alt="" fill sizes="(min-width: 48rem) 50vw, 100vw" className="object-cover" />
        ) : (
          <div className="bg-hatch-dark size-full" />
        )}
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-700 group-hover:opacity-90"
      />

      <div className="flex items-start justify-between gap-6">
        <p className="text-xl leading-body">{n}</p>
        {imageSrc ? null : (
          <p className="text-right text-xs uppercase leading-body text-white/50">{image}</p>
        )}
      </div>

      <div>
        <h3 className="text-2xl font-semibold leading-subheading md:text-3xl lg:text-4xl">
          {title}
        </h3>
        <ul className="mt-5 grid gap-x-8 gap-y-1.5 border-t border-white/40 pt-4 text-sm leading-body text-white/85 sm:grid-cols-2">
          {keys.map((key) => (
            <li key={key}>{key}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
