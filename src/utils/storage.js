const STORAGE_KEY = "nura_topics";

export function getTopics() {
  try {
    const topics = localStorage.getItem(STORAGE_KEY);

    return topics ? JSON.parse(topics) : [];
  } catch {
    return [];
  }
}

export function saveTopics(topics) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(topics));
}

export function updateTopic(updatedTopic) {
  const topics = getTopics();

  const updatedTopics = topics.map((topic) =>
    topic.id === updatedTopic.id ? updatedTopic : topic,
  );

  saveTopics(updatedTopics);
}
