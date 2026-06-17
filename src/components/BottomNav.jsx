import { House, BookOpen, Brain, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();
  return (
    <div
      className="
      fixed
      bottom-0
      left-0
      right-0
      bg-white
      border-t
      border-slate-200
      h-20
      flex
      items-center
      justify-around
    "
    >
      <button onClick={() => navigate("/")} className="text-slate-600">
        <House size={22} />
      </button>

      <button onClick={() => navigate("/topics")} className="text-slate-600">
        <BookOpen size={22} />
      </button>

      <button>
        <Brain size={22} />
      </button>

      <button>
        <Settings size={22} />
      </button>
    </div>
  );
}
