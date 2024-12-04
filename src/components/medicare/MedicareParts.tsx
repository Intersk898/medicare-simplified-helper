import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hospital, Heart, Stethoscope, Pill } from "lucide-react";

const MedicareParts = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-up">
          The Four Parts of Medicare
        </h2>
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
    </div>
  );
};

export default MedicareParts;