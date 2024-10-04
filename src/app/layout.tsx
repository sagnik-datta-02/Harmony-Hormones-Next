import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
import { Analytics } from "@vercel/analytics/react";

// Importing Roboto font
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

// Metadata for the website
export const metadata: Metadata = {
  title: "Harmony Hormones | Your Menstrual Health Companion",
  description: "Harmony Hormones is a comprehensive platform empowering women’s menstrual health. Featuring Flow AI, a smart period tracker that provides personalized care plans and cycle insights, and Maitri AI, a medical practitioner specializing in menstrual health, Harmony Hormones offers guidance on periods, symptoms, PCOS/PCOD, and more. Your trusted source for menstrual health and well-being.",
  keywords: "Harmony Hormones, Maitri AI, Flow AI, Menstrual Health, Period Tracker, PCOS, PCOD, Menstruation, Women's Health, Period Symptoms, Menstrual Solutions, Cycle Care, Menstrual Myths",
  authors: [
    {
      name: "Harmony Hormones Team",
    }
  ],
  openGraph: {
    title: "Harmony Hormones | Your Menstrual Health Companion",
    description: "Explore Harmony Hormones with Flow AI for personalized period tracking and Maitri AI for expert menstrual health advice.",
    url: "https://www.harmonyhormones.com", // Replace with your URL
    type: "website",
    
  },
};

// RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const COPILOT_CLOUD_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_COPILOT_CLOUD_PUBLIC_API_KEY;

  return (
    <html lang="en">
      <body className={roboto.variable}>
        <CopilotKit publicApiKey={COPILOT_CLOUD_PUBLIC_API_KEY}>
          <Analytics />
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </CopilotKit>
      </body>
    </html>
  );
}
