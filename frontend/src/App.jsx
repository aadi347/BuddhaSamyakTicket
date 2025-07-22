import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ParallaxLayout from './components/ParallaxLayout';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ExhibitionsCarousel from './components/ExhibitionsCarousel';
import ImgGrid from './components/ImgGrid';
import Footer from './components/Footer';
import MembershipBanner from './components/MembershipBanner';
import VisitInformation from './components/VisitInformationCard';
import VisitInformation2 from './components/VisitInformationCard2';
import SignupBanner from './components/SignupBanner';
import MuseumCollectionCarousel from './components/MuseumCollectionCarousel';
import TicketBookingForm from "./components/TicketBookingForm";

const MainPage = () => (
  <ParallaxLayout>
    <div className="min-h-screen">
      <Home />
      <ExhibitionsCarousel />
      <VisitInformation />
      <MembershipBanner />
      <VisitInformation2 />
      <SignupBanner />
      <MuseumCollectionCarousel />
      <ImgGrid />
      <Footer />
    </div>
  </ParallaxLayout>
);

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/book-ticket" element={<TicketBookingForm />} />
      </Routes>
    </>
  );
};

export default App;
