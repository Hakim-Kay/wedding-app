import { getGuestList } from '../../lib/db';

export default async function GuestList() {
    const guests = await getGuestList();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Wedding Guest List</h1>
            <table className="w-full border-collapse">
                <thead>
                <tr className="bg-gray-200">
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Email</th>
                    <th className="border p-2">RSVP Status</th>
                </tr>
                </thead>
                <tbody>
                {guests.map((guest) => (
                    <tr key={guest.id}>
                        <td className="border p-2">{guest.name}</td>
                        <td className="border p-2">{guest.email}</td>
                        <td className="border p-2">
                <span className={`px-2 py-1 rounded ${
                    guest.rsvp_status === 'Attending' ? 'bg-green-200' :
                        guest.rsvp_status === 'Not Attending' ? 'bg-red-200' :
                            'bg-yellow-200'
                }`}>
                  {guest.rsvp_status}
                </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}