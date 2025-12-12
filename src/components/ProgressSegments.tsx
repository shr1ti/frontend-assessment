export default function ProgressSegments({ current, total }) {
  return (
    <div className="flex gap-2 mt-8">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`
            h-2 flex-1 rounded-full transition-all duration-300
            ${i < current ? "bg-[#0b3a42]" : "bg-gray-300/60"}
          `}
        ></div>
      ))}
    </div>
  );
}
