import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "PneumoAI - Advanced Pediatric Pneumonia Detection",
  description:
    "AI-powered chest X-ray analysis for pediatric pneumonia detection. Professional medical diagnostic tool for healthcare providers.",
  generator: "PneumoAI",
  keywords: ["pneumonia", "pediatric", "AI", "medical", "diagnosis", "chest x-ray", "healthcare"],
  authors: [{ name: "PneumoAI Medical Team" }],
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tf.min.js" async></script>
        <script
          src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@latest/dist/teachablemachine-image.min.js"
          async
        ></script>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} medical-gradient min-h-screen`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
