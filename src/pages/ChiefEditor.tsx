
import { User, GraduationCap, Award, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChiefEditor = () => {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-academic-blue to-academic-blue-light text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Chief Editor</h1>
            <p className="text-xl text-gray-200">
              Leading MIRRIJ's Editorial Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Chief Editor Profile */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <User className="w-6 h-6 text-academic-blue" />
                  <span>Dr. [Name]</span>
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
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Current Position</h3>
                      <p className="text-gray-700">
                        Professor and Head of Department<br />
                        [University/Institution Name]<br />
                        [Department Name]
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact</h3>
                      <p className="text-gray-700">
                        Email: chiefeditor@mirrij.org<br />
                        Phone: +91-XXXX-XXXXXX
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Educational Background */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <GraduationCap className="w-6 h-6 text-academic-blue" />
                  <span>Educational Background</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-academic-blue pl-4">
                    <h4 className="font-semibold text-gray-900">Ph.D. in [Field]</h4>
                    <p className="text-gray-700">[University Name], [Year]</p>
                    <p className="text-sm text-gray-600">Thesis: "[Thesis Title]"</p>
                  </div>
                  <div className="border-l-4 border-academic-blue pl-4">
                    <h4 className="font-semibold text-gray-900">M.Tech/M.S. in [Field]</h4>
                    <p className="text-gray-700">[University Name], [Year]</p>
                  </div>
                  <div className="border-l-4 border-academic-blue pl-4">
                    <h4 className="font-semibold text-gray-900">B.Tech/B.S. in [Field]</h4>
                    <p className="text-gray-700">[University Name], [Year]</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Research Interests */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <BookOpen className="w-6 h-6 text-academic-blue" />
                  <span>Research Interests</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Multidisciplinary Research Methodologies",
                    "Innovation in Academic Publishing",
                    "Research Ethics and Integrity",
                    "Cross-disciplinary Collaboration",
                    "Emerging Technologies in Research",
                    "Sustainable Development Research"
                  ].map((interest, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-800 font-medium">{interest}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Awards and Recognition */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-academic-blue" />
                  <span>Awards and Recognition</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      year: "2023",
                      award: "Excellence in Editorial Leadership Award",
                      organization: "International Academic Publishers Association"
                    },
                    {
                      year: "2022",
                      award: "Distinguished Researcher Award",
                      organization: "[Institution/Organization Name]"
                    },
                    {
                      year: "2021",
                      award: "Best Paper Award",
                      organization: "[Conference/Journal Name]"
                    },
                    {
                      year: "2020",
                      award: "Outstanding Faculty Award",
                      organization: "[University Name]"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-academic-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-academic-blue font-bold">{item.year}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.award}</h4>
                        <p className="text-gray-700">{item.organization}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Editorial Experience */}
            <Card>
              <CardHeader>
                <CardTitle>Editorial Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Current Editorial Positions</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Chief Editor, Multidisciplinary International Review Research and Innovation Journal (MIRRIJ) - 2020-Present</li>
                      <li>• Associate Editor, [Journal Name] - 2018-Present</li>
                      <li>• Editorial Board Member, [Journal Name] - 2017-Present</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Previous Editorial Roles</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Guest Editor, Special Issue on [Topic], [Journal Name] - 2019</li>
                      <li>• Reviewer for 15+ international journals</li>
                      <li>• Conference Chair, [Conference Name] - 2018</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Publications</h4>
                    <p className="text-gray-700">
                      Over 100 peer-reviewed publications in international journals and conferences, 
                      with h-index of 25 and over 2000 citations.
                    </p>
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

export default ChiefEditor;