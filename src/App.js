import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import LearningSubjects from './components/LearningSubjects/LearningSubjects';
import LiveStudy from './components/LiveStudy/LiveStudy';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import ContactModal from './components/Contact/ContactModal';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <LearningSubjects></LearningSubjects>
      <LiveStudy></LiveStudy>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <ContactModal></ContactModal>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div >
  );
}

export default App;
