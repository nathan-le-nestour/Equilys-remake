import Image from "next/image";
import HSection from "./_components/h-section";
import RadioGroup from "./_components/radioGroup";

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

      <section className="px-27 py-22 border-b-1 border-b-gray-300 flex">
        <div className="flex flex-col flex-2 mr-4">
          <h1 className=" text-4xl mb-3">Choisissez votre style</h1>
          <p className="text-lg">
            Sélectionnez vos préférences d’écriture inclusive et nous vous
            donnerons des suggestions personnalisées pour votre texte.
          </p>
        </div>
        <div className="flex flex-col flex-2">
          <div className="border-b-gray-300">
            <fieldset className="flex flex-col border-b-gray-300 border-b-1 pb-5 mb-5">
              <div>
                <legend className="text-2xl text-gray-400 mb-3">
                  Amélioration syntaxique
                </legend>
                <RadioGroup
                  option1="auteur·ice·s"
                  option2="auteur·e·s"
                  name="test1"
                ></RadioGroup>
              </div>

              <RadioGroup
                option1="auteur(s) et auteure(s)"
                option2="auteur(s) et autrice(s)"
                name="test2"
              ></RadioGroup>

              <div>
                <input className="mr-2" type="radio" name="creative" />
                <label htmlFor="creative">auteurs et autrices creatives</label>
              </div>
            </fieldset>
            <fieldset className="flex flex-col border-b-gray-300 border-b-1 pb-5 mb-2">
              <legend>Refomulations lexicales</legend>
              <div>
                <input
                  type="radio"
                  name="lexical"
                  value="inclusive"
                  className="mr-2"
                />
                <label htmlFor="inclusive">
                  Les filles et les garçons &gt; Les élèves
                </label>
                <div>
                  <input type="radio" name="lexical" className="mr-2" />
                  <label htmlFor="lexical">
                    Vous êtes créatifs &gt; Vous avez de la créativité
                  </label>
                </div>
              </div>
            </fieldset>
            <div>
              <input type="checkbox" name="bias" id="" className="mr-2" />
              <label htmlFor="bias">Marquer les biais de genre</label>
            </div>
          </div>
        </div>
      </section>
      <section className="px-25 py-22 flex flex-row">
        <div></div>
      </section>
    </>
  );
}
