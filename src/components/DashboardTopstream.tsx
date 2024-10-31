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
      <h1 className="text-4xl font-semibold mb-2 text-gray-900 dark:text-white">Dashboard</h1>
      <h2 className="text-muted font-semibold mb-6 text-gray-900 dark:text-white">
        Overview of your advertising metrics
      </h2>

      {/* Impression Performance Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-100 dark:bg-blue-900 text-gray-900 dark:text-white p-4 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-2">
              <i className="tabler:brand-tailwind" />
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eye-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
              </svg>
              <h3 className="text-xl font-medium ml-2">Total Impressions</h3>
            </span>
          </div>
          <p className="text-lg">377,544</p>
        </div>

        <div className="bg-green-100 dark:bg-blue-900 text-gray-900 dark:text-white p-4 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-2">
              <i className="tabler:components" />
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cursor-fill"
                viewBox="0 0 16 16"
              >
                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
              </svg>
              <h3 className="text-xl font-medium ml-2">CTR</h3>
            </span>
          </div>
          <p className="text-lg">2.34%</p>
        </div>

        <div className="bg-cyan-100 dark:bg-blue-900 text-gray-900 dark:text-white p-4 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-2">
              <i className="tabler:help" />
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              <h3 className="text-xl font-medium ml-2">Conversions</h3>
            </span>
          </div>
          <p className="text-lg">567</p>
        </div>

        <div className="bg-red-100 dark:bg-blue-900 text-gray-900 dark:text-white p-4 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-2">
              <i className="tabler:bulb" />
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-circle-fill mr-2" // Add margin-right
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
              </svg>
              <h3 className="text-xl font-medium">Bounce Rate</h3>
            </span>
          </div>
          <p className="text-lg">45%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow">
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-graph-up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"
              />
            </svg>
            <h2 className="text-xl font-medium mb-0 ml-2">Top Zip Codes by Impression</h2>
          </span>

          <ResponsiveContainer width="100%" height={400}>
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
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pie-chart-fill mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778zM8.5.015V7.5h7.485A8 8 0 0 0 8.5.015" />
            </svg>
            <h2 className="text-xl font-medium mb-0">Demographic Gender:</h2>
          </span>

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
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-clock"
            viewBox="0 0 16 16"
          >
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
          </svg>
          <h2 className="text-xl font-medium mb-0 ml-2">Impressions Over Time</h2>
        </span>

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
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-table"
            viewBox="0 0 16 16"
          >
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 2h-4v3h4zm0 4h-4v3h4zm0 4h-4v3h3a1 1 0 0 0 1-1zm-5 3v-3H6v3zm-5 0v-3H1v2a1 1 0 0 0 1 1zm-4-4h4V8H1zm0-4h4V4H1zm5-3v3h4V4zm4 4H6v3h4z" />
          </svg>

          <h2 className="text-xl font-medium mb-0 ml-2">Impressions by Zip Code</h2>
        </span>

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
