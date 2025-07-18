import clsx from "clsx";
import Link from "next/link";

export function Footer() {
  return (
    <nav className="bg-black flex p-22 gap-15">
      <img
        src="https://equilys.vercel.app/assets/EQUILYS-AI-RVB-DEGRADE-BLANC1-f8bfbfd2.svg"
        className="w-35"
        alt=""
      />
      <Link className="text-white" href="/">
        Accueil
      </Link>
      <Link className="text-white" href="about">
        L'écriture inclusive
      </Link>
      <Link className="text-white" href="contact">
        Contactez-nous
      </Link>
      <Link href="/" className="text-white">
        Mentions légales
      </Link>
    </nav>
  );
}
