export const dashboardStats = [
  {
    id: 1,
    title: "Total Projects",
    value: 12,
    change: "+2 this month",
    trend: "up",
    icon: "projects",
  },
  {
    id: 2,
    title: "Active Projects",
    value: 8,
    change: "+1 this week",
    trend: "up",
    icon: "active",
  },
  {
    id: 3,
    title: "Completed Tasks",
    value: 124,
    change: "+18 this week",
    trend: "up",
    icon: "completed",
  },
  {
    id: 4,
    title: "Pending Tasks",
    value: 18,
    change: "-4 this week",
    trend: "down",
    icon: "pending",
  },
];

export const projectProgressData = [
  {
    name: "Website Redesign",
    progress: 75,
  },
  {
    name: "Mobile App",
    progress: 45,
  },
  {
    name: "API Migration",
    progress: 90,
  },
  {
    name: "Marketing Portal",
    progress: 60,
  },
];

export const taskDistributionData = [
  {
    name: "Completed",
    value: 124,
  },
  {
    name: "In Progress",
    value: 32,
  },
  {
    name: "Pending",
    value: 18,
  },
];

export const recentProjects = [
  {
    id: 1,
    name: "Website Redesign",
    status: "In Progress",
    progress: 75,
    dueDate: "Jul 25, 2026",
  },
  {
    id: 2,
    name: "Mobile Application",
    status: "In Progress",
    progress: 45,
    dueDate: "Aug 10, 2026",
  },
  {
    id: 3,
    name: "API Migration",
    status: "Review",
    progress: 90,
    dueDate: "Jul 18, 2026",
  },
];

export const recentActivities = [
  {
    id: 1,
    user: "Alex Johnson",
    action: "completed the task",
    target: "Design homepage wireframe",
    time: "10 minutes ago",
  },
  {
    id: 2,
    user: "Sarah Williams",
    action: "commented on",
    target: "API authentication setup",
    time: "35 minutes ago",
  },
  {
    id: 3,
    user: "Michael Chen",
    action: "created the project",
    target: "Mobile Application",
    time: "2 hours ago",
  },
  {
    id: 4,
    user: "Emma Davis",
    action: "updated",
    target: "Marketing Portal",
    time: "4 hours ago",
  },
];

export default dashboardStats;