
import { Mail, Phone, MapPin, Clock, Globe, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-academic-blue to-academic-blue-light text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200">
              Get in touch with the MIRRIJ editorial team
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              For any queries related to manuscript submission, publication process, or general information, 
              please feel free to contact us at:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Journal Office */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-academic-blue" />
                  <span>Journal Office</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-gray-700">
                  <h3 className="font-semibold text-lg mb-2">
                    Multidisciplinary International Review Research and Innovation Journal (MIRRIJ)
                  </h3>
                  <p className="mb-1">Narayan Research and Education</p>
                  <p className="mb-1">Jharkhand</p>
                  <p>India</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-academic-blue" />
                  <span>Contact Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">📧 Email:</h4>
                  <div className="space-y-1 text-gray-700">
                    <p><strong>Manuscript Submission:</strong></p>
                    <p className="text-academic-blue">editornarayanaresearch@gmail.com</p>
                    <p><strong>General Inquiries:</strong></p>
                    <p className="text-academic-blue">publicationarticle146@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone & Timing */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-academic-blue" />
                  <span>Phone / WhatsApp</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-lg font-semibold text-academic-blue mb-2">📱 +91-7033113161</p>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>🕘 Timing: 10:00 AM – 6:00 PM (IST)</span>
                  </div>
                  <p className="text-gray-600">Monday to Saturday</p>
                </div>
              </CardContent>
            </Card>

            {/* Website & Social Media */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-academic-blue" />
                  <span>Online Presence</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">🌐 Official Website:</h4>
                  <p className="text-academic-blue mb-4">xxxxxxxxxx</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">📣 Connect with us:</h4>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Facebook Page
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Instagram Page
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      YouTube Channel
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Contact Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <CardContent className="text-center space-y-4">
                  <Mail className="w-12 h-12 text-academic-blue mx-auto" />
                  <h3 className="text-xl font-semibold">For Manuscript Submission</h3>
                  <p className="text-gray-600">Submit your research papers and manuscripts</p>
                  <Button className="w-full">
                    Email: editornarayanaresearch@gmail.com
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="text-center space-y-4">
                  <MessageCircle className="w-12 h-12 text-academic-blue mx-auto" />
                  <h3 className="text-xl font-semibold">For General Inquiries</h3>
                  <p className="text-gray-600">Questions about the journal and publication process</p>
                  <Button className="w-full">
                    Email: publicationarticle146@gmail.com
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;