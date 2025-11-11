type SupporterLinkProps = {
  children: React.ReactNode;
  href: string;
  icon: string;
};

export const SupporterLink = ({ children, href, icon }: SupporterLinkProps) => {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_"
      className="link transition-all px-4 py-6 sm:hover:scale-[105%] w-full sm:w-[500px] rounded-lg bg-white/10 border-white/30 backdrop-blur-md group shadow-lg"
    >
      <div className="flex flex-col items-center gap-4">
        <img
          src={icon}
          alt="American Society of Naval Engineers logo"
          className="sm:grayscale group-hover:grayscale-0 transition-all max-h-[100px] max-w-[300px]"
        />

        <p className="text-center text-sm sm:text-lg">{children}</p>
      </div>
    </a>
  );
};
