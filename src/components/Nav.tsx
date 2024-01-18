import Link from "next/link"
import {usePathname} from "next/navigation"

export default function Nav() {
    const pathname = usePathname()
    const links = [
        {id: 1, href: "/", title: "Home"},
        {id: 2, href: "/users", title: "Users"},
        {id: 3, href: "/contact", title: "Contact"},
    ]
    return (
        <nav className=" my-4">
            <ul className=" flex justify-start items-center *:mx-2">
                {links.map((link) => (
                    <li
                        key={link.id}
                        className={
                            link.href === pathname
                                ? " underline underline-offset-4"
                                : ""
                        }
                    >
                        <Link
                            className=" text-lg font-semibold"
                            href={link.href}
                        >
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
