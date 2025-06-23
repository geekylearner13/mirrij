import { Shield, Users, FileText, AlertTriangle, CheckCircle, Scale, Mail, Phone, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Ethics = () => {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-academic-blue to-academic-blue-light text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Publication Ethics</h1>
            <p className="text-xl text-gray-200">
              Maintaining the Highest Standards of Academic Integrity
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Alert className="mb-8 border-academic-blue/30 bg-academic-blue/5">
              <Shield className="h-5 w-5 text-academic-blue" />
              <AlertDescription className="text-academic-blue font-medium">
                Multidisciplinary International Review Research and Innovation Journal (MIRRIJ) is 
                committed to ensuring the highest standards of publication ethics.
              </AlertDescription>
            </Alert>
            
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              All parties involved in the publishing process — authors, editors, reviewers, and the 
              publisher — must agree to and follow the ethical behavior outlined below.
            </p>
          </div>
        </div>
      </section>

      {/* Author Responsibilities */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-academic-blue" />
                  <span>1. Responsibilities of Authors</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Authors must ensure that the work submitted is original, unpublished, and not under consideration elsewhere.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Plagiarism, in any form, is unethical and unacceptable.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>All sources and references must be accurately cited.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>All authors should have made significant contributions to the research.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Any form of data fabrication, falsification, or manipulation is strictly prohibited.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Authors must declare any conflicts of interest related to their manuscript.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Editor Responsibilities */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Scale className="w-6 h-6 text-academic-blue" />
                  <span>2. Responsibilities of Editors</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Editors are responsible for fair and unbiased manuscript evaluation, solely based on academic merit.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Confidentiality of all submissions must be strictly maintained.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Editors must ensure that all ethical concerns, such as plagiarism or misconduct, are appropriately addressed.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>The editor-in-chief has final authority on whether a manuscript is accepted or rejected.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviewer Responsibilities */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <FileText className="w-6 h-6 text-academic-blue" />
                  <span>3. Responsibilities of Reviewers</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Reviewers must provide objective, constructive, and timely feedback.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Reviewers should respect the confidentiality of the peer-review process.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Any suspicion of plagiarism, unethical behavior, or conflict of interest must be reported to the editor.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Reviews must not include personal criticism.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Plagiarism Policy */}
      <section className="py-8 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-red-200 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-red-700">
                  <AlertTriangle className="w-6 h-6" />
                  <span>4. Plagiarism and Misconduct Policy</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  All submitted manuscripts undergo plagiarism checking using standard software. If plagiarism 
                  or duplicate publication is detected, the manuscript will be immediately rejected. Cases of 
                  serious misconduct will lead to blacklisting of authors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Retraction Policy */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <FileText className="w-6 h-6 text-academic-blue" />
                  <span>5. Retraction and Correction Policy</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  MIRRIJ reserves the right to retract articles in case of major errors, plagiarism, or 
                  ethical violations. Retraction notes will be published clearly stating the reasons.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Access */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-academic-blue" />
                  <span>6. Open Access and Licensing</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  MIRRIJ provides open access to its content in support of global knowledge dissemination. 
                  Authors retain the copyright to their articles and agree to publication under the Creative 
                  Commons Attribution License (CC BY).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ethics;