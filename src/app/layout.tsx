import type { Metadata } from "next";
import { Toaster } from "sonner";
import { CursorFollower } from "./components/CursorFollower";
import "../styles/index.css";

export const metadata: Metadata = {
    title: "Daniel - Full Stack Developer",
    description: "Personal portfolio of Daniel, a full-stack developer specializing in scalable digital products.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth">
            <body className="min-h-screen bg-white text-[#1a1a1a] antialiased">
                {/* Custom cursor follower */}
                <CursorFollower />

                {/* Toast notifications */}
                <Toaster
                    position="top-right"
                    toastOptions={{
                        style: {
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(0, 0, 0, 0.05)',
                            borderRadius: '16px',
                            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                        },
                    }}
                />

                {children}
            </body>
        </html>
    );
}
