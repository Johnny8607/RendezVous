"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import AvailabilityPlanner from "@/components/AvailabilityPlanner";

export default function AvailabilityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* ✅ Main content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <AvailabilityPlanner />
        </div>
      </main>

      {/* ✅ Optional: Footer if you want it too (same as home) */}
    </div>
  );
}
