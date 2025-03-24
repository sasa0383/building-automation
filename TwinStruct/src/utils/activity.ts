type ActivityDistribution = {
  activity: string;
  percentage: string;
};

interface ActivityData {
  "Window activity": string | number;
  [key: string]: any;
}

export const calculateActivityDistribution = (
  data: ActivityData[],
): ActivityDistribution[] => {
  const counts: any = data.reduce(
    (acc: Record<string, number>, item: ActivityData) => {
      const activity = item["Window activity"].toString();
      acc[activity] = (acc[activity] ?? 0) + 1;
      return acc;
    },
    {},
  );

  const total = data.length;
  const percentages: ActivityDistribution[] = Object.keys(counts).map(
    (key) => ({
      activity: key,
      percentage: ((counts[key] / total) * 100).toFixed(2),
    }),
  );

  return percentages;
};
