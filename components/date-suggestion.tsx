'use client'
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Sparkles } from "lucide-react";
import budgetData from "@/public/budget/budgetData";

export default function DateSuggestion() {
  const [budgetRange, setBudgetRange] = useState<number[]>([50, 150]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Date Suggestions Based on Your Budget</CardTitle>
        <CardDescription>
          Personalized date ideas that fit within your spending range
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="budget-range">Your Budget Range</Label>
            <div className="flex items-center gap-4">
              <Slider
                id="budget-range"
                value={budgetRange}
                onValueChange={(value) => setBudgetRange(value)}
                max={500}
                step={10}
                className="flex-1"
              />
              <div className="w-24 text-center text-sm">
                ${budgetRange[0]} - ${budgetRange[1]}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="activity-type">Activity Type</Label>
            <Select defaultValue="all">
              <SelectTrigger id="activity-type">
                <SelectValue placeholder="Select activity type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Activities</SelectItem>
                <SelectItem value="restaurant">Restaurant</SelectItem>
                <SelectItem value="activity">Activity</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="travel">Travel</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 pt-4">
            {budgetData.suggestions.map((suggestion) => (
              <Card
                key={suggestion.id}
                className="overflow-hidden border-rose-200 hover:border-rose-300"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 bg-muted/30 flex items-center justify-center p-4">
                    <div className="text-center">
                      <Badge className="mb-2 bg-rose-100 text-rose-800 hover:bg-rose-200">
                        {suggestion.category}
                      </Badge>
                      <div className="text-lg font-semibold">
                        {suggestion.budget}
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:w-2/3">
                    <h3 className="font-semibold text-lg">
                      {suggestion.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {suggestion.description}
                    </p>
                    <div className="flex gap-2 mt-3">
                      <Button
                        size="sm"
                        variant="default"
                        className="bg-rose-500 hover:bg-rose-600"
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        Plan This Date
                      </Button>
                      <Button size="sm" variant="outline">
                        <Sparkles className="mr-2 h-4 w-4" />
                        More Like This
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-rose-500 hover:bg-rose-600">
          <Sparkles className="mr-2 h-4 w-4" />
          Generate More Suggestions
        </Button>
      </CardFooter>
    </Card>
  );
}
