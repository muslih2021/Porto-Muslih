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
} from "./components";
import { config } from "./constants/config";

const MainContent = () => {
  return (
    <div className="bg-primary relative w-full z-0">
      <div className="bg-primary relative z-0 h-screen w-full">
        <Hero />
      </div>
      <Navbar />
      <About />
      <Works />
      {/* <Tech /> */}
      <Experience />
      <div className="relative z-0">
        <Contact />
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