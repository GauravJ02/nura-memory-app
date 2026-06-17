export function calculateNextRevision(
  difficulty,
  revisionCount,
  recallQuality,
) {
  const schedules = {
    Easy: [1, 3, 7, 14, 30],
    Medium: [1, 2, 5, 10, 21],
    Hard: [1, 1, 3, 7, 14],
  };

  let days = schedules[difficulty][revisionCount] || 30;

  if (recallQuality === "forgot") {
    days = 1;
  }

  if (recallQuality === "some") {
    days = Math.max(1, Math.floor(days * 0.7));
  }

  if (recallQuality === "well") {
    days = Math.ceil(days * 1.2);
  }

  const nextDate = new Date();

  nextDate.setDate(nextDate.getDate() + days);

  return nextDate.toISOString();
}
