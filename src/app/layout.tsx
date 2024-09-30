import type { Metadata } from "next";
import "./globals.css";
import dynamic from 'next/dynamic';

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
    "how to create your own game on the TON network",
    "blockchain developers",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Проверяем, есть ли keywords и не равны ли они null или undefined
  const keywordsContent =
    metadata.keywords && Array.isArray(metadata.keywords)
      ? metadata.keywords.join(", ")
      : metadata.keywords || undefined;

  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description || ''}/>
        {keywordsContent && <meta name="keywords" content={keywordsContent} />}
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
