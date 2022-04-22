import { IconType } from 'react-icons';

// Assets
const avatar1 = '../assets/img/avatars/avatar1.png';
const avatar2 = '../assets/img/avatars/avatar2.png';
const avatar3 = '../assets/img/avatars/avatar3.png';
const avatar4 = '../assets/img/avatars/avatar4.png';
const avatar5 = '../assets/img/avatars/avatar5.png';
const avatar7 = '../assets/img/avatars/avatar7.png';
const avatar8 = '../assets/img/avatars/avatar8.png';
const avatar9 = '../assets/img/avatars/avatar9.png';
const avatar10 = '../assets/img/avatars/avatar10.png';

interface OverviewItemProps {
  name: string;
  number: number;
  rate: number;
  icon: IconType | any;
}
interface VisitorHistoryItemProps {
  logo: any;
  name: string;
  email: string;
  date: string;
  reason: string;
  status: string;
}

const overviewData: Array<OverviewItemProps> = [
  { name: 'Visitors Expected', number: 20, rate: 55, icon: '' },
  { name: 'Completed Meetings', number: 20, rate: 120, icon: '' },
  { name: 'Defaulted Visitors', number: 20, rate: -12, icon: '' },
  { name: 'Pending Visits', number: 20, rate: 23.4, icon: '' },
];

const visitorHistoryData: Array<VisitorHistoryItemProps> = [
  {
    logo: avatar1,
    name: 'John Doe',
    email: 'johndoe@mail.com',
    date: '20/14/2021 10:45 AM',
    reason: 'On-site',
    status: 'Attended',
  },
  {
    logo: avatar2,
    name: 'John Doe',
    email: 'johndoe@mail.com',
    date: '20/14/2021 10:45 AM',
    reason: 'On-site',
    status: 'Defaulted',
  },
  {
    logo: avatar3,
    name: 'John Doe',
    email: 'johndoe@mail.com',
    date: '20/14/2021 10:45 AM',
    reason: 'On-site',
    status: 'Attended',
  },
  {
    logo: avatar4,
    name: 'John Doe',
    email: 'johndoe@mail.com',
    date: '20/14/2021 10:45 AM',
    reason: 'On-site',
    status: 'Attended',
  },
  {
    logo: avatar5,
    name: 'John Doe',
    email: 'johndoe@mail.com',
    date: '20/14/2021 10:45 AM',
    reason: 'On-site',
    status: 'Attended',
  },
  {
    logo: avatar7,
    name: 'John Doe',
    email: 'johndoe@mail.com',
    date: '20/14/2021 10:45 AM',
    reason: 'On-site',
    status: 'Attended',
  },
  {
    logo: avatar8,
    name: 'John Doe',
    email: 'johndoe@mail.com',
    date: '20/14/2021 10:45 AM',
    reason: 'On-site',
    status: 'Attended',
  },
  {
    logo: avatar9,
    name: 'John Doe',
    email: 'johndoe@mail.com',
    date: '20/14/2021 10:45 AM',
    reason: 'On-site',
    status: 'Attended',
  },
  {
    logo: avatar10,
    name: 'John Doe',
    email: 'johndoe@mail.com',
    date: '20/14/2021 10:45 AM',
    reason: 'On-site',
    status: 'Attended',
  },
];

interface TopUserProps {
  name: string;
  email: string;
  logo: string;
  number: number;
}

const topUserData: Array<TopUserProps> = [
  {
    name: 'Wale Adetunji',
    email: 'waleadetunji@mail.com',
    logo: avatar10,
    number: 10,
  },
  { name: 'John Doe', email: 'johndoe@mail.com', logo: avatar1, number: 21 },
  {
    name: 'Wale Adetunji',
    email: 'waleadetunji@mail.com',
    logo: avatar10,
    number: 24,
  },
  {
    name: 'Wale Adetunji',
    email: 'waleadetunji@mail.com',
    logo: avatar10,
    number: 24,
  },
];

interface DepartmentProps {
  id: any;
  name: string;
  status: string;
}

const departmentData: Array<DepartmentProps> = [
  { id: 1, name: 'Admin', status: 'Active' },
  { id: 2, name: 'Frontdesk', status: 'Inactive' },
  { id: 3, name: 'Accounting', status: 'Active' },
];

interface StaffsProps {
  id: any;
  fullname: string;
  email: string;
  department: string;
  mobileno: string;
  dob: string;
  status: string;
  role: string;
}

const staffsData: Array<StaffsProps> = [
  {
    id: 1,
    fullname: 'Adekunle Ajayi',
    email: 'adekunleajyi@mail.com',
    department: 'Admin',
    mobileno: '23478984563',
    dob: '23/09/1956',
    status: 'Active',
    role: 'STAFF',
  },
  {
    id: 1,
    fullname: 'Adekunle Ajayi',
    email: 'adekunleajyi@mail.com',
    department: 'Admin',
    mobileno: '23478984563',
    dob: '23/09/1956',
    status: 'Active',
    role: 'STAFF',
  },
  {
    id: 1,
    fullname: 'Adekunle Ajayi',
    email: 'adekunleajyi@mail.com',
    department: 'Admin',
    mobileno: '23478984563',
    dob: '23/09/1956',
    status: 'Active',
    role: 'STAFF',
  },
  {
    id: 1,
    fullname: 'Adekunle Ajayi',
    email: 'adekunleajyi@mail.com',
    department: 'Admin',
    mobileno: '23478984563',
    dob: '23/09/1956',
    status: 'Active',
    role: 'ADMIN',
  },
];

export {
  overviewData,
  visitorHistoryData,
  topUserData,
  departmentData,
  staffsData,
};
