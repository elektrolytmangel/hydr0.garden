import cn from "classnames";

export const SearchBar: React.FC<
  React.InputHTMLAttributes<HTMLInputElement>
> = ({ className, ...props }) => {
  const searchBarStyle = cn(
    "px-8",
    "py-3",
    "rounded-sm",
    "transition-all",
    "duration-300",
    "text-foreground",
    "backdrop-blur-sm",
    "text-lg",
    "shadow-sm",
    "shadow-black/10 ",
    "bg-white/10",
    "disabled:bg-white/10",
    "disabled:opacity-60",
    "disabled:cursor-auto",
    "disabled:shadow-none",
    "focus:outline-foreground/10",
    className
  );
  return <input className={searchBarStyle} {...props} />;
};
