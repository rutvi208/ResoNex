import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ResoNex - Actionable Business Insights",
  description: "Lead with Data. Accelerate with Automation.",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
