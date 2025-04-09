"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const hours = Array.from({ length: 12 }, (_, i) => i + 8); // 8 AM to 7 PM

export default function AvailabilityPlanner() {
  const [availability, setAvailability] = useState<Set<string>>(new Set());

  const toggleSlot = (day: string, hour: number) => {
    const key = `${day}-${hour}`;
    const newAvailability = new Set(availability);
    if (newAvailability.has(key)) {
      newAvailability.delete(key);
    } else {
      newAvailability.add(key);
    }
    setAvailability(newAvailability);
  };

  const handleSubmit = () => {
    const submitted = Array.from(availability);
    console.log("User availability:", submitted);
    alert("Availability submitted!");
    // Submit to backend here
  };

  return (
    <Card className="w-full mt-10">
      <CardHeader>
        <CardTitle>Share Your Availability</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] table-auto border-collapse">
            <thead>
              <tr>
                <th className="border p-2 text-left">Time</th>
                {days.map((day) => (
                  <th key={day} className="border p-2">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {hours.map((hour) => (
                <tr key={hour}>
                  <td className="border p-2 whitespace-nowrap">{hour}:00</td>
                  {days.map((day) => {
                    const key = `${day}-${hour}`;
                    const isSelected = availability.has(key);
                    return (
                      <td
                        key={key}
                        onClick={() => toggleSlot(day, hour)}
                        className={`border p-4 cursor-pointer text-center transition-all ${
                          isSelected ? "bg-rose-200 dark:bg-rose-600" : "bg-muted"
                        }`}
                      >
                        {isSelected ? "✓" : ""}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex justify-end">
          <Button onClick={handleSubmit}>Submit Availability</Button>
        </div>
      </CardContent>
    </Card>
  );
}
