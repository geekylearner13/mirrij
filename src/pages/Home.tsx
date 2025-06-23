
import { ArrowRight, BookOpen, Users, Globe, Award, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-academic-blue to-academic-blue-light text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1741708011528-e4874c6d869e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Advancing Academic
              <span className="block text-yellow-300">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Welcome to the Multidisciplinary International Review Research and Innovation Journal (MIRRIJ) - 
              Your gateway to cutting-edge research and scholarly innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-academic-blue hover:bg-gray-100">
                <Link to="/about-journal">
                  Explore Journal <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-academic-blue">
                <Link to="/how-to-submit">
                  Submit Your Research
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About MIRRIJ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About MIRRIJ</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The Multidisciplinary International Review Research and Innovation Journal (MIRRIJ) is an open access, Peer-reviewed, CrossRef Indexed International Journal, that provides rapid publication (Quaterly) of Research Articles, Case Reports, Review Articles, Correspondences and short communications in all subjects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-academic-blue/10 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="w-8 h-8 text-academic-blue" />
                </div>
                <h3 className="text-xl font-semibold">Multidisciplinary Focus</h3>
                <p className="text-gray-600">
                  Covering diverse fields from engineering to social sciences
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-academic-blue/10 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="w-8 h-8 text-academic-blue" />
                </div>
                <h3 className="text-xl font-semibold">International Reach</h3>
                <p className="text-gray-600">
                  Global community of researchers and scholars
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-academic-blue/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-academic-blue" />
                </div>
                <h3 className="text-xl font-semibold">Expert Review</h3>
                <p className="text-gray-600">
                  Rigorous peer-review process ensuring quality
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-academic-blue/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-academic-blue" />
                </div>
                <h3 className="text-xl font-semibold">Innovation Focus</h3>
                <p className="text-gray-600">
                  Promoting cutting-edge research and innovation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose MIRRIJ?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Open Access Publishing</h3>
                    <p className="text-gray-600">Making research accessible to the global community</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Unique DOI Assignment</h3>
                    <p className="text-gray-600">Every article published in MIRRIJ is provided with unique DOI</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Fast Track Review</h3>
                    <p className="text-gray-600">Efficient peer-review process with quick turnaround</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">International Editorial Board</h3>
                    <p className="text-gray-600">Experts from leading institutions worldwide</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Digital Platform</h3>
                    <p className="text-gray-600">Modern online submission and publication system</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Research</h3>
              <p className="text-gray-600 mb-6">
                Ready to share your groundbreaking research with the global academic community? 
                Start your submission process today.
              </p>
              <div className="space-y-4">
                <Button asChild className="w-full">
                  <Link to="/how-to-submit">
                    <FileText className="mr-2 w-5 h-5" />
                    Submit Paper
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/instructions-to-authors">
                    View Guidelines
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-academic-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Published Articles</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-lg">Reviewers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg">Disciplines</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;