'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

// Data Dummy (Nanti bisa dipassing dari Props atau Fetch API)
const data = [
    { name: 'Mon', income: 12000000 },
    { name: 'Tue', income: 15000000 },
    { name: 'Wed', income: 10000000 },
    { name: 'Thu', income: 18000000 },
    { name: 'Fri', income: 25000000 },
    { name: 'Sat', income: 21000000 },
    { name: 'Sun', income: 30000000 },
];

export default function SalesChart() {
    return (
        <div className="w-full h-64 mt-4">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#5E81F4" stopOpacity={0.4} />
                            <stop offset="95%" stopColor="#FFF" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#737791', fontSize: 12 }}
                        dy={10}
                    />
                    <YAxis hide />
                    <Tooltip
                        contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0px 4px 20px rgba(0,0,0,0.1)' }}
                        formatter={(value: number | undefined) => value !== undefined ? `Rp ${value.toLocaleString('id-ID')}` : ''}
                    />
                    <Area
                        type="monotone"
                        dataKey="income"
                        stroke="#5E81F4"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorIncome)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}