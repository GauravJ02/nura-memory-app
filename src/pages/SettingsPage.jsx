import Card from "../components/Card";
import BottomNav from "../components/BottomNav";
import { getTopics, saveTopics } from "../utils/storage";

export default function SettingsPage() {
  function handleReset() {
    if (window.confirm("Delete all topics and progress?")) {
      saveTopics([]);
      window.location.reload();
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50">
      <div className="max-w-sm mx-auto px-6 pt-10 pb-28">
        <h1 className="text-3xl font-bold">Settings</h1>

        <p className="text-slate-500 mt-2">Manage your Nura experience.</p>

        <div className="space-y-4 mt-8">
          <Card>
            <p className="text-slate-500">Version</p>

            <h2 className="text-xl font-semibold mt-2">Nura v1.0</h2>
          </Card>

          <Card>
            <p className="text-slate-500">Topics Stored</p>

            <h2 className="text-xl font-semibold mt-2">{getTopics().length}</h2>
          </Card>
          <Card>
            <h3 className="font-semibold">About Nura</h3>

            <p className="text-slate-500 mt-2">
              Nura helps you remember what you study through spaced repetition
              and active recall.
            </p>
          </Card>
          <Card>
            <button
              onClick={handleReset}
              className="
                w-full
                py-3
                rounded-xl
                bg-red-50
                text-red-600
                font-medium
              "
            >
              Delete All Topics
            </button>
          </Card>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
