import Link from "next/link";
export { PrimaryButton };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function PrimaryButton({ text, size, width, color, link }) {
  return (
    <Link href={link}>
      {/* if size prop equals small, then add class font-sm */}
      <a
        className={classNames(
          "text-white text-2xl font-black px-8 py-4 rounded-md inline-block transition ease-in-out duration-150",
          size === "small"
            ? "text-base font-semibold px-8 py-4"
            : size === "medium"
            ? "text-md font-md"
            : "text-lg font-lg",
          width === "full" ? "w-full" : "w-auto",
          color === "teal"
            ? "bg-radial-at-b from-teal-400 to-lime-50 hover:from-lime-100 hover:to-white text-black"
            : color === "black"
            ? "bg-gradient-to-r from-black to-gray-900 hover:from-black hover:to-gray-700"
            : "bg-gradient-to-r from-cyan-300 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700"
        )}
      >
        {text}
      </a>
    </Link>
  );
}
