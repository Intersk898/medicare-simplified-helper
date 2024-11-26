import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import BusinessHeader from "@/components/BusinessHeader";

const Disclaimer = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Medicare Disclaimer | Mazari Health Insurance Services</title>
        <meta name="description" content="Important Medicare disclaimer information for Mazari Health Insurance Services. Understanding our relationship with Medicare and available plan options." />
      </Helmet>
      <BusinessHeader />
      <Navbar />
      <div className="pt-28">
        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold text-primary mb-8">Medicare Disclaimer</h1>
          
          <div className="prose max-w-none space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 mb-4">
                Medicare has neither reviewed nor endorsed this information. Not connected with or endorsed by the United States government or the federal Medicare program.
              </p>
              <p className="text-gray-700">
                We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov or Call 1-800-MEDICARE to get information on all of your options.
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Disclaimer;