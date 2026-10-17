import { inspeccion } from "@/content/v2";
import { ServiceBlock } from "./ServiceBlock";

export function Inspeccion() {
  const { groups, highlight } = inspeccion;
  return (
    <ServiceBlock service={inspeccion} tone="dark" flip>
      <div className="flex flex-col gap-10">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 text-xl font-semibold leading-subheading text-white md:text-2xl">{group.title}</h3>
            <ul className="grid border-t border-white/50 md:grid-cols-2 md:gap-x-8">
              {group.items.map((item) => (
                <li key={item} className="border-b border-white/28 py-4 text-base leading-body text-navy-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-white/8 p-6 md:p-8">
        <h3 className="mb-3 text-xl font-semibold leading-subheading text-white md:text-2xl">{highlight.title}</h3>
        <p className="max-w-3xl text-base leading-body text-navy-soft">{highlight.text}</p>
      </div>
    </ServiceBlock>
  );
}
