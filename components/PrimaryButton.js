import Link from "next/link";
export { PrimaryButton };

function PrimaryButton({ text }) {
  return (
    <Link href="/">
      <a className="bg-red-700 text-white text-2xl font-black px-8 py-4 rounded-md inline-block hover:bg-red-600 transition ease-in-out duration-150 ">
        {text}
      </a>
    </Link>
  );
}
