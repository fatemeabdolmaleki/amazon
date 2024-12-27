import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: Props) {
  return (
    <div className={twMerge("max-w-screen-xl mx-auto px-4 lg:px-0", className)}>
      {children}
    </div>
  );
}

export default Container;
