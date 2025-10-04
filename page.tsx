import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, Linkedin, Code, Smartphone, Globe, GraduationCap } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="floating-bg">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-heading font-black text-xl">LesleeByte</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl mb-6 text-balance">
              Tech Innovator &<span className="text-primary"> Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Passionate coder, problem solver, and creative thinker. I specialize in building mobile apps, websites,
              and digital solutions that balance simplicity, innovation, and usability.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm LesleeByte, a passionate developer who believes technology should be powerful yet simple. My goal is
                to design digital experiences that not only look great but also make life easier for everyone.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                As the founder of MACMAS, I'm building a growing ecosystem of digital tools that embody my philosophy:
                "Where Innovation Meets Simplicity."
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Flutter Developer</Badge>
                <Badge variant="secondary">Web Developer</Badge>
                <Badge variant="secondary">UI/UX Designer</Badge>
                <Badge variant="secondary">Tech Innovator</Badge>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Clean Code</h3>
                  <p className="text-muted-foreground">
                    Writing maintainable, efficient code with modern best practices.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Mobile First</h3>
                  <p className="text-muted-foreground">
                    Creating responsive, cross-platform applications with Flutter.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Web Innovation</h3>
                  <p className="text-muted-foreground">Building dynamic, responsive websites with modern frameworks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center">MACMAS Ecosystem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Smartphone className="h-8 w-8 text-primary" />
                  <Badge variant="secondary">Coming Soon</Badge>
                </div>
                <CardTitle className="font-heading font-bold">MACMAS App</CardTitle>
                <CardDescription>
                  A sleek, user-friendly application built with Flutter, featuring modern design and smooth animations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Flutter</Badge>
                  <Badge variant="outline">Dart</Badge>
                  <Badge variant="outline">UI/UX</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <Badge variant="secondary">Coming Soon</Badge>
                </div>
                <CardTitle className="font-heading font-bold">MACMAS Academy</CardTitle>
                <CardDescription>
                  An education-focused platform designed to make learning accessible and engaging for everyone.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Web Development</Badge>
                  <Badge variant="outline">Education Tech</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Globe className="h-8 w-8 text-primary" />
                  <Badge variant="secondary">Coming Soon</Badge>
                </div>
                <CardTitle className="font-heading font-bold">MACMAS Stream</CardTitle>
                <CardDescription>
                  An innovative entertainment hub that will revolutionize how we consume digital content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Streaming</Badge>
                  <Badge variant="outline">Innovation</Badge>
                  <Badge variant="outline">Entertainment</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center">Skills & Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="font-heading font-semibold text-xl mb-4">Languages</h3>
              <div className="space-y-2">
                <Badge variant="secondary" className="block">
                  Dart
                </Badge>
                <Badge variant="secondary" className="block">
                  Java
                </Badge>
                <Badge variant="secondary" className="block">
                  HTML
                </Badge>
                <Badge variant="secondary" className="block">
                  JavaScript
                </Badge>
                <Badge variant="secondary" className="block">
                  Haskell
                </Badge>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-heading font-semibold text-xl mb-4">Frameworks</h3>
              <div className="space-y-2">
                <Badge variant="secondary" className="block">
                  Flutter
                </Badge>
                <Badge variant="secondary" className="block">
                  React
                </Badge>
                <Badge variant="secondary" className="block">
                  Next.js
                </Badge>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-heading font-semibold text-xl mb-4">Design</h3>
              <div className="space-y-2">
                <Badge variant="secondary" className="block">
                  UI/UX Design
                </Badge>
                <Badge variant="secondary" className="block">
                  Animations
                </Badge>
                <Badge variant="secondary" className="block">
                  Branding
                </Badge>
                <Badge variant="secondary" className="block">
                  Dark Themes
                </Badge>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-heading font-semibold text-xl mb-4">Interests</h3>
              <div className="space-y-2">
                <Badge variant="secondary" className="block">
                  Streaming Platforms
                </Badge>
                <Badge variant="secondary" className="block">
                  Education Tech
                </Badge>
                <Badge variant="secondary" className="block">
                  Email Services
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-12 text-pretty">
            Ready to collaborate on your next project? I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="mailto:lakerleslie3@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
              <a href="https://github.com/LexMACMAS" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
              <a href="https://www.linkedin.com/in/lessleemacmas" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">© 2024 LesleeByte. MACMAS: Where Innovation Meets Simplicity.</p>
        </div>
      </footer>
    </div>
  )
}
