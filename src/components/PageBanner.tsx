interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function PageBanner({ title, subtitle, backgroundImage }: PageBannerProps) {
  return (
    <section 
      className="hero-gradient text-white py-16 md:py-24 relative overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `linear-gradient(135deg, rgba(1, 82, 245, 0.73) 0%, rgba(19, 19, 20, 0.73) 80%), url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl" />
      </div>
      <div className="container relative z-10">
        <div className="glass-effect-dark rounded-2xl p-8 md:p-12 text-center animate-fade-in">
          <h1 className="mb-2">{title}</h1>
          {subtitle && <p className="text-base md:text-lg opacity-90 font-normal">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
