import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "BookFlow | The Modern Scheduling Engine for Service Businesses",
  description: "BookFlow is a high-performance SaaS booking platform and behavioral conversion engine. Seamlessly manage appointments, providers, schedules, and revenue for clinics, salons, fitness studios, and consulting practices.",
  keywords: ["SaaS", "Booking System", "Scheduling Engine", "Service Businesses", "Appointment Management", "BookFlow", "Clinic Booking", "Salon Scheduling"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="light h-full antialiased">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        </head>
        <body className="min-h-full flex flex-col bg-surface text-on-surface font-body-md pt-16">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
