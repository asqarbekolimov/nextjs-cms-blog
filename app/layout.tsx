import type { Metadata } from "next";
import { Inter, Crete_Round, Work_Sans } from "next/font/google";
import "./globals.css";
import { ChildProps } from "@/types";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });
const createRound = Crete_Round({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-createRound",
});

const workSan = Work_Sans({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-workSans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.asqarbekdev.uz"),
  title: "Blog dasturlashga oid maqolalar",
  description:
    "Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.",
  authors: [{ name: "Asqarbek Olimov", url: "https://asqarbekdev.uz" }],
  icons: { icon: "/favicon.png" },
  keywords:
    "asqarbek olimov, asqardev, dasturlash kurslari, dasturlashga oid darslar, reactjs uzbek tilida, vuejs uzbek tilida, redux uzbek tilida, sammi, sammi academy, bepul dasturlash, rezyume yozish, portfolio, sammi javascript, sammi raqamli avlod, javascript, reactjs, vuejs, javascript darslari, reactjs darslari, vuejs darslari, dasturlash darslari, o'zbek tilida dasturlash, reactjs o'zbek tilida, reactjs darslari o'zbek tilida, javascript darslari, javascript darslari o'zbek tilida, dasturash darslari o'zbek tilida, dasturlashni o'rganish, dasturlash, IT loyihalar o'zbek tilida",
  openGraph: {
    title: "Blog dasturlashga oid maqolalar",
    description:
      "Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.",
    type: "website",
    url: "https://blog.asqarbekdev.uz",
    locale: "en_EN",
    images: "https://media.graphassets.com/kXL006lyRnW46IKTHdHs",
    countryName: "Uzbekistan",
    siteName: "Blog",
    emails: "info@asqarbekdev.uz",
  },
};

export default function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body
        className={`${createRound.variable} ${workSan.variable} overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
