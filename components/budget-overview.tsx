"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { PiggyBank } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import budgetData from "@/public/budget/budgetData";
import { Progress } from "./ui/progress";
import { Dialog } from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function BudgetOverview() {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();

  return (
    <Card className="pt-0">
      <CardHeader className="pb-3 pt-3 bg-rose-50">
        <div className="flex items-center justify-between">
          <CardTitle>Budget Overview</CardTitle>
          <Badge
            variant="outline"
            className="font-normal bg-rose-50 text-rose-700 border-rose-200"
          >
            {currentMonth} {currentYear}
          </Badge>
        </div>
        <CardDescription>
          Track your date spending and remaining budget
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Monthly Budget</span>
              <span className="text-sm font-medium">
                ${budgetData.monthlyBudget}
              </span>
            </div>
            <Progress
              value={budgetData.percentSpent}
              className="h-2 bg-rose-100"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-rose-500"></div>
                <span>Spent: ${budgetData.spent.toFixed(2)}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-muted"></div>
                <span>Remaining: ${budgetData.remaining.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Card className="col-span-1">
              <CardHeader className="p-3">
                <CardTitle className="text-sm font-medium">
                  Total Spent
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <div className="text-2xl font-bold">
                  ${budgetData.spent.toFixed(2)}
                </div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader className="p-3">
                <CardTitle className="text-sm font-medium">Remaining</CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <div className="text-2xl font-bold">
                  ${budgetData.remaining.toFixed(2)}
                </div>
                <p className="text-xs text-muted-foreground">Available</p>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader className="p-3">
                <CardTitle className="text-sm font-medium">
                  Avg. Per Date
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <div className="text-2xl font-bold">$80</div>
                <p className="text-xs text-muted-foreground">Last 4 dates</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full" variant="outline">
              <PiggyBank className="mr-2 h-4 w-4" />
              Adjust Budget
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit current budget</DialogTitle>
              <DialogDescription>
                Adjust your monthly budget for the current month.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  New Budget
                </Label>
                <Input
                  id="name"
                  placeholder="Enter new budget"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
