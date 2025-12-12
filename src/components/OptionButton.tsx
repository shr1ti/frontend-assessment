export default function OptionButton({ option, selected, onSelect }) {
  const isSelected = selected === option;

  return (
    <button
      onClick={() => onSelect(option)}
      className={`
        w-full text-left px-5 py-4 rounded-xl transition-all duration-300
        border 
        ${isSelected 
          ? "bg-[#0b3a42] text-white border-[#0b3a42] shadow-lg scale-[1.02]"
          : "bg-white/70 text-gray-700 border-gray-300 hover:border-[#0b3a42] hover:shadow-md"
        }
      `}
    >
      {option}
    </button>
  );
}
