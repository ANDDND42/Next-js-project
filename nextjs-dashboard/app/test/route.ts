import postgres from 'postgres';
import type { User } from '@/app/lib/definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });


export async function GET() {
  try {
    const users = await sql<User[]>`
      SELECT * FROM users
    `;
    return Response.json(users);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}