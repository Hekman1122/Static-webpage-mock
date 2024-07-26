import Image from "next/image";
const Hero = () => {
  return (
    <div className="w-full">
      <div>
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1681488183639-f38511a647ef?q=80&w=1843&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="hero"
          width={1000}
          height={500}
          className="md:w-full md:h-[35rem] object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
