/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { LearningJourney } from './components/LearningJourney';
import { Education } from './components/Education';
import { DevelopmentJourney } from './components/DevelopmentJourney';
import { CodingProfiles } from './components/CodingProfiles';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomizerModal } from './components/CustomizerModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { FloatingTools } from './components/FloatingTools';

export default function App() {
  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <LearningJourney />
          <Education />
          <DevelopmentJourney />
          <CodingProfiles />
          <Contact />
        </main>
        <Footer />

        {/* Interactive Modals and Floating Tools */}
        <CustomizerModal />
        <ProjectDetailModal />
        <FloatingTools />
      </div>
    </PortfolioProvider>
  );
}
