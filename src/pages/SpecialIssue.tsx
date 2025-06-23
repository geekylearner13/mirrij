
import { Star, Calendar, Users, FileText, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

const SpecialIssue = () => {
  const currentSpecialIssues = [
    {
      title: "Artificial Intelligence and Machine Learning in Healthcare",
      status: "Call for Papers",
      deadline: "September 30, 2024",
      guestEditors: ["Dr. Sarah Johnson", "Prof. Michael Chen"],
      description: "This special issue focuses on the latest developments in AI and ML applications in healthcare, including diagnostic systems, treatment optimization, and personalized medicine.",
      topics: [
        "AI-powered diagnostic systems",
        "Machine learning in drug discovery",
        "Personalized treatment algorithms",
        "Healthcare data analytics",
        "Telemedicine and AI",
        "Ethical considerations in AI healthcare"
      ]
    },
    {
      title: "Sustainable Technologies for Climate Change Mitigation",
      status: "Under Review",
      deadline: "Closed",
      guestEditors: ["Prof. Elena Rodriguez", "Dr. James Wilson"],
      description: "Exploring innovative sustainable technologies and methodologies for addressing climate change challenges across multiple disciplines.",
      topics: [
        "Renewable energy systems",
        "Carbon capture technologies",
        "Green building materials",
        "Sustainable transportation",
        "Climate modeling and prediction",
        "Policy and economics of sustainability"
      ]
    }
  ];

  const upcomingSpecialIssues = [
    {
      title: "Blockchain and Distributed Systems",
      announcementDate: "October 2024",
      expectedDeadline: "March 2025",
      description: "Comprehensive exploration of blockchain technologies and their applications across various industries."
    },
    {
      title: "Internet of Things and Smart Cities",
      announcementDate: "December 2024",
      expectedDeadline: "June 2025",
      description: "IoT applications in urban development and smart city infrastructure."
    },
    {
      title: "Quantum Computing and Future Technologies",
      announcementDate: "February 2025",
      expectedDeadline: "August 2025",
      description: "Emerging quantum technologies and their potential applications."
    }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-academic-blue to-academic-blue-light text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Special Issues</h1>
            <p className="text-xl text-gray-200">
              Focused collections on cutting-edge research topics
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Special Issues</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              MIRRIJ special issues provide focused platforms for exploring specific research themes 
              in depth. These curated collections bring together experts from multiple disciplines 
              to address contemporary challenges and emerging trends in science and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Current Special Issues */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Current Special Issues</h2>
            
            <div className="space-y-8">
              {currentSpecialIssues.map((issue, index) => (
                <Card key={index} className="border-l-4 border-academic-blue">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{issue.title}</CardTitle>
                        <div className="flex items-center space-x-4 mb-4">
                          <Badge 
                            variant={issue.status === "Call for Papers" ? "default" : "secondary"}
                            className={issue.status === "Call for Papers" ? "bg-green-600" : ""}
                          >
                            {issue.status}
                          </Badge>
                          {issue.deadline !== "Closed" && (
                            <div className="flex items-center space-x-2 text-gray-600">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">Deadline: {issue.deadline}</span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600 mb-4">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">Guest Editors: {issue.guestEditors.join(", ")}</span>
                        </div>
                      </div>
                      <Star className="w-6 h-6 text-yellow-500" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                        <p className="text-gray-700 leading-relaxed">{issue.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Topics</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {issue.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-academic-blue rounded-full"></div>
                              <span className="text-gray-700 text-sm">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {issue.status === "Call for Papers" && (
                        <Alert className="border-green-200 bg-green-50">
                          <AlertDescription className="text-green-800">
                            <strong>Call for Papers Open!</strong> We invite researchers to submit their manuscripts 
                            for this special issue. Please follow the regular submission guidelines.
                          </AlertDescription>
                        </Alert>
                      )}
                      
                      <div className="flex space-x-4 pt-4">
                        <Button>
                          <FileText className="mr-2 w-4 h-4"   />
                          View Full Call
                        </Button>
                        {issue.status === "Call for Papers" && (
                          <Button variant="outline">
                            <Send className="mr-2 w-4 h-4" />
                            Submit Paper
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Special Issues */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Special Issues</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingSpecialIssues.map((issue, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{issue.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-700 text-sm leading-relaxed">{issue.description}</p>
                      
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>Announcement: {issue.announcementDate}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4" />
                          <span>Expected Deadline: {issue.expectedDeadline}</span>
                        </div>
                      </div>
                      
                      <Badge variant="outline">Coming Soon</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines for Special Issues */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Guidelines for Special Issue Submissions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Submission Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Follow standard MIRRIJ formatting guidelines</li>
                    <li>• Clearly indicate the special issue in your cover letter</li>
                    <li>• Ensure your work aligns with the special issue theme</li>
                    <li>• Original research or comprehensive review articles</li>
                    <li>• High-quality figures and supplementary materials</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Review Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Same rigorous peer-review as regular issues</li>
                    <li>• Guest editors coordinate the review process</li>
                    <li>• 4-6 weeks typical review timeline</li>
                    <li>• Direct communication with guest editors</li>
                    <li>• Priority publication upon acceptance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Important Dates</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Submission deadline: As specified in call</li>
                    <li>• Initial review: 2 weeks after submission</li>
                    <li>• Peer review completion: 6-8 weeks</li>
                    <li>• Revision deadline: 4 weeks after decision</li>
                    <li>• Final decision: 2 weeks after revision</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Enhanced visibility within focused community</li>
                    <li>• Collaboration opportunities with experts</li>
                    <li>• Higher citation potential</li>
                    <li>• Featured promotion on journal website</li>
                    <li>• Special issue DOI and branding</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Propose Special Issue */}
      <section className="py-16 bg-academic-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Propose a Special Issue</h2>
            <p className="text-xl text-gray-200 mb-8">
              Have an innovative research theme that would benefit from a focused collection? 
              We welcome proposals for new special issues from leading researchers in their fields.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Proposal Requirements</h3>
              <div className="text-left max-w-2xl mx-auto">
                <ul className="text-gray-200 space-y-2">
                  <li>• Detailed description of the proposed theme</li>
                  <li>• Justification for the special issue relevance</li>
                  <li>• Proposed guest editor qualifications and CV</li>
                  <li>• Tentative timeline and key dates</li>
                  <li>• List of potential contributors and reviewers</li>
                  <li>• Marketing and promotion strategy</li>
                </ul>
              </div>
              <div className="pt-6">
                <Button size="lg" variant="secondary">
                  <Send className="mr-2 w-5 h-5" />
                  Submit Special Issue Proposal
                </Button>
              </div>
              <div className="pt-4">
                <p className="text-gray-200 text-sm">
                  Send your proposal to: <span className="font-semibold">specialissues@mirrij.org</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialIssue;