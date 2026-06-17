import Card from "../components/Card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createTopic } from "../utils/topicModel";
import { getTopics, saveTopics } from "../utils/storage";
import BottomNav from "../components/BottomNav";

export default function AddTopicPage() {
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  function handleSaveTopic() {
    if (!subject.trim()) {
      alert("Please enter a subject");
      return;
    }

    if (!topic.trim()) {
      alert("Please enter a topic");
      return;
    }

    const existingTopics = getTopics();

    const duplicate = existingTopics.some(
      (t) =>
        t.subject.toLowerCase() === subject.toLowerCase() &&
        t.topic.toLowerCase() === topic.toLowerCase(),
    );

    if (duplicate) {
      alert("Topic already exists");
      return;
    }

    const newTopic = createTopic({
      subject,
      topic,
      difficulty,
    });

    saveTopics([...existingTopics, newTopic]);

    navigate("/");
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50">
      <div className="max-w-sm mx-auto px-6 pt-10">
        <button onClick={() => navigate("/")} className="mb-6">
          <ArrowLeft size={22} />
        </button>
        <h1 className="text-3xl font-bold">Add Topic</h1>

        <p className="text-slate-500 mt-2">Tell Nura what you studied today.</p>

        <div className="mt-8">
          <Card>
            <div>
              <label className="text-sm text-slate-500">Subject</label>

              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="
                    w-full
                    mt-2
                    p-3
                    rounded-xl
                    border
                    border-slate-200
                    outline-none
                "
                placeholder="Medicine"
              />
            </div>

            <div className="mt-5">
              <label className="text-sm text-slate-500">Topic Name</label>

              <input
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="
                    w-full
                    mt-2
                    p-3
                    rounded-xl
                    border
                    border-slate-200
                    outline-none
                "
                placeholder="Heart Failure"
              />
            </div>

            <div className="mt-5">
              <label className="text-sm text-slate-500">Difficulty</label>

              <div className="flex gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setDifficulty("Easy")}
                  className={`flex-1 py-3 rounded-xl font-medium transition ${
                    difficulty === "Easy"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  Easy
                </button>

                <button
                  type="button"
                  onClick={() => setDifficulty("Medium")}
                  className={`flex-1 py-3 rounded-xl font-medium transition ${
                    difficulty === "Medium"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  Moderate
                </button>

                <button
                  type="button"
                  onClick={() => setDifficulty("Hard")}
                  className={`flex-1 py-3 rounded-xl font-medium transition ${
                    difficulty === "Hard"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  Challenging
                </button>
              </div>
            </div>

            <button
              onClick={handleSaveTopic}
              className="
                w-full
                mt-6
                py-3
                rounded-2xl
                bg-blue-600
                text-white
                font-medium
              "
            >
              Save Topic
            </button>
          </Card>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
