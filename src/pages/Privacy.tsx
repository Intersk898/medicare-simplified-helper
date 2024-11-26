import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BusinessHeader from "@/components/BusinessHeader";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <BusinessHeader />
      <Navbar />
      <div className="pt-28">
        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <p className="text-sm">
              Protecting your private information is our priority. This Statement of Privacy applies to And MAZARI HEALTH INSURANCE SERVICES LLC and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to MAZARI HEALTH INSURANCE SERVICES LLC include MAZARIHEALTH.COM. By using the MAZARI HEALTH application, you consent to the data practices described in this statement.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">Collection of your Personal Information</h2>
              <p className="text-sm">
                MAZARI HEALTH may collect anonymous demographic information, which is not unique to you, such as your: NAME, PHONE NUMBER AND EMAIL ADDRESS. We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services. These may include: (a) ENROLLMENT TO ANY OF THE PRODUCTS WE OFFER (b) sending us an email message. To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal or non-personal information in the future.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">Sharing Information with Third Parties</h2>
              <p className="text-sm">
                MAZARI HEALTH does not sell, rent or lease its customer lists to third parties. MAZARI HEALTH may, from time to time, contact you on behalf of external business partners about a particular offering that may be of interest to you. In those cases, your unique personally identifiable information (e-mail, name, address, telephone number) is not transferred to the third party. MAZARI HEALTH may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to MAZARI HEALTH, and they are required to maintain the confidentiality of your information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">Right to Deletion</h2>
              <p className="text-sm">
                Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will: Delete your personal information from our records; and Direct any service providers to delete our personal information from their records.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">E-mail Communications</h2>
              <p className="text-sm">
                From time to time, MAZARI HEALTH may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication. In order to improve our Services, we may receive a notification when you open an email from MAZARI HEALTH or click on a link therein.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">Changes to this Statement</h2>
              <p className="text-sm">
                MAZARI HEALTH reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our application, and/or by updating any privacy information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">Contact Information</h2>
              <p className="text-sm">
                MAZARI HEALTH welcomes your questions or comments regarding this Statement of Privacy. If you believe that MAZARI HEALTH has not adhered to this Statement, please contact MAZARI HEALTH at:
              </p>
              <div className="text-sm">
                <p>MAZARI HEALTH INSURANCE SERVICES LLC</p>
                <p>Email Address: support@mazarihealth.com</p>
                <p>Telephone number: (213) 322-3542</p>
              </div>
            </section>

            <section className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-primary mb-4">Disclaimer</h2>
              <p className="text-sm text-gray-600">
                Medicare has neither reviewed nor endorsed this information. Not connected with or endorsed by the United States government or the federal Medicare program.
              </p>
              <p className="text-sm text-gray-600 mt-4">
                We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov or Call 1-800-MEDICARE to get information on all of your options.
              </p>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;