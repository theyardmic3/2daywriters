
import { ContactSection } from "@/components/layout/sections/contact";
import { Carousel,  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious, } from "@/components/ui/carousel";
import { AboutHero } from "@/components/layout/sections/AboutHero";
import { GeneralCatalog } from "@/components/layout/sections/GeneralCatalog"; // Import the Catalog component
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import {BookCarousel} from "@/components/layout/sections/BookCarousel";
import { FeaturesSection } from "@/components/layout/sections/features";

export const metadata = {
  title: "2day Writers",
  description: "Sing the Moment.",
  openGraph: {
    type: "website",
    url: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "2day Writers",
    description: "Sing the Moment.",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "2day Writers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "2day Writers",
    description: "Sing the Moment.",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <AboutHero />

     <BookCarousel />
      <FeaturesSection />

      <GeneralCatalog />
      <ContactSection />
    </>
  );
}
