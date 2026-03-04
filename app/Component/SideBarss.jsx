// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { useState } from "react";
// function SideBarss() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };
//   //   const handleOutsideClick = (e) => {
//   //     if (e.target.classList.contains("sidebar-overlay")) {
//   //       setIsOpen(false);
//   //     }
//   //   };
//   return (
//     <div>
//       {isOpen ? (
//         <div className="fixed top-0 left-0 w-1/4 h-sc  bg-gray-800 text-white p-4 ">
//           <Link href="/">
//             <Image
//               src="/Image/bossvnnlogo.png"
//               alt="logo"
//               width={40}
//               height={40}
//               className="w-10 h-10 rounded-full"
//             />
//           </Link>
//           <Link href="/Product">
//             <h1>Crypto page</h1>
//           </Link>
//           <Link href="/Login">
//             <h1>Login</h1>
//           </Link>
//           <Link href="/Signup">
//             <h1>Sign Up</h1>
//           </Link>
//           <Link href="/News">
//             <h1>News</h1>
//           </Link>
//           <Link href="/Register">
//             <h1>register</h1>
//           </Link>
//           <Link href="/Exchange">
//             <h1>Exchange rate page</h1>
//           </Link>
//           <Link href="/Community">
//             <h1>Community page</h1>
//           </Link>
//           <h1 className="cursor-pointer" onClick={() => setIsOpen(false)}>
//             close
//           </h1>
//           <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
//         </div>
//       ) : (
//         <Image
//           src="/Image/menu.png"
//           onClick={toggleSidebar}
//           alt="logo"
//           width={40}
//           height={40}
//           className=""
//         />
//       )}
//     </div>
//   );
// }

// export default SideBarss;
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
const Sidebars = () => {
  
  const [isOpen, setIsOpen] = useState(false); // Start with the sidebar collapsed

  return (
    <div
      className={`fixed top-0 left-0 h-screen z-10 bg-[#e4c2bd] transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="flex justify-between p-4">
        {/* Toggle Button (Hamburger Menu) */}
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <nav className="flex flex-col space-y-4 px-4 mt-8 gap-4">
        {/* Dashboard Link */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            duration: 0.1,
          }}
          // transition={{ duration: 1, delay: 0.05 }}
        >
          <div
            className="flex items-center space-x-2 group"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-white group-hover:text-blue-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2 2 4-4m0 0l4 4 2-2"
            />
          </svg> */}
            {/* <span
            className={`text-white text-lg group-hover:block ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Home
          </span> */}
            <img
              className="w-6 h-6 text-white group-hover:text-blue-400"
              src="Images/home.png"
              alt=""
            />

            <h1
              className={`text-black text-lg group-hover:block ${
                isOpen ? "block" : "hidden "
              }`}
              onClick={() => navigate("/Home")}
            >
              Home
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            duration: 0.1,
          }}
        >
          <div
            className="flex items-center space-x-2 group"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <img
              className="w-6 h-6 text-white group-hover:text-blue-400"
              src="Images/tray.png"
              alt=""
            />

            <h1
              className={`text-black text-lg group-hover:block ${
                isOpen ? "block" : "hidden"
              }`}
              onClick={() => navigate("/food")}
            >
              Food
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            duration: 0.1,
          }}
        >
          {" "}
          <div
            className="flex items-center space-x-2 group"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <img
              className="w-6 h-6 text-black group-hover:text-blue-400"
              src="Images/cocktail.png"
              alt=""
            />
            <h1
              className={`text-black text-lg group-hover:block ${
                isOpen ? "block" : "hidden"
              }`}
              onClick={() => navigate("/cocktails")}
            >
              cockTail
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            duration: 0.1,
          }}
        >
          {" "}
          <div
            className="flex items-center space-x-2 group"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <img
              className="w-6 h-6 text-white group-hover:text-blue-400"
              src="Images/user.png"
              alt=""
            />
            <h1
              className={`text-black text-lg group-hover:block ${
                isOpen ? "block" : "hidden"
              }`}
              onClick={() => navigate("/Dashboard")}
            >
              Profile
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            duration: 0.1,
          }}
        >
          {" "}
          <div
            className="flex items-center space-x-2 group"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <img
              className="w-6 h-6 text-white group-hover:text-blue-400"
              src="Images/shoppingCart.png"
              alt=""
            />
            <h1
              className={`text-black text-lg group-hover:block ${
                isOpen ? "block" : "hidden"
              }`}
              onClick={() => navigate("/AddToChart")}
            >
              cart
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            duration: 0.1,
          }}
        >
          {" "}
          <div
            className="flex items-center space-x-2 group"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <img
              className="w-6 h-6 text-white group-hover:text-blue-400"
              src="Images/heart.png"
              alt=""
            />
            <h1
              className={`text-black text-lg group-hover:block ${
                isOpen ? "block" : "hidden"
              }`}
              onClick={() => navigate("/SafeTOLater")}
            >
              Safe for later
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            duration: 0.1,
          }}
        >
          {" "}
          <div
            className="flex items-center space-x-2 group"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <img
              className="w-6 h-6 text-white group-hover:text-blue-400"
              src="Images/heart.png"
              alt=""
            />
            <h1
              className={`text-black text-lg group-hover:block ${
                isOpen ? "block" : "hidden"
              }`}
              onClick={() => navigate("/Order")}
            >
              Order
            </h1>
          </div>
        </motion.div>
      </nav>
    </div>
  );
};

export default Sidebars;