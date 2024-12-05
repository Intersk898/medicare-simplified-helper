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
        <title>Find Local Medicare Agents in Los Angeles County | Mazari Health</title>
        <meta 
          name="description" 
          content="Connect with experienced Medicare agents in Los Angeles County. Get personalized guidance from local specialists who understand your community's healthcare needs. Free consultation available."
        />
        <meta 
          name="keywords" 
          content="Medicare agents Los Angeles, Medicare insurance broker LA County, local Medicare specialist, Medicare help near me, Medicare advisor Los Angeles"
        />
        {/* Schema markup for local business */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Mazari Health Insurance Services",
              "image": "",
              "@id": "",
              "url": "https://mazarihealth.com",
              "telephone": "(213) 322-3542",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Los Angeles",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 34.0522,
                "longitude": -118.2437
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "08:00",
                "closes": "20:00"
              },
              "sameAs": [
                "https://www.linkedin.com/company/mazari-health-insurance-services/"
              ]
            }
          `}
        </script>
      </Helmet>
      <BusinessHeader />
      <Navbar />
      <main className="space-y-20">
        <AgentHero />
        <AgentMap />
        <FeaturedAgents />
        <AgentTestimonials />
        <AgentForm />
      </main>
      <Footer />
    </div>
  );
};

export default FindAgent;