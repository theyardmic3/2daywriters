import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { MdBook, MdPrint } from "react-icons/md"; // Importing Material Design icons
import { GiPaintBrush } from "react-icons/gi"; // Importing Game Icons for Paint Brush

interface ServicesProps {
  icon: string;
  title: string;
  description: string;
}

const serviceList: ServicesProps[] = [
  {
    icon: "Book",
    title: "Manuscript Feedback",
    description:
      "Providing thoughtful, structured critiques to help polish your drafts and improve your storytelling.",
  },
  {
    icon: "MessageSquare",
    title: "Writer Community",
    description:
      "Fostering meaningful connections through genre forums, discussions, and direct messaging.",
  },
  {
    icon: "Target",
    title: "Writing Challenges",
    description:
      "Keeping you motivated with regular prompts, word goals, and themed contests.",
  },
  {
    icon: "Lightbulb",
    title: "Learning Resources",
    description:
      "Sharing expert insights, curated guides, and writing exercises to boost your craft.",
  },
  {
    icon: "Calendar",
    title: "Live Events",
    description:
      "Hosting workshops, Q&As, and virtual meetups to grow your skills and network.",
  },
  {
    icon: "User",
    title: "Author Portfolios",
    description:
      "Helping you showcase your work and journey with personalized bios and writing samples.",
  },
];


export const ServicesSection= () => {
  return (
    <section id="Services" className="container w-[100%] mt-6 py-24 my-6 -mb-32 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        What We Do
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-6">
        Here For
      </h2>

      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
        {serviceList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border border-orange-600 rounded-lg shadow-none transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50"> {/* Added hover effects */}
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
