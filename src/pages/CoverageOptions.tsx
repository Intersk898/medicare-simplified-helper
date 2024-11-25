import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Contact from "@/components/Contact";
import { Check } from "lucide-react";
import BusinessHeader from "@/components/BusinessHeader";

const CoverageOptions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <BusinessHeader />
      <Navbar />
      <div className="pt-28">
        <h1 className="text-4xl font-bold text-center mb-12">Medicare Coverage Options</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Original Medicare</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "Part A (Hospital Insurance)",
                  "Part B (Medical Insurance)",
                  "Can add Part D",
                  "Can add Medigap"
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Medicare Advantage</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "Combines Part A & B",
                  "Usually includes Part D",
                  "May include extra benefits",
                  "Network restrictions may apply"
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Medicare Supplements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "Helps pay deductibles",
                  "Covers coinsurance",
                  "Works with Original Medicare",
                  "Standardized benefits"
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default CoverageOptions;
