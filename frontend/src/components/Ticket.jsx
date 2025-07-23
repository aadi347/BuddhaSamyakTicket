import { useEffect, useState } from "react";
import { QRCode } from "react-qrcode-logo";

const Ticket = ({ formData }) => {
  const [ticketId, setTicketId] = useState("");

  useEffect(() => {
    const generateTicketId = () => {
      const randomId = Math.floor(
        10000000 + Math.random() * 90000000
      ).toString();
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
      <div className="w-[350px] overflow-hidden rounded-3xl bg-white drop-shadow-2xl">
        <div className="relative border-b border-gray-300 p-6 text-xs">
          <div className="flex justify-between items-center mt-2">
            {/* Left side text */}
            <h3 className="text-sm font-semibold text-gray-500">
              ENTRY TICKET
            </h3>

            {/* Right side images */}
            <div className="flex items-center gap-2">
              <img
                src="/buddha.png"
                alt="Logo 1"
                className="h-8 w-8 object-contain"
              />
              <img
                src="https://m.media-amazon.com/images/I/51SHJDH2X2L._UF894,1000_QL80_.jpg"
                alt="Logo 2"
                className="h-8 w-8 object-contain"
              />
            </div>
          </div>

          <h1 className="text-2xl w-full leading-snug font-bold text-black">
            Buddha Samyak <br />
            Darshan Museum
          </h1>
          <div className="mt-4 border-t w-full border-dashed border-gray-400"></div>

          <div className="mt-6 space-y-4 text-[12px] text-gray-500">
           
            {/* Row 1 */}
            <div className="flex justify-between gap-4">
              <div className="w-1/2">
                <div className="text-xs text-gray-400">Full Name</div>
                <div className="text-lg font-bold text-black">
                  {formData.fullName || "Name"}
                </div>
              </div>
              <div className="w-1/2 text-right">
                <div className="text-xs text-gray-400">Phone Number</div>
                <div className="text-lg font-bold text-black">
                  {formData.phone || "Phone"}
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex justify-between gap-4">
              <div className="w-1/2">
                <div className="text-xs text-gray-400">Number of Adults </div>
                <div className="text-lg font-bold text-black">
                  {formData.adults || 0} 
                </div>
              </div>
              <div className="w-1/2 text-right">
                <div className="text-xs text-gray-400">Number of Children</div>
                <div className="text-lg font-bold text-black">
                  {formData.children || 0}  
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex justify-between gap-4">
              <div className="w-1/2">
                <div className="text-xs text-gray-400">Date</div>
                <div className="text-lg font-bold text-black">
                  {formData.date || "No Date"}
                </div>
              </div>
              <div className="w-1/2 text-right">
                <div className="text-xs text-gray-400">Session Type</div>
                <div className="text-lg font-bold text-black">
                  {formData.sessionType || "No Session"}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 border-t border-dashed border-gray-400"></div>
          <div className="mt-4 text-center">
  <p className="text-xs text-gray-500 mb-1">Ticket Number</p>
  <p className="text-xl font-extrabold rounded-md py-1">
    <span>{ticketId}</span>
  </p>
</div>

        </div>

        <div className="relative rounded-b-3xl bg-black p-4">
         <div className="absolute inset-0 z-0 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/000/160/821/small_2x/hamsa-pattern-wallpaper-vector.jpg')] bg-cover bg-center bg-no-repeat opacity-90 rounded-b-3xl"></div>


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
