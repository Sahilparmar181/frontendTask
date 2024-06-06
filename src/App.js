import './App.css';
import NavBar from './module/NavBar/NavBar';
import { RealEstateBanner } from './module/SuccessSection/RealEstateBanner';
import headerimage from './assets/images/Header image.svg'
import ServiceOfferings from './module/ServiceSection/ServiceOfferings';
import RealEstateInsights from './module/RealEstateInsights/RealEstateInsights';
import PropertyInquiries from './module/PropertyInquiries/PropertyInquiries';
import { DrivingProperty } from './module/DrivingProperty/DrivingProperty';
import { Expertise } from './module/Expertise/Expertise';
import PeaceOfMind from './module/PeaceOfMind/PeaceOfMind';
import Footer from './module/Footer/Footer';
import ContactForm from './module/ContactForm/ContactForm';
import FAQSection from './module/FaqComponent/FAQSection';

function App() {
  return (
    <>
      <NavBar />
      <RealEstateBanner/>
      <ServiceOfferings/>
      <RealEstateInsights/>
      <DrivingProperty/>

      <PropertyInquiries/>
      <Expertise/>
      <PeaceOfMind/>
      <FAQSection/>
<ContactForm/>
    

      <Footer></Footer>
     
    </>
  );
}

export default App;


