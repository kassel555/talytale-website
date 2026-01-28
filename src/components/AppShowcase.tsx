"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const apps = [
  {
    name: "Daily Halo",
    tagline: "Daily Wellness Check-ins",
    description: "Track your daily wellness with beautiful check-ins. Build streaks and stay connected.",
    icon: "/app-icons/dailyhalo.png",
    status: "review" as const,
  },
  {
    name: "Daily Hello",
    tagline: "Simple Daily Check-ins",
    description: "A gentle daily reminder to check in with yourself and loved ones.",
    icon: "/app-icons/dailyhello.png",
    status: "live" as const,
  },
  {
    name: "Time2Take",
    tagline: "Smart Medication Reminders",
    description: "Never miss a dose. Beautiful, customizable medication reminders.",
    icon: "/app-icons/time2take.png",
    status: "live" as const,
  },
  {
    name: "SillyPilly",
    tagline: "Fun Medication Tracking",
    description: "Medication reminders with personality and friendly notifications.",
    icon: "/app-icons/sillypilly.png",
    status: "live" as const,
  },
  {
    name: "Monitor My Network",
    tagline: "Network Health at a Glance",
    description: "Keep tabs on your network performance from your pocket.",
    icon: "/app-icons/networkmonitor.png",
    status: "preparing" as const,
  },
  {
    name: "Trainy Brainy",
    tagline: "Brain Training Games",
    description: "Keep your mind sharp with engaging brain training exercises.",
    icon: "/app-icons/trainybrainy.png",
    status: "live" as const,
  },
  {
    name: "Zoom Link Creator",
    tagline: "One-Tap Zoom Meetings",
    description: "Create and share Zoom meeting links instantly.",
    icon: "/app-icons/zoomlink.png",
    status: "preparing" as const,
  },
  {
    name: "PillyMe",
    tagline: "Personal Pill Companion",
    description: "Your personal medication companion. Never forget your pills.",
    icon: "/app-icons/pillyme.png",
    status: "preparing" as const,
  },
];

const statusColors = {
  live: "bg-green-500/20 text-green-400 border-green-500/30",
  review: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  preparing: "bg-slate-500/20 text-slate-300 border-slate-500/30",
};

const statusLabels = {
  live: "Live",
  review: "In Review",
  preparing: "Coming Soon",
};

export default function AppShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % apps.length);
        setTimeout(() => setIsAnimating(false), 60);
      }, 360);
    }, 4800);

    return () => clearInterval(interval);
  }, []);

  const currentApp = apps[currentIndex];

  return (
    <div className="relative w-[300px] h-[620px] bg-secondary rounded-[50px] p-3 shadow-2xl">
      <div className="w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-[42px] relative overflow-hidden flex flex-col items-center">
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-secondary rounded-[16px] z-10" />

        {/* App Display */}
        <div className="mt-20 flex flex-col items-center gap-5 px-5 w-full">
          {/* App Icon */}
          <div
            className={`w-[120px] h-[120px] rounded-[28px] overflow-hidden shadow-2xl transition-all duration-700 ease-out ${
              isAnimating ? "opacity-0 scale-75" : "opacity-100 scale-100"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" }}
          >
            <Image
              src={currentApp.icon}
              alt={currentApp.name}
              width={120}
              height={120}
              className="w-full h-full object-cover"
            />
          </div>

          {/* App Info */}
          <div
            className={`text-center transition-all duration-500 ease-out delay-100 ${
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
              {currentApp.name}
            </h3>
            <p className="text-white/90 font-medium text-sm mb-3">
              {currentApp.tagline}
            </p>
            <p className="text-white/70 text-xs leading-relaxed max-w-[220px] mx-auto">
              {currentApp.description}
            </p>

            {/* Status Badge */}
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wide mt-4 border ${
                statusColors[currentApp.status]
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  currentApp.status === "live"
                    ? "bg-green-400"
                    : currentApp.status === "review"
                    ? "bg-amber-400"
                    : "bg-slate-400"
                }`}
              />
              {statusLabels[currentApp.status]}
            </div>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5">
          {apps.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentIndex(i);
                  setTimeout(() => setIsAnimating(false), 60);
                }, 360);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-5 bg-white"
                  : "w-1.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-1 bg-white/30 rounded-full" />
      </div>

      {/* Floating label */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
        {currentIndex + 1} of {apps.length} Apps Built
      </div>
    </div>
  );
}
