interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeading = ({ subtitle, title, description, centered = true }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <span className="text-sm font-semibold tracking-widest uppercase text-accent">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
