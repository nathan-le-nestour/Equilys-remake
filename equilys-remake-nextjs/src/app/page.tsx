import Image from "next/image";
import HSection from "./_components/h-section";

export default function Home() {
  return (
    <>
      <HSection
        title="Assistant en écriture inclusive"
        text="L’écriture inclusive, ce n’est pas que le point médian. Ce sont plusieurs techniques d’écriture qui permettent de s’adresser à tous et toutes."
        imageSrc="https://equilys.vercel.app/assets/PLACEHOLDER_ALT250-921809de.svg"
        imagePosition="left"
      >
        <button className="bg-custompurple-100 text-white px-7 py-3 rounded-md m-5">
          Commencez à écrire
        </button>
        <button>En savoir plus</button>
      </HSection>

      <section className="px-25 py-22 border-b-1 border-b-gray-300">
        <div className="flex">
          <div className="flex-col">
            <h1 className=" text-4xl mb-3">Choisissez votre style</h1>
            <p className="text-lg">
              Sélectionnez vos préférences d’écriture inclusive et nous vous
              donnerons des suggestions personnalisées pour votre texte.
            </p>
          </div>
        </div>
      </section>
      <section className="px-25 py-22">test</section>
    </>
  );
}
