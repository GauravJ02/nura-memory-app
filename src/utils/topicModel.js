import { calculateNextRevision } from "./revisionEngine";

export function createTopic({ subject, topic, difficulty }) {
  return {
    id: crypto.randomUUID(),

    subject,
    topic,
    difficulty,

    dateAdded: new Date().toISOString(),

    memoryScore: 50,

    revisionCount: 0,

    missedReviews: 0,

    lastRecallQuality: null,

    lastReviewedAt: null,

    nextRevisionDate: calculateNextRevision(difficulty, 0),
  };
}
