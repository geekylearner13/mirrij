
import { Calendar, Download, Eye, Search, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const Archive = () => {
  const archiveIssues = [
    {
      volume: "5",
      issue: "1",
      year: "2024",
      month: "March",
      articles: 6,
      pages: 95,
      coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      volume: "4",
      issue: "4",
      year: "2023",
      month: "December",
      articles: 7,
      pages: 108,
      coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      volume: "4",
      issue: "3",
      year: "2023",
      month: "September",
      articles: 5,
      pages: 78,
      coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      volume: "4",
      issue: "2",
      year: "2023",
      month: "June",
      articles: 8,
      pages: 124,
      coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      volume: "4",
      issue: "1",
      year: "2023",
      month: "March",
      articles: 6,
      pages: 92,
      coverImage: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      volume: "3",
      issue: "4",
      year: "2022",
      month: "December",
      articles: 9,
      pages: 140,
      coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-academic-blue to-academic-blue-light text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Archive</h1>
            <p className="text-xl text-gray-200">
              Browse through our collection of published issues and research articles
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input 
                        placeholder="Search articles, authors, or keywords..." 
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Volume" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">Volume 5</SelectItem>
                        <SelectItem value="4">Volume 4</SelectItem>
                        <SelectItem value="3">Volume 3</SelectItem>
                        <SelectItem value="2">Volume 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Archive Statistics */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-academic-blue mb-2">5</div>
                <div className="text-gray-600">Volumes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-academic-blue mb-2">18</div>
                <div className="text-gray-600">Issues</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-academic-blue mb-2">120+</div>
                <div className="text-gray-600">Articles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-academic-blue mb-2">1,500+</div>
                <div className="text-gray-600">Pages</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Issues Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Published Issues</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {archiveIssues.map((issue, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img 
                        src={issue.coverImage} 
                        alt={`Volume ${issue.volume} Issue ${issue.issue} Cover`}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 left-4 bg-white text-academic-blue px-3 py-1 rounded-full text-sm font-semibold">
                        Vol {issue.volume} Issue {issue.issue}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Volume {issue.volume}, Issue {issue.issue}
                        </h3>
                        <div className="flex items-center space-x-2 text-gray-600 mt-2">
                          <Calendar className="w-4 h-4" />
                          <span>{issue.month} {issue.year}</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-6 text-sm text-gray-600">
                        <div>
                          <span className="font-semibold">{issue.articles}</span> Articles
                        </div>
                        <div>
                          <span className="font-semibold">{issue.pages}</span> Pages
                        </div>
                      </div>
                      
                      <div className="flex space-x-2 pt-4">
                        <Button size="sm" className="flex-1">
                          <Eye className="mr-2 w-4 h-4" />
                          View Issue
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Archive Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Browse by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">By Year</h4>
                    <div className="space-y-2">
                      {["2024", "2023", "2022", "2021", "2020"].map((year) => (
                        <Button key={year} variant="ghost" className="w-full justify-start">
                          {year}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">By Volume</h4>
                    <div className="space-y-2">
                      {["Volume 5", "Volume 4", "Volume 3", "Volume 2", "Volume 1"].map((volume) => (
                        <Button key={volume} variant="ghost" className="w-full justify-start">
                          {volume}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Most Cited Articles</h4>
                    <div className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        AI in Healthcare Systems
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        Sustainable Energy Solutions
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        Blockchain Applications
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        Machine Learning Algorithms
                      </Button>
                    </div>
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

export default Archive;