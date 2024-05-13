import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkItemProps {
    name: string
    icon: JSX.Element
}

export default function SidebarLinkItem({ name, icon }: SidebarLinkItemProps) {

    const pathname = usePathname();

    return (
        <Link
            href={`/${name.toLowerCase()}`}
            className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes(name.toLowerCase()) && "bg-graydark dark:bg-meta-4"
                }`}>

            {icon}


            {name}
        </Link>
    )
}