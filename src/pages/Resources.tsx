import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Contact from "@/components/Contact";
import { FileText, BookOpen, Calendar, Phone } from "lucide-react";
import BusinessHeader from "@/components/BusinessHeader";

const Resources = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <BusinessHeader />
      <Navbar />
      <div className="pt-28">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Medicare Resources</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="w-8 h-8 text-primary mb-4" />
                <CardTitle>Medicare Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Download our comprehensive guide to understanding Medicare coverage options.</p>
                <Button variant="outline" className="w-full">Download PDF</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-primary mb-4" />
                <CardTitle>Educational Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>Understanding Medicare Costs</li>
                  <li>Choosing the Right Plan</li>
                  <li>Medicare vs. Medicaid</li>
                  <li>Prescription Drug Coverage</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="w-8 h-8 text-primary mb-4" />
                <CardTitle>Important Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>Initial Enrollment Period</li>
                  <li>Annual Enrollment (Oct 15 - Dec 7)</li>
                  <li>Medicare Advantage Open Enrollment</li>
                  <li>Special Enrollment Periods</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                <CardTitle>Need More Information?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Contact us for personalized assistance with your Medicare questions.</p>
                <Button className="bg-primary hover:bg-primary/90">Schedule a Consultation</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Resources;
