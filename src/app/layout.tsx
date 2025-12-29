import "./globals.css";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <html>
      <body className="bg-black text-white min-h-screen">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}