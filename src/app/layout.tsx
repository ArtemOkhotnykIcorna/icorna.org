
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "IcornA",
  description: "Update your business now!",
  keywords: [
    "IcornA",
    "web3",
    "web development",
    "Blockchain",
    "UI/UX",
    "Automation",
    "Optimization",
    "web design",
    "ton developer",
    "accounting automation",
    "cost optimization",
    "blockchain developers",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const keywordsContent = Array.isArray(metadata.keywords)
    ? metadata.keywords.join(", ")
    : metadata.keywords;

  return (
    <html lang="en">
      
      <head>
      <title>{String(metadata.title ?? 'IcornA')}</title>
        <meta name="description" content={metadata.description || "Update your business now!"} />
        <meta name="keywords" content={keywordsContent || ""} />
        <link rel="icon" href="./favicon.ico" />

        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TV7R0P6EDQ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TV7R0P6EDQ');
            `,
          }}
        />
      </head>
      <body>
        {children}
        
      </body>
    </html>
  );
}
