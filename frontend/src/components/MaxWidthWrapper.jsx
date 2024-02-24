import { twMerge } from "tailwind-merge";

const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div
      className={twMerge(
        "mx-auto w-full md:max-w-screen-xl md:px-20 min-h-screen",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
