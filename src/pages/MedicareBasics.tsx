import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Contact from "@/components/Contact";
import { Hospital, Heart, Stethoscope, Pills, FileText, Calendar } from "lucide-react";

const MedicareBasics = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
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
                  <Pills className="w-6 h-6 text-primary" />
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

        {/* Enrollment Periods Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-up">Important Enrollment Periods</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-up">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Initial Enrollment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">7-month period around your 65th birthday</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-up delay-100">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Annual Enrollment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">October 15 - December 7 each year</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-up delay-200">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Special Enrollment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Available in specific circumstances</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Resources Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 animate-fade-up">Need More Information?</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-up delay-100">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Download Our Medicare Guide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Get our comprehensive guide to understanding Medicare coverage options.</p>
                <Button className="bg-primary hover:bg-primary/90">Download Free Guide</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default MedicareBasics;