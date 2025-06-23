
import { Users, Globe, Award, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdvisoryBoard = () => {
  const boardMembers = [
    {
      name: "Dr. [Name 1]",
      position: "Distinguished Professor",
      institution: "[University Name]",
      country: "USA",
      expertise: "Computer Science & AI",
      bio: "Leading expert in artificial intelligence and machine learning with 20+ years of experience."
    },
    {
      name: "Dr. [Name 2]",
      position: "Professor Emeritus",
      institution: "[University Name]",
      country: "UK",
      expertise: "Environmental Engineering",
      bio: "Renowned researcher in sustainable engineering and environmental protection technologies."
    },
    {
      name: "Dr. [Name 3]",
      position: "Research Director",
      institution: "[Institute Name]",
      country: "Germany",
      expertise: "Materials Science",
      bio: "Pioneer in nanomaterials research with numerous patents and international collaborations."
    },
    {
      name: "Dr. [Name 4]",
      position: "Dean of Engineering",
      institution: "[University Name]",
      country: "Australia",
      expertise: "Biomedical Engineering",
      bio: "Expert in medical device innovation and bioengineering applications."
    },
    {
      name: "Dr. [Name 5]",
      position: "Professor",
      institution: "[University Name]",
      country: "Canada",
      expertise: "Social Sciences",
      bio: "Leading researcher in interdisciplinary social science methodology and policy research."
    },
    {
      name: "Dr. [Name 6]",
      position: "Chair Professor",
      institution: "[University Name]",
      country: "Japan",
      expertise: "Business Innovation",
      bio: "Expert in innovation management and technology commercialization strategies."
    }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-academic-blue to-academic-blue-light text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Advisory Board</h1>
            <p className="text-xl text-gray-200">
              Distinguished International Experts Guiding MIRRIJ's Academic Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Advisory Board</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              MIRRIJ's Advisory Board comprises distinguished academics, researchers, and industry leaders 
              from around the world. These experts provide strategic guidance, ensure academic rigor, 
              and help maintain the journal's international standards of excellence.
            </p>
          </div>

          {/* Board Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-academic-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-academic-blue" />
              </div>
              <div className="text-3xl font-bold text-academic-blue mb-2">20+</div>
              <div className="text-gray-600">Board Members</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-academic-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-academic-blue" />
              </div>
              <div className="text-3xl font-bold text-academic-blue mb-2">15+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-academic-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-academic-blue" />
              </div>
              <div className="text-3xl font-bold text-academic-blue mb-2">50+</div>
              <div className="text-gray-600">Awards</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-academic-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-academic-blue" />
              </div>
              <div className="text-3xl font-bold text-academic-blue mb-2">1000+</div>
              <div className="text-gray-600">Publications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Advisory Board Members</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-semibold text-academic-blue">{member.position}</p>
                      <p className="text-gray-700">{member.institution}</p>
                      <p className="text-sm text-gray-600">{member.country}</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Expertise</p>
                      <p className="text-academic-blue text-sm">{member.expertise}</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board Roles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Advisory Board Roles & Responsibilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Strategic Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Providing direction for journal development</li>
                    <li>• Advising on editorial policies and procedures</li>
                    <li>• Supporting international expansion initiatives</li>
                    <li>• Recommending emerging research areas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quality Assurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Ensuring academic rigor and standards</li>
                    <li>• Reviewing editorial decisions when needed</li>
                    <li>• Monitoring peer review processes</li>
                    <li>• Maintaining ethical publication practices</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Network Expansion</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Identifying potential authors and reviewers</li>
                    <li>• Facilitating international collaborations</li>
                    <li>• Promoting journal visibility</li>
                    <li>• Building academic partnerships</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Innovation & Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Suggesting new features and initiatives</li>
                    <li>• Advising on technology adoption</li>
                    <li>• Supporting special issue development</li>
                    <li>• Promoting interdisciplinary research</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Join Advisory Board */}
      <section className="py-16 bg-academic-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Advisory Board</h2>
            <p className="text-xl text-gray-200 mb-8">
              We welcome distinguished scholars and industry leaders who share our vision 
              of advancing multidisciplinary research and innovation.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Criteria for Advisory Board Membership</h3>
              <div className="text-left max-w-2xl mx-auto">
                <ul className="text-gray-200 space-y-2">
                  <li>• Ph.D. with significant academic or industry experience</li>
                  <li>• Strong publication record in peer-reviewed journals</li>
                  <li>• International recognition in their field</li>
                  <li>• Commitment to advancing multidisciplinary research</li>
                  <li>• Available for periodic advisory board meetings</li>
                </ul>
              </div>
              <div className="pt-6">
                <p className="text-gray-200">
                  Interested candidates are invited to send their CV and a brief statement of interest to: 
                  <br />
                  <span className="font-semibold">advisory@mirrij.org</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvisoryBoard;