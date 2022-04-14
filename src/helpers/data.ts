import { IconType } from 'react-icons';

interface OverviewItemProps {
  name: string;
  number: number;
  rate: number;
  icon: IconType | any;
}

const overviewData: Array<OverviewItemProps> = [
  { name: 'Visitors Expected', number: 20, rate: 55, icon: '' },
  { name: 'Completed Meetings', number: 20, rate: 120, icon: '' },
  { name: 'Defaulted Visitors', number: 20, rate: -12, icon: '' },
  { name: 'Pending Visits', number: 20, rate: 23.4, icon: '' },
];

export { overviewData };
