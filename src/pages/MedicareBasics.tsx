import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Contact from "@/components/Contact";
import { Hospital, Heart, Stethoscope, Pill, FileText, Calendar, CheckCircle2, AlertCircle } from "lucide-react";
import CTASection from "@/components/CTASection";

const MedicareBasics = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-28">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary/90 z-10" />
          <img 
            src="/lovable-uploads/c2234e30-84cf-4187-b4d3-c8566efe3ec0.png"
            alt="Senior couple reviewing Medicare documents"
            className="w-full h-[400px] object-cover"
          />
          <div className="relative z-20 container mx-auto px-4 py-20 text-white">
            <h1 className="text-5xl font-bold mb-6 animate-fade-up">Understanding Medicare</h1>
            <p className="text-xl max-w-2xl animate-fade-up delay-100">
              Your comprehensive guide to Medicare coverage, eligibility, and enrollment options.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          {/* Medicare Overview */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">What is Medicare?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  Medicare is a federal health insurance program primarily designed for:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary h-6 w-6" />
                    <span>People aged 65 or older</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary h-6 w-6" />
                    <span>Certain younger people with disabilities</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary h-6 w-6" />
                    <span>People with End-Stage Renal Disease</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Key Things to Know</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <AlertCircle className="text-secondary h-6 w-6 flex-shrink-0 mt-1" />
                    <span>Different parts of Medicare help cover specific services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="text-secondary h-6 w-6 flex-shrink-0 mt-1" />
                    <span>Most people get Part A premium-free if they paid Medicare taxes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="text-secondary h-6 w-6 flex-shrink-0 mt-1" />
                    <span>You can get Medicare even if you're not receiving Social Security benefits</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Medicare Parts Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 animate-fade-up">The Four Parts of Medicare</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-all duration-300 animate-fade-up">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Hospital className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Part A: Hospital Insurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Inpatient hospital stays</li>
                    <li>• Skilled nursing facility care</li>
                    <li>• Hospice care</li>
                    <li>• Some home health care</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 animate-fade-up delay-100">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Part B: Medical Insurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Doctor visits</li>
                    <li>• Outpatient care</li>
                    <li>• Preventive services</li>
                    <li>• Medical supplies</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 animate-fade-up delay-200">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Part C: Medicare Advantage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Combines Part A & B coverage</li>
                    <li>• Often includes Part D</li>
                    <li>• Additional benefits</li>
                    <li>• Network-based care</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 animate-fade-up delay-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Pill className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Part D: Prescription Drugs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Prescription drug coverage</li>
                    <li>• Varies by plan</li>
                    <li>• Optional benefit</li>
                    <li>• Annual enrollment options</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enrollment Guide */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Medicare Enrollment Guide</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">Initial Enrollment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Begins 3 months before your 65th birthday and ends 3 months after your birthday month.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">Annual Enrollment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    October 15 - December 7 each year. Change your Medicare health plans and prescription drug coverage.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">Special Enrollment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Available when you have certain life events, like leaving employer coverage.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Download Guide Section */}
          <div className="text-center mb-20">
            <Card className="max-w-2xl mx-auto hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Download Our Medicare Guide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Get our comprehensive guide to understanding Medicare coverage options.
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  Download Free Guide
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <CTASection />
        <Contact />
      </div>
    </div>
  );
};

export default MedicareBasics;