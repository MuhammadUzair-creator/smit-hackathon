import "./globals.css";

export const metadata = {
  title: "Ecommerce",
  description: "Generated by Abdullah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
