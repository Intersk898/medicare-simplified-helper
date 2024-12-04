import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertCircle } from "lucide-react";

const MedicareOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">What is Medicare?</h2>
          <p className="text-lg text-gray-600">
            Medicare is a federal health insurance program designed to provide coverage for specific groups of Americans.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6 animate-fade-up">
            <h3 className="text-2xl font-semibold mb-4">Who is Eligible?</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" />
                <span className="text-gray-700">People aged 65 or older</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" />
                <span className="text-gray-700">Certain younger people with disabilities</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" />
                <span className="text-gray-700">People with End-Stage Renal Disease</span>
              </li>
            </ul>
          </div>

          <Card className="p-6 shadow-lg animate-fade-up delay-100">
            <h3 className="text-2xl font-semibold mb-4">Key Things to Know</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <AlertCircle className="text-secondary h-6 w-6 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Different parts of Medicare help cover specific services</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="text-secondary h-6 w-6 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Most people get Part A premium-free if they paid Medicare taxes</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="text-secondary h-6 w-6 flex-shrink-0 mt-1" />
                <span className="text-gray-700">You can get Medicare even if you're not receiving Social Security benefits</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MedicareOverview;