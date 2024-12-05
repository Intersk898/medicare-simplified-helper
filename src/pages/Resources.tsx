import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, BookOpen, Calendar, Download, ExternalLink } from "lucide-react";

const Resources = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Medicare Resources & Educational Materials | Free Guides | Mazari Health</title>
        <meta name="description" content="Access free Medicare resources, educational materials, and guides. Download our comprehensive Medicare guides and learn about your healthcare options." />
        <meta name="keywords" content="Medicare resources, Medicare educational materials, Medicare guides, Medicare information, Medicare help" />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-up">Medicare Resources</h1>
            <p className="text-xl mb-8 opacity-90 animate-fade-up delay-100">
              Access comprehensive guides, educational materials, and tools to help you understand Medicare better.
            </p>
            <Button 
              variant="secondary"
              size="lg"
              className="animate-fade-up delay-200"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Medicare Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Educational Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-up">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Medicare Guides</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between">
                    <span className="text-gray-600">2024 Medicare Overview</span>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-gray-600">Enrollment Checklist</span>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-gray-600">Coverage Comparison Guide</span>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-up delay-100">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Educational Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between">
                    <span className="text-gray-600">Understanding Medicare Costs</span>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-gray-600">Choosing the Right Plan</span>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-gray-600">Medicare vs. Medicaid</span>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-up delay-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Important Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-gray-600">
                  <li>
                    <strong>Initial Enrollment Period</strong>
                    <p>7-month period around your 65th birthday</p>
                  </li>
                  <li>
                    <strong>Annual Enrollment</strong>
                    <p>October 15 - December 7</p>
                  </li>
                  <li>
                    <strong>Medicare Advantage Open Enrollment</strong>
                    <p>January 1 - March 31</p>
                  </li>
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

export default Resources;