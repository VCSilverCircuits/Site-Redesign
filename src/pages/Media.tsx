import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, Youtube, Facebook, Instagram } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import Footer from "@/components/Footer";

const mediaItems = [
    { mission: 1, videoId: "yN3WkYg_WkE" },
    { mission: 2, videoId: "HPheIBPWFjg" },
    { mission: 3, videoId: "bFeqywuCpUY" },
    { mission: 4, videoId: "dJZseUW8JxM" },
    { mission: 5, videoId: "ES-ly-hKbjg" },
    { mission: 6, videoId: "xAnwliSQiMk" },
    { mission: 7, videoId: "za0UW-GEda0" },
    { mission: 8, videoId: "lAxE2INqwd8" },
    { mission: 9, videoId: "GnEM5FHlYb4" },
    { mission: 10, videoId: "TnWtTvOAu3M" },
    { mission: 11, videoId: "9DVGb-LdLTg" },
    { mission: 12, videoId: "JMepMMtCWnE" },
    { mission: 13, videoId: "XYs7DasVPDM" },
    { mission: 14, videoId: "06TXj7tq49s" },
    { mission: 15, videoId: "MrnABIETvoQ" }
];

const socials = [
    { href: "https://www.youtube.com/@VCSilverCircuitsFTC16158", label: "YouTube", Icon: Youtube },
    { href: "https://www.facebook.com/VCSilverCircuits", label: "Facebook", Icon: Facebook },
    { href: "https://www.instagram.com/vcsilvercircuits", label: "Instagram", Icon: Instagram }
];

const Media = () => {
    const [selected, setSelected] = useState<string | null>(null);
    const current = mediaItems.find((m) => m.mission.toString() === selected);

    return (
        <div className="flex flex-col min-h-screen pt-20 tech-fade-in">
            <div className="flex-1">
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
                            {socials.map(({ href, label, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-muted-foreground hover:text-primary-glow transition-colors"
                                >
                                    <Icon className="h-6 w-6" /> {label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="max-w-md mx-auto">
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Explore our videos for the FLL MASTERPIECE Season.
                        </p>
                        <Select onValueChange={setSelected}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a Mission Video" />
                            </SelectTrigger>
                            <SelectContent>
                                {mediaItems.map(({ mission }) => (
                                    <SelectItem key={mission} value={mission.toString()}>
                                        Mission {mission}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        {current && (
                            <Card className="mt-6 bg-gradient-tech border-border hover:border-primary/50 transition-all duration-300 hover:shadow-tech">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-primary flex items-center gap-2">
                                        <Play className="h-6 w-6" /> FLL Masterpiece Mission {current.mission}
                                    </CardTitle>
                                    <CardDescription>
                                        Demonstration of Mission {current.mission} from the FLL Masterpiece season.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button variant="hero" asChild>
                                        <a
                                            href={`https://youtu.be/${current.videoId}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2"
                                        >
                                            Watch Video <ExternalLink className="h-4 w-4" />
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Media;
