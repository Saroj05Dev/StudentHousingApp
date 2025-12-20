import "./globals.css";

export const metadata = {
  title: "Student Housing App",
  description: "Student Housing Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
