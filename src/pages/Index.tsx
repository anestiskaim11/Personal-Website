import { Mail, ExternalLink, GraduationCap, Briefcase, FileText, FolderKanban, Code, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ResultsTable } from "@/components/ResultsTable";
import portraitImage from "@/assets/portrait.jpg";
import fclVitPreview from "@/assets/fcl-vit-preview.png";

const Index = () => {
  const publications = [
    {
      title: "FCL-ViT: Task Aware Attention Tuning for Continual Learning",
      venue: "Pattern Recognition Letters, 2025",
      link: "https://www.sciencedirect.com/science/article/pii/S016786552500282X",
      preview: fclVitPreview,
      previewAlt: "FCL-ViT performance comparison showing accuracy across tasks compared to WA, DER, iCARL, and DyTox+ methods",
    },
    {
      title: "Collaborative Knowledge Distillation via a Learning-by-Education Node Community",
      venue: "Under final review at IEEE Transactions on Artificial Intelligence",
      link: "https://arxiv.org/abs/2410.00074",
    },
    {
      title: "Political Tweet Sentiment Analysis for Public Opinion Polling",
      venue: "IEEE ICASSP, 2024",
      link: "https://ieeexplore.ieee.org/abstract/document/10448327",
      resultsTable: {
        data: [
          { method: "METRON ANALYSIS", mae: "2.17%" },
          { method: "MRB", mae: "1.89%" },
          { method: "MARC", mae: "1.63%" },
          { method: "GPO", mae: "1.57%" },
          { method: "PULSE", mae: "1.54%" },
          { method: "Method [8]", mae: "1.42%" },
          { method: "OPTR (Proposed)", mae: "1.09%" },
        ],
        caption: "MAE comparison with Greek polling companies for 2023 general elections",
        highlightRow: 6,
      },
    },
    {
      title: "Leveraging Collective Knowledge for Forest Fire Classification",
      venue: "IEEE ISCC, 2024",
      link: "https://ieeexplore.ieee.org/abstract/document/10733691",
    },
    {
      title: "Facilitating Experimental Reproducibility in Neural Network Research with a Unified Framework",
      venue: "IEEE/ACM BigNDA, 2023",
      link: "https://dl.acm.org/doi/abs/10.1145/3632366.3632368",
    },
  ];

  const skills = {
    "AI & ML": [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "Hugging Face Transformers",
      "NumPy",
      "Pandas",
      "CUDA",
      "Computer Vision",
      "NLP",
      "Reinforcement Learning",
      "Generative AI",
    ],
    "AI engineering & MLOps": [
      "RAG pipelines",
      "LangChain",
      "Multi-agent systems",
      "Claude & OpenAI APIs",
      "FastAPI",
      "Docker",
      "Kubernetes",
      "AWS",
      "REST APIs",
      "Git",
      "Linux",
    ],
    "Programming & data": [
      "Python",
      "C++",
      "C",
      "Java",
      "SQL",
      "JavaScript",
      "TypeScript",
      "React",
      "Dart",
      "HTML/CSS",
    ],
    "Databases": ["PostgreSQL", "MySQL", "Supabase"],
    "Languages": ["English (fluent)", "French (intermediate)", "Greek (native)"],
  };

  const projects = [
    {
      name: "Big Fish — AI-powered portfolio intelligence",
      role: "Full-stack ML & deployment",
      description:
        "Ensemble of RL agents trading 17 US equities with tuned reward shaping and exploration; multi-agent LLM layer over RAG on news and filings for macro context and risk governance; Python/FastAPI backend, web frontend, and live paper trading.",
      link: "https://big-fish-nine.vercel.app/",
    },
    {
      name: "Retinal AI — medical imaging & recommendations",
      role: "Computer vision & explainable AI",
      description:
        "Multiple CV models for disease prediction from retina images, an agent guided by those predictors, explainable heatmaps, online integration, and generative models mapping retina images to advanced modalities for further analysis.",
    },
    {
      name: "AI booking marketplace (Venus Bookings)",
      role: "Mobile product & AI features",
      description:
        "Client app for bookings and professional app with AI-assisted business tools; live for 12 months across 20 venues with 1,000+ bookings; shipped to App Store and Google Play.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-primary/20">
              <AvatarImage src={portraitImage} alt="Anestis Kaimakamidis" />
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
            <div className="inline-block">
              <Badge variant="secondary" className="mb-4 text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20">
                MS in Artificial Intelligence @ Northeastern University, Boston
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Anestis Kaimakamidis
              </span>
            </h1>
            <div className="space-y-2 text-sm md:text-base max-w-2xl mx-auto">
              <p className="text-muted-foreground">
                Connect on{" "}
                <a
                  href="https://www.linkedin.com/in/anestis-kaimakamidis-9a347b29b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1.5"
                >
                  <Linkedin className="h-4 w-4 shrink-0" aria-hidden />
                  LinkedIn
                </a>
                .
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground/80">Scholar:</span>{" "}
                <a
                  href="https://scholar.google.com/citations?user=oweAUnMAAAAJ&hl=el"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1.5"
                >
                  <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
                  Google Scholar
                </a>
                <span className="text-muted-foreground"> (15 citations, 7 publications)</span>
              </p>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              AI researcher and engineer focused on computer vision, NLP, reinforcement learning, and production ML systems
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto pt-4">
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10" asChild>
                <a href="#education" aria-label="Jump to Education section">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Education
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10" asChild>
                <a href="#experience" aria-label="Jump to Experience section">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Experience
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10" asChild>
                <a href="#publications" aria-label="Jump to Publications section">
                  <FileText className="mr-2 h-5 w-5" />
                  Publications
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10" asChild>
                <a href="#projects" aria-label="Jump to Projects section">
                  <FolderKanban className="mr-2 h-5 w-5" />
                  Projects
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10" asChild>
                <a href="#skills" aria-label="Jump to Skills section">
                  <Code className="mr-2 h-5 w-5" />
                  Skills
                </a>
              </Button>
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow" asChild>
                <a href="#contact" aria-label="Jump to Contact section">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About & Education Section */}
      <section id="education" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Education & Background</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 animate-glow" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Northeastern University, Boston</h3>
                  <p className="text-accent font-semibold mb-2">MS in Artificial Intelligence — Khoury College of Computer Sciences</p>
                  <p className="text-muted-foreground text-sm">September 2025 – Present · Expected graduation 2027</p>
                  <p className="text-foreground/90 mt-3">GPA: 3.92/4.0</p>
                  <p className="text-foreground/80 text-sm mt-2">
                    Coursework includes Foundation of Artificial Intelligence, Machine Learning and Pattern Recognition, Algorithms, and Programming and Data Processing for AI.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 animate-glow" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Aristotle University (A.U.Th.), Thessaloniki, Greece</h3>
                  <p className="text-accent font-semibold mb-2">Integrated Master&apos;s in Electrical and Computer Engineering</p>
                  <p className="text-muted-foreground text-sm">Graduated 2023</p>
                  <div className="mt-3 space-y-1">
                    <p className="text-foreground/90">GPA: 8.93/10.0</p>
                    <p className="text-foreground/80 text-sm">
                      Coursework includes Pattern Recognition, Data Structures, Databases, and Deep Learning.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-1 h-full bg-secondary rounded-full min-h-[100px]" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Teaching Assistant — Algorithms (CS5800)</h3>
                  <p className="text-accent font-semibold mb-2">Khoury College of Computer Sciences, Northeastern University</p>
                  <p className="text-muted-foreground text-sm mb-4">January 2026 – April 2026</p>
                  <ul className="space-y-2 text-foreground/90">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span>Supported MSc students during office hours and one-on-one tutoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span>Graded homework and exams with actionable feedback</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-1 h-full bg-primary rounded-full min-h-[100px]" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Research Assistant</h3>
                  <p className="text-accent font-semibold mb-2">Artificial Intelligence and Information Analysis (AIIA) Lab, Thessaloniki</p>
                  <p className="text-muted-foreground text-sm mb-4">May 2022 – August 2024</p>
                  <ul className="space-y-2 text-foreground/90">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span>
                        First author on four peer-reviewed papers and co-author on three, spanning visual transformers, continual learning, knowledge distillation, NLP, sentiment analysis, and time-series forecasting
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span>
                        Contributed to EU Horizon projects (AI4Media, AI4Europe, TEMA) on vision–language modeling, large-scale text embeddings, and sentiment inference
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span>
                        Built the Political Barometer NLP system for automated tweet mining, transformer-based sentiment, and daily party-vote estimation — outperforming competing methods and polling firms for Greece&apos;s 2023 national and 2024 European elections
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span>
                        Trained vision–language transformers on multi-GPU infrastructure and developed the LENC cloud framework so lab models could exchange knowledge and learn collaboratively
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Publications</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Peer-reviewed work in computer vision, continual learning, knowledge distillation, NLP, and applied machine learning at conferences and journals
          </p>
          <div className="grid gap-6">
            {publications.map((pub, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <div className="flex items-start justify-between gap-4 flex-col md:flex-row">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-accent text-sm font-semibold mb-3">{pub.venue}</p>
                    {pub.preview && (
                      <div className="mt-4">
                        <img
                          src={pub.preview}
                          alt={pub.previewAlt || pub.title}
                          className="w-full rounded-lg border border-border/50 hover:border-primary/50 transition-all"
                        />
                      </div>
                    )}
                  </div>
                  <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary self-start" asChild>
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${pub.title}`}>
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
                {pub.resultsTable && (
                  <ResultsTable
                    data={pub.resultsTable.data}
                    caption={pub.resultsTable.caption}
                    highlightRow={pub.resultsTable.highlightRow}
                  />
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.name}</h3>
                    <p className="text-accent font-semibold">{project.role}</p>
                    <p className="text-foreground/90">{project.description}</p>
                  </div>
                  {project.link && (
                    <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Skills & Expertise</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="p-6 bg-gradient-card border-border/50">
                <h3 className="text-xl font-bold mb-4 text-accent">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-primary/10 text-foreground border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Let's Connect</span>
          </h2>
          <p className="text-muted-foreground mb-4 text-lg">
            Interested in collaboration or want to discuss AI research? Feel free to reach out.
          </p>
          <p className="text-muted-foreground text-sm mb-8">Available for opportunities: August – December 2026</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow" asChild>
              <a href="mailto:kaimakamidis.a@northeastern.edu">
                <Mail className="mr-2 h-5 w-5" />
                kaimakamidis.a@northeastern.edu
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10" asChild>
              <a href="mailto:akaimakamidis@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                akaimakamidis@gmail.com
              </a>
            </Button>
          </div>
          <div className="mt-12 pt-8 border-t border-border/30">
            <p className="text-muted-foreground text-sm">
              Boston, MA · MS in Artificial Intelligence, Northeastern University
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
