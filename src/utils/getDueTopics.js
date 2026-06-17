export function getDueTopics(topics) {
  const today = new Date();

  return topics.filter((topic) => new Date(topic.nextRevisionDate) <= today);
}
