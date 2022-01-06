import Link from "next/link";
export { PrimaryButton };

function PrimaryButton({ text }) {
  return (
    <Link href="/">
      <a className="bg-gradient-to-r from-teal-600 to-teal-800 hover:from-teal-500 hover:to-teal-700 text-white text-2xl font-black px-8 py-4 rounded-md inline-block hover:bg-teal-600 transition ease-in-out duration-150 ">
        {text}
      </a>
    </Link>
  );
}
