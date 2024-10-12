import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import OverviewCard from './OverviewCard';
import BarChart from './BarChart';
import DonutChart from './DonutChart';
import LatestProducts from './LatestProducts';
import LatestOrders from './LatestOrders';

function DashboardLayout() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flex: 1, padding: '20px' }}>
                <Header />
                <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                    <OverviewCard title="Budget" value="$24k" percentage={12} />
                    <OverviewCard title="Total Customers" value="1.6k" percentage={-16} />
                    <OverviewCard title="Task Progress" value="75.5%" />
                    <OverviewCard title="Total Profit" value="$15k" />
                </div>
                <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                    <BarChart />
                    <DonutChart />
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <LatestProducts />
                    <LatestOrders />
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;
