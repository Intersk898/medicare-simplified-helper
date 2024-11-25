import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Contact from "@/components/Contact";

const MedicareBasics = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Understanding Medicare</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Medicare Part A</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Hospital insurance that covers inpatient hospital stays, skilled nursing facility care, hospice care, and some home health care.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Medicare Part B</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Medical insurance that covers certain doctors' services, outpatient care, medical supplies, and preventive services.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Medicare Part C (Medicare Advantage)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">A Medicare-approved plan from a private company that offers an alternative to Original Medicare for your health and drug coverage.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Medicare Part D</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Prescription drug coverage that helps cover the cost of prescription drugs and many recommended shots or vaccines.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Download Medicare Guide
            </Button>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default MedicareBasics;