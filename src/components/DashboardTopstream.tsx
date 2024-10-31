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
  LineChart,
  Line,
} from 'recharts';

const zipCodesData = [
  { zip: '32115', impressions: 13451 },
  { zip: '32163', impressions: 11839 },
  { zip: '34470', impressions: 10463 },
  { zip: '32162', impressions: 10338 },
  { zip: '32124', impressions: 8692 },
  { zip: '34474', impressions: 6396 },
  { zip: '33585', impressions: 6045 },
  { zip: '32136', impressions: 5567 },
  { zip: '32119', impressions: 5094 },
  { zip: '32142', impressions: 5058 },
];

const genderPieChartData = [
  { name: 'Male', value: 38.7 }, // Example values
  { name: 'Female', value: 61.3 },
];

const lineChartData = [
  { date: '2024-09-01', impressions: 15000 },
  { date: '2024-09-02', impressions: 20000 },
  { date: '2024-09-03', impressions: 25000 },
  { date: '2024-09-04', impressions: 30000 },
  { date: '2024-09-05', impressions: 28000 },
  { date: '2024-09-06', impressions: 32000 },
  { date: '2024-09-07', impressions: 35000 },
];

const zipData = [
  { zipCode: '10001', impressions: 12345, ctr: '2.5%' },
  { zipCode: '90210', impressions: 8765, ctr: '3.1%' },
];

export default function DashboardTopstream() {
  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Dashboard</h1>

      {/* Impression Performance Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-100 dark:bg-blue-900 text-gray-900 dark:text-white p-4 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-2">
              <i className="tabler:brand-tailwind" />
            </span>
            <h3 className="text-xl font-medium">Total Impressions</h3>
          </div>
          <p className="text-lg">377,544</p>
        </div>

        <div className="bg-green-100 dark:bg-blue-900 text-gray-900 dark:text-white p-4 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-2">
              <i className="tabler:components" />
            </span>
            <h3 className="text-xl font-medium">CTR</h3>
          </div>
          <p className="text-lg">2.34%</p>
        </div>

        <div className="bg-cyan-100 dark:bg-blue-900 text-gray-900 dark:text-white p-4 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-2">
              <i className="tabler:help" />
            </span>
            <h3 className="text-xl font-medium">Conversions</h3>
          </div>
          <p className="text-lg">567</p>
        </div>

        <div className="bg-red-100 dark:bg-blue-900 text-gray-900 dark:text-white p-4 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-2">
              <i className="tabler:bulb" />
            </span>
            <h3 className="text-xl font-medium">Bounce Rate</h3>
          </div>
          <p className="text-lg">45%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow">
          <h2 className="text-xl font-medium mb-4">Top Zip Codes by Impression</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={zipCodesData}>
              <XAxis dataKey="zip" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="impressions" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow">
          <h2 className="text-xl font-medium mb-4">Demographic Gender:</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={genderPieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#4F46E5"
                dataKey="value"
              >
                {genderPieChartData.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#4F46E5' : '#3B82F6'} />
                ))}
                <p>Hello</p>
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <div className="mt-4">
            <h3 className="text-lg font-medium">Chart Data:</h3>
            <ul className="list-disc pl-5">
              {genderPieChartData.map((entry, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  {entry.name}: {entry.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow mb-8">
        <h2 className="text-xl font-medium mb-4">Impressions Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineChartData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="impressions" stroke="#4F46E5" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow mb-8">
        <h2 className="text-xl font-medium mb-4">Impressions by Zip Code</h2>

        <div className="mb-4">
          {/* Excel-like Table */}
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 dark:bg-slate-700">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Zip Code</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-300">
                  Impressions
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-300">CTR</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-800 divide-y divide-gray-200">
              {zipData.map((entry, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-white">{entry.zipCode}</td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-white">
                    {entry.impressions.toLocaleString()}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 dark:text-white">{entry.ctr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow">
        <h2 className="text-xl font-medium mb-4">Additional Information</h2>
        <p className="text-gray-700 dark:text-gray-300">Contact us with any questions!</p>
      </div>
    </div>
  );
}
