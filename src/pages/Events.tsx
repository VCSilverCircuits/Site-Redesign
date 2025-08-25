import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, Users } from "lucide-react";

import worldsTeamImage from "@/assets/worlds-team.jpg";

const Events = () => {
  const achievements = [
    {
      icon: <Trophy className="h-5 w-5" />,
      label: "16th Place",
      description: "Ochoa Division out of 56 teams"
    },
    {
      icon: <Trophy className="h-5 w-5" />,
      label: "41st Overall",
      description: "Entire World Championship event"
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "Team Growth",
      description: "Immense learning and development"
    }
  ];

  const eventGallery = [
    {
      image: worldsTeamImage,
      title: "Team with FIRST Sign",
      description: "Official team photo at the World Championship"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 circuit-bg p-12 rounded-2xl">
          <h1 className="text-5xl font-bold mb-6 gradient-text">Our Events & Achievements</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Following our journey through competitions, from local qualifiers to the World Championship stage.
          </p>
        </div>

        <section className="mb-16">
          <Card className="bg-gradient-hero border-border hover:border-primary/50 transition-all duration-300 hover:shadow-tech overflow-hidden">
            <div className="relative">
              <img
                src={worldsTeamImage}
                alt="2024 FIRST World Championship Team"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <Badge variant="secondary" className="mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  April 17-20, 2024
                </Badge>
                <h2 className="text-4xl font-bold text-primary mb-2">2024 FIRST World Championship</h2>
                <p className="text-lg text-muted-foreground flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Houston, Texas
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-gradient-tech border-border hover:border-primary/50 transition-all duration-300 hover:shadow-tech tech-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4 text-accent">
                    {achievement.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{achievement.label}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <Card className="bg-gradient-tech border-border">
            <CardHeader>
              <CardTitle className="text-3xl text-primary">World Championship Experience</CardTitle>
              <CardDescription className="text-lg">
                Our incredible journey to the world's biggest robotics competition
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-6">
                We are incredibly thankful for the opportunity to have attended the FIRST World Championship in Houston, Texas, from April 17–20. We deeply appreciate all the sponsors and supporters who made it possible for us to participate in this prestigious event. Our team worked diligently for months with the goal of attending this competition and giving our best performance.
              </p>
              
              <p className="leading-relaxed mb-6">
                After extensive preparation and countless hours of hard work, we competed and placed <span className="text-primary font-semibold">16th in the Ochoa Division out of 56 teams</span>, and <span className="text-primary font-semibold">41st overall</span> in the entire event. While we did not win any awards, we feel that we have grown and learned immensely throughout this season.
              </p>
              
              <p className="leading-relaxed">
                We are excited about the upcoming season and look forward to what it holds. Thank you once again for your support!
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <Card className="bg-gradient-tech border-border">
            <CardHeader>
              <CardTitle className="text-3xl text-primary">2024-2025 Season Goals</CardTitle>
              <CardDescription>
                Our aspirations for the current Into The Deep season
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-accent">Competition Objectives</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Win at the Nevada State Championship</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Qualify for the Worldwide Championship</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Reach the championship finals</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-accent">Team Development</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Continue learning and innovation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Strengthen team relationships</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Share STEM knowledge with community</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Events;