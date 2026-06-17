export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white/90
        backdrop-blur-sm
        rounded-[28px]
        p-6
        border
        border-white
        shadow-[0_12px_40px_rgba(15,23,42,0.05)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
