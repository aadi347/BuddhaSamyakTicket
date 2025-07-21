import { useEffect, useState } from "react";
import { QRCode } from "react-qrcode-logo";

const Ticket = ({ formData }) => {
      const [ticketId, setTicketId] = useState("");

      useEffect(() => {
    const generateTicketId = () => {
      const randomId = Math.floor(10000000 + Math.random() * 90000000).toString();
      setTicketId(randomId);
    };
    generateTicketId();
  }, []);

  const qrData = JSON.stringify({
    ...formData,
    ticketId,
  });

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-[350px] overflow-hidden rounded-3xl bg-white shadow-xl drop-shadow-2xl">
        <div className="relative border-b border-gray-300 p-6 text-xs">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5kFqkk1DkDHOARxMUvhu_RAKmjr8QYBaYAg&s"
            alt="Logo"
            className="absolute right-4 top-4 h-12 w-12 object-contain"
          />

          <h3 className="mb-2 text-sm font-semibold text-gray-500">ENTRY TICKET</h3>
          <h1 className="text-2xl leading-snug font-bold text-black">
            Buddha Samyak <br />
            Darshan Museum
          </h1>

          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] font-semibold text-gray-500 uppercase">
            <span>Adult <strong>{formData.adults || 0}</strong></span>
            <span>{formData.fullName || "Name"}</span>
            <span>{formData.date || "No Date"}</span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] font-semibold text-gray-500 uppercase">
            <span>Children <strong>{formData.children || 0}</strong></span>
            <span>{formData.phone || "Phone"}</span>
            <span>{formData.sessionType || "No Session"}</span>
          </div>

          <div className="mt-4 border-t border-dashed border-gray-400"></div>
        </div>

        <div className="relative rounded-b-3xl bg-black p-4">
          <div className="absolute inset-0 z-0 rounded-b-3xl bg-[url('https://static.vecteezy.com/system/resources/thumbnails/000/160/821/small_2x/hamsa-pattern-wallpaper-vector.jpg')] bg-cover opacity-90"></div>

          <div className="relative z-10 flex items-center justify-center py-6">
      <div className="rounded-2xl bg-black/60 backdrop-blur-sm p-4">
        <QRCode
          value={qrData}
          size={150}
          fgColor="#000000"
          bgColor="#ffffff"
          className="rounded object-contain"
        />
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
