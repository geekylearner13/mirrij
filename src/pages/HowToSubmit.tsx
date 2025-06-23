
import { Send, Mail, Phone, MessageCircle, Clock, CheckCircle, FileText, Upload, Image } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const HowToSubmit = () => {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-academic-blue to-academic-blue-light text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo Placeholder */}
            {/* <div className="mb-6 flex justify-center">
              <div className="w-32 h-32 bg-white/20 rounded-lg flex items-center justify-center border-2 border-white/30">
                <Image className="w-16 h-16 text-white/60" />
                <span className="sr-only">Logo placeholder - Add journal logo here</span>
              </div>
            </div> */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How to Submit Your Paper</h1>
            <p className="text-xl text-gray-200">
              Step-by-step guide to submitting your research to MIRRIJ
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Updated Submission Information */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Send className="w-6 h-6 text-academic-blue" />
                  <span>Manuscript Submission</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-academic-blue mb-4">Primary Submission Method</h3>
                  <p className="text-gray-700 mb-4">
                    Authors can submit their manuscripts through <strong>Online Manuscript Submission</strong>. 
                    Submissions must be in <strong>Word format</strong>. Upon successful submission, a confirmation 
                    email will be sent. The review process is completed within a short period of time.
                  </p>
                  <Button className="bg-academic-blue hover:bg-academic-blue/90">
                    Online Submission Portal
                  </Button>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-700 mb-4">Alternative Submission Method</h3>
                  <p className="text-gray-700 mb-4">
                    If the manuscript file is larger in size or there is any issue with online submission, 
                    authors can also submit their manuscript via email to:
                  </p>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-600" />
                    <span className="text-green-700 font-semibold">editornarayanaresearch@gmail.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submission Process */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <FileText className="w-6 h-6 text-academic-blue" />
                  <span>Submission Process</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Prepare Your Manuscript",
                      description: "Ensure your manuscript is in Word format and follows MIRRIJ formatting guidelines.",
                      time: "1-2 weeks"
                    },
                    {
                      step: "2",
                      title: "Choose Submission Method",
                      description: "Use online submission portal or email if file is large or facing technical issues.",
                      time: "Immediate"
                    },
                    {
                      step: "3",
                      title: "Submit Your Manuscript",
                      description: "Complete the submission through your chosen method with all required information.",
                      time: "Few minutes"
                    },
                    {
                      step: "4",
                      title: "Receive Confirmation",
                      description: "Get confirmation email with manuscript ID and submission details.",
                      time: "Within hours"
                    },
                    {
                      step: "5",
                      title: "Review Process",
                      description: "Manuscript undergoes peer review process completed within short period of time.",
                      time: "Short period"
                    },
                    {
                      step: "6",
                      title: "Decision Notification",
                      description: "Receive editorial decision and reviewer feedback via email.",
                      time: "After review"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-academic-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-700 mb-2">{item.description}</p>
                        <div className="flex items-center space-x-2 text-sm text-academic-blue">
                          <Clock className="w-4 h-4" />
                          <span>Timeline: {item.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Required Documents Checklist */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-academic-blue" />
                  <span>Submission Requirements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Manuscript in Word format (.doc or .docx)",
                    "Complete author information and affiliations",
                    "Abstract and keywords",
                    "Proper formatting according to journal guidelines",
                    "References in required format",
                    "High-resolution figures and tables (if applicable)",
                    "Cover letter (recommended)",
                    "Declaration of originality"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MessageCircle className="w-6 h-6 text-academic-blue" />
                  <span>Need Help?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  For any assistance with the submission process, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-academic-blue" />
                    <span className="text-gray-700">editornarayanaresearch@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-academic-blue" />
                    <span className="text-gray-700">+91-7033113161</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Office Hours: 10:00 AM – 6:00 PM (IST), Monday to Saturday
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

export default HowToSubmit;