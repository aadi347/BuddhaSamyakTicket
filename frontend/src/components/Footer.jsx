import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white px-4 md:px-6 lg:px-20 py-12 md:py-24">
      <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-16 mb-12 md:mb-20">
        <div className="space-y-6 md:space-y-10 lg:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold">{t("JoinUs")}</h2>
          <div className="flex gap-4 md:gap-8 text-2xl md:text-4xl flex-wrap">
            <a target="_blank" href="https://www.facebook.com/ArtCultureYouth" aria-label="Facebook">
              <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
            </a>
            <a target="_blank" href="https://x.com/ArtCultureYouth" aria-label="Twitter">
              <FaTwitter className="hover:text-gray-400 cursor-pointer" />
            </a>
            <a target="_blank" href="https://www.instagram.com/artcultureyouth" aria-label="Instagram">
              <FaInstagram className="hover:text-gray-400 cursor-pointer" />
            </a>
            <a target="_blank" href="https://www.youtube.com/@ArtCultureYouth" aria-label="YouTube">
              <FaYoutube className="hover:text-gray-400 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 text-base md:text-lg">
        <div className="md:col-span-1">
          <h4 className="font-bold text-lg md:text-xl mb-3 md:mb-4">{t("FreeEntry")}</h4>
          <div className="grid grid-cols-2 gap-4 md:block">
            <div>
              <p className="text-sm md:text-base">{t("MuseumName")}</p>
              <p className="text-sm md:text-base">{t("MuseumLocation")}</p>
              <p className="mt-2 md:mt-3 font-medium text-sm md:text-base">+91 98765 43210</p>
            </div>
            <div className="mt-0 md:mt-4 lg:mt-5">
              <p className="font-bold mb-1 text-sm md:text-base">{t("OpeningHours")}</p>
              <p className="text-sm md:text-base">{t("DailyHours")}</p>
              <p className="text-sm md:text-base">{t("LastEntry")}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:contents">
          <div>
            <h4 className="font-bold text-lg md:text-xl mb-3 md:mb-4">{t("AboutUs")}</h4>
            <ul className="space-y-1 md:space-y-2 text-gray-300">
              <li className="text-sm md:text-base">{t("Governance")}</li>
              <li className="text-sm md:text-base">{t("OurStory")}</li>
              <li className="text-sm md:text-base">{t("Jobs")}</li>
              <li className="text-sm md:text-base">{t("Press")}</li>
              <li className="text-sm md:text-base">{t("Contact")}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg md:text-xl mb-3 md:mb-4">{t("Visit")}</h4>
            <ul className="space-y-1 md:space-y-2 text-gray-300">
              <li className="text-sm md:text-base">{t("TempleMap")}</li>
              <li className="text-sm md:text-base">{t("Events")}</li>
              <li className="text-sm md:text-base">{t("Accessibility")}</li>
              <li className="text-sm md:text-base">{t("FoodAndDrink")}</li>
              <li className="text-sm md:text-base">{t("AudioGuide")}</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:contents">
          <div>
            <h4 className="font-bold text-lg md:text-xl mb-3 md:mb-4">{t("Commercial")}</h4>
            <ul className="space-y-1 md:space-y-2 text-gray-300">
              <li className="text-sm md:text-base">{t("VenueHire")}</li>
              <li className="text-sm md:text-base">{t("Filming")}</li>
              <li className="text-sm md:text-base">{t("ImageLicensing")}</li>
              <li className="text-sm md:text-base">{t("SouvenirStore")}</li>
              <li className="text-sm md:text-base">{t("TravelPartners")}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg md:text-xl mb-3 md:mb-4">{t("Resources")}</h4>
            <ul className="space-y-1 md:space-y-2 text-gray-300">
              <li className="text-sm md:text-base">{t("StudyRoom")}</li>
              <li className="text-sm md:text-base">{t("LibraryArchives")}</li>
              <li className="text-sm md:text-base">{t("Discourses")}</li>
              <li className="text-sm md:text-base">{t("Blog")}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-20 border-t border-gray-700 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-start md:items-center text-sm md:text-base text-gray-400 gap-4 md:gap-0">
        <p className="text-center md:text-left">
          {t("Copyright")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 text-center md:text-left">
          <a href="#" className="hover:text-white">{t("PrivacyPolicy")}</a>
          <a href="#" className="hover:text-white">{t("AccessibilityLink")}</a>
          <a href="#" className="hover:text-white">{t("TermsOfUse")}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;