import { Helmet } from "react-helmet";
import BusinessHeader from "@/components/BusinessHeader";
import Navbar from "@/components/Navbar";
import AgentHero from "@/components/agent/AgentHero";
import AgentMap from "@/components/agent/AgentMap";
import AgentForm from "@/components/agent/AgentForm";
import FeaturedAgents from "@/components/agent/FeaturedAgents";
import AgentTestimonials from "@/components/agent/AgentTestimonials";
import Footer from "@/components/Footer";

const FindAgent = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Find a Local Medicare Agent in Los Angeles County | Mazari Health</title>
        <meta 
          name="description" 
          content="Connect with experienced Medicare agents serving your local area in Los Angeles County. Get personalized guidance from specialists who understand your community's healthcare needs."
        />
      </Helmet>
      <BusinessHeader />
      <Navbar />
      <main className="space-y-20">
        <AgentHero />
        <AgentMap />
        <AgentForm />
        <FeaturedAgents />
        <AgentTestimonials />
      </main>
      <Footer />
    </div>
  );
};

export default FindAgent;