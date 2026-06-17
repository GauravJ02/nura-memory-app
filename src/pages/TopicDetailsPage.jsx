import Card from "../components/Card";
import BottomNav from "../components/BottomNav";
import { useParams, useNavigate } from "react-router-dom";
import { getTopics } from "../utils/storage";
import { formatDate } from "../utils/formatDate";

export default function TopicDetailsPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const topic = getTopics().find((topic) => topic.id === id);

  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Topic not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50">
      <div className="max-w-sm mx-auto px-6 pt-10 pb-28">
        <button
          onClick={() => navigate("/topics")}
          className="text-slate-500 mb-6"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold">Topic Details</h1>

        <p className="text-slate-500 mt-2">Track your learning progress.</p>

        <div className="mt-8">
          <Card>
            <h2 className="text-2xl font-bold">{topic.topic}</h2>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-slate-400 text-sm">Subject</p>

                <p className="font-medium">{topic.subject}</p>
              </div>

              <div>
                <p className="text-slate-400 text-sm">Memory Score</p>

                <p className="font-medium">{topic.memoryScore}%</p>
              </div>

              <div>
                <p className="text-slate-400 text-sm">Reviews Completed</p>

                <p className="font-medium">{topic.revisionCount}</p>
              </div>

              <div>
                <p className="text-slate-400 text-sm">Difficulty</p>

                <p className="font-medium">{topic.difficulty}</p>
              </div>

              <div>
                <p className="text-slate-400 text-sm">Last Reviewed</p>

                <p className="font-medium">
                  {topic.lastReviewedAt
                    ? formatDate(topic.lastReviewedAt)
                    : "Never"}
                </p>
              </div>

              <div>
                <p className="text-slate-400 text-sm">Next Review</p>

                <p className="font-medium">
                  {formatDate(topic.nextRevisionDate)}
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate(`/review/${topic.id}`)}
              className="
                w-full
                mt-8
                py-3
                rounded-2xl
                bg-blue-600
                text-white
                font-medium
              "
            >
              Start Review
            </button>
          </Card>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
