export default function Button({
  text,
  type = "button",
  variant = "primary",
  onClick,
}) {
  const baseClasses =
    "px-4 py-2 rounded font-medium text-sm transition min-w-[180px] text-center";

  const variants = {
    primary: "bg-[#d7fe65] text-black hover:bg-[#c9f54d]",
    secondary: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
   
      onClick={onClick}
      className={`${baseClasses}} ${variants[variant]}`}
    >
      {text}
    </button>
  );
}
