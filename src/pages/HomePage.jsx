import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";
import BottomNav from "../components/BottomNav";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getTopics } from "../utils/storage";
import { getDueTopics } from "../utils/getDueTopics";

export default function HomePage() {
  const navigate = useNavigate();
  const topics = getTopics();
  const averageMemory =
    topics.length > 0
      ? Math.round(
          topics.reduce((sum, topic) => sum + topic.memoryScore, 0) /
            topics.length,
        )
      : 0;

  let healthStatus = "Getting Started";

  if (averageMemory >= 85) healthStatus = "Excellent";
  else if (averageMemory >= 70) healthStatus = "Strong";
  else if (averageMemory >= 50) healthStatus = "Building Momentum";
  else healthStatus = "Needs Attention";

  const dueTopics = getDueTopics(topics);

  const nextTopic = dueTopics[0];
  console.log(
    topics.map((t) => ({
      topic: t.topic,
      nextRevisionDate: t.nextRevisionDate,
    })),
  );
  console.log("Due Topics:", dueTopics);
  console.log("Next Topic:", nextTopic);

  return (
    <div className="min-h-screen pb-28 bg-gradient-to-b from-white via-slate-50 to-blue-50">
      <div className="max-w-sm mx-auto px-6 pt-10">
        <div className="mb-8">
          <p className="text-slate-400 text-sm font-medium">Welcome Back</p>

          <h1 className="text-5xl font-bold tracking-tight mt-1">Nura</h1>

          <p className="text-slate-500 mt-3 leading-relaxed">
            Helping you remember what matters.
          </p>
        </div>
        <div className="mt-8 mb-8 flex justify-center">
          <div
            className="
      w-24
      h-24
      rounded-full
      bg-gradient-to-br
      from-blue-400
      via-blue-500
      to-teal-400
      opacity-90
      shadow-[0_20px_60px_rgba(59,130,246,0.25)]
    "
          />
        </div>

        <div className="text-center mb-8">
          <p className="text-sm text-slate-500">Memory Health</p>

          <h3 className="text-2xl font-bold mt-1">{healthStatus}</h3>
          <p className="text-slate-500 mt-2">{averageMemory}% Memory Health</p>
        </div>
        <Card>
          <h3 className="font-semibold text-lg">Today's Intention</h3>

          <p className="text-slate-500 mt-2 leading-relaxed">
            Small reviews today help build strong memory tomorrow.
          </p>
        </Card>
        <div className="mt-6 mb-3">
          <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">
            Ready For Today
          </p>
        </div>
        <div className="mt-5">
          <Card>
            <p className="text-slate-500 text-sm">Today's Focus</p>

            <div className="flex items-center justify-between mt-2">
              <h2 className="text-3xl font-semibold">
                {nextTopic?.topic || "No Reviews Due"}
              </h2>

              <div
                className="
                  px-3
                  py-1
                  rounded-full
                  bg-teal-50
                  text-teal-600
                  text-xs
                  font-medium
                "
              >
                {nextTopic ? "Due" : "Completed"}
              </div>
            </div>

            <p className="text-slate-500 mt-1">
              {nextTopic?.subject || "You're all caught up"}
            </p>

            {dueTopics.length > 1 && (
              <p className="text-orange-500 text-sm mt-2">
                +{dueTopics.length - 1} more due today
              </p>
            )}

            <p className="text-teal-600 text-sm mt-4">
              A short review today can strengthen long-term recall.
            </p>

            <PrimaryButton
              onClick={() =>
                nextTopic
                  ? navigate(`/review/${nextTopic.id}`)
                  : navigate("/topics")
              }
            >
              {nextTopic ? "Start Review" : "View Topics"}
            </PrimaryButton>
          </Card>
        </div>
      </div>
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
            text-3xl
            shadow-[0_20px_40px_rgba(59,130,246,0.35)]
            flex
            items-center
            justify-center
        "
      >
        <span className="flex items-center justify-center w-full h-full">
          <Plus size={30} strokeWidth={3} className="block" />
        </span>
      </button>

      <BottomNav />
    </div>
  );
}
