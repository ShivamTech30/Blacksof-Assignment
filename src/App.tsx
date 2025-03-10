import React from "react";
import Animation from "./Components/Vehicles";
import GetinTouch from "./Components/GetinTouch";
import Footer from "./Components/Footer";
import ScreenPage from "./Components/ScreenPage";
import Header from "./Components/Header";




const App: React.FC = () => {



  return (
    <>
      <Header />
      <ScreenPage />
      <Animation />
      <GetinTouch />
      <Footer />
    </>


  );
};

export default App;
























// import React, { Suspense, lazy } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Loader from './components/Loader';

// // Lazy load pages for better performance
// const Home = lazy(() => import('./pages/Home'));
// const About = lazy(() => import('./pages/About'));
// const Projects = lazy(() => import('./pages/Projects'));
// const Contact = lazy(() => import('./pages/Contact'));

// function App() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <main className="flex-grow">
//         <AnimatePresence mode="wait">
//           <Suspense fallback={<Loader />}>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/projects" element={<Projects />} />
//               <Route path="/contact" element={<Contact />} />
//             </Routes>
//           </Suspense>
//         </AnimatePresence>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;