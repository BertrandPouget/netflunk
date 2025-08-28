// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Netflunk",
  icons: {
    icon: "/favicon.ico", // o /favicon.png
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
