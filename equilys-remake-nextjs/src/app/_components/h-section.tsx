import Image from "next/image";

interface HSectionProps {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  children?: React.ReactNode;
}

export default function HSection({
  title,
  text,
  imageSrc,
  imageAlt = "",
  imagePosition = "left",
  children,
}: HSectionProps) {
  if (imagePosition === "left") {
    return (
      <section className="flex p-23 bg-gradient-to-r from-custom-light-green to-custom-light-blue gap-10">
        <img src={imageSrc} alt={imageAlt} />
        <div>
          <h1 className="text-[33px] font-bold tracking-wide mb-4">{title}</h1>
          <p className="text-lg ">{text}</p>
          {children}
        </div>
      </section>
    );
  } else {
    return (
      <section>
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <Image src={imageSrc} alt={imageAlt} />
      </section>
    );
  }
}
