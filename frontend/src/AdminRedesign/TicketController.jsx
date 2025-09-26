import React, { useState, useEffect } from 'react';
import {
    Search,
    Ticket,
    Users,
    Globe,
    Calendar,
    TrendingUp,
    Eye,
    ChevronRight,
    Filter,
    Download,
    BarChart3
} from 'lucide-react';

const TicketController = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [animatedCounts, setAnimatedCounts] = useState({
        totalBooked: 0,
        totalScanned: 0,
        last10Days: 0
    });

    // Mock data - replace with real API calls
    const stats = {
        totalBooked: 15420,
        totalScanned: 12850,
        last10Days: 2340
    };

    const topCountries = [
        { name: 'Thailand', visitors: 3245, flag: '🇹🇭', growth: '+12%', rank: 1 },
        { name: 'China', visitors: 2890, flag: '🇨🇳', growth: '+8%', rank: 2 },
        { name: 'Japan', visitors: 2654, flag: '🇯🇵', growth: '+15%', rank: 3 },
        { name: 'Korea', visitors: 2341, flag: '🇰🇷', growth: '+5%', rank: 4 },
        { name: 'Singapore', visitors: 1876, flag: '🇸🇬', growth: '+18%', rank: 5 },
        { name: 'Malaysia', visitors: 1654, flag: '🇲🇾', growth: '+7%', rank: 6 },
        { name: 'Indonesia', visitors: 1432, flag: '🇮🇩', growth: '+10%', rank: 7 },
        { name: 'Philippines', visitors: 1298, flag: '🇵🇭', growth: '+6%', rank: 8 },
        { name: 'Vietnam', visitors: 1156, flag: '🇻🇳', growth: '+20%', rank: 9 },
        { name: 'Myanmar', visitors: 987, flag: '🇲🇲', growth: '+25%', rank: 10 }
    ];

    // Animated counter effect
    useEffect(() => {
        const animateCount = (target, key, duration = 2000) => {
            let start = 0;
            const increment = target / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    start = target;
                    clearInterval(timer);
                }
                setAnimatedCounts(prev => ({ ...prev, [key]: Math.floor(start) }));
            }, 16);
        };

        animateCount(stats.totalBooked, 'totalBooked');
        animateCount(stats.totalScanned, 'totalScanned');
        animateCount(stats.last10Days, 'last10Days');
    }, []);

    const handleSearch = () => {
        if (searchQuery.trim()) {
            // Mock search result - replace with real API call
            setSearchResult({
                id: searchQuery,
                status: 'Active',
                visitor: 'John Doe',
                country: 'Thailand',
                bookingDate: '2025-09-20',
                scanDate: '2025-09-25',
                type: 'Adult Entry',
                amount: '$25.00',
                gate: 'Gate A'
            });
        }
    };

    const clearSearch = () => {
        setSearchQuery('');
        setSearchResult(null);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Clean Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-xl font-semibold text-gray-900">Ticket Management</h1>
                            <p className="text-gray-600 text-sm">Monitor and manage museum ticket operations</p>
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
                {/* Compact Search Section */}
                <div className="mb-6">
                    <div className="bg-white rounded-lg border border-gray-200">
                        <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-black rounded">
                                    <Search size={16} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-medium text-gray-900">Ticket Search</h2>
                                </div>
                            </div>
                        </div>

                        <div className="p-4">
                            <div className="flex gap-3">
                                <div className="flex-1 relative">
                                    <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Enter Ticket ID (e.g., TKT-123456)"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-black focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-sm"
                                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                                    />
                                </div>
                                <button
                                    onClick={handleSearch}
                                    disabled={!searchQuery.trim()}
                                    className="px-4 py-2.5 bg-black text-white rounded-md hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center gap-2 font-medium text-sm"
                                >
                                    <Search size={16} />
                                    Search
                                </button>
                                {searchQuery && (
                                    <button
                                        onClick={clearSearch}
                                        className="px-3 py-2.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors duration-200 text-sm"
                                    >
                                        Clear
                                    </button>
                                )}
                            </div>

                            {/* Compact Search Result */}
                            {searchResult && (
                                <div className="mt-4 bg-black rounded-md p-4 text-white">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-sm font-medium flex items-center gap-2">
                                            <Ticket size={16} />
                                            Ticket Details
                                        </h3>
                                        <span className="px-2 py-1 bg-white text-black rounded text-xs font-medium">
                                            {searchResult.status}
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-3 md:grid-cols-6 gap-3 text-xs">
                                        <div>
                                            <p className="text-gray-300 mb-1">Ticket ID</p>
                                            <p className="font-medium">{searchResult.id}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-300 mb-1">Visitor</p>
                                            <p className="font-medium">{searchResult.visitor}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-300 mb-1">Country</p>
                                            <p className="font-medium">{searchResult.country}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-300 mb-1">Date</p>
                                            <p className="font-medium">{searchResult.bookingDate}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-300 mb-1">Amount</p>
                                            <p className="font-medium">{searchResult.amount}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-300 mb-1">Gate</p>
                                            <p className="font-medium">{searchResult.gate}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Compact Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {/* Total Tickets Booked */}
                    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:bg-gray-50 transition-colors duration-200">
                        <div className="flex items-center justify-between mb-3">
                            <div className="p-2 bg-black rounded">
                                <Ticket size={18} className="text-white" />
                            </div>
                            <BarChart3 size={16} className="text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {animatedCounts.totalBooked.toLocaleString()}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">Total Tickets Booked</p>
                        <div className="flex items-center text-gray-700 text-xs">
                            <TrendingUp size={12} className="mr-1" />
                            <span>+8.2% from last month</span>
                        </div>
                    </div>

                    {/* Total Tickets Scanned */}
                    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:bg-gray-50 transition-colors duration-200">
                        <div className="flex items-center justify-between mb-3">
                            <div className="p-2 bg-gray-800 rounded">
                                <Eye size={18} className="text-white" />
                            </div>
                            <Users size={16} className="text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {animatedCounts.totalScanned.toLocaleString()}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">Total Footfall (Scanned)</p>
                        <div className="flex items-center text-gray-700 text-xs">
                            <TrendingUp size={12} className="mr-1" />
                            <span>83.4% scan rate</span>
                        </div>
                    </div>

                    {/* Last 10 Days */}
                    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:bg-gray-50 transition-colors duration-200">
                        <div className="flex items-center justify-between mb-3">
                            <div className="p-2 bg-gray-700 rounded">
                                <Calendar size={18} className="text-white" />
                            </div>
                            <TrendingUp size={16} className="text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {animatedCounts.last10Days.toLocaleString()}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">Last 10 Days Bookings</p>
                        <div className="flex items-center text-gray-700 text-xs">
                            <TrendingUp size={12} className="mr-1" />
                            <span>234 per day average</span>
                        </div>
                    </div>
                </div>

                {/* Compact Top Countries Section */}
                <div className="bg-white rounded-lg border border-gray-200">
                    <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-black rounded">
                                    <Globe size={16} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-medium text-gray-900">Top 10 Countries by Visitors</h2>
                                </div>
                            </div>
                            <span className="text-xs text-gray-500">This Month</span>
                        </div>
                    </div>

                    <div className="p-4">
                        <div className="space-y-3">
                            {topCountries.map((country, index) => (
                                <div
                                    key={country.name}
                                    className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors duration-200 border border-gray-200"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-6 h-6 bg-white rounded border border-gray-300 text-xs font-medium text-gray-700">
                                            {country.rank}
                                        </div>
                                        <div className="text-lg">
                                            {country.flag}
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900 text-sm">{country.name}</p>
                                            <p className="text-gray-600 text-xs">{country.visitors.toLocaleString()} visitors</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="text-right">
                                            <p className="text-gray-900 font-medium text-sm">{country.growth}</p>
                                            <p className="text-gray-500 text-xs">vs last month</p>
                                        </div>
                                        <ChevronRight size={14} className="text-gray-400" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketController;
