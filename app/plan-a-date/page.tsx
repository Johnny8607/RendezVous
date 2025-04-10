"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const possibleDates = [
  {
    time: "Friday 7:00 PM",
    idea: "Dinner at a cozy Italian restaurant",
    image: "/date-ideas/restaurant.jpg",
  },
  {
    time: "Saturday 2:00 PM",
    idea: "Bike ride in the park and board games",
    image: "/date-ideas/activity.jpg",
  },
  {
    time: "Sunday 11:00 AM",
    idea: "Go rock climbing and grab smoothies afterward",
    image: "/date-ideas/sports.jpg",
  },
];

export default function PlanADate() {
  const [suggestion, setSuggestion] = React.useState<{
    time: string;
    idea: string;
    image: string;
  } | null>(null);

  const generateSuggestion = () => {
    const random = Math.floor(Math.random() * possibleDates.length);
    setSuggestion(possibleDates[random]);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 flex items-start justify-center px-4 py-12">
        <Card className="max-w-xl w-full">
          <CardHeader>
            <CardTitle>Plan A Date</CardTitle>
            <p className="text-muted-foreground text-sm">
              Get a suggested date time and idea based on availability
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              onClick={generateSuggestion}
              className="bg-rose-500 hover:bg-rose-600"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Date Plan
            </Button>
            {suggestion && (
              <div className="bg-muted p-4 rounded-xl space-y-4">
                <div className="relative h-75 w-2/3 mx-auto">
                  <Image
                    src={suggestion.image}
                    alt="Date idea visual"
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                <p className="font-semibold text-lg">{suggestion.time}</p>
                <p className="text-muted-foreground">{suggestion.idea}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
