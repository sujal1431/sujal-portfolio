import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { PortfolioItem, MediaType } from '../types';

interface ModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ item, isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  // Helper to detect YouTube links
  const getYouTubeId = (url: string | undefined) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const youtubeId = item.category !== MediaType.POSTER ? getYouTubeId(item.videoUrl) : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Content Container - Fixed Sidebar Layout */}
      <div className="relative z-10 w-full max-w-7xl h-[85vh] md:h-[90vh] bg-brand-gray rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10">
        
        {/* Media Side (Flexible Width) */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden">
           {/* Close Button Mobile */}
           <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors md:hidden backdrop-blur-sm"
            >
                <X size={20} />
            </button>

           {/* Blurred Background for Posters (Prevents black bars) */}
           {item.category === MediaType.POSTER && (
             <div className="absolute inset-0 z-0">
               <img 
                 src={item.thumbnailUrl} 
                 className="w-full h-full object-cover blur-3xl opacity-30 scale-110" 
                 alt=""
                 aria-hidden="true"
               />
             </div>
           )}

           {/* Main Media Content */}
           <div className="relative z-10 w-full h-full flex items-center justify-center p-0 md:p-8">
             {item.category === MediaType.POSTER ? (
                <img 
                  src={item.thumbnailUrl} 
                  alt={item.title} 
                  className="w-full h-full object-contain shadow-2xl drop-shadow-2xl"
                />
              ) : (
                 <div className={`relative w-full h-full flex items-center justify-center ${item.category === MediaType.REEL ? 'max-w-sm' : 'max-w-4xl'}`}>
                    {youtubeId ? (
                       <iframe
                          className="w-full aspect-video rounded-lg shadow-xl"
                          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                          title={item.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                       />
                    ) : (
                        <video 
                            src={item.videoUrl} 
                            controls 
                            autoPlay 
                            className={`w-full max-h-full rounded-lg shadow-xl ${item.category === MediaType.REEL ? 'object-contain aspect-[9/16] bg-black' : 'object-contain bg-black'}`}
                        >
                            Your browser does not support the video tag.
                        </video>
                    )}
                 </div>
              )}
           </div>
        </div>

        {/* Info Side (Fixed Width on Desktop) */}
        <div className="w-full md:w-[400px] shrink-0 bg-brand-gray border-t md:border-t-0 md:border-l border-white/5 flex flex-col h-[40vh] md:h-auto">
            {/* Header Desktop */}
            <div className="hidden md:flex justify-end p-4 pb-0">
                 <button 
                    onClick={onClose}
                    className="p-2 hover:bg-white/10 rounded-full text-brand-muted hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1 flex flex-col gap-6">
                <div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-brand-accent bg-brand-accent/10 rounded-full mb-3 border border-brand-accent/20">
                        {item.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-brand-muted leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                </div>

                <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 opacity-70">Tools & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                        {item.toolsUsed.map((tool) => (
                            <span key={tool} className="px-3 py-1.5 text-xs md:text-sm bg-white/5 border border-white/10 rounded-md text-gray-300 hover:bg-white/10 transition-colors">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer CTA */}
            <div className="p-6 md:p-8 pt-0 mt-auto bg-brand-gray border-t border-white/5 md:border-none sticky bottom-0">
                <a 
                  href="mailto:devendra.sujal31@gmail.com"
                  className="block w-full py-3 md:py-4 bg-white text-black font-bold text-center rounded-xl hover:bg-gray-200 transition-colors shadow-lg shadow-white/5"
                >
                    Inquire About This Project
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};