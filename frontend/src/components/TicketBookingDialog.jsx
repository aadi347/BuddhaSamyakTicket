import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const TicketBookingDialog = ({ open, onClose }) => {
  const handleDownloadPDF = async () => {
    const ticketElement = document.getElementById("ticket-to-download");

    if (!ticketElement) {
      alert("Ticket not found. Make sure the ticket is rendered.");
      return;
    }

    // Scroll into view if needed
    ticketElement.scrollIntoView({ behavior: "smooth", block: "center" });

    const canvas = await html2canvas(ticketElement, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("ticket.pdf");
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">Ticket Booked Successfully!</h2>

        <div className="flex gap-4 justify-center">
          <button
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            onClick={handleDownloadPDF}
          >
            Download Ticket
          </button>

          <button
            className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketBookingDialog;
