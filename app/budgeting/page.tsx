"use client";

import type React from "react";
import Navbar from "@/components/navbar";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  DollarSign,
  Heart,
  History,
  PiggyBank,
  Plus,
  Sparkles,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import toast from "react-hot-toast";
import initialbudgetData from "@/public/budget/budgetData";
import BudgetOverview from "@/components/budget-overview";

export default function Budget() {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();

  // Form state
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState<Date | undefined>(new Date());
  const [expenseCategory, setExpenseCategory] = useState("restaurant");

  // Budget data state
  const [budgetData, setBudgetData] = useState(initialbudgetData);

  // Handle form submission
  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form inputs
    if (!expenseTitle.trim()) {
      toast.error("Please enter a title for the expense");
      return;
    }

    if (!expenseAmount || Number.parseFloat(expenseAmount) <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    if (!expenseDate) {
      toast.error("Please select a date");
      return;
    }

    // Format date
    const formattedDate = expenseDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    // Create new expense
    const newExpense = {
      id: Date.now(),
      date: formattedDate,
      title: expenseTitle,
      amount: Number.parseFloat(expenseAmount),
      category:
        expenseCategory.charAt(0).toUpperCase() + expenseCategory.slice(1),
    };

    // Update budget data
    const newSpent = budgetData.spent + newExpense.amount;
    const newRemaining = budgetData.monthlyBudget - newSpent;
    const newPercentSpent = (newSpent / budgetData.monthlyBudget) * 100;

    setBudgetData({
      ...budgetData,
      spent: newSpent,
      remaining: newRemaining,
      percentSpent: newPercentSpent,
      transactions: [newExpense, ...budgetData.transactions],
    });

    // Reset form
    setExpenseTitle("");
    setExpenseAmount("");
    setExpenseDate(new Date());
    setExpenseCategory("restaurant");

    // Show success message
    toast.success("Expense Added");
  };

  // Handle expense deletion
  const handleDeleteExpense = (id: number) => {
    // Find the expense to delete
    const expenseToDelete = budgetData.transactions.find((t) => t.id === id);

    if (!expenseToDelete) return;

    // Update budget data
    const newSpent = budgetData.spent - expenseToDelete.amount;
    const newRemaining = budgetData.monthlyBudget - newSpent;
    const newPercentSpent = (newSpent / budgetData.monthlyBudget) * 100;

    setBudgetData({
      ...budgetData,
      spent: newSpent,
      remaining: newRemaining,
      percentSpent: newPercentSpent,
      transactions: budgetData.transactions.filter((t) => t.id !== id),
    });

    // Show success message
    toast.success("Expense Deleted");
  };

  const [budgetRange, setBudgetRange] = useState<number[]>([50, 150]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-2 mb-8">
            <h1 className="text-3xl font-bold tracking-tight">
              Date Budget Tracker
            </h1>
            <p className="text-muted-foreground">
              Track your date expenses and get personalized date suggestions
              based on your budget.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-7 lg:grid-cols-12">
            {/* Budget Overview Section */}
            <div className="md:col-span-4 lg:col-span-8 space-y-6">
              <BudgetOverview />

              {/* Date Suggestions Section */}
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
            </div>

            {/* Sidebar - Calendar and Transactions */}
            <div className="md:col-span-3 lg:col-span-4 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Add Expense</CardTitle>
                  <CardDescription>Record your date expenses</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={handleAddExpense}>
                    <div className="space-y-2">
                      <Label htmlFor="date-title">Date Title</Label>
                      <Input
                        id="date-title"
                        placeholder="e.g., Dinner at Gyubee"
                        value={expenseTitle}
                        onChange={(e) => setExpenseTitle(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount ($)</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="amount"
                          type="number"
                          className="pl-8"
                          placeholder="0.00"
                          value={expenseAmount}
                          onChange={(e) => setExpenseAmount(e.target.value)}
                          min="0.01"
                          step="0.01"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <div className="border rounded-md p-3">
                        <CalendarComponent
                          mode="single"
                          selected={expenseDate}
                          onSelect={setExpenseDate}
                          className="mx-auto [&_.rdp-day_button:focus]:bg-rose-100 [&_.rdp-day_button.rdp-day_selected]:bg-rose-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select
                        value={expenseCategory}
                        onValueChange={setExpenseCategory}
                      >
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="restaurant">Restaurant</SelectItem>
                          <SelectItem value="activity">Activity</SelectItem>
                          <SelectItem value="sports">Sports</SelectItem>
                          <SelectItem value="travel">Travel</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-rose-500 hover:bg-rose-600"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Expense
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Expenses</CardTitle>
                  <CardDescription>Your date spending history</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="all">
                    <TabsList className="grid w-full grid-cols-4 bg-rose-50">
                      <TabsTrigger
                        value="all"
                        className="data-[state=active]:bg-rose-500 data-[state=active]:text-white"
                      >
                        All
                      </TabsTrigger>
                      <TabsTrigger
                        value="restaurant"
                        className="data-[state=active]:bg-rose-500 data-[state=active]:text-white"
                      >
                        Food
                      </TabsTrigger>
                      <TabsTrigger
                        value="activity"
                        className="data-[state=active]:bg-rose-500 data-[state=active]:text-white"
                      >
                        Activity
                      </TabsTrigger>
                      <TabsTrigger
                        value="travel"
                        className="data-[state=active]:bg-rose-500 data-[state=active]:text-white"
                      >
                        Travel
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="all" className="mt-4">
                      <div className="space-y-4">
                        {budgetData.transactions.map((transaction) => (
                          <div
                            key={transaction.id}
                            className="flex items-center justify-between py-2"
                          >
                            <div className="flex flex-col">
                              <span className="font-medium">
                                {transaction.title}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-muted-foreground">
                                  {transaction.date}
                                </span>
                                <Badge
                                  variant="outline"
                                  className="text-xs bg-rose-50 text-rose-700 border-rose-200"
                                >
                                  {transaction.category}
                                </Badge>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">
                                ${transaction.amount.toFixed(2)}
                              </span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() =>
                                  handleDeleteExpense(transaction.id)
                                }
                              >
                                <Trash2 className="h-4 w-4" />
                                <span className="sr-only">Delete</span>
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="restaurant" className="mt-4">
                      <div className="space-y-4">
                        {budgetData.transactions
                          .filter((t) => t.category === "Restaurant")
                          .map((transaction) => (
                            <div
                              key={transaction.id}
                              className="flex items-center justify-between py-2"
                            >
                              <div className="flex flex-col">
                                <span className="font-medium">
                                  {transaction.title}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {transaction.date}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">
                                  ${transaction.amount.toFixed(2)}
                                </span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() =>
                                    handleDeleteExpense(transaction.id)
                                  }
                                >
                                  <Trash2 className="h-4 w-4" />
                                  <span className="sr-only">Delete</span>
                                </Button>
                              </div>
                            </div>
                          ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="activity" className="mt-4">
                      <div className="space-y-4">
                        {budgetData.transactions
                          .filter((t) => t.category === "Activity")
                          .map((transaction) => (
                            <div
                              key={transaction.id}
                              className="flex items-center justify-between py-2"
                            >
                              <div className="flex flex-col">
                                <span className="font-medium">
                                  {transaction.title}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {transaction.date}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">
                                  ${transaction.amount.toFixed(2)}
                                </span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() =>
                                    handleDeleteExpense(transaction.id)
                                  }
                                >
                                  <Trash2 className="h-4 w-4" />
                                  <span className="sr-only">Delete</span>
                                </Button>
                              </div>
                            </div>
                          ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="travel" className="mt-4">
                      <div className="space-y-4">
                        {budgetData.transactions
                          .filter((t) => t.category === "Travel")
                          .map((transaction) => (
                            <div
                              key={transaction.id}
                              className="flex items-center justify-between py-2"
                            >
                              <div className="flex flex-col">
                                <span className="font-medium">
                                  {transaction.title}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {transaction.date}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">
                                  ${transaction.amount.toFixed(2)}
                                </span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() =>
                                    handleDeleteExpense(transaction.id)
                                  }
                                >
                                  <Trash2 className="h-4 w-4" />
                                  <span className="sr-only">Delete</span>
                                </Button>
                              </div>
                            </div>
                          ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
