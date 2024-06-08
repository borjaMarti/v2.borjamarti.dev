import Image from "next/image";

interface ProjectProps {
  title: string;
  src: string;
}

export const Project = ({ title, src }: ProjectProps) => {
  return (
    <article>
      <div>
        <Image src={src} alt={`${title} `} />
      </div>
      <h3>{title}</h3>
    </article>
  );
};
