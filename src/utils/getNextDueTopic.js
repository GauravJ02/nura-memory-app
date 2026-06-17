import { getTopics } from "./storage";
import { getDueTopics } from "./getDueTopics";

export function getNextDueTopic(currentTopicId) {
  const topics = getTopics();

  const dueTopics = getDueTopics(topics);

  const currentIndex = dueTopics.findIndex(
    (topic) => topic.id === currentTopicId,
  );

  if (currentIndex === -1 || currentIndex === dueTopics.length - 1) {
    return null;
  }

  return dueTopics[currentIndex + 1];
}
