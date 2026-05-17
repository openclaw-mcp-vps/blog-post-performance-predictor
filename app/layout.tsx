import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog Post Performance Predictor",
  description: "Predict blog post success before publishing. AI-powered analysis of title, content structure, and keyword density to forecast social shares, traffic, and engagement."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f3e9e0a6-79bd-4593-a8a6-5c7a8f152fb8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
