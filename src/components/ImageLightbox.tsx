import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, Compass } from 'lucide-react';
import { GalleryPlate } from '../data/celestialObjects';

interface ImageLightboxProps {
  plates: GalleryPlate[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  plates,
  activeIndex,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && plates.length > 1) {
        onNavigate((activeIndex + 1) % plates.length);
      } else if (e.key === 'ArrowLeft' && plates.length > 1) {
        onNavigate((activeIndex - 1 + plates.length) % plates.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, plates.length, onClose, onNavigate]);

  if (activeIndex === null || !plates[activeIndex]) return null;

  const current = plates[activeIndex];
  const isAuthenticNasa = current.provenance.toLowerCase().includes('authentic') ||
    current.provenance.toLowerCase().includes('public domain');

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Astronomical Plate Inspector: ${current.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-void/95 p-4 md:p-8 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-6xl flex-col bg-midnight hairline-box overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Inspector Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 hairline-b bg-void/70">
          <div className="flex flex-wrap items-center gap-3">
            <span className="tabular-data text-xs text-amber">
              PLATE {String(activeIndex + 1).padStart(2, '0')} / {String(plates.length).padStart(2, '0')}
            </span>
            <span className="text-regolith">·</span>
            <span className="text-sm font-medium text-starlight">{current.title}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close plate inspector"
            className="inline-flex min-h-[36px] min-w-[36px] items-center justify-center text-silver hover:text-amber transition-colors"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Main Image Viewport */}
        <div className="relative flex flex-1 items-center justify-center bg-void overflow-hidden min-h-[300px] max-h-[66vh]">
          <img
            src={current.src}
            alt={current.title}
            className="max-h-[65vh] w-auto max-w-full object-contain"
          />

          {plates.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => onNavigate((activeIndex - 1 + plates.length) % plates.length)}
                aria-label="Previous plate"
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center bg-void/85 hairline-box text-starlight hover:border-amber hover:text-amber transition-colors"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate((activeIndex + 1) % plates.length)}
                aria-label="Next plate"
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center bg-void/85 hairline-box text-starlight hover:border-amber hover:text-amber transition-colors"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        {/* Metadata & Provenance Footer */}
        <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-12 hairline-t bg-midnight">
          <div className="md:col-span-7">
            <p className="text-sm text-silver leading-relaxed">{current.caption}</p>
          </div>
          <div className="md:col-span-5 flex flex-col justify-between gap-2 md:border-l md:border-silver/15 md:pl-5">
            <div className="flex items-start gap-2 text-xs">
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-amber mt-0.5" aria-hidden="true" />
              <div>
                <span className="text-regolith block">Provenance Classification:</span>
                <span className={isAuthenticNasa ? 'text-cyan font-medium' : 'text-amber font-medium'}>
                  {current.provenance}
                </span>
              </div>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <Compass className="h-3.5 w-3.5 shrink-0 text-violet-soft mt-0.5" aria-hidden="true" />
              <div>
                <span className="text-regolith block">Spectral / Optical Basis:</span>
                <span className="tabular-data text-silver">{current.wavelengthBasis}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

