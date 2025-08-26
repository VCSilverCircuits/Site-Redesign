import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberCardProps {
  name: string;
  image: string;
  bio: string;
  role?: string;
}

const TeamMemberCard = ({ name, image, bio, role }: TeamMemberCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-tech tech-fade-in">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="space-y-2 text-center">
          <h3 className="text-2xl font-bold text-primary">{name}</h3>
          {role && (
            <p className="text-sm font-medium text-accent uppercase tracking-wide">
              {role}
            </p>
          )}
          <p className="text-muted-foreground leading-relaxed">{bio}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
