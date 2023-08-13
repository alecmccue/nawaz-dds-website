import "./globals.css";
import Providers from "@/theme/theme-provider";

export const metadata = {
  title:"Family And Cosmetic Dentistry",
  content:"Family And Cosmetic Dentistry is your Trusted Local Dentist in Sterling, VA. At our cozy and modern dental practice, we prioritize your oral health and comfort above all else.",
  keywords: ["Dentist", "Healthcare", "Virginia", "Local"],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
