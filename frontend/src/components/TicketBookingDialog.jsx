import React from 'react';

const TicketBookingDialog = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 fixed flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="bg-white rounded-3xl shadow-xl max-w-md w-full p-6 text-center relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-lg"
        >
          &times;
        </button>

        {/* Animation */}
        <video
          src="/ticket-animation.webm"
          autoPlay
          loop
          muted
          className="w-40 h-40 mx-auto mb-4"
        />

        {/* Success Message */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Your ticket has been booked!</h2>
        <p className="text-sm text-gray-500 mb-6">Thank you for choosing us. You can now download your ticket below.</p>

        {/* Download Button */}
        <a
          href="/your-ticket.pdf"
          download
          className="inline-block px-6 py-2 rounded-md bg-black text-white font-semibold hover:bg-blue-700 transition"
        >
          Download Ticket
        </a>
      </div>
    </div>
  );
};

export default TicketBookingDialog;
