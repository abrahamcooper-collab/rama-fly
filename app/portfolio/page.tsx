"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { business } from "../data/siteData";
import { portfolioProjects, ProjectData, PhaseData } from "../data/portfolioData";

export default function PortfolioPage() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    portfolioProjects[0]?.id || ""
  );
  const [selectedPhaseName, setSelectedPhaseName] = useState<string>("All");
  const [activePhoto, setActivePhoto] = useState<{
    url: string;
    phase: string;
    index: number;
    total: number;
  } | null>(null);

  const activeProject = useMemo(() => {
    return (
      portfolioProjects.find((p) => p.id === selectedProjectId) ||
      portfolioProjects[0]
    );
  }, [selectedProjectId]);

  // Reset selected phase when project changes
  useEffect(() => {
    setSelectedPhaseName("All");
  }, [selectedProjectId]);

  // All photos for the current view
  const currentPhotos = useMemo(() => {
    if (!activeProject) return [];
    if (selectedPhaseName === "All") {
      return activeProject.phases.flatMap((ph) =>
        ph.photos.map((url) => ({ url, phase: ph.name }))
      );
    }
    const ph = activeProject.phases.find((p) => p.name === selectedPhaseName);
    return ph ? ph.photos.map((url) => ({ url, phase: ph.name })) : [];
  }, [activeProject, selectedPhaseName]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activePhoto) return;
      if (e.key === "Escape") {
        setActivePhoto(null);
      } else if (e.key === "ArrowRight") {
        const nextIndex = (activePhoto.index + 1) % activePhoto.total;
        const nextItem = currentPhotos[nextIndex];
        if (nextItem) {
          setActivePhoto({
            url: nextItem.url,
            phase: nextItem.phase,
            index: nextIndex,
            total: activePhoto.total,
          });
        }
      } else if (e.key === "ArrowLeft") {
        const prevIndex =
          (activePhoto.index - 1 + activePhoto.total) % activePhoto.total;
        const prevItem = currentPhotos[prevIndex];
        if (prevItem) {
          setActivePhoto({
            url: prevItem.url,
            phase: prevItem.phase,
            index: prevIndex,
            total: activePhoto.total,
          });
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhoto, currentPhotos]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-900 selection:bg-red-600 selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-slate-900 text-white pt-32 pb-20 px-4 overflow-hidden border-b border-gray-800">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/15 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-red-500/30 text-red-400 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-6 backdrop-blur-md shadow-lg shadow-red-950/40">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Company Renovation Portfolio
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight mb-6">
            Master Craftsmanship &amp; Complete <span className="bg-gradient-to-r from-red-500 via-red-400 to-amber-400 bg-clip-text text-transparent">Project Journeys</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Explore our real-world NYC and Westchester apartment gut renovations. Browse through every milestone phase — from demolition, framing, electrical, and plumbing to custom millwork, waterproofing, and final luxury completed photos.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-gray-800/80 text-left">
            <div className="bg-gray-900/60 border border-gray-800 p-4 rounded-xl backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">5 Major</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-medium mt-1">Featured Projects</div>
            </div>
            <div className="bg-gray-900/60 border border-gray-800 p-4 rounded-xl backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-red-500">2,000+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-medium mt-1">Documentation Photos</div>
            </div>
            <div className="bg-gray-900/60 border border-gray-800 p-4 rounded-xl backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">15</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-medium mt-1">Construction Phases</div>
            </div>
            <div className="bg-gray-900/60 border border-gray-800 p-4 rounded-xl backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">100%</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-medium mt-1">Transparent Quality</div>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED SECTION: "Projects" */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight uppercase mb-4">
            Projects
          </h2>
          <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Select a project below to inspect the full renovation lifecycle. Each project displays authentic pictures organized directly by construction phases.
          </p>
        </div>

        {/* Project Selector Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {portfolioProjects.map((project) => {
            const isSelected = project.id === selectedProjectId;
            return (
              <button
                key={project.id}
                onClick={() => {
                  setSelectedProjectId(project.id);
                  const el = document.getElementById("project-showcase");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className={`group relative text-left p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? "bg-white border-red-600 shadow-xl shadow-red-600/10 ring-2 ring-red-600/20 scale-[1.02]"
                    : "bg-white/80 hover:bg-white border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Active Pill Tag */}
                {isSelected && (
                  <span className="absolute -top-3 right-4 bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm">
                    Active
                  </span>
                )}

                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    <svg className="w-3.5 h-3.5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Project
                  </div>
                  
                  {/* Address Display (Excluding house number) */}
                  <h3 className={`text-base font-bold transition-colors line-clamp-2 ${
                    isSelected ? "text-red-600" : "text-gray-900 group-hover:text-red-600"
                  }`}>
                    {project.displayAddress}
                  </h3>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="font-medium text-gray-700">{project.totalPhotos} Photos</span>
                  <span className="bg-gray-100 group-hover:bg-red-50 text-gray-600 group-hover:text-red-600 px-2 py-1 rounded-md font-semibold transition-colors">
                    {project.phases.length} Phases
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Project Showcase Container */}
        {activeProject && (
          <div id="project-showcase" className="bg-white rounded-3xl border border-gray-200/80 shadow-xl overflow-hidden scroll-mt-28">
            {/* Project Header Banner */}
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-8 sm:p-10 border-b border-gray-800 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-3">
                    Selected Project
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                    {activeProject.displayAddress}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-2 flex items-center gap-2 font-mono">
                    <span>Folder Address:</span>
                    <span className="bg-gray-800 text-gray-300 px-2.5 py-0.5 rounded border border-gray-700">
                      {activeProject.folderName}
                    </span>
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="bg-gray-800/80 border border-gray-700/80 px-4 py-2.5 rounded-xl text-center">
                    <div className="text-xl font-bold text-white">{activeProject.totalPhotos}</div>
                    <div className="text-[11px] text-gray-400 uppercase tracking-wider">Total Pictures</div>
                  </div>
                  <div className="bg-gray-800/80 border border-gray-700/80 px-4 py-2.5 rounded-xl text-center">
                    <div className="text-xl font-bold text-amber-400">{activeProject.phases.length}</div>
                    <div className="text-[11px] text-gray-400 uppercase tracking-wider">Completed Phases</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Construction Phase Filter Tabs */}
            <div className="p-6 bg-slate-50 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Filter By Renovation Phase:
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  Showing {currentPhotos.length} photos
                </span>
              </div>

              {/* Scrollable Phase Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300">
                {/* All Phases Button */}
                <button
                  onClick={() => setSelectedPhaseName("All")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                    selectedPhaseName === "All"
                      ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <span>All Phases</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                    selectedPhaseName === "All" ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
                  }`}>
                    {activeProject.totalPhotos}
                  </span>
                </button>

                {/* Individual Phase Buttons */}
                {activeProject.phases.map((phase) => {
                  const isActive = selectedPhaseName === phase.name;
                  return (
                    <button
                      key={phase.name}
                      onClick={() => setSelectedPhaseName(phase.name)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                        isActive
                          ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                          : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                      }`}
                    >
                      <span>{phase.name}</span>
                      <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                        isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
                      }`}>
                        {phase.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Photo Gallery Grid */}
            <div className="p-6 sm:p-8">
              {currentPhotos.length === 0 ? (
                <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                  <p className="text-gray-500 font-medium">No photos available for this phase.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {currentPhotos.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() =>
                        setActivePhoto({
                          url: item.url,
                          phase: item.phase,
                          index: idx,
                          total: currentPhotos.length,
                        })
                      }
                      className="group relative aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden cursor-pointer border border-gray-200/80 hover:border-red-500 shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      <img
                        src={item.url}
                        alt={`${activeProject.displayAddress} - ${item.phase}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback if image fails to render
                          (e.target as HTMLElement).style.display = "none";
                        }}
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-end">
                        <span className="text-[11px] font-bold text-white uppercase tracking-wider bg-red-600/90 px-2 py-0.5 rounded self-start shadow-sm mb-1">
                          {item.phase}
                        </span>
                        <span className="text-[10px] text-gray-300 font-medium flex items-center gap-1">
                          <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Click to enlarge
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </section>

      {/* Fullscreen Interactive Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-50"
            aria-label="Close photo view"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Arrow */}
          <button
            onClick={() => {
              const prevIndex =
                (activePhoto.index - 1 + activePhoto.total) % activePhoto.total;
              const prevItem = currentPhotos[prevIndex];
              if (prevItem) {
                setActivePhoto({
                  url: prevItem.url,
                  phase: prevItem.phase,
                  index: prevIndex,
                  total: activePhoto.total,
                });
              }
            }}
            className="absolute left-4 sm:left-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
            aria-label="Previous photo"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => {
              const nextIndex = (activePhoto.index + 1) % activePhoto.total;
              const nextItem = currentPhotos[nextIndex];
              if (nextItem) {
                setActivePhoto({
                  url: nextItem.url,
                  phase: nextItem.phase,
                  index: nextIndex,
                  total: activePhoto.total,
                });
              }
            }}
            className="absolute right-4 sm:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
            aria-label="Next photo"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Main Image & Caption */}
          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center relative z-10">
            <img
              src={activePhoto.url}
              alt={`${activeProject?.displayAddress} - ${activePhoto.phase}`}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
            
            <div className="mt-4 text-center">
              <div className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                {activePhoto.phase}
              </div>
              <p className="text-white text-base font-semibold">
                {activeProject?.displayAddress}
              </p>
              <p className="text-gray-400 text-xs mt-1 font-mono">
                Photo {activePhoto.index + 1} of {activePhoto.total}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Contact CTA Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-red-500 font-bold uppercase tracking-widest text-xs">
                Start Your Renovation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-6 leading-tight">
                Ready to Transform Your NYC or Westchester Apartment?
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                From initial board approval and structural framing to flawless custom millwork and tile finishing, {business.name} delivers exceptional results on time and on budget.
              </p>
              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center font-bold">✓</div>
                  <span>Free in-person estimate &amp; architectural plan review</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center font-bold">✓</div>
                  <span>Licensed, insured &amp; Co-op / Condo board experienced</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center font-bold">✓</div>
                  <span>Full project timeline tracking with photo documentation</span>
                </div>
              </div>
            </div>

            <div className="bg-white text-gray-900 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Request a Custom Consultation
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Fill out the form below and Sam will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
