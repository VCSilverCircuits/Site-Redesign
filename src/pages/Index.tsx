import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Trophy, Users, Zap, ExternalLink, Heart } from "lucide-react";
import Footer from "@/components/Footer";
import teamHeroImage from "@/assets/TeamPhotos/team-hero.jpg";
import teamPhoto1 from "@/assets/TeamPhotos/team-photo-1.jpg";
import teamPhoto2 from "@/assets/TeamPhotos/team-photo-2.jpg";

const Index = () => {
  const achievements = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "World Championship",
      description: "1st Place in Jemison Division",
      highlight: "2025 INTO THE DEEP"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Robot Performance",
      description: "442 Point High Score",
      highlight: "Team Record"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Spirit",
      description: "6 Strong and Dedicated Team Members",
      highlight: "Strong"
    }
  ];

  return (
    <div className="min-h-screen tech-fade-in">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={teamHeroImage}
            alt="VC Silver Circuits Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 text-lg px-6 py-2 tech-fade-in">
            We are FTC Team #16158
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text tech-fade-in">
            VC Silver Circuits
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto tech-fade-in">
            Virginia City, Nevada
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed tech-fade-in">
            We are the VC Silver Circuits, a team participating in the FIRST Tech Challenge program. 
            Our team consists of six team members, two coaches, and one mentor, dedicated to pursuing 
            knowledge in robotics and engineering. We come from a small town in rural Nevada called 
            Virginia City, but our passion is big.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center tech-fade-in">
            <Button variant="hero" size="lg" asChild>
              <Link to="/team">Meet Our Team</Link>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <Link to="/robot">See Our Robot</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 circuit-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-primary">Our Mission</h2>
            <p className="text-xl leading-relaxed text-muted-foreground mb-12">
              We strive to share our knowledge and passions with others, to create a future of STEM excellence. 
              This season, our focus is clear: <span className="text-primary font-semibold">win at the Nevada State Championship</span> and 
              aim for the <span className="text-accent font-semibold">Worldwide Championship</span>. Our goal isn't just to participate 
              but to excel, reaching the finals to showcase our team's dedication and talent.
            </p>
            <div className="text-2xl font-bold text-accent">
              Join us on this exciting journey of innovation and collaboration!
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-gradient-tech border-border hover:border-primary/50 transition-all duration-300 hover:shadow-tech tech-fade-in group">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <Badge variant="secondary" className="mb-4">
                    {achievement.highlight}
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-tech">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Team in Action</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-tech">
              <img
                src={teamPhoto2}
                alt="VC Silver Circuits Team Competition"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="group overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-tech">
              <img
                src={teamPhoto1}
                alt="VC Silver Circuits Team Workshop"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-16 w-16 text-accent mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-8 text-primary">Support Our Journey</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Help us continue our robotics journey and reach new heights. Your support helps us compete, 
              learn, and inspire the next generation of STEM leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://gofund.me/cb49a9f8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Support on GoFundMe
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 circuit-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-primary">About FIRST Tech Challenge</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              FIRST Tech Challenge is an extracurricular program for students in grades 7–12 to learn about the 
              fields of science, technology, engineering, and math (STEM) through hands-on learning in the field of robotics.
            </p>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.firstinspires.org/robotics/ftc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Learn More About FIRST and FIRST Tech Challenge
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
