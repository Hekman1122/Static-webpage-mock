import Image from "next/image";

const Card = ({ icon, title }) => {
  return (
    <div className="w-48 flex flex-col items-center">
      <Image src={icon} alt={title} width={180} />
      <p className="text-neutral-600 font-semibold text-lg pt-4">{title}</p>
    </div>
  );
};

export default Card;
