
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutJournal from "./pages/AboutJournal";
import InstructionsToAuthors from "./pages/InstructionsToAuthors";
import HowToSubmit from "./pages/HowToSubmit";
import ChiefEditor from "./pages/ChiefEditor";
import EditorialSecretary from "./pages/EditorialSecretary";
import AdvisoryBoard from "./pages/AdvisoryBoard";
import CurrentIssue from "./pages/CurrentIssue";
import Archive from "./pages/Archive";
import SpecialIssue from "./pages/SpecialIssue";
import Ethics from "./pages/Ethics";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-white font-inter">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-journal" element={<AboutJournal />} />
              <Route path="/instructions-to-authors" element={<InstructionsToAuthors />} />
              <Route path="/how-to-submit" element={<HowToSubmit />} />
              {/* <Route path="/chief-editor" element={<ChiefEditor />} />
              <Route path="/editorial-secretary" element={<EditorialSecretary />} />
              <Route path="/advisory-board" element={<AdvisoryBoard />} />
              <Route path="/current-issue" element={<CurrentIssue />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/special-issue" element={<SpecialIssue />} /> */}
              <Route path="/ethics" element={<Ethics />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;