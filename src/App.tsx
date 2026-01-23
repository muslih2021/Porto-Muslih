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
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
} from "./components";
import Loading from "./components/Loading";
import { config } from "./constants/config";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <BrowserRouter>
      {isLoading && (
        <Loading
          name="Muslih Sahmat"
          onComplete={handleLoadingComplete}
        />
      )}

      <div className="bg-primary relative z-0">
        <div className="bg-primary relative z-0 h-screen w-screen">
          <Hero />
        </div>
        <Navbar />
        <About />
        <Experience />
        {/* <Tech /> */}
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;