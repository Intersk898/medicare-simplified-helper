import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Shield, FileText } from "lucide-react";

const MedicareBasics = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Understanding Medicare Basics | Complete Guide 2024 | Mazari Health</title>
        <meta name="description" content="Comprehensive guide to Medicare basics: Parts A, B, C, & D explained. Learn about eligibility, enrollment periods, and coverage options. Expert guidance from Mazari Health." />
        <meta name="keywords" content="Medicare basics, Medicare parts explained, Medicare eligibility, Medicare enrollment periods, Medicare coverage California" />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-up">Understanding Medicare Basics</h1>
            <p className="text-xl mb-8 opacity-90 animate-fade-up delay-100">
              Your comprehensive guide to understanding Medicare coverage, eligibility, and enrollment options in California.
            </p>
            <Button 
              variant="secondary"
              size="lg"
              className="animate-fade-up delay-200"
            >
              Get Free Medicare Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Key Components Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Key Medicare Components</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-up">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Part A: Hospital Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Covers inpatient hospital stays, skilled nursing facility care, and some home health care.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-up delay-100">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Part B: Medical Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Covers doctor visits, outpatient care, medical supplies, and preventive services.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-up delay-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Part C: Medicare Advantage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Combines Part A and B coverage, often including prescription drug coverage and additional benefits.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-up delay-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Part D: Prescription Drugs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Helps cover the cost of prescription medications and many recommended shots or vaccines.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enrollment Periods Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Important Medicare Enrollment Periods</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-6 animate-fade-up">
              <h3 className="text-2xl font-semibold">Initial Enrollment Period</h3>
              <p className="text-gray-600">Your Initial Enrollment Period is a 7-month period that includes:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>3 months before your 65th birthday</li>
                <li>The month of your 65th birthday</li>
                <li>3 months after your 65th birthday</li>
              </ul>
            </div>

            <div className="space-y-6 animate-fade-up delay-100">
              <h3 className="text-2xl font-semibold">Annual Enrollment Period</h3>
              <p className="text-gray-600">October 15 - December 7 each year</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Change Medicare Advantage Plans</li>
                <li>Switch from Original Medicare to Medicare Advantage</li>
                <li>Join, switch, or drop a Medicare drug plan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default MedicareBasics;