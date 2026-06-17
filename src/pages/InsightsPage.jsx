import Card from "../components/Card";
import BottomNav from "../components/BottomNav";
import { getTopics } from "../utils/storage";

export default function InsightsPage() {
  const topics = getTopics();

  const averageMemory =
    topics.length > 0
      ? Math.round(
          topics.reduce((sum, topic) => sum + topic.memoryScore, 0) /
            topics.length,
        )
      : 0;

  const subjects = {};

  topics.forEach((topic) => {
    if (!subjects[topic.subject]) {
      subjects[topic.subject] = [];
    }

    subjects[topic.subject].push(topic.memoryScore);
  });

  const subjectScores = Object.entries(subjects).map(([subject, scores]) => ({
    subject,
    score: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
  }));

  const strongestSubject =
    subjectScores.length > 0
      ? [...subjectScores].sort((a, b) => b.score - a.score)[0]
      : null;

  const weakestSubject =
    subjectScores.length > 0
      ? [...subjectScores].sort((a, b) => a.score - b.score)[0]
      : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50">
      <div className="max-w-sm mx-auto px-6 pt-10 pb-28">
        <h1 className="text-3xl font-bold">Memory Insights</h1>

        <p className="text-slate-500 mt-2">Understand your learning.</p>

        <div className="space-y-4 mt-8">
          <Card>
            <p className="text-slate-500">Topics Tracked</p>
            <h2 className="text-4xl font-bold mt-2">{topics.length}</h2>
          </Card>

          <Card>
            <p className="text-slate-500">Average Memory</p>
            <h2 className="text-4xl font-bold mt-2">{averageMemory}%</h2>
          </Card>

          {strongestSubject && (
            <Card>
              <p className="text-slate-500">Strongest Subject</p>
              <h2 className="text-2xl font-bold mt-2">
                {strongestSubject.subject}
              </h2>
              <p className="text-green-600 mt-1">{strongestSubject.score}%</p>
            </Card>
          )}

          {weakestSubject && (
            <Card>
              <p className="text-slate-500">Weakest Subject</p>
              <h2 className="text-2xl font-bold mt-2">
                {weakestSubject.subject}
              </h2>
              <p className="text-orange-600 mt-1">{weakestSubject.score}%</p>
            </Card>
          )}

          {subjectScores.length > 0 && (
            <Card>
              <h3 className="text-lg font-semibold">Subject Performance</h3>

              <div className="mt-5 space-y-4">
                {subjectScores.map((subject) => (
                  <div
                    key={subject.subject}
                    className="flex justify-between items-center"
                  >
                    <p className="font-medium">{subject.subject}</p>

                    <p
                      className={`font-semibold ${
                        subject.score >= 75
                          ? "text-green-600"
                          : subject.score >= 50
                            ? "text-blue-600"
                            : "text-orange-600"
                      }`}
                    >
                      {subject.score}%
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
