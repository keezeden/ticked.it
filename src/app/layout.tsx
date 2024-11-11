import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { DataProvider } from "@/components/data-provider";
import { StateStorage } from "@/components/state-storage";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { RouteToggle } from "@/components/ui/route-toggle";
import { SoundSelect } from "@/components/ui/sound-select";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ticked.it",
  description: "A simple task manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <DataProvider>
            <StateStorage />
            <div className="flex flex-col items-center justify-center w-screen h-screen p-4 lg:p-16 lg:pt-8">
              <div className="flex items-center w-full">
                <div className="flex gap-2">
                  <h1 className="font-bold lowercase font-mono">Ticked.it</h1>
                </div>
                <div className="flex-1" />
                <div className="flex gap-2">
                  <SoundSelect />
                  <RouteToggle />
                  <ThemeToggle />
                </div>
              </div>
              <div className="w-full lg:w-1/2 h-full mt-4">{children}</div>
            </div>
          </DataProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
