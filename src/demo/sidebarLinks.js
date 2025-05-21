import { MessageSquareWarning, Network, Settings, Settings2,Wrench, CalendarDays, Hourglass } from "lucide-react";

export const sidebarMenuLinks = [
  {
    id: 'flows',
    title: 'Akışlar',
    icon: Network,
    children: [
      {
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
        label: 'Günlük Rapor',
        to: '/reports/daily',
        icon: CalendarDays,
      },
      {
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
        label: 'Kullanıcı Ayarları',
        to: '/management/users',
        icon: Settings2,
      },
    ],
  },
];
