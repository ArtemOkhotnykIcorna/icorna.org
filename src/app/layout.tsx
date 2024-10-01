
import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import "./globals.css";

const Footer = dynamic(() => import('@/components/Footer/Footer'), { ssr: false });

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
        <title>{'IcornA'}</title>
        <meta name="description" content='Update your business now!' />
        <meta name="keywords" content={keywordsContent || ""} />
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
        <Footer />
      </body>
    </html>
  );
}
