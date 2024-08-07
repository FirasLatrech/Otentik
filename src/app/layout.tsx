import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import localFont from 'next/font/local'

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });
const manrope = localFont({
    src:"./../../public/font/Block Berthold Regular.ttf",
    variable: '--font-bold',
   })
export const metadata: Metadata = {
	title: "Otentik",
	description: "Otentik Niort",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en"  className="h-full" >
			<body className={`${font.className} ${manrope.variable} `} style={{height:"100%"}}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange>
					<SupabaseProvider>
						<UserProvider>{children}</UserProvider>
					</SupabaseProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
