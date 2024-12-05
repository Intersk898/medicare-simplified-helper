import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, FileCheck, Phone } from "lucide-react";

const EnrollmentHelp = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Medicare Enrollment Help & Guidance | Easy Enrollment | Mazari Health</title>
        <meta name="description" content="Get expert help with Medicare enrollment. Understanding enrollment periods, eligibility, and application process. Free consultation with licensed Medicare agents." />
        <meta name="keywords" content="Medicare enrollment help, Medicare application assistance, Medicare enrollment periods, Medicare eligibility help" />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-up">Medicare Enrollment Assistance</h1>
            <p className="text-xl mb-8 opacity-90 animate-fade-up delay-100">
              Get expert guidance through every step of your Medicare enrollment journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-200">
              <Button variant="secondary" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Phone className="mr-2 h-4 w-4" />
                Call (213) 322-3542
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Periods Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Understanding Enrollment Periods</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-up">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Initial Enrollment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Your first chance to sign up for Medicare around your 65th birthday.</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 3 months before your 65th birthday</li>
                  <li>• Your birthday month</li>
                  <li>• 3 months after your 65th birthday</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-up delay-100">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Annual Enrollment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">October 15 - December 7 each year</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Change Medicare Advantage Plans</li>
                  <li>• Switch prescription drug coverage</li>
                  <li>• Move between Original Medicare and Medicare Advantage</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-up delay-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Special Enrollment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Qualify under special circumstances</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Moving to a new area</li>
                  <li>• Losing current coverage</li>
                  <li>• Other qualifying life events</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default EnrollmentHelp;