import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getTopics, saveTopics } from "../utils/storage";
import BottomNav from "../components/BottomNav";
import { Plus } from "lucide-react";

export default function TopicsPage() {
  const [topics, setTopics] = useState([]);
  function handleDeleteTopic(id) {
    const updatedTopics = topics.filter((topic) => topic.id !== id);

    setTopics(updatedTopics);

    saveTopics(updatedTopics);
  }

  useEffect(() => {
    const savedTopics = getTopics();
    setTopics(savedTopics);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50">
      <div className="max-w-sm mx-auto px-6 pt-10 pb-28">
        <h1 className="text-3xl font-bold">Topics</h1>

        <p className="text-slate-500 mt-2">
          Everything you're currently tracking.
        </p>

        <div className="mt-8 space-y-4">
          {topics.length === 0 ? (
            <Card>
              <p className="text-slate-500">No topics added yet.</p>
            </Card>
          ) : (
            topics.map((topic) => (
              <Card key={topic.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold">{topic.topic}</h2>

                    <p className="text-slate-500 mt-1">{topic.subject}</p>

                    <p
                      className={`
        text-sm
        mt-2
        ${
          topic.memoryScore >= 75
            ? "text-green-600"
            : topic.memoryScore >= 50
              ? "text-blue-600"
              : "text-orange-600"
        }
      `}
                    >
                      Memory Score: {topic.memoryScore}%
                    </p>

                    <p className="text-slate-500 text-sm mt-3">
                      Next Review:{" "}
                      {new Date(topic.nextRevisionDate).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    <span
                      className="
        px-3
        py-1
        rounded-full
        bg-blue-50
        text-blue-600
        text-xs
      "
                    >
                      {topic.difficulty}
                    </span>

                    <button
                      onClick={() => {
                        if (window.confirm("Delete this topic?")) {
                          handleDeleteTopic(topic.id);
                        }
                      }}
                      className="
        text-slate-400
        hover:text-red-500
      "
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/review/${topic.id}`)}
                  className="
                        mt-4
                        w-full
                        py-2
                        rounded-xl
                        bg-blue-600
                        text-white
                    "
                >
                  Review
                </button>
              </Card>
            ))
          )}
        </div>
      </div>
      <BottomNav />
      <button
        onClick={() => navigate("/add-topic")}
        className="
    fixed
    bottom-24
    right-5
    w-16
    h-16
    rounded-full
    bg-gradient-to-br
    from-blue-500
    to-teal-400
    text-white
    shadow-[0_20px_40px_rgba(59,130,246,0.35)]
    flex
    items-center
    justify-center
  "
      >
        <Plus size={30} strokeWidth={3} />
      </button>
    </div>
  );
}
