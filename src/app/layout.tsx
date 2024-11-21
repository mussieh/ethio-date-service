import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ethio-Date Service",
    description: "An API point for gregorian to ethiopian calendar conversion",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
