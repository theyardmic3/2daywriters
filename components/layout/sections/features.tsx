import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProFeature {
  YES = 1,
  NO = 0,
}
interface FeaturesProps {
  title: string;
  pro: ProFeature;
  description: string;
}
const featureList: FeaturesProps[] = [
  {
    title: "Critique & Feedback Hub",
    description:
      "Effortlessly upload your drafts and receive inline, structured critiques. Track revisions with version history and earn credits for thoughtful feedback.",
    pro: 1,
  },
  {
    title: "Vibrant Community Forums",
    description:
      "Dive into genre-based discussions, ask and answer craft questions, and connect directly via private messages—with full search support.",
    pro: 0,
  },
  {
    title: "Personal Author Profiles",
    description:
      "Build your author identity with bios, publishing interests, portfolio showcases, and social links.",
    pro: 0,
  },
  {
    title: "Craft Resources & Prompts",
    description:
      "Boost your skills with expert blog posts, curated links, and daily writing prompts and exercises.",
    pro: 0,
  },
  {
    title: "Contests & Challenges",
    description:
      "Compete in timed writing contests, track word counts, and stay motivated with community-driven challenges.",
    pro: 0,
  },
  {
    title: "Workshops & Event Calendar",
    description:
      "Discover live workshops, Q&As, and virtual meetups—with RSVP, registration tools, and integrated video links.",
    pro: 0,
  },
];

export const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="container w-[100%] mt-2 py-24 my-6 -mb-32 sm:py-32"
    >
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Sets Us Apart?
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Develop and Improve Your Writing Craft through consistent practice,
        insightful feedback, and shared knowledge.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-90%] mx-auto">
        {featureList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="h-full bg-muted/60 dark:bg-card border border-orange-600 rounded-lg shadow-none transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProFeature.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
