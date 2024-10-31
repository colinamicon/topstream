import type { APIRoute } from 'astro';

// Mock user data for testing
const mockUsers = [
  { email: 'cmamicon@gmail.com', password: '1234' },
  { email: 'tim@topstreammedia.com', password: '1234' },
  { email: 'trenton@redoakholdingsllc.com', password: '1234' },
  { email: 'kevin.m.blue@outlook.com', password: '1234' },
];

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // Basic validation
  if (!email || !password) {
    return new Response(JSON.stringify({ error: 'Email and password are required' }), { status: 400 });
  }

  // Mock authentication
  const isAuthenticated = mockUsers.some((user) => user.email === email && user.password === password);

  if (isAuthenticated) {
    return new Response(JSON.stringify({ message: 'Login successful' }), { status: 200 });
  } else {
    return new Response(JSON.stringify({ error: 'Invalid email or password' }), { status: 401 });
  }
};
