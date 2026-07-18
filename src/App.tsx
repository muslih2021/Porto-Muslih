// import { BrowserRouter } from "react-router-dom";

// import {
//   About,
//   Contact,
//   Experience,
//   Hero,
//   Navbar,
//   Works,
//   StarsCanvas,
// } from "./components";
// import { useEffect } from "react";
// import { config } from "./constants/config";

// const App = () => {
//   useEffect(() => {
//     if (document.title !== config.html.title) {
//       document.title = config.html.title;
//     }
//   }, []);

//   return (
//     <BrowserRouter>
//       <div className="bg-primary relative z-0">
//         <div className="bg-primary relative z-0 h-screen w-screen">



//           <Hero />

//         </div>
//          <Navbar />
//         <About />
//         <Experience />
//         {/* <Tech /> */}
//          <Works/>
//         <div className="relative z-0">
//           <Contact />
//           <StarsCanvas />
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  Certificates,
  ScrollButton,
} from "./components";
import { config } from "./constants/config";

const MainContent = () => {
  return (
    <div className="bg-primary relative w-full z-0">
      {/* Fixed Hero section */}
      <div className="bg-primary fixed top-0 left-0 z-0 h-screen w-full">
        <Hero />
      </div>

      {/* Spacer to push the scrolling content down by one screen height */}
      <div className="h-screen w-full pointer-events-none"></div>

      {/* Content that scrolls over the Hero */}
      <div className="relative z-10">
        <Navbar />
        <About />
        <Works />
        <Certificates />
        <Experience />
        <Contact />
        <ScrollButton />
      </div>
    </div>
  );
};

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainContent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;