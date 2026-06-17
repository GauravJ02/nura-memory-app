import { useNavigate } from "react-router-dom";

export default function ReviewCompletePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50">
      <div className="max-w-sm mx-auto px-6 pt-20">
        <div className="text-center">
          <div className="text-6xl">✅</div>

          <h1 className="text-3xl font-bold mt-6">Review Saved</h1>

          <p className="text-slate-500 mt-3">
            Great job. Your memory model has been updated.
          </p>

          <button
            onClick={() => navigate("/")}
            className="
              mt-10
              w-full
              py-3
              rounded-2xl
              bg-blue-600
              text-white
              font-medium
            "
          >
            Back Home
          </button>
        </div>
      </div>
    </div>
  );
}
