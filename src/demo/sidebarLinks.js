import { MessageSquareWarning, Network, Settings, Settings2,Wrench, CalendarDays, Hourglass } from "lucide-react";

export const sidebarMenuLinks = [
  {
    id: 'flows',
    title: 'Akışlar',
    icon: Network,
    children: [
      {
        id: 'a1',
        label: 'Vitam Sorğu (AZ)',
        to: '/flows',
        icon: Wrench,
      },
    ],
  },
  {
    id: 'reports',
    title: 'Raporlar',
    icon: MessageSquareWarning,
    children: [
      {
        id: 'r1',
        label: 'Günlük Rapor',
        to: '/reports/daily',
        icon: CalendarDays,
      },
      {
        id: 'r2',
        label: 'Aylık Rapor',
        to: '/reports/monthly',
        icon: Hourglass,
      },
    ],
  },
  {
    id: 'management',
    title: 'Yönetici işlemler',
    icon: Settings,
    children: [
      {
        id: 'm1',
        label: 'Kullanıcı Ayarları',
        to: '/management/users',
        icon: Settings2,
      },
    ],
  },
];
