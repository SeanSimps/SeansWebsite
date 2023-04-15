import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, TypeWrite, HeroTech } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          {/* <HeroTech /> */}
        </div>
        <About />
        {/* <TypeWrite /> */}
        <Experience />
        <div className="container mx-auto py-10 flex justify-end">
          <div className="w-full max-w-screen-lg">
            <Tech />
          </div>
        </div>
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
