import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Contact from "@/components/Contact";
import { Calendar, Clock, FileCheck, UserCheck } from "lucide-react";
import BusinessHeader from "@/components/BusinessHeader";

const EnrollmentHelp = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <BusinessHeader />
      <Navbar />
      <div className="pt-28">
        <h1 className="text-4xl font-bold text-center mb-12">Medicare Enrollment Assistance</h1>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="w-8 h-8 text-primary mb-4" />
                <CardTitle>Initial Enrollment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Get help navigating your Initial Enrollment Period when you first become eligible for Medicare.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-8 h-8 text-primary mb-4" />
                <CardTitle>Special Enrollment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Understand if you qualify for a Special Enrollment Period due to certain life events.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileCheck className="w-8 h-8 text-primary mb-4" />
                <CardTitle>Annual Enrollment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Review and update your coverage during the Annual Enrollment Period (October 15 - December 7).</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <UserCheck className="w-8 h-8 text-primary mb-4" />
                <CardTitle>Personalized Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Get one-on-one assistance with completing enrollment forms and understanding your options.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default EnrollmentHelp;
