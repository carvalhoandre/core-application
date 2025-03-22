import Link from "next/link";

interface MenuItemProps {
  href: string;
  children: React.ReactNode;
  selected?: boolean;
  blank?: boolean;
}

const MenuItem = ({ children, href, blank, selected }: MenuItemProps) => {
  return (
    <div>
      <Link href={href} target={blank ? "_blank" : "_self"}>
        <span
          className={`flex items-center gap-2 text-sm border-red-600  hover:text-white
            ${selected ? "border-b-4 text-white" : "text-zinc-300"}`}
        >
          {children}
        </span>
      </Link>
    </div>
  );
};

export default MenuItem;
