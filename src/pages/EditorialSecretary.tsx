
import { User, Mail, Phone, FileText, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EditorialSecretary = () => {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-academic-blue to-academic-blue-light text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Editorial Secretary</h1>
            <p className="text-xl text-gray-200">
              Managing Editorial Operations and Author Communications
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Editorial Secretary Profile */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <User className="w-6 h-6 text-academic-blue" />
                  <span>[Name]</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Profile Image Placeholder */}
                  <div className="lg:col-span-1">
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                      <User className="w-20 h-20 text-gray-400" />
                    </div>
                  </div>
                  
                  {/* Profile Information */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Position</h3>
                      <p className="text-gray-700">
                        Editorial Secretary<br />
                        Multidisciplinary International Review Research and Innovation Journal (MIRRIJ)
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Information</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-academic-blue" />
                          <span className="text-gray-700">secretary@mirrij.org</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-academic-blue" />
                          <span className="text-gray-700">+91-XXXX-XXXXXX</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <FileText className="w-6 h-6 text-academic-blue" />
                  <span>Key Responsibilities</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Editorial Management</h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Managing manuscript submissions and tracking</li>
                      <li>• Coordinating peer review processes</li>
                      <li>• Maintaining editorial correspondence</li>
                      <li>• Scheduling editorial board meetings</li>
                      <li>• Preparing editorial reports</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Author Services</h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• First point of contact for authors</li>
                      <li>• Providing submission guidelines assistance</li>
                      <li>• Handling author queries and concerns</li>
                      <li>• Communicating editorial decisions</li>
                      <li>• Supporting revision processes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Quality Assurance</h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Initial manuscript screening</li>
                      <li>• Format and guideline compliance checking</li>
                      <li>• Plagiarism detection coordination</li>
                      <li>• Maintaining publication standards</li>
                      <li>• Ensuring ethical compliance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Administrative Tasks</h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Database management</li>
                      <li>• Publication scheduling</li>
                      <li>• Website content updates</li>
                      <li>• Statistical reporting</li>
                      <li>• Archive maintenance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services Offered */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Services and Support</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">For Authors</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="text-gray-700 space-y-2">
                        <li>✓ Pre-submission consultation and guidance</li>
                        <li>✓ Manuscript formatting assistance</li>
                        <li>✓ Status updates and progress tracking</li>
                        <li>✓ Revision and resubmission support</li>
                        <li>✓ Publication process guidance</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">For Reviewers</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="text-gray-700 space-y-2">
                        <li>✓ Reviewer invitation and coordination</li>
                        <li>✓ Review timeline management</li>
                        <li>✓ Technical support for review process</li>
                        <li>✓ Reviewer recognition and certificates</li>
                        <li>✓ Feedback and improvement suggestions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours and Availability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-academic-blue" />
                  <span>Office Hours and Availability</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Regular Office Hours</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                      <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
                      <p><strong>Sunday:</strong> Closed</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Response Times</h4>
                    <div className="space-y-2 text-gray-700 text-sm">
                      <p>📧 <strong>Email Queries:</strong> Within 24 hours</p>
                      <p>📞 <strong>Phone Calls:</strong> During office hours</p>
                      <p>📋 <strong>Submission Acknowledgment:</strong> Within 48 hours</p>
                      <p>📊 <strong>Status Updates:</strong> Weekly</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-academic-blue/5 rounded-lg border border-academic-blue/20">
                  <h4 className="font-semibold text-academic-blue mb-2">Emergency Contact</h4>
                  <p className="text-gray-700 text-sm">
                    For urgent editorial matters outside office hours, please mark your email as "URGENT" 
                    in the subject line. We will respond within 4-6 hours for critical issues.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditorialSecretary;