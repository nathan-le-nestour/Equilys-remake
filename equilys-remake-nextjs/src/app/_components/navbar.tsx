"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function NavBar() {
  const Pathname = usePathname();

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "L'écriture inclusive" },
    { href: "/contact", label: "Contactez-nous" },
  ];

  return (
    <header className="sticky top-0">
      <nav className="flex items-center pl-24 py-5.5 gap-12">
        <Link href="/">
          <img
            src="https://equilys.vercel.app/assets/EQUILYS-AI-RVB-DEGRADE-NOIR2-7a24f71d.svg"
            alt=""
            className="w-29"
          />
        </Link>

        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx("p-2", Pathname == link.href ? "border-b-2" : null)}
          >
            {link.label}{" "}
          </Link>
        ))}

        <button className="bg-custompurple-100 text-white px-7 py-3 rounded-md float-right absolute right-3">
          Commencez à écrire
        </button>
      </nav>
    </header>
  );
}
