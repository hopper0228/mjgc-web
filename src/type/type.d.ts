interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: number;
}

interface PerformanceRegistration {
  id: string;
  name: string;
  contact: string;
  performanceType: "solo" | "duo" | "band";
  songTitle: string;
  duration: number; // 分鐘
  notes: string;
  createdAt: number;
}

interface ActivityRegistration {
  id: string;
  name: string;
  contact: string;
  cohort: string; // 屆別
  isVegetarian: boolean;
  guestCount: number;
  notes: string;
  createdAt: number;
}
