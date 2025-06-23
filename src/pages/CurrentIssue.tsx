
import { Calendar, Download, Eye, FileText, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CurrentIssue = () => {
  const currentIssue = {
    volume: "5",
    issue: "2",
    year: "2024",
    month: "June",
    coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  };

  const articles = [
    {
      title: "Artificial Intelligence in Sustainable Urban Planning: A Multidisciplinary Approach",
      authors: ["Dr. Sarah Johnson", "Prof. Michael Chen", "Dr. Elena Rodriguez"],
      pages: "1-18",
      type: "Research Article",
      abstract: "This study explores the integration of AI technologies in urban planning processes, focusing on sustainability metrics and community engagement strategies.",
      keywords: ["Artificial Intelligence", "Urban Planning", "Sustainability", "Smart Cities"],
      doi: "10.xxxx/mirrij.2024.5.2.001"
    },
    {
      title: "Cross-Cultural Communication Patterns in Global Virtual Teams: An Empirical Analysis",
      authors: ["Dr. Rajesh Kumar", "Prof. Anna Petrov", "Dr. James Wilson"],
      pages: "19-35",
      type: "Research Article",
      abstract: "An extensive analysis of communication patterns and cultural factors affecting productivity in globally distributed virtual teams.",
      keywords: ["Cross-Cultural Communication", "Virtual Teams", "Global Collaboration", "Management"],
      doi: "10.xxxx/mirrij.2024.5.2.002"
    },
    {
      title: "Nanotechnology Applications in Environmental Remediation: Current Trends and Future Prospects",
      authors: ["Dr. Lisa Wang", "Prof. David Thompson"],
      pages: "36-52",
      type: "Review Article",
      abstract: "A comprehensive review of current nanotechnology applications in environmental cleanup and pollution control.",
      keywords: ["Nanotechnology", "Environmental Remediation", "Pollution Control", "Green Technology"],
      doi: "10.xxxx/mirrij.2024.5.2.003"
    },
    {
      title: "Blockchain Technology in Healthcare Data Management: Security and Privacy Considerations",
      authors: ["Dr. Ahmed Hassan", "Prof. Jennifer Kim", "Dr. Roberto Silva"],
      pages: "53-68",
      type: "Research Article",
      abstract: "Investigation of blockchain applications in healthcare data management with focus on security protocols and privacy protection.",
      keywords: ["Blockchain", "Healthcare", "Data Security", "Privacy Protection"],
      doi: "10.xxxx/mirrij.2024.5.2.004"
    },
    {
      title: "Renewable Energy Integration in Smart Grid Systems: Challenges and Solutions",
      authors: ["Dr. Maria Gonzalez", "Prof. Robert Anderson"],
      pages: "69-84",
      type: "Technical Communication",
      abstract: "Analysis of technical challenges and innovative solutions for integrating renewable energy sources into smart grid infrastructure.",
      keywords: ["Smart Grid", "Renewable Energy", "Energy Integration", "Power Systems"],
      doi: "10.xxxx/mirrij.2024.5.2.005"
    }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-academic-blue to-academic-blue-light text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Current Issue</h1>
            <p className="text-xl text-gray-200">
              Volume {currentIssue.volume}, Issue {currentIssue.issue} - {currentIssue.month} {currentIssue.year}
            </p>
          </div>
        </div>
      </section>

      {/* Issue Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Issue Header Card */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                  {/* Cover Image */}
                  <div className="lg:col-span-1">
                    <div className="relative">
                      <img 
                        src={currentIssue.coverImage} 
                        alt={`MIRRIJ Vol ${currentIssue.volume} Issue ${currentIssue.issue} Cover`}
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute top-4 left-4 bg-academic-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Current Issue
                      </div>
                    </div>
                  </div>
                  
                  {/* Issue Information */}
                  <div className="lg:col-span-3 space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Volume {currentIssue.volume}, Issue {currentIssue.issue}
                      </h2>
                      <div className="flex items-center space-x-4 text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-5 h-5" />
                          <span>{currentIssue.month} {currentIssue.year}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FileText className="w-5 h-5" />
                          <span>{articles.length} Articles</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-5 h-5" />
                          <span>15 Authors</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Issue Highlights</h3>
                      <p className="text-gray-700 leading-relaxed">
                        This issue presents cutting-edge research across multiple disciplines, featuring 
                        innovative applications of artificial intelligence, nanotechnology, blockchain, 
                        and renewable energy systems. The interdisciplinary approach showcases the 
                        journal's commitment to fostering collaboration between diverse fields of study.
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button>
                        <Download className="mr-2 w-4 h-4" />
                        Download Complete Issue
                      </Button>
                      <Button variant="outline">
                        <Eye className="mr-2 w-4 h-4" />
                        View Online
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Articles List */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Articles in This Issue</h2>
              
              {articles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant="secondary">{article.type}</Badge>
                          <span className="text-sm text-gray-500">Pages {article.pages}</span>
                        </div>
                        <CardTitle className="text-xl leading-tight mb-3">
                          {article.title}
                        </CardTitle>
                        <div className="text-gray-700 mb-2">
                          <span className="font-medium">Authors: </span>
                          {article.authors.join(", ")}
                        </div>
                        <div className="text-sm text-gray-600 mb-1">
                          <span className="font-medium">DOI: </span>
                          <span className="font-mono">{article.doi}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Abstract</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{article.abstract}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Keywords</h4>
                        <div className="flex flex-wrap gap-2">
                          {article.keywords.map((keyword, keywordIndex) => (
                            <Badge key={keywordIndex} variant="outline" className="text-xs">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex space-x-3 pt-4 border-t">
                        <Button size="sm">
                          <Download className="mr-2 w-4 h-4" />
                          Download PDF
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="mr-2 w-4 h-4" />
                          View HTML
                        </Button>
                        <Button size="sm" variant="ghost">
                          Cite Article
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Issue Statistics */}
            <Card className="mt-12">
              <CardHeader>
                <CardTitle>Issue Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-academic-blue mb-2">5</div>
                    <div className="text-gray-600">Research Articles</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-academic-blue mb-2">1</div>
                    <div className="text-gray-600">Review Articles</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-academic-blue mb-2">1</div>
                    <div className="text-gray-600">Technical Communications</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-academic-blue mb-2">84</div>
                    <div className="text-gray-600">Total Pages</div>
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

export default CurrentIssue;