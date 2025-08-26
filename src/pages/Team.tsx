import TeamMemberCard from "@/components/TeamMemberCard";
import hunterImage from "@/assets/TeamMembers/hunter.jpg";
import tuckerImage from "@/assets/TeamMembers/tucker.jpg";
import aidenImage from "@/assets/TeamMembers/aiden.jpg";
import williamImage from "@/assets/TeamMembers/william.jpg";
import aaronImage from "@/assets/placeholder.svg";
import Footer from "@/components/Footer";

const Team = () => {
  const teamMembers = [
    {
      name: "Hunter",
      image: hunterImage,
      role: "Designer & Driver & Builder",
      bio: "Hi, my name is Hunter, a homeschooled Sophomore in high school attending classes at Western Nevada College pursuing a degree in Machine Tool Technology. I specialize in organization, designing in Fusion 360, business, building, and a little programming. I go to all events that I can go to, and I help anywhere that I am needed. I love FIRST because it has taught me so much, especially about using Fusion 360 for designing robot parts and seeing them come to life with my 3D printer. The best part is the friendships I have made and the opportunity to interact with the other teams and compete with them. I would love to be a Designer or a Manufacturing Engineer someday."
    },
    {
      name: "Tucker",
      image: tuckerImage,
      role: "Designer & Builder",
      bio: "Hi! My name is Tucker. I'm a junior in high school, and this is my second season with the team. I'm super pumped- its going to be a great season with the team. Me and my 3D printer continue to be besties. We've had our highs and lows, but true friendship is forever. I'm studying to go into electrical engineering at Western Nevada College! I'm a contrarian; But if you say so, then I don't."
    },
    {
      name: "Aiden",
      image: aidenImage,
      role: "Software Developer",
      bio: "Hi! I'm Aiden I'm a Senior at Virginia City High School and am also studying for a degree in electrical engineering at Western Nevada College this is my third year on the team and I'm very hyped for this season. I love software development and programming and am always up for a challenge recently I've taken intrest in cars and love fixing them. I'm so excited for this season and am so proud of how much I've learned"
    },
    {
      name: "William",
      image: williamImage,
      role: "Builder & Designer",
      bio: "I'm William, I joined the team in 2023. I am a sophomore in high school, and I am looking forward to learning about more robotics. So far, I have learned a lot about things like 3D printing, building, designing, and planning. Last year I learned a lot about the design process of designing a working robot. I am hoping we will design a cool robot this year."
    },
    {
      name: "Aaron",
      image: aaronImage,
      role: "IT & Hardware & Builder",
      bio: "Hey there! I'm Aaron, and I'm excited to be joining VC Silver Circuits this year (2026 Season). I specialize in Information Technology, computer repairs, building, software development, and networking. I've always loved working with technology even when it's fixing a computer, writing code, or building robots and computers from the ground up. Before joining VC Silver Circuits, I was part of URSA Major, where I gained a ton of experience in robotics and teamwork. I'm looking forward to bringing my skills to the team, learning even more about robotics, and challenging new challenges alongside my teammates. I'm excited to contribute wherever I can and grow this season!"
    }
  ];

  const coaches = [
    {
      name: "Coach Michelle",
      role: "Head Coach",
      bio: "Hello! My name is Michelle. This will be my sixth season coaching this team. Becoming a robotics coach was never on my bucket list, but over the years, it has become a way of life for my family and I. I cherish the friendships that I have made and enjoy seeing the \"ah-ha\" moments these kids have had over the years. I love the values the FIRST program teaches and the knowledge the kids have gained. When I am not coaching this team, I am running the office side of my husband's and my business or homeschooling my children. I enjoy all things outdoors: from hiking, paddleboarding, and snowmobiling to dirt bike riding. I am always game for an adventure."
    },
    {
      name: "Mentor Coen",
      role: "Technical Mentor",
      bio: "Hello! I'm Coen, a mentor of the VC Silver Circuits. Having recently graduated high school and subsequently graduated from the team, I have shifted my focus to helping the new and existing team members succeed in the program. I am aiming for a degree in mechanical engineering at UNR and hope to find a carrier with 3d design. this will be my 8th year with the program having done a single year of First Lego League with the VC Silver Bricks and 6 years of FIRST Tech Challenge. I help team members with 3d modeling in Autodesk Fusion 360 and with robot design strategy. I'm excited to see how the team does this upcoming season."
    }
  ];

  return (
    <div className="min-h-screen pt-20 tech-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 circuit-bg p-12 rounded-2xl">
          <h1 className="text-5xl font-bold mb-6 gradient-text">Meet Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These are our passionate individuals who make up the VC Silver Circuits, each bringing unique skills and dedication to our robotics journey.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                image={member.image}
                bio={member.bio}
                role={member.role}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Coaches & Mentors</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coaches.map((coach, index) => (
              <div
                key={index}
                className="bg-gradient-tech border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-tech tech-fade-in"
              >
                <h3 className="text-2xl font-bold text-primary mb-2">{coach.name}</h3>
                <p className="text-accent font-medium uppercase tracking-wide text-sm mb-4">
                  {coach.role}
                </p>
                <p className="text-muted-foreground leading-relaxed">{coach.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Team;