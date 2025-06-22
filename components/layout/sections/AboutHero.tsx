"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export const AboutHero = () => {
  const { theme } = useTheme();
  return (
    <section className="container -mt-16 w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-xs py-2">
            <Badge>About us</Badge> Who We Are
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D247BF] to-primary">
            Your Story, Polished Daily
          </h1>

     <p className="font-regular   max-w-screen-sm mx-auto text-lg smallPhone:text-xs mediumPhone:text-sm largePhone:text-base smallTablet:text-lg largeTablet:text-xl laptop:text-2xl desktop:text-3xl desktop:w-full hdr:w-full hdr:text-4xl">
  {`Fostering a vibrant writer community, offering powerful feedback tools, providing expert resources, and inspiring consistent writing through contests and challenges.`}
</p>

        
        </div>
      </div>
    </section>
  );
};
