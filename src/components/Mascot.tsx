import Image from "next/image";

export default function Mascot() {
  return (
    <div className="absolute bottom-6 right-6 flex flex-col items-center">
      <div className="bg-white px-4 py-2 rounded-full shadow text-[#0b3a42] text-sm font-medium mb-2">
        Best of Luck!
      </div>

      <Image
        
        src="/mascot/mascot.png"
        alt="Mascot"
        width={90}
        height={90}
        className="animate-bounce"
      />

      
    </div>
  );
}
