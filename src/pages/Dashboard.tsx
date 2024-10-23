import React, { useState, useEffect } from 'react';
import { Sidebar } from '../components/sidebars/sidebar'; // Named import for Sidebar
import SidebarItem from '../components/sidebars/sidebarItem';
import CTA from '../components/CTA';
import InfoCard from '../components/Cards/InfoCard';
import ChartCard from '../components/Chart/ChartCard';
import { Doughnut, Line } from 'react-chartjs-2';
import ChartLegend from '../components/Chart/ChartLegend';
import PageTitle from '../components/Typography/PageTitle';
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from '../icons';
import RoundIcon from '../components/RoundIcon';
import response from '../utils/demo/tableData';

import {
    HomeIcon,
    CogIcon,
    UserIcon,
    PowerIcon,
} from '@heroicons/react/24/outline';
import {
    doughnutOptions,
    lineOptions, // Ensure hover mode is fixed here
    doughnutLegends,
    lineLegends,
} from '../utils/demo/chartsData';

import {
    TableBody,
    TableContainer,
    Table,
    TableHeader,
    TableCell,
    TableRow,
    TableFooter,
    Avatar,
    Badge,
    Pagination,
} from '@windmill/react-ui';
import {
    Chart as ChartJS,
    ArcElement,
    LineElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js';

// import {
//   doughnutOptions,
//   lineOptions,
//   doughnutLegends,
//   lineLegends,
// } from '../utils/demo/chartsData';

interface DataItem {
    avatar: string;
    name: string;
    job: string;
    amount: number;
    status: string;
    date: string;
}
type User = {
    avatar: string;
    name: string;
    job: string;
    amount: number;
    status: string;
    date: string; // or Date if you're using Date objects
};

function Dashboard() {
    ChartJS.register(ArcElement, LineElement, CategoryScale, LinearScale, Tooltip, Legend);
    const [page, setPage] = useState<number>(1);
    const [expanded, setExpanded] = useState(true);
    const [data, setData] = useState<User[]>([]); // Use the User type here
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('YOUR_API_ENDPOINT');
                const result = await response.json();
                setData(result.slice((page - 1) * resultsPerPage, page * resultsPerPage)); // Assuming result is correctly typed as User[]
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    const getBadgeType = (status: string) => {
        switch (status.toLowerCase()) {
            case 'completed':
                return 'success';
            case 'pending':
                return 'warning';
            case 'failed':
                return 'danger';
            default:
                return 'neutral';
        }
    };

    const resultsPerPage = 10;
    const totalResults = response.length;

    function onPageChange(p: number) {
        setPage(p);
    }

    // Sidebar items
    const navBarItems = [
        {
            icon: <HomeIcon className="w-6 h-6" />,
            text: 'الرئيسية',
            active: true,
            path: '/dashboard',
        },
        {
            icon: <UserIcon className="w-6 h-6" />,
            text: 'المرضى',
            path: '/patients',
            // subMenu: [
            //     { icon: <UserIcon className="w-6 h-6" />, text: 'User Reports', path: '/patients/reports' },
            //     { icon: <CogIcon className="w-6 h-6" />, text: 'Settings', path: '/patients/settings' },
            // ],
        },
        {
            icon: <CogIcon className="w-6 h-6" />,
            text: 'اعدادات',
            path: '/settings',
        },
        {
            icon:<PowerIcon className="w-6 h-6" />,
            text: 'تسجيل خروج',
            path: '/',
        }
    ];
    

    if (loading) {
        return <div>Loading...</div>; // Loading state
    }

    return (



        <div className="flex ">
            {/* Sidebar */}

            <div className="h-screen w-1/10">
                <Sidebar expanded={expanded} setExpanded={setExpanded}>
                    {navBarItems.map((item, index) => (
                        <SidebarItem key={index} expanded={expanded} {...item} />
                    ))}
                </Sidebar>
            </div>

            {/* Main content */}
            <div className="" style={{ width: '95%' }}>
                <div className="flex-grow p-6  bg-gray-50">
                    <PageTitle>Dashboard</PageTitle>

                    <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                        <InfoCard title="عدد المرضى" value="0">
                            <RoundIcon
                                icon={PeopleIcon}
                                iconColorClass="text-orange-500 dark:text-orange-100"
                                bgColorClass="bg-orange-100 dark:bg-orange-500"
                                className="mr-4"
                            />
                        </InfoCard>

                        <InfoCard title="حركات البيع" value="₪ 0">
                            <RoundIcon
                                icon={MoneyIcon}
                                iconColorClass="text-green-500 dark:text-green-100"
                                bgColorClass="bg-green-100 dark:bg-green-500"
                                className="mr-4"
                            />
                        </InfoCard>

                        <InfoCard title="المبيعات " value="376">
                            <RoundIcon
                                icon={CartIcon}
                                iconColorClass="text-blue-500 dark:text-blue-100"
                                bgColorClass="bg-blue-100 dark:bg-blue-500"
                                className="mr-4"
                            />
                        </InfoCard>

                        <InfoCard title="رسائل " value="35">
                            <RoundIcon
                                icon={ChatIcon}
                                iconColorClass="text-teal-500 dark:text-teal-100"
                                bgColorClass="bg-teal-100 dark:bg-teal-500"
                                className="mr-4"
                            />
                        </InfoCard>
                    </div>

                    <TableContainer>
                        <Table>
                            <TableHeader>
                                <tr>
                                    <TableCell>Client</TableCell>
                                    <TableCell>Amount</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Date</TableCell>
                                </tr>
                            </TableHeader>
                            <TableBody>
                                {data.map((user, i) => (
                                    <TableRow key={i}>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <Avatar className="hidden mr-3 md:block" src={user.avatar} alt="User image" />
                                                <div>
                                                    <p className="font-semibold">{user.name}</p>
                                                    <p className="text-xs text-gray-600 dark:text-gray-400">{user.job}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm">${user.amount}</span>
                                        </TableCell>
                                        <TableCell>
                                            <Badge type={getBadgeType(user.status)}>{user.status}</Badge>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm">{new Date(user.date).toLocaleDateString()}</span>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <TableFooter>
                            <Pagination
                                totalResults={totalResults}
                                resultsPerPage={resultsPerPage}
                                label="Table navigation"
                                onChange={onPageChange}
                            />
                        </TableFooter>
                    </TableContainer>

                    <PageTitle>Charts</PageTitle>
                    <div className="grid gap-6 mb-8 md:grid-cols-2">
                        <ChartCard title="Revenue">
                            <Doughnut {...doughnutOptions} />
                            <ChartLegend legends={doughnutLegends} />
                        </ChartCard>

                        <ChartCard title="Traffic">
                            {/* <Line {...lineOptions} /> */}
                            <ChartLegend legends={lineLegends} />
                        </ChartCard>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
