import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget); // Get form data from the current form element
    const response = await fetch('/api/login', {
      method: 'POST',
      body: formData, // Send FormData
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result.message);
      window.location.href = '/dashboard'
    } else {
      const error = await response.json();
      alert(error.error); // Display error message
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Login</h2>

      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-900 dark:text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring focus:ring-blue-200 dark:focus:ring-blue-600"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium mb-1 text-gray-900 dark:text-white">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring focus:ring-blue-200 dark:focus:ring-blue-600"
        />
      </div>

      <div className="mt-10 grid">
        <button type="submit" disabled={loading} className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400">
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </div>
    </form>
  );
}
