import Sidebar from "@/components/Sidebardeneme2";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbardeneme2";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-32">
        <div className="col-span-12 p-4 text-center bg-[#f1f5f9] dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark dark:border dark:border-slate-800">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-[#f1f5f9] lg:col-span-9 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark dark:border dark:border-slate-800">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}
