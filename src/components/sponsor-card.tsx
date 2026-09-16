type SponsorCardProps = {
  children: React.ReactNode;
  description: string;
  href?: string;
  iconAlt?: string;
  icon?: string;
};

export const SponsorCard = ({
  children,
  href,
  icon,
  iconAlt,
  description
}: SponsorCardProps) => {
  return (
    <div className="flex flex-col transition-all min-h-60 px-4 py-6 sm:hover:scale-[105%] w-90 rounded-lg bg-white/10 border-white/30 backdrop-blur-md group shadow-lg">
      <a
        href={href}
        rel="noopener noreferrer"
        target="_"
        className={`${href && "link"} `}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          {icon && (
            <img
              src={icon}
              alt={iconAlt}
              className="transition-all max-h-[100px] max-w-[300px]"
            />
          )}

          <span className="text-center text-sm sm:text-xl">{children}</span>
        </div>
      </a>
      <div>
        <div className="h-2"></div>
        <span className="text-center items-center italic font-normal text-base">{description}</span>
      </div>
    </div>
  );
};
