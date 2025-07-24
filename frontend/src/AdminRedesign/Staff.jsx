import React from "react";
import { UserCircle } from "lucide-react";

const staffData = [
  {
    id: 1,
    name: 'Ravi Kumar',
    role: 'Electrician',
    arrival: '9:00 AM',
    departure: '5:00 PM',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Sunita Devi',
    role: 'Supervisor',
    arrival: '9:30 AM',
    departure: '5:30 PM',
    photo: '',
  },
  {
    id: 3,
    name: 'Amit Singh',
    role: 'Plumber',
    arrival: '8:45 AM',
    departure: '4:45 PM',
    photo: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    id: 4,
    name: 'Neha Verma',
    role: 'Field Assistant',
    arrival: '10:00 AM',
    departure: '6:00 PM',
    photo: '',
  },
  {
    id: 5,
    name: 'Alok Mishra',
    role: 'Technician',
    arrival: '9:15 AM',
    departure: '5:15 PM',
    photo: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    id: 6,
    name: 'Pooja Sinha',
    role: 'Office Manager',
    arrival: '9:00 AM',
    departure: '6:00 PM',
    photo: '',
  },
  {
    id: 7,
    name: 'Deepak Yadav',
    role: 'Electrician Helper',
    arrival: '8:30 AM',
    departure: '4:30 PM',
    photo: 'https://randomuser.me/api/portraits/men/59.jpg',
  },
  {
    id: 8,
    name: 'Kajal Kumari',
    role: 'Data Entry Operator',
    arrival: '10:15 AM',
    departure: '6:15 PM',
    photo: '',
  },
];

function Staff() {
  return (
    <div className="p-6 bg-gray-100 h-fit">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Staff Information
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {staffData.map((staff) => (
          <div
            key={staff.id}
            className="bg-white shadow-lg hover:shadow-xl rounded-xl px-4 pt-6 pb-4 transition-transform duration-300 transform hover:scale-105 text-center border-t-1 border-gray-200"
          >
            <div className="flex justify-center mb-4">
              {staff.photo ? (
                <img
                  src={staff.photo}
                  alt={staff.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
              ) : (
                <UserCircle className="w-20 h-20 text-gray-400" />
              )}
            </div>

            <h3 className="text-lg font-bold">{staff.name}</h3>
            <p className="text-sm text-gray-600">Role: {staff.role}</p>
            <p className="text-sm text-green-600 mt-2">
              Arrival: {staff.arrival}
            </p>
            <p className="text-sm text-red-600">Departure: {staff.departure}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Staff;
