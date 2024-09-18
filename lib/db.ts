import { sql } from '@vercel/postgres';

export async function getGuestList() {
    const { rows } = await sql`
    SELECT id, name, email, rsvp_status
    FROM guests
    ORDER BY name ASC
  `;
    return rows;
}