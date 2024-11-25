import { Helmet } from "react-helmet";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Accessibility = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Accessibility Statement | Mazari Health</title>
        <meta name="description" content="Learn about Mazari Health's commitment to digital accessibility and how we ensure our website is accessible to all users." />
      </Helmet>
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl mt-32">
        <h1 className="text-4xl font-bold text-primary mb-8">Accessibility Statement</h1>
        
        <div className="space-y-6 text-gray-700">
          <p>
            Mazari Health is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">Our Commitment</h2>
            <p>
              We strive to ensure that our website adheres to WCAG 2.1 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">Accessibility Features</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clear, consistent navigation</li>
              <li>Alternative text for images</li>
              <li>Proper heading structure</li>
              <li>Color contrast that meets WCAG standards</li>
              <li>Keyboard-accessible functionality</li>
              <li>Screen reader compatibility</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">Need Assistance?</h2>
            <p>
              If you have specific questions or concerns about the accessibility of our website, please contact us at:
            </p>
            <ul className="list-none space-y-2">
              <li>Phone: (213) 322-3542</li>
              <li>Email: info@mazarihealth.com</li>
              <li>Hours: 8 a.m. to 8 p.m., 7 days a week</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">Continuous Improvement</h2>
            <p>
              We are continuously working to improve the accessibility of our website. If you find any issues or have suggestions for improvement, please don't hesitate to reach out to us.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Accessibility;