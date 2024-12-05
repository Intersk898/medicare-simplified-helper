import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, Pill, Check } from "lucide-react";

const CoverageOptions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Medicare Coverage Options & Plans | Compare 2024 Plans | Mazari Health</title>
        <meta name="description" content="Compare Medicare coverage options: Advantage, Supplement, and Part D plans. Find the best Medicare coverage for your needs with expert guidance from Mazari Health." />
        <meta name="keywords" content="Medicare coverage options, Medicare Advantage plans, Medicare Supplement Insurance, Medicare Part D plans, California Medicare plans" />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-up">Medicare Coverage Options</h1>
            <p className="text-xl mb-8 opacity-90 animate-fade-up delay-100">
              Compare different Medicare plans and find the coverage that best fits your healthcare needs and budget.
            </p>
            <Button 
              variant="secondary"
              size="lg"
              className="animate-fade-up delay-200"
            >
              Compare Plans Now
            </Button>
          </div>
        </div>
      </section>

      {/* Coverage Options Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Available Coverage Options</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-up">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Original Medicare</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Hospital Insurance (Part A)",
                    "Medical Insurance (Part B)",
                    "Freedom to choose any doctor",
                    "No network restrictions",
                    "Can add Medigap coverage"
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-up delay-100">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Medicare Advantage</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Combines Part A & B coverage",
                    "Often includes Part D",
                    "Additional benefits available",
                    "Network-based care",
                    "All-in-one coverage option"
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-up delay-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Pill className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Medicare Supplement</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Helps pay deductibles",
                    "Covers coinsurance",
                    "Works with Original Medicare",
                    "Standardized benefits",
                    "Predictable costs"
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
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

export default CoverageOptions;