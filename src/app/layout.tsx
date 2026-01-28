import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://talytale.app"),
  title: "TalyTale - Track. Tell. Transform.",
  description: "We tally the numbers that drive your business and tell the stories that win customers. Mobile apps, websites, and automation — built by one expert team.",
  keywords: ["mobile app development", "website development", "n8n automation", "digital agency", "iOS development", "Android development", "workflow automation"],
  openGraph: {
    title: "TalyTale - Track. Tell. Transform.",
    description: "We tally the numbers that drive your business and tell the stories that win customers. Apps, websites, and automation from one expert team.",
    url: "https://talytale.app",
    siteName: "TalyTale",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TalyTale - Track. Tell. Transform.",
    description: "We tally the numbers that drive your business and tell the stories that win customers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <Script
          id="clickrank-ai"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var clickRankAi = document.createElement("script");
              clickRankAi.src = "https://js.clickrank.ai/seo/31a771e9-3971-43b2-b543-140fa90de120/script?" + new Date().getTime();
              clickRankAi.async = true;
              document.head.appendChild(clickRankAi);
            `,
          }}
        />
        <Script
          id="site-behaviour-heatmap"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  if(window.location && window.location.search && window.location.search.indexOf('capture-sitebehaviour-heatmap') !== -1) {
                    sessionStorage.setItem('capture-sitebehaviour-heatmap', '_');
                  }
                  var sbSiteSecret = '7dd7e136-734c-4354-9a99-3e298d5d9f6f';
                  window.sitebehaviourTrackingSecret = sbSiteSecret;
                  var scriptElement = document.createElement('script');
                  scriptElement.defer = true;
                  scriptElement.id = 'site-behaviour-script-v2';
                  scriptElement.src = 'https://sitebehaviour-cdn.fra1.cdn.digitaloceanspaces.com/index.min.js?sitebehaviour-secret=' + sbSiteSecret;
                  document.head.appendChild(scriptElement);
                } catch (e) { console.error(e) }
              })()
            `,
          }}
        />
      </body>
    </html>
  );
}
