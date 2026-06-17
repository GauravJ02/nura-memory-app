export default function PrimaryButton({
  children,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        py-3
        rounded-2xl
        bg-blue-600
        text-white
        font-medium
        transition
        hover:bg-blue-700
      "
    >
      {children}
    </button>
  );
}