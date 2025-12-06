import cn from "classnames";

export const Paragraph: React.FC<
  React.HTMLAttributes<HTMLParagraphElement>
> = ({ children, className = "", ...props }) => {
  const paragraphStyle = cn(
    "text-foreground text-lg md:text-xl leading-relaxed",
    className
  );
  return (
    <p className={paragraphStyle} {...props}>
      {children}
    </p>
  );
};
