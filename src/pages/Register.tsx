
import { UserPlus, ExternalLink, Mail, Shield, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Register = () => {
  const handleGoogleRegistration = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScF2uRH-xJAu31qp0xu0Zc3M05R72gHeY7JNXQbr20QMSe0SA/viewform?usp=header", "_blank");
  };

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-academic-blue to-academic-blue-light text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <UserPlus className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Register with MIRRIJ</h1>
            <p className="text-xl text-gray-200">
              Join our community of researchers and authors
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Registration Methods */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              
              {/* Google Registration */}
              <Card className="border-2 border-academic-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-sm">G</span>
                    </div>
                    <span>Register with Google</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Quick and secure registration using our Google Forms. 
                    This is our recommended registration method for authors and reviewers.
                  </p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-3">
                      <strong>Registration Form:</strong> Click the button below to access our Google registration form
                    </p>
                    <div className="border-2 border-green-300 bg-green-50 p-4 rounded-lg text-center">
                      <ExternalLink className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <p className="text-green-700 text-sm font-medium">
                        Google Registration Form Available
                      </p>
                      <p className="text-xs text-green-600 mt-1">
                        Click the button below to register
                      </p>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-red-500 hover:bg-red-600"
                    onClick={handleGoogleRegistration}
                  >
                    <ExternalLink className="mr-2 w-4 h-4" />
                    Register with Google Form
                  </Button>
                </CardContent>
              </Card>

              {/* Benefits of Registration */}
              <Card>
                <CardHeader>
                  <CardTitle>Why Register?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      "Submit manuscripts easily through online portal",
                      "Track your submission status in real-time",
                      "Receive automated notifications and updates",
                      "Access to your submission history",
                      "Faster review process management",
                      "Direct communication with editorial team",
                      "Priority support for registered users"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Registration Process */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-academic-blue" />
                  <span>Registration Process</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Click Registration Button",
                      description: "Use the Google registration button above to open our registration form."
                    },
                    {
                      step: "2",
                      title: "Fill Registration Form",
                      description: "Complete all required fields in the Google form with your academic and professional details."
                    },
                    {
                      step: "3",
                      title: "Submit Form",
                      description: "Review your information and submit the registration form."
                    },
                    {
                      step: "4",
                      title: "Email Confirmation",
                      description: "You will receive a confirmation email once your registration is processed."
                    },
                    {
                      step: "5",
                      title: "Account Activation",
                      description: "Your account will be activated and you can start using the submission portal."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-academic-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Important Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Alert>
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  <strong>Data Security:</strong> Your personal information is protected and will only be used for journal-related communications and submission management.
                </AlertDescription>
              </Alert>

              <Alert>
                <Mail className="h-4 w-4" />
                <AlertDescription>
                  <strong>Communication:</strong> All important updates about your submissions will be sent to your registered email address.
                </AlertDescription>
              </Alert>
            </div>

            {/* Alternative Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help with Registration?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  If you face any issues during registration or need assistance, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-academic-blue" />
                    <span className="text-gray-700">editornarayanaresearch@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-academic-blue" />
                    <span className="text-gray-700">publicationarticle146@gmail.com</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    We typically respond to registration queries within 24 hours.
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

export default Register;