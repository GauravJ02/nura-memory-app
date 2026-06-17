import Card from "../components/Card";
import { useParams } from "react-router-dom";
import { getTopics } from "../utils/storage";
import { reviewTopic } from "../utils/reviewEngine";
import { useNavigate } from "react-router-dom";
import { updateTopic } from "../utils/storage";

export default function ReviewPage() {
  function handleReview(recallQuality) {
    const updatedTopic = reviewTopic(topic, recallQuality);

    updateTopic(updatedTopic);
    console.log("Navigating to review complete");

    navigate("/review-complete");
  }
  const { id } = useParams();
  const navigate = useNavigate();
  const topic = getTopics().find((topic) => topic.id === id);
  if (!topic) {
    return <div className="p-6">Topic not found</div>;
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50">
      <div className="max-w-sm mx-auto px-6 pt-10">
        <button onClick={() => navigate(-1)} className="text-slate-500 mb-6">
          ← Back
        </button>

        <p className="text-slate-500 text-sm">Due Today</p>

        <h1 className="text-3xl font-bold mt-1">{topic?.topic}</h1>

        <p className="text-slate-500 mt-2">{topic?.subject}</p>

        <div className="mt-8">
          <Card>
            <p className="text-slate-600 leading-relaxed">
              Go revise this topic using your notes, textbook, PDF, videos or
              any study material.
            </p>
          </Card>
          <Card className="mt-5">
            <h3 className="font-semibold text-lg">How did it go?</h3>

            <div className="mt-5 flex flex-col gap-3">
              <button
                onClick={() => handleReview("forgot")}
                className="
                    py-3
                    rounded-2xl
                    bg-red-50
                    text-red-600
                    font-medium
                "
              >
                😕 Needs Work
              </button>

              <button
                onClick={() => handleReview("some")}
                className="
                        py-3
                        rounded-2xl
                        bg-amber-50
                        text-amber-600
                        font-medium
                    "
              >
                🙂 Getting There
              </button>

              <button
                onClick={() => handleReview("well")}
                className="
                    py-3
                    rounded-2xl
                    bg-green-50
                    text-green-600
                    font-medium
                "
              >
                😄 Remembered Well
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
