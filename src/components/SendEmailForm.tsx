import { useState } from 'react';
import type { FormEvent } from 'react';
// import Button from '~/components/ui/Button.astro'; // TODO: Refactor

export default function SendEmailForm() {
  const [responseMessage, setResponseMessage] = useState('');

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      body: formData,
    });
    const data = await response.text();
    if (data) {
      setResponseMessage(data);
    }
  }

  return (
    <form onSubmit={submit} className="max-w-md mx-auto p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Us</h2>
      <p className="text-sm text-gray-600 mb-4 dark:text-gray-300">
        We value your feedback and will get back to you shortly.
      </p>

      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-900 dark:text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          required
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring focus:ring-blue-200 dark:focus:ring-blue-600"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-900 dark:text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring focus:ring-blue-200 dark:focus:ring-blue-600"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-900 dark:text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          autoComplete="off"
          required
          rows={4}
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring focus:ring-blue-200 dark:focus:ring-blue-600"
        />
      </div>

      <div className="mt-10 grid">
        <button
          type="submit"
          className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
        >
          Send
        </button>
      </div>

      {responseMessage && (
        <p className="mt-3 text-sm text-green-600 flex justify-center items-center">{responseMessage}</p>
      )}
    </form>
  );
}
