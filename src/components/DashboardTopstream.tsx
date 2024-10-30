import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const data = [
  { name: 'Page A', value: 400 },
  { name: 'Page B', value: 300 },
  { name: 'Page C', value: 300 },
  { name: 'Page D', value: 200 },
];

const pieData = [
  { name: 'Group A', value: 240 },
  { name: 'Group B', value: 130 },
  { name: 'Group C', value: 90 },
];

export default function DashboardTopstream() {
  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow">
          <h2 className="text-xl font-medium mb-4">Bar Chart Example</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow">
          <h2 className="text-xl font-medium mb-4">Pie Chart Example</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#4F46E5"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#4F46E5' : '#3B82F6'} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow">
        <h2 className="text-xl font-medium mb-4">Additional Information</h2>
        <p className="text-gray-700 dark:text-gray-300">This is where you can add more components or statistics.</p>
      </div>
    </div>
  );
};
