import { Routes, Route } from "react-router-dom";
import ReviewPage from "./pages/ReviewPage";
import HomePage from "./pages/HomePage";
import AddTopicPage from "./pages/AddTopicPage";
import TopicsPage from "./pages/TopicsPage";
import ReviewCompletePage from "./pages/ReviewCompletePage";
import InsightsPage from "./pages/InsightsPage";
import SettingsPage from "./pages/SettingsPage";
import TopicDetailsPage from "./pages/TopicDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/topics" element={<TopicsPage />} />
      <Route path="/add-topic" element={<AddTopicPage />} />
      <Route path="/review/:id" element={<ReviewPage />} />
      <Route path="/review-complete" element={<ReviewCompletePage />} />
      <Route path="/insights" element={<InsightsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/topic/:id" element={<TopicDetailsPage />} />
    </Routes>
  );
}

export default App;
