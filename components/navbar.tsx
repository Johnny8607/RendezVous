"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
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
  );
}
