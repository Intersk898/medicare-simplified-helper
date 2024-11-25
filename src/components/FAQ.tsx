import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-up">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>When can I enroll in Medicare?</AccordionTrigger>
              <AccordionContent>
                You can first sign up for Medicare during your Initial Enrollment Period, which begins 3 months before the month you turn 65 and ends 3 months after your birthday month. There are also other enrollment periods like the Annual Enrollment Period (October 15 - December 7).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What Medicare plans are available in California?</AccordionTrigger>
              <AccordionContent>
                California residents have access to Original Medicare (Parts A & B), Medicare Advantage plans (Part C), Medicare Supplement Insurance (Medigap), and Prescription Drug Plans (Part D). The specific plans available vary by county.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How do I choose the right Medicare plan?</AccordionTrigger>
              <AccordionContent>
                Choosing the right plan depends on factors like your health needs, budget, preferred doctors, and medications. Our licensed insurance agents can help you compare plans and find the best coverage for your specific situation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Is there a cost for your Medicare assistance?</AccordionTrigger>
              <AccordionContent>
                No, our Medicare consultation services are completely free. We're compensated by the insurance companies when you enroll in a plan, so there's never any cost to you for our guidance and support.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;