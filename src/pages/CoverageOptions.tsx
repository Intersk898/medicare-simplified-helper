import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, Pill, Check, ArrowRight, Calendar, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";

const CoverageOptions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Medicare Coverage Options & Plans 2024 | Los Angeles | Mazari Health</title>
        <meta name="description" content="Compare Medicare Advantage, Supplement & Part D plans in Los Angeles. Expert guidance on choosing the right Medicare coverage for your needs. Free consultation available." />
        <meta name="keywords" content="Medicare coverage Los Angeles, Medicare Advantage plans CA, Medicare Supplement Insurance LA, Medicare Part D California, Medicare plan comparison" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Medicare Coverage Options & Plans",
              "description": "Compare Medicare Advantage, Supplement & Part D plans in Los Angeles",
              "provider": {
                "@type": "Organization",
                "name": "Mazari Health Insurance Services",
                "areaServed": "Los Angeles County"
              }
            }
          `}
        </script>
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-up">
              Find Your Perfect Medicare Coverage in Los Angeles
            </h1>
            <p className="text-xl mb-8 opacity-90 animate-fade-up delay-100">
              Compare personalized Medicare plans tailored to your healthcare needs and budget. Our licensed experts help you understand all your options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-200">
              <Button 
                variant="secondary"
                size="lg"
                className="group"
                asChild
              >
                <Link to="/contact">
                  Get Your Free Plan Comparison
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="tel:2133223542">Call (213) 322-3542</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Coverage Options Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Medicare Coverage Options in Los Angeles</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Explore our comprehensive Medicare plans designed to provide the coverage you need at a price you can afford.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-up">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Medicare Advantage Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "All-in-one coverage solution",
                    "Often includes prescription drugs",
                    "Additional benefits like dental & vision",
                    "Low or $0 monthly premiums",
                    "Network-based care coordination"
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
                <CardTitle>Medicare Supplement Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Fills Original Medicare gaps",
                    "Predictable out-of-pocket costs",
                    "No network restrictions",
                    "Standardized benefits",
                    "Guaranteed renewable coverage"
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
                <CardTitle>Prescription Drug Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Part D prescription coverage",
                    "Wide pharmacy networks",
                    "Coverage in the gap phase",
                    "Affordable monthly premiums",
                    "Annual plan reviews"
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Mazari Health for Your Medicare Coverage</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Local Expertise",
                description: "Deep understanding of Los Angeles healthcare networks and providers"
              },
              {
                icon: Calendar,
                title: "Personalized Guidance",
                description: "One-on-one support to find the perfect plan for your needs"
              },
              {
                icon: FileCheck,
                title: "No-Cost Consultation",
                description: "Free, no-obligation plan comparisons and recommendations"
              },
              {
                icon: Heart,
                title: "Ongoing Support",
                description: "Year-round assistance with your Medicare coverage"
              }
            ].map((feature, index) => (
              <Card 
                key={feature.title}
                className="hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <p className="text-gray-600">{feature.description}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Find Your Perfect Medicare Plan?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get personalized assistance from our licensed Medicare experts in Los Angeles. We'll help you compare plans and find the coverage that best fits your needs.
            </p>
            <Button 
              variant="secondary"
              size="lg"
              className="group"
              asChild
            >
              <Link to="/contact">
                Schedule Your Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default CoverageOptions;