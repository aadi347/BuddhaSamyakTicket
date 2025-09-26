import React from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
} from 'chart.js';
import {
    Users,
    Calendar,
    TrendingUp,
    Clock,
    BarChart3,
    PieChart,
    Activity,
    Filter,
    Download
} from 'lucide-react';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement
);

const Dashboard = () => {
    const lastMonthData = [120, 200, 150, 170];
    const thisWeekData = [40, 60, 50, 70, 90];
    const todayData = [10, 25, 30, 15];

    // Monochrome chart options
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: '#e5e7eb',
                },
                ticks: {
                    color: '#6b7280',
                },
            },
            x: {
                grid: {
                    color: '#e5e7eb',
                },
                ticks: {
                    color: '#6b7280',
                },
            },
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#374151',
                    padding: 15,
                    usePointStyle: true,
                },
            },
            tooltip: {
                backgroundColor: '#1f2937',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
            },
        },
    };

    const doughnutOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#374151',
                    padding: 15,
                    usePointStyle: true,
                },
            },
            tooltip: {
                backgroundColor: '#1f2937',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
            },
        },
    };

    // Bar chart data with monochrome colors
    const lastMonthChart = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Visitors',
                data: lastMonthData,
                backgroundColor: '#374151',
                borderColor: '#111827',
                borderWidth: 1,
                barThickness: 20,
                borderRadius: 2,
            },
        ],
    };

    const thisWeekChart = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
            {
                label: 'Visitors',
                data: thisWeekData,
                backgroundColor: '#6b7280',
                borderColor: '#374151',
                borderWidth: 1,
                barThickness: 20,
                borderRadius: 2,
            },
        ],
    };

    const todayChart = {
        labels: ['9AM', '12PM', '3PM', '6PM'],
        datasets: [
            {
                label: 'Visitors',
                data: todayData,
                backgroundColor: '#9ca3af',
                borderColor: '#6b7280',
                borderWidth: 1,
                barThickness: 20,
                borderRadius: 2,
            },
        ],
    };

    // Doughnut chart for visitor distribution
    const visitorTypeChart = {
        labels: ['Adults', 'Children', 'Students', 'Seniors'],
        datasets: [
            {
                label: 'Visitor Types',
                data: [450, 320, 180, 150],
                backgroundColor: ['#111827', '#374151', '#6b7280', '#9ca3af'],
                borderColor: ['#000000', '#111827', '#374151', '#6b7280'],
                borderWidth: 2,
            },
        ],
    };

    // Line chart for trends
    const trendChart = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Monthly Visitors',
                data: [1200, 1400, 1300, 1600, 1800, 1500],
                borderColor: '#111827',
                backgroundColor: 'rgba(17, 24, 39, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#111827',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 4,
            },
        ],
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Clean Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
                            <p className="text-gray-600 text-sm">Visitor analytics and museum insights</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors duration-200 text-sm">
                                <Filter size={16} />
                                Filter
                            </button>
                            <button className="flex items-center gap-2 px-3 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200 text-sm">
                                <Download size={16} />
                                Export
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-6">
                {/* Compact Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {/* Last Month Card */}
                    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:bg-gray-50 transition-colors duration-200">
                        <div className="flex items-center justify-between mb-3">
                            <div className="p-2 bg-black rounded">
                                <Calendar size={18} className="text-white" />
                            </div>
                            <BarChart3 size={16} className="text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {lastMonthData.reduce((a, b) => a + b, 0).toLocaleString()}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">Last Month Visitors</p>
                        <div className="text-xs text-gray-500">
                            <p>Peak: Week {lastMonthData.indexOf(Math.max(...lastMonthData)) + 1} ({Math.max(...lastMonthData)})</p>
                        </div>
                    </div>

                    {/* This Week Card */}
                    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:bg-gray-50 transition-colors duration-200">
                        <div className="flex items-center justify-between mb-3">
                            <div className="p-2 bg-gray-800 rounded">
                                <Users size={18} className="text-white" />
                            </div>
                            <TrendingUp size={16} className="text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {thisWeekData.reduce((a, b) => a + b, 0).toLocaleString()}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">This Week Visitors</p>
                        <div className="text-xs text-gray-500">
                            <p>Peak: {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'][thisWeekData.indexOf(Math.max(...thisWeekData))]} ({Math.max(...thisWeekData)})</p>
                        </div>
                    </div>

                    {/* Today Card */}
                    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:bg-gray-50 transition-colors duration-200">
                        <div className="flex items-center justify-between mb-3">
                            <div className="p-2 bg-gray-700 rounded">
                                <Clock size={18} className="text-white" />
                            </div>
                            <Activity size={16} className="text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {todayData.reduce((a, b) => a + b, 0).toLocaleString()}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">Today's Visitors</p>
                        <div className="text-xs text-gray-500">
                            <p>Peak: {['9AM', '12PM', '3PM', '6PM'][todayData.indexOf(Math.max(...todayData))]} ({Math.max(...todayData)})</p>
                        </div>
                    </div>
                </div>

                {/* Charts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {/* Last Month Bar Chart */}
                    <div className="bg-white rounded-lg border border-gray-200">
                        <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-black rounded">
                                    <BarChart3 size={16} className="text-white" />
                                </div>
                                <h3 className="text-sm font-medium text-gray-900">Last Month Weekly</h3>
                            </div>
                        </div>
                        <div className="p-4 h-64">
                            <Bar data={lastMonthChart} options={chartOptions} />
                        </div>
                    </div>

                    {/* This Week Bar Chart */}
                    <div className="bg-white rounded-lg border border-gray-200">
                        <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-black rounded">
                                    <BarChart3 size={16} className="text-white" />
                                </div>
                                <h3 className="text-sm font-medium text-gray-900">This Week Daily</h3>
                            </div>
                        </div>
                        <div className="p-4 h-64">
                            <Bar data={thisWeekChart} options={chartOptions} />
                        </div>
                    </div>

                    {/* Today Hourly Chart */}
                    <div className="bg-white rounded-lg border border-gray-200">
                        <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-black rounded">
                                    <Clock size={16} className="text-white" />
                                </div>
                                <h3 className="text-sm font-medium text-gray-900">Today Hourly</h3>
                            </div>
                        </div>
                        <div className="p-4 h-64">
                            <Bar data={todayChart} options={chartOptions} />
                        </div>
                    </div>

                    {/* Visitor Types Doughnut Chart */}
                    <div className="bg-white rounded-lg border border-gray-200">
                        <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-black rounded">
                                    <PieChart size={16} className="text-white" />
                                </div>
                                <h3 className="text-sm font-medium text-gray-900">Visitor Types</h3>
                            </div>
                        </div>
                        <div className="p-4 h-64">
                            <Doughnut data={visitorTypeChart} options={doughnutOptions} />
                        </div>
                    </div>
                </div>

                {/* Monthly Trend Line Chart */}
                <div className="bg-white rounded-lg border border-gray-200">
                    <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-black rounded">
                                    <Activity size={16} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900">Monthly Visitor Trends</h3>
                                    <p className="text-xs text-gray-600">6-month overview</p>
                                </div>
                            </div>
                            <span className="text-xs text-gray-500">2025</span>
                        </div>
                    </div>
                    <div className="p-4 h-80">
                        <Line data={trendChart} options={chartOptions} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
