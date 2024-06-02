import classNames from "classnames";

type Props = {
  variant?: "default" | "primary" | "secondary";
  children: React.ReactNode;
};

export function Button({ variant, children }: Props) {
  let bgColor = "text-black";
  if (variant === "secondary")
    bgColor =
      "bg-secondary-900 text-white hover:bg-secondary-700 active:bg-secondary-900 transition-all";
  if (variant === "default")
    bgColor =
      "bg-primary-700 hover:bg-primary-300 active:bg-primary-900 transition-all text-white";
  if (variant === "primary")
    bgColor =
      "bg-primary-800 text-white   hover:bg-primary-300 active:bg-primary-900 transition-all";
  return (
    //<button className="py-2 px-4 rounded-md bg-primary-700 text-white">
    <button
      className={classNames(
        "py-2 px-4 rounded-md font-bold text-white",
        bgColor
      )}
    >
      {children}
    </button>
  );
}
