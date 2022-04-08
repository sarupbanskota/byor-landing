import Link from "next/link";

const Container = ({ children, link }: any) => {
  if (link) {
    return (
      <Link key={link} href={link}>
        <div className="cursor-pointer transform duration-100 ease-in-out scale-100 hover:scale-105 hover:shadow-sm hover:z-50">
          {children}
        </div>
      </Link>
    );
  } else {
    return children;
  }
};

export default Container