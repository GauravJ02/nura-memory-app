import { Routes, Route } from "react-router-dom";
import ReviewPage from "./pages/ReviewPage";
import HomePage from "./pages/HomePage";
import AddTopicPage from "./pages/AddTopicPage";
import TopicsPage from "./pages/TopicsPage";
import ReviewCompletePage from "./pages/ReviewCompletePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/topics" element={<TopicsPage />} />
      <Route path="/add-topic" element={<AddTopicPage />} />
      <Route path="/review/:id" element={<ReviewPage />} />
      <Route path="/review-complete" element={<ReviewCompletePage />} />
    </Routes>
  );
}

export default App;
