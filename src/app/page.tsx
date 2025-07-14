"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Smartphone, Globe, MapPin, Calendar } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const skills = {
    web: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    mobile: ["React Native", "Graphql", "Redux"],
    tools: ["Git", "Docker", "AWS", "Figma", "VS Code", "Postman"],
  }

  const projects = [
    {
      title: "Kuda Microfinance Bank",
      description:
        "Frontend fintech solution with React, and Redux. Features include user authentication, payment processing.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Redux"],
      liveUrl: "https://kuda.com/",
    },
    {
      title: "RideAngelo Mobile App",
      description:
        "RideAngelo is a ride-sharing platform that focuses on providing reliable, cost-effective, and subscription-based mobility solutions.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Expo React Native", "Redux","TypeScript"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.rideangelo.RideAngeloPassenger",
    },
    {
      title: "RideAngelo Web App",
      description:
        "RideAngelo is a ride-sharing platform that focuses on providing reliable, cost-effective, and subscription-based mobility solutions.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Redux", "Chart.js", "Tailwind CSS"],
      liveUrl: "https://www.rideangelo.com/",
    },
    {
      title: "Nirvanae Dating App",
      description:
        " Nirvanae web dating app is platforms that bring people together",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Typscript", "Graphql", "Apollo", "Tailwind CSS"],
      liveUrl: "https://www.nirvanaeng.com/",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="font-bold">Maurice Etim</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <Avatar className="h-64 w-64">
            <AvatarImage src="https://res.cloudinary.com/evenmg/image/upload/v1752484933/IMG_2046_xjtbcu.jpg" alt="Maurice Etim" />
            <AvatarFallback className="text-2xl">ME</AvatarFallback>
          </Avatar>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Web & Mobile Developer</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Passionate Web and Mobile developer specializing in modern web applications and cross-platform mobile
              solutions. I create digital experiences that are both beautiful and functional.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="#projects">
                <Globe className="mr-2 h-4 w-4" />
                View Projects
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://drive.google.com/file/d/12z4vvnz4SSaMWv0T6mYozf5OYESjzm5U/view?usp=drive_link" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Link>
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/Morsetim" target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/maurice-etim-6a5506b3/" target="_blank">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:mauricium.maurice@yahoo.com">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">About Me</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I'm a passionate Frontend developer with over 4 years of experience building web and mobile
                applications. I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through technical writing and mentoring.
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="mr-1 h-4 w-4" />
                  Ikeja Lagos, NG
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  4+ years experience
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3 flex items-center">
                  <Globe className="mr-2 h-4 w-4" />
                  Web Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.web.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 flex items-center">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Mobile Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.mobile.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 flex items-center">
                  <Code className="mr-2 h-4 w-4" />
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Projects Section */}
      <section id="projects" className="container py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                {/* <div className="aspect-video relative">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div> */}
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex space-x-2">
                      {/* <Button variant="ghost" size="icon" asChild>
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button> */}
                      
                      <Button variant="ghost"  asChild>
                        <Link href={project.liveUrl} target="_blank">
                          <p className="font-serif">Link</p>
                          <ExternalLink className="h-4 w-4"/>
                        </Link>
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section id="contact" className="container py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Get In Touch</h2>
          <p className="text-muted-foreground mb-8">
            I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
            to say hi, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="mailto:mauricium.maurice@yahoo.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://www.linkedin.com/in/maurice-etim-6a5506b3/" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container text-center text-muted-foreground">
          <p>©2025 Maurice Etim. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
