import React, { useState, useRef } from 'react';
import { Play, Image as ImageIcon, Film, ArrowRight, Instagram, ImageOff } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../constants';
import { MediaType, PortfolioItem } from '../types';
import { Modal } from './Modal';

export const PortfolioGrid: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const posters = PORTFOLIO_ITEMS.filter(item => item.category === MediaType.POSTER);
  const videos = PORTFOLIO_ITEMS.filter(item => item.category === MediaType.VIDEO);
  const reels = PORTFOLIO_ITEMS.filter(item => item.category === MediaType.REEL);

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <div id="portfolio" className="bg-brand-dark">
      {/* Posters Section - STRICT GRID LAYOUT */}
      <PortfolioSection 
        title="Canva Posters & Graphics"
        description="Visual identity, event flyers, and social media posts designed to capture attention."
        items={posters}
        type={MediaType.POSTER}
        onItemClick={handleItemClick}
        bgColor="bg-brand-gray/30"
      />

      {/* Videos Section - GRID LAYOUT */}
      <PortfolioSection 
        title="Video Productions"
        description="Long-form content, vlogs, and cinematic edits produced with Premiere Pro and DaVinci Resolve."
        items={videos}
        type={MediaType.VIDEO}
        onItemClick={handleItemClick}
        bgColor="bg-black"
      />

      {/* Reels Section - GRID LAYOUT */}
      <PortfolioSection 
        title="Reels & Short Form"
        description="Engaging, vertical video content optimized for TikTok, Instagram Reels, and Shorts."
        items={reels}
        type={MediaType.REEL}
        onItemClick={handleItemClick}
        bgColor="bg-brand-gray/30"
        actionElement={
          <a 
            href="https://www.instagram.com/sujal_.devendra" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-pink-500/30 text-pink-400 hover:text-pink-300 transition-colors text-sm font-semibold"
          >
            <Instagram size={16} />
            <span>@sujal_.devendra</span>
          </a>
        }
      />

      <Modal item={selectedItem} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

interface PortfolioSectionProps {
  title: string;
  description: string;
  items: PortfolioItem[];
  type: MediaType;
  onItemClick: (item: PortfolioItem) => void;
  bgColor: string;
  actionElement?: React.ReactNode;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ title, description, items, type, onItemClick, bgColor, actionElement }) => {
  // Config based on type
  const isPoster = type === MediaType.POSTER;
  const isReel = type === MediaType.REEL;

  return (
    <section className={`py-20 px-4 ${bgColor} border-t border-white/5`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-brand-accent mb-2">
              {type === MediaType.POSTER && <ImageIcon size={20} />}
              {type === MediaType.VIDEO && <Film size={20} />}
              {type === MediaType.REEL && <Play size={20} />}
              <span className="text-sm font-bold uppercase tracking-wider">{type}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">{title}</h2>
            <p className="text-brand-muted mt-2 max-w-2xl">{description}</p>
          </div>
          <div className="hidden md:block">
            {actionElement}
          </div>
          {/* Mobile view action element */}
          <div className="md:hidden">
             {actionElement}
          </div>
        </div>

        {isPoster ? (
          // Grid Layout for Posters with Uniform Aspect Ratio for alignment
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <PortfolioCard 
                key={item.id} 
                item={item} 
                onClick={onItemClick} 
                type={type}
              />
            ))}
          </div>
        ) : (
          // Standard Grid for Videos/Reels
          <div className={`grid ${isReel ? "grid-cols-2 md:grid-cols-4 gap-6" : "grid-cols-1 md:grid-cols-2 gap-8"}`}>
            {items.map((item) => (
              <PortfolioCard 
                key={item.id} 
                item={item} 
                onClick={onItemClick} 
                type={type}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const PortfolioCard: React.FC<{ item: PortfolioItem, onClick: (item: PortfolioItem) => void, type: MediaType, className?: string }> = ({ item, onClick, type, className = "" }) => {
  const [imgError, setImgError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Hover logic for videos/reels
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => {
        // Auto-play might be blocked by browser policies if not muted, but we are muted.
        console.log("Play prevented:", e);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to start
    }
  };

  // Determine Aspect Ratio
  // Posters: Fixed vertical ratio (4:5) to align grid perfectly. 
  // Reels: Fixed 9:16.
  // Videos: Fixed 16:9.
  
  let aspectRatioClass = "";
  if (type === MediaType.REEL) aspectRatioClass = "aspect-[9/16]";
  else if (type === MediaType.VIDEO) aspectRatioClass = "aspect-video";
  else if (type === MediaType.POSTER) aspectRatioClass = "aspect-[4/5]"; 

  const isVideoContent = (type === MediaType.VIDEO || type === MediaType.REEL) && item.videoUrl;

  return (
    <div 
      onClick={() => onClick(item)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-xl overflow-hidden cursor-pointer bg-brand-gray border border-white/5 transition-all duration-300 hover:border-brand-accent/50 hover:shadow-2xl hover:shadow-brand-accent/10 hover:-translate-y-1 ${aspectRatioClass} ${className}`}
    >
      {isVideoContent ? (
        <video
          ref={videoRef}
          src={item.videoUrl}
          muted
          loop
          playsInline
          preload="metadata" // Loads the first frame as poster
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        // Image Fallback (Posters)
        !imgError ? (
          <div className="relative w-full h-full overflow-hidden bg-brand-dark">
             {/* 1. Blurred Background Layer (fills the card so alignment is perfect) */}
            <img 
               src={item.thumbnailUrl} 
               alt=""
               aria-hidden="true"
               className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-50 scale-125"
            />
            {/* 2. Main Image (contained so full poster is visible) */}
            <img 
              src={item.thumbnailUrl} 
              alt={item.title}
              onError={() => setImgError(true)}
              className="relative z-10 w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-brand-gray text-brand-muted p-4 text-center">
            <ImageOff size={32} className="mb-2 opacity-50" />
            <span className="text-xs">Image Pending</span>
          </div>
        )
      )}
      
      {/* Overlay - Z-20 ensures it's on top of images. Gradient darkened for text readability. */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-black/50 to-transparent opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-lg font-bold text-white leading-tight mb-1 drop-shadow-lg line-clamp-2">{item.title}</h3>
          
          <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 mt-2">
             <p className="text-xs text-brand-muted line-clamp-1 mb-2">{item.toolsUsed.join(', ')}</p>
             <div className="flex items-center gap-2 text-xs font-semibold text-brand-accent">
                <span>View Project</span>
                <ArrowRight size={14} />
             </div>
          </div>
        </div>
      </div>

      {/* Icon Overlay for Video Types */}
      {(type === MediaType.VIDEO || type === MediaType.REEL) && (
        <div className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center pointer-events-none border border-white/10">
          <Play size={12} fill="white" className="text-white ml-0.5" />
        </div>
      )}
    </div>
  );
}