
import { BookOpen, Target, Eye, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutJournal = () => {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-academic-blue to-academic-blue-light text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About MIRRIJ</h1>
            <p className="text-xl text-gray-200">
              Multidisciplinary International Review Research and Innovation Journal
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Journal Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Multidisciplinary International Review Research and Innovation Journal (MIRRIJ) is a peer-reviewed, multidisciplinary, open-access journal committed to publishing cutting-edge research that drives innovation, fosters intellectual growth, and advances knowledge across diverse academic and professional domains. .
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                MIRRIJ has served as a premier platform for scholars, researchers, and practitioners to share original research findings, critical analyses, and groundbreaking methodologies with a global audience.
              </p>
            </div>

            {/* Vision and Mission Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-academic-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Eye className="w-6 h-6 text-academic-blue" />
                    <span>Vision</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    To become a globally recognized platform for multidisciplinary research, 
                    fostering innovation and knowledge exchange that addresses contemporary 
                    challenges and contributes to societal advancement.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-academic-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Target className="w-6 h-6 text-academic-blue" />
                    <span>Mission</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    To provide a rigorous peer-reviewed platform for publishing high-quality 
                    research that transcends traditional disciplinary boundaries, promoting 
                    collaboration and innovation in the global academic community.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Scope and Disciplines */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Scope and Disciplines</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                MIRRIJ embraces a broad spectrum of academic disciplines, encouraging 
                interdisciplinary research that addresses complex real-world challenges. 
                Our scope includes but is not limited to:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {[
                  "Engineering and Technology",
                  "Computer Science and Information Technology",
                  "Physical Sciences",
                  "Life Sciences and Biotechnology",
                  "Environmental Sciences",
                  "Social Sciences",
                  "Business and Management",
                  "Economics and Finance",
                  "Education and Pedagogy",
                  "Health Sciences",
                  "Arts and Humanities",
                  "Law and Jurisprudence"
                ].map((discipline, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-800 font-medium">{discipline}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Publication Standards */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <BookOpen className="w-6 h-6 text-academic-blue" />
                  <span>Publication Standards</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Peer Review Process</h4>
                  <p className="text-gray-700">
                    All submissions undergo a rigorous double-blind peer review process 
                    conducted by subject matter experts to ensure the highest quality 
                    of published content.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Editorial Excellence</h4>
                  <p className="text-gray-700">
                    Our editorial board comprises distinguished scholars and practitioners 
                    from leading institutions worldwide, ensuring academic rigor and 
                    international perspective.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Open Access Policy</h4>
                  <p className="text-gray-700">
                    MIRRIJ follows an open access policy, making research freely available 
                    to the global community and promoting knowledge dissemination.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Target Audience */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-academic-blue" />
                  <span>Target Audience</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Community</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• University researchers and faculty</li>
                      <li>• Graduate students and doctoral candidates</li>
                      <li>• Research institutions and think tanks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Industry Professionals</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• R&D professionals</li>
                      <li>• Policy makers and government officials</li>
                      <li>• Innovation leaders and entrepreneurs</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutJournal;