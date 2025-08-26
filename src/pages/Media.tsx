import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, Youtube, Facebook, Instagram } from "lucide-react"; 
import Footer from "@/components/Footer";

const Media = () => {
    const mediaItems = [
        {
            title: "FLL Masterpiece Mission 1: 3D Cinema",
            description: "Demonstration of Mission 1 from the FLL Masterpiece season.",
            link: "https://youtu.be/yN3WkYg_WkE"
        },
        {
            title: "FLL Masterpiece Mission 2: Theatre Scene Change",
            description: "Demonstration of Mission 2 from the FLL Masterpiece season.",
            link: "https://youtu.be/HPheIBPWFjg"
        },
        {
            title: "FLL Masterpiece Mission 3: Immersive Experience",
            description: "Demonstration of Mission 3 from the FLL Masterpiece season.",
            link: "https://youtu.be/bFeqywuCpUY"
        },
        {
            title: "FLL Masterpiece Mission 4: Masterpiece",
            description: "Demonstration of Mission 4 from the FLL Masterpiece season.",
            link: "https://youtu.be/dJZseUW8JxM"
        },
        {
            title: "FLL Masterpiece Mission 5: Augmented Reality",
            description: "Demonstration of Mission 5 from the FLL Masterpiece season.",
            link: "https://youtu.be/ES-ly-hKbjg"
        },
        {
            title: "FLL Masterpiece Mission 6: Music Concert Lights and Sounds",
            description: "Demonstration of Mission 6 from the FLL Masterpiece season.",
            link: "https://youtu.be/xAnwliSQiMk"
        },
        {
            title: "FLL Masterpiece Mission 7: Hologram Performer",
            description: "Demonstration of Mission 7 from the FLL Masterpiece season.",
            link: "https://youtu.be/za0UW-GEda0"
        },
        {
            title: "FLL Masterpiece Mission 8: Rolling Camera",
            description: "Demonstration of Mission 8 from the FLL Masterpiece season.",
            link: "https://youtu.be/lAxE2INqwd8"
        },
        {
            title: "FLL Masterpiece Mission 9: Movie Set",
            description: "Demonstration of Mission 9 from the FLL Masterpiece season.",
            link: "https://youtu.be/GnEM5FHlYb4"
        },
        {
            title: "FLL Masterpiece Mission 10: Sound Mixer",
            description: "Demonstration of Mission 10 from the FLL Masterpiece season.",
            link: "https://youtu.be/TnWtTvOAu3M"
        },
        {
            title: "FLL Masterpiece Mission 11: Light Show",
            description: "Demonstration of Mission 11 from the FLL Masterpiece season.",
            link: "https://youtu.be/9DVGb-LdLTg"
        },
        {
            title: "FLL Masterpiece Mission 12: Virtual Reality Artist",
            description: "Demonstration of Mission 12 from the FLL Masterpiece season.",
            link: "https://youtu.be/JMepMMtCWnE"
        },
        {
            title: "FLL Masterpiece Mission 13: Craft Creator",
            description: "Demonstration of Mission 13 from the FLL Masterpiece season.",
            link: "https://youtu.be/XYs7DasVPDM"
        },
        {
            title: "FLL Masterpiece Mission 14: Audience Delivery",
            description: "Demonstration of Mission 14 from the FLL Masterpiece season.",
            link: "https://youtu.be/06TXj7tq49s"
        },
        {
            title: "FLL Masterpiece Mission 15: Expert Delivery",
            description: "Demonstration of Mission 15 from the FLL Masterpiece season.",
            link: "https://youtu.be/MrnABIETvoQ"
        }
    ];

    return (
        <div className="min-h-screen pt-20 tech-fade-in">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 circuit-bg p-12 rounded-2xl">
                    <h1 className="text-5xl font-bold mb-6 gradient-text">Media & Videos</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Explore our team’s journey through videos from past and current competitions.
                    </p>
                </div>

                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-3xl font-semibold text-primary">Follow Us</h2>
                    <div className="flex justify-center space-x-6 mt-2">
                        <a href="https://www.youtube.com/@VCSilverCircuitsFTC16158" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-muted-foreground hover:text-primary-glow transition-colors">
                            <Youtube className="h-6 w-6" />
                            YouTube
                        </a>
                        <a href="https://www.facebook.com/VCSilverCircuits" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-muted-foreground hover:text-primary-glow transition-colors">
                            <Facebook className="h-6 w-6" />
                            Facebook
                        </a>
                        <a href="https://www.instagram.com/vcsilvercircuits" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-muted-foreground hover:text-primary-glow transition-colors">
                            <Instagram className="h-6 w-6" />
                            Instagram
                        </a>
                    </div>
                </div>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {mediaItems.map((item, index) => (
                        <Card key={index} className="bg-gradient-tech border-border hover:border-primary/50 transition-all duration-300 hover:shadow-tech">
                            <CardHeader>
                                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                                    <Play className="h-6 w-6" />
                                    {item.title}
                                </CardTitle>
                                <CardDescription>{item.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button variant="hero" asChild>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        Watch Video
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </section>
            </div>
            <Footer />
        </div>
        
    );
};
export default Media;
