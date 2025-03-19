// import Footer from "./components/footer";

// export default function Home() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Main Content */}
//       <main
//         className="flex flex-col items-center justify-center flex-grow bg-cover bg-center relative text-white"
//         style={{ backgroundImage: "url('/image.jpeg')" }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative z-10 text-center">
//           <h1 className="text-4xl font-bold text-white">
//             Welcome to Digital Marketing Agency
//           </h1>
//           <p className="mt-4 text-lg">
//             We help businesses grow with creative marketing strategies.
//           </p>
//         </div>
//       </main>

//       {/* Footer Section */}
//       <div className="sticky bottom-0">
//         <Footer />
//       </div>
//     </div>
//   );
// }

"use client"; 

import { useState, useEffect, useRef } from "react";
import Footer from "./components/footer";

export default function Home() {
  const [showFooter, setShowFooter] = useState(false);
  const triggerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show footer when the trigger element is in view
        setShowFooter(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    // Cleanup the observer
    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main
        className="flex flex-col items-center justify-center flex-grow bg-cover bg-center relative text-white"
        style={{ backgroundImage: "url('/image.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white">
            Welcome to Digital Marketing Agency
          </h1>
          <p className="mt-4 text-lg">
            We help businesses grow with creative marketing strategies.
          </p>
        </div>
      </main>

      {/* Trigger Element */}
      <div ref={triggerRef} className="h-20"></div>

      {/* Footer Section */}
      <div
        className={`fixed bottom-0 left-0 right-0 transition-opacity duration-500 ${
          showFooter ? "opacity-100" : "opacity-0"
        }`}
      >
        <Footer />
      </div>
    </div>
  );
}