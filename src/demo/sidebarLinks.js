import { MessageSquareWarning, Network, Settings, Settings2,Wrench, CalendarDays, Hourglass } from "lucide-react";

export const sidebarMenuLinks = [
  {
    id: 'flows',
    title: 'sidebar.flows.title',
    icon: Network,
    children: [
      {
        id: 'a1',
        label: 'sidebar.flows.vitam',
        to: '/flows',
        icon: Wrench,
      },
    ],
  },
  {
    id: 'reports',
    title: 'sidebar.reports.title',
    icon: MessageSquareWarning,
    children: [
      {
        id: 'r1',
        label: 'sidebar.reports.daily',
        to: '/reports/daily',
        icon: CalendarDays,
      },
      {
        id: 'r2',
        label: 'sidebar.reports.monthly',
        to: '/reports/monthly',
        icon: Hourglass,
      },
    ],
  },
  {
    id: 'management',
    title: 'sidebar.management.title',
    icon: Settings,
    children: [
      {
        id: 'm1',
        label: 'sidebar.management.userSettings',
        to: '/management/users',
        icon: Settings2,
      },
    ],
  },
];