"use client";

import EarthquakeMap from "@/components/map/EarthquakeMap";

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-hidden">
      <EarthquakeMap />
    </main>
  );
}