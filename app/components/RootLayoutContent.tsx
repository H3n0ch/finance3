'use client';

import { useLanguage } from "../i18n/LanguageContext";

export default function RootLayoutContent({
  children,
  geistSans,
  geistMono,
}: {
  children: React.ReactNode;
  geistSans: { variable: string };
  geistMono: { variable: string };
}) {
  const { language } = useLanguage();
  return (
    <html lang={language}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
