import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, AlertCircle } from "lucide-react";

const MedicareOverview = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
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
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Key Things to Know</CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MedicareOverview;