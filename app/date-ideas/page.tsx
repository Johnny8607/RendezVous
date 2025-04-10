"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  UtensilsCrossed,
  Palette,
  Dumbbell,
  Plane,
  HeartIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ideas } from "@/public/date-ideas/ideasData";


const categoryIcons = {
  Restaurant: UtensilsCrossed,
  Activity: Palette,
  Sports: Dumbbell,
  Travel: Plane,
};

export default function DateIdeasPage() {
  const [likedIdeas, setLikedIdeas] = useState<{ [key: string]: boolean }>({});
  const [selectedCategory, setSelectedCategory] = useState<
    keyof typeof ideas | null
  >(null);
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container mx-auto flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Heart className="h-6 w-6 text-rose-500" />
            <Link href="/">RendezVous</Link>
          </div>
          <div className="flex items-center justify-end space-x-4">
            <nav className="flex items-center space-x-3 transition-all">
              <Link
                href="/date-ideas"
                className="px-3 py-2 text-sm font-medium hover:text-primary"
              >
                Date Ideas
              </Link>

              <Link
                href="/availabilities"
                className="px-3 py-2 text-sm font-medium hover:text-primary"
              >
                Calendar
              </Link>
              <Link
                href="/budgeting"
                className="px-3 py-2 text-sm font-medium hover:text-primary"
              >
                Budget Tracker
              </Link>
              <Link
                href="#features"
                className="px-3 py-2 text-sm font-medium hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="px-3 py-2 text-sm font-medium hover:text-primary"
              >
                How It Works
              </Link>
              <Button asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-rose-100 to-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6 mb-12">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Date Ideas
              </h1>
              <p className="max-w-2xl text-muted-foreground md:text-xl">
                Nobody likes hearing “So… what do you wanna do tonight?” <br />
                Pick a category and plan something awesome instead.
              </p>
            </div>

            <div className="relative min-h-[400px]">
              {selectedCategory === null && !isAnimating && (
                <div className="animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Object.keys(ideas).map((category) => {
                      const Icon =
                        categoryIcons[category as keyof typeof categoryIcons];
                      return (
                        <Card
                          key={category}
                          onClick={() => {
                            setIsAnimating(true);
                            setTimeout(() => {
                              setSelectedCategory(
                                category as keyof typeof ideas
                              );
                              setIsAnimating(false);
                            }, 300);
                          }}
                          className="cursor-pointer text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                          <CardHeader>
                            <div className="flex items-center justify-center gap-3">
                              {Icon && (
                                <Icon className="h-6 w-6 text-rose-500" />
                              )}
                              <CardTitle className="text-2xl">
                                {category}
                              </CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="relative w-full h-60">
                              <Image
                                src={`/date-ideas/${category.toLowerCase()}.jpg`}
                                alt={`${category} illustration`}
                                fill
                                className="rounded-md object-cover"
                              />
                            </div>
                            <Button variant="outline" size="sm">
                              Explore {category}
                            </Button>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              )}

              {selectedCategory !== null && !isAnimating && (
                <div className="animate-fade-in">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-semibold mb-2">
                      Top 10 {selectedCategory} Date Ideas
                    </h2>

                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsAnimating(true);
                        setTimeout(() => {
                          setSelectedCategory(null);
                          setIsAnimating(false);
                        }, 300);
                      }}
                    >
                      ← Back to Categories
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ideas[selectedCategory].map((idea, index) => (
                      <Card
                        key={index}
                        className="transition-shadow hover:shadow-md"
                      >
                        <CardHeader className="flex flex-row items-center justify-between gap-2">
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground">
                              {index + 1}
                            </div>
                            <CardTitle className="text-base font-medium">
                              {idea}
                            </CardTitle>
                          </div>
                          <button
                            onClick={() =>
                              setLikedIdeas((prev) => ({
                                ...prev,
                                [`${selectedCategory}-${index}`]:
                                  !prev[`${selectedCategory}-${index}`],
                              }))
                            }
                            className="text-rose-500 hover:scale-110 transition-transform"
                            aria-label="Like this idea"
                          >
                            {likedIdeas[`${selectedCategory}-${index}`] ? (
                              <HeartIcon
                                fill="currentColor"
                                className="w-5 h-5"
                              />
                            ) : (
                              <Heart className="w-5 h-5" />
                            )}
                          </button>
                        </CardHeader>

                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Category: {selectedCategory}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
