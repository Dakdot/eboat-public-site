type SupporterLinkProps = {
  children: React.ReactNode;
  href?: string;
  iconAlt?: string;
  icon?: string;
};

export const SupporterLink = ({
  children,
  href,
  icon,
  iconAlt,
}: SupporterLinkProps) => {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_"
      className={`${href && "link"} transition-all px-4 py-6 sm:hover:scale-[105%] w-full rounded-lg bg-white/10 border-white/30 backdrop-blur-md group shadow-lg`}
    >
      <div className="flex flex-col h-full items-center justify-center gap-4">
        {icon && (
          <img
            src={icon}
            alt={iconAlt}
            className="transition-all max-h-[100px] max-w-[300px]"
          />
        )}

        <span className="text-center text-sm sm:text-lg">{children}</span>
      </div>
    </a>
  );
};
