
import { FileText, CheckCircle, AlertCircle, Download, Mail, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const InstructionsToAuthors = () => {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-academic-blue to-academic-blue-light text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Instructions to Authors</h1>
            <p className="text-xl text-gray-200">
              Guidelines for manuscript preparation and submission to MIRRIJ
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Important Notice */}
            <Alert className="mb-8 border-academic-blue/30 bg-academic-blue/5">
              <AlertCircle className="h-4 w-4 text-academic-blue" />
              <AlertDescription className="text-academic-blue font-medium">
                Please read these instructions carefully before preparing your manuscript. 
                Adherence to these guidelines will expedite the review process.
              </AlertDescription>
            </Alert>

            {/* Manuscript Submission */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-academic-blue" />
                  <span>Manuscript Submission</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    All manuscripts must be submitted through our online submission portal:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium text-academic-blue">https://www........</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Mail className="w-4 h-4 text-academic-blue" />
                    <span>In case of technical difficulties, contact us at:</span>
                    <a href="mailto:editornarayanaresearch@gmail.com" className="text-academic-blue hover:underline font-medium">
                      editornarayanaresearch@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Required Submission Files */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <FileText className="w-6 h-6 text-academic-blue" />
                  <span>Required Submission Files</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Title Page",
                      desc: "Include title, author names, affiliations, email of corresponding author, acknowledgments"
                    },
                    {
                      title: "Main Manuscript File",
                      desc: "Includes abstract, keywords, main text, references, tables, and figure legends"
                    },
                    {
                      title: "Figures/Images",
                      desc: "High-resolution images (preferably in JPEG format). Each image should be <4MB and at least 1800×1200 pixels"
                    },
                    {
                      title: "Tables",
                      desc: "Submit as editable Word documents with appropriate titles and footnotes"
                    },
                    {
                      title: "Copyright Form",
                      desc: "A signed copyright form (sent post-acceptance)"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-900">{item.title}:</span>
                        <span className="text-gray-700 ml-2">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Manuscript Submission & Formatting */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Manuscript Submission & Formatting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Submissions must be in a single Microsoft Word file</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">The maximum page limit is 20</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Page Limits by Manuscript Type</h4>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Original Research Articles</span>
                      <span className="font-medium text-academic-blue">up to 20 pages</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Review Articles</span>
                      <span className="font-medium text-academic-blue">up to 15 pages</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Short Communications/Case Reports</span>
                      <span className="font-medium text-academic-blue">up to 8 pages</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Letters to the Editor</span>
                      <span className="font-medium text-academic-blue">up to 3 pages</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Structure for Research Articles</h4>
                  <div className="space-y-2">
                    {[
                      { title: "Abstract", desc: "Structured (Background, Methods, Results, Conclusion)" },
                      { title: "Introduction", desc: "" },
                      { title: "Materials and Methods", desc: "" },
                      { title: "Results", desc: "" },
                      { title: "Discussion", desc: "" },
                      { title: "Conclusion", desc: "" },
                      { title: "Acknowledgments", desc: "" },
                      { title: "References", desc: "" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-gray-900">{item.title}</span>
                          {item.desc && <span className="text-gray-700 ml-2">: {item.desc}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Mail className="w-5 h-5 text-academic-blue" />
                  <span>For any queries regarding submission:</span>
                  <a href="mailto:editornarayanaresearch@gmail.com" className="text-academic-blue hover:underline font-medium">
                    editornarayanaresearch@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstructionsToAuthors;