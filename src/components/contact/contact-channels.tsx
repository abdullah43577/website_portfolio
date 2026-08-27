import { Clock, Mail, MapPin } from "lucide-react";
import { brandIcons } from "@/components/icons/brand";
import { site } from "@/content/site";

const details = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  { icon: MapPin, label: "Based in", value: `${site.location} · GMT +1` },
  { icon: Clock, label: "Response time", value: "Within two working days" },
];

export function ContactChannels() {
  return (
    <div className="lg:sticky lg:top-28">
      <dl className="border-t border-border">
        {details.map(({ icon: Icon, label, value, href }) => (
          <div
            key={label}
            className="flex items-start gap-4 border-b border-border py-5"
          >
            <Icon
              className="mt-0.5 h-[18px] w-[18px] shrink-0 text-fg-subtle"
              strokeWidth={1.6}
            />
            <div>
              <dt className="label-mono">{label}</dt>
              <dd className="mt-1.5 text-[15px] text-fg">
                {href ? (
                  <a
                    href={href}
                    className="underline decoration-border underline-offset-4 transition-colors duration-150 hover:text-accent hover:decoration-accent"
                  >
                    {value}
                  </a>
                ) : (
                  value
                )}
              </dd>
            </div>
          </div>
        ))}
      </dl>

      <p className="label-mono mb-4 mt-8">Elsewhere</p>
      <div className="flex flex-col gap-2">
        {site.socials.map((social) => {
          const Icon = brandIcons[social.label];
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[48px] items-center gap-3 rounded-lg border border-border bg-surface px-4 transition-colors duration-150 hover:border-border-strong hover:bg-surface-2"
            >
              <Icon className="h-4 w-4 shrink-0 text-fg-subtle transition-colors duration-150 group-hover:text-fg" />
              <span className="text-sm text-fg">{social.label}</span>
              <span className="ml-auto font-mono text-[12px] text-fg-subtle">
                {social.handle}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
