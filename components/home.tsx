"use client";
import Link from "next/link";
import { Calendar, Heart, Lightbulb, MapPin, PiggyBank } from "lucide-react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import heroAnimation from "../public/home/hero.json";
import Image from "next/image";
import datePlanning from "../public/home/datePlanning.png";
import aiHelp from "../public/home/aiHelp.png";
import dateCreation from "../public/home/dateCreation.png";
import budget from "../public/home/budget.png";

export default function HomeComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container mx-auto flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Heart className="h-6 w-6 text-rose-500" />
            <Link href="#home">RendezVous</Link>
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
                href="/plan-a-date" 
                className="px-3 py-2 text-sm font-medium hover:text-primary"
              >
                Plan A Date
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
      <main id="home" className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-rose-100 to-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_650px]">
              <div className="flex flex-col justify-center space-y-5">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Plan Perfect Dates Together
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    RendezVous helps couples plan, budget, and enjoy memorable
                    dates with shared calendars and AI-powered suggestions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/signup">Start Planning</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#features">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                {/* Hero Image Placeholder */}
                <div className="aspect-video w-full overflow-hidden rounded-xl">
                  <div className="flex h-full items-center justify-center">
                    <Lottie animationData={heroAnimation} loop={true} className="w-full"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Features
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to plan the perfect date experience
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-20">
              {/* Feature 1: Shared Calendar */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-100 text-rose-500">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">
                    Shared Calendar for Date Planning
                  </h3>
                  <p className="text-muted-foreground">
                    Create and share a calendar to plan dates together. Add
                    events with time, location, and set reminders so you never
                    forget your special plans.
                  </p>
                  <ul className="ml-6 list-disc text-muted-foreground">
                    <li>Collaborative calendar for couples</li>
                    <li>Event details with time and location</li>
                    <li>Integrated notifications and reminders</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center">
                {/* Calendar Feature Image Placeholder */}
                <Image
                  src={datePlanning}
                  alt={"Calendar Feature Image Placeholder"}
                  className="max-h-96 max-w-96"
                />
              </div>

              {/* Feature 2: AI-Powered Date Ideas */}
              <div className="flex items-center justify-center order-4 lg:order-3">
                {/* AI Feature Image Placeholder */}
                <Image
                  src={aiHelp}
                  alt={"AI Feature Image Placeholder"}
                  className="max-h-96 max-w-96"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4 order-3 lg:order-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-500">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">
                    AI-Powered Date Idea Generation
                  </h3>
                  <p className="text-muted-foreground">
                    Enter your preferences and let our AI generate personalized
                    date ideas tailored to your interests, budget, and location.
                  </p>
                  <ul className="ml-6 list-disc text-muted-foreground">
                    <li>Personalized suggestions based on preferences</li>
                    <li>
                      Filter by activity type: Restaurant, Activity, Sports,
                      Travel
                    </li>
                    <li>
                      Budget-friendly options that match your spending plan
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 3: Date Creation */}
              <div className="flex flex-col justify-center space-y-4 order-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 text-sky-500">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Date Creation</h3>
                  <p className="text-muted-foreground">
                    Plan every detail of your date with our comprehensive
                    planning tools. Calculate travel times, estimate costs, and
                    organize activities.
                  </p>
                  <ul className="ml-6 list-disc text-muted-foreground">
                    <li>
                      Detailed date planning with locations and activities
                    </li>
                    <li>Travel time estimates using Google Maps integration</li>
                    <li>
                      Cost calculations including transportation and activities
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center order-6">
                {/* Planning Feature Image Placeholder */}
                <Image
                  src={dateCreation}
                  alt={"Planning Feature Image Placeholder"}
                  className="max-h-96 max-w-96"
                />
              </div>

              {/* Feature 4: Budget Tracking */}
              <div className="flex items-center justify-center order-8 lg:order-7">
                {/* Budget Feature Image Placeholder */}
                <Image
                  src={budget}
                  alt={"Budget Feature Image Placeholder"}
                  className="max-h-96 max-w-96"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4 order-7 lg:order-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-500">
                  <PiggyBank className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Smart Budget Tracking</h3>
                  <p className="text-muted-foreground">
                    Keep track of your date expenses and plan future dates
                    within your budget. Our smart budgeting tool suggests date
                    ideas based on your spending range.
                  </p>
                  <ul className="ml-6 list-disc text-muted-foreground">
                    <li>Track date expenses and set budget limits</li>
                    <li>Get date suggestions within your budget</li>
                    <li>Analyze spending patterns for better planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/30"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Plan your perfect date in just a few simple steps
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Create Your Profile</h3>
                <p className="text-muted-foreground">
                  Set up your profile with preferences, interests, and budget
                  range to get personalized date suggestions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">Plan Your Date</h3>
                <p className="text-muted-foreground">
                  Use AI suggestions or create your own date plan with our
                  comprehensive planning tools.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Enjoy & Remember</h3>
                <p className="text-muted-foreground">
                  Get reminders, track your budget, and save memories from your
                  special dates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-rose-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Plan Your Perfect Date?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of couples who are creating memorable
                  experiences with RendezVous.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Button size="lg" className="w-full" asChild>
                  <Link href="/signup">Get Started for Free</Link>
                </Button>
                <p className="text-xs text-muted-foreground">
                  No credit card required. Start planning today.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Heart className="h-6 w-6 text-rose-500" />
            <p className="text-center text-sm leading-loose md:text-left">
              &copy; {new Date().getFullYear()} RendezVous. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/terms"
              className="text-sm underline underline-offset-4"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm underline underline-offset-4"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
