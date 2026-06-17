import { calculateNextRevision } from "./revisionEngine";

export function reviewTopic(topic, recallQuality) {
  let memoryScore = topic.memoryScore;

  if (recallQuality === "forgot") {
    memoryScore -= 10;
  }

  if (recallQuality === "some") {
    memoryScore += 5;
  }

  if (recallQuality === "well") {
    memoryScore += 10;
  }

  memoryScore = Math.max(0, Math.min(100, memoryScore));

  const revisionCount = topic.revisionCount + 1;

  return {
    ...topic,

    memoryScore,

    revisionCount,

    lastRecallQuality: recallQuality,

    lastReviewedAt: new Date().toISOString(),

    nextRevisionDate: calculateNextRevision(
      topic.difficulty,
      revisionCount,
      recallQuality,
    ),
  };
}
