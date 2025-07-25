import React from "react";
import { Instagram, Twitter, Mail, PhoneCall } from "lucide-react";

function AboutMuseum() {
  const StayConnected = () => (
    <div className="bg-black/90 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between mt-10 text-white">
      <div className="text-center md:text-left max-w-md mb-4 md:mb-0">
        <h2 className="text-xl font-semibold mb-2">Stay Connected</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
          convallis nulla. Donec ut diam nec nisi iaculis fermentum.
        </p>
      </div>
      <div className="flex gap-6 items-center text-white text-xl">
        <a
          href="#"
          aria-label="Instagram"
          className="hover:text-pink-500 transition-all duration-200"
        >
          <Instagram />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="hover:text-blue-400 transition-all duration-200"
        >
          <Twitter />
        </a>
        <a
          href="mailto:info@example.com"
          aria-label="Mail"
          className="hover:text-yellow-400 transition-all duration-200"
        >
          <Mail />
        </a>
        <a
          href="tel:+911234567890"
          aria-label="Call"
          className="hover:text-green-400 transition-all duration-200"
        >
          <PhoneCall />
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen text-white py-8 bg-white">
      {/* 🌟 Banner Section */}
      <div className="w-full px-4 md:px-20">
        <div className="relative h-40 md:h-56 flex items-center justify-center rounded-lg overflow-hidden mb-8  ">
          <img
            src="/gggg.jpg"
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 text-center px-4 py-2 rounded-md  ">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Explore More
            </h1>
          </div>
        </div>
      </div>

      {/* ✅ Stay Connected for large screens */}
      <div className="hidden md:block">
        <div className="w-full px-4 md:px-20">{StayConnected()}</div>
      </div>

      {/* 🔸 Explore Section */}
      <div className="space-y-6 w-full px-4 md:px-20 mt-10">
        {/* Block 1 */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-2/5 bg-white bg-opacity-90 text-black rounded-xl p-4">
            <h2 className="text-3xl font-bold mb-1">
               ऐतिहासिक पृष्ठभूमि और पुरातात्विक खोज
            </h2>
            <p className="text-lg pt-5">
              वैशाली पुरास्थल पर प्रसिद्ध इतिहासकार एवं पुरातत्वविद् डॉ. ए. एस. अल्तेकर द्वारा किए गए वैज्ञानिक उत्खनन के फलस्वरूप वर्ष 1958-60 के मध्य भगवान बुद्ध के पवित्र अस्थि-अवशेष प्राप्त हुए। यह अवशेष प्राचीन लिच्छवी गणराज्य द्वारा स्थापित एक मिट्टी से निर्मित स्तूप में संरक्षित थे। उत्खनन के दौरान ताम्र पत्रांकित सिक्का, शंख का टुकड़ा, दो मनके तथा सोने की पतली पत्तियाँ भी प्राप्त हुईं, जो सोप स्टोन की मंजूषा में सुरक्षित पाए गए। वर्ष 1972 में इन पवित्र अस्थियों को पटना संग्रहालय में स्थानांतरित कर सुरक्षित रखा गया।
            </p>
          </div>
          <div className="md:w-3/5 rounded-xl overflow-hidden">
            <img
              style={{
                boxShadow: "-23px 0px 100px 12px rgba(80, 159, 228, 0.14)",
              }}
              src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqC6vWB4BQcNY7-g8tU6p030iJG2iSEmISQ35Hf3F_PsfVjdc9RxocbYe3PYR1ixbo4ME6WPNDJUbQ8hBDKuKot3JeU5JcmGvol0y3LLmF7EaErmt_HhaRFOtzDEwYgHPJLGQ-r=s1360-w1360-h1020-rw"
              alt="Museum Exterior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="md:w-3/5 rounded-xl overflow-hidden">
            <img
              style={{
                boxShadow: "-23px 0px 100px 12px rgba(80, 159, 228, 0.14)",
              }}
              src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqC6vWB4BQcNY7-g8tU6p030iJG2iSEmISQ35Hf3F_PsfVjdc9RxocbYe3PYR1ixbo4ME6WPNDJUbQ8hBDKuKot3JeU5JcmGvol0y3LLmF7EaErmt_HhaRFOtzDEwYgHPJLGQ-r=s1360-w1360-h1020-rw"
              alt="Relics"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-2/5 bg-white bg-opacity-90 text-black rounded-xl p-4">
            <h2 className="text-3xl font-bold mb-1">
              राज्य सरकार का निर्णय एवं परियोजना की रूपरेखा
            </h2>
            <p className="text-lg pt-5">
              पटना संग्रहालय में सुरक्षित भगवान बुद्ध के इन पवित्र अस्थि-अवशेषों और मंजूषा के ऐतिहासिक, पुरातात्विक एवं धार्मिक महत्व, साथ ही इनके सार्वजनिक प्रदर्शन की जन-आकांक्षा को ध्यान में रखते हुए, बिहार सरकार द्वारा विभागीय अधिसूचना संख्या-167 दिनांक 08.04.2005 तथा संख्या-15 दिनांक 12.05.2010 के माध्यम से यह निर्णय लिया गया कि वैशाली में "बुद्ध सम्यक दर्शन संग्रहालय एवं स्मृति स्तूप" का निर्माण किया जाएगा। इस संग्रहालय में पवित्र अस्थि-अवशेष, बौद्ध पुरावशेष, कलाकृतियाँ, बुद्ध के जीवन-वृत्त और उनके सिद्धांतों का व्यापक रूप से प्रदर्शन किया जाएगा।
            </p>
          </div>
        </div>

        {/* Block 3 */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-2/5 bg-white bg-opacity-90 text-black rounded-xl p-4">
            <h2 className="text-3xl font-bold mb-1">
              महत्व, उद्देश्य एवं अपेक्षित लाभ
            </h2>
            <p className="text-xl pt-5">
              इस योजना के कार्यान्वयन से देश-विदेश के बौद्ध धर्मावलंबियों, बौद्ध विषयक शोधकर्ताओं, छात्रों तथा विशेषकर नई पीढ़ी को भगवान बुद्ध के जीवन, दर्शन, सत्य, अहिंसा के संदेश और बौद्ध कला से परिचित एवं लाभान्वित होने का अवसर प्राप्त होगा। इसके साथ ही, इस संग्रहालय एवं स्तूप के निर्माण से राज्य के पर्यटन उद्योग को भी उल्लेखनीय प्रोत्साहन मिलेगा, जिससे वैशाली को एक अंतरराष्ट्रीय बौद्ध सांस्कृतिक केंद्र के रूप में विकसित किया जा सकेगा।
            </p>
          </div>
          <div className="md:w-3/5 rounded-xl overflow-hidden">
            <img
              style={{
                boxShadow: "-23px 0px 100px 12px rgba(80, 159, 228, 0.14)",
              }}
              src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqC6vWB4BQcNY7-g8tU6p030iJG2iSEmISQ35Hf3F_PsfVjdc9RxocbYe3PYR1ixbo4ME6WPNDJUbQ8hBDKuKot3JeU5JcmGvol0y3LLmF7EaErmt_HhaRFOtzDEwYgHPJLGQ-r=s1360-w1360-h1020-rw"
              alt="Visitor Experience"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ✅ Stay Connected for mobile (bottom only) */}
      <div className="block md:hidden">
        <div className="w-full px-4 md:px-20">{StayConnected()}</div>
      </div>
    </div>
  );
}

export default AboutMuseum;
