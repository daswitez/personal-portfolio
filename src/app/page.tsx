"use client";

import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Impact } from './components/Impact';
import { Work } from './components/Work';
import { ProjectSpotlight } from './components/ProjectSpotlight';
import { Skills } from './components/Skills';
import { Process } from './components/Process';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function Home() {
    useEffect(() => {
        // Scroll restoration handling for Next.js (optional, as Next.js does some but this ensures smooth behavior matches the old App.tsx setup)
        document.documentElement.style.scrollBehavior = 'smooth';

        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
        <>
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main>
                <Hero />
                <Impact />
                <Work />
                <ProjectSpotlight />
                <Skills />
                <Process />
                <About />
                <Contact />
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
