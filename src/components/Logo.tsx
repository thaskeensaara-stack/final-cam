import React from 'react';
import logoImg from '../assets/images/mp_photo_guide_logo_1785324153032.jpg';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'monochrome';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

/**
 * MP PHOTO GUIDE Official Logo Component
 * Renders the official client logo featuring the camera silhouette,
 * multi-colored rainbow aperture, MP center badge, and Photo Guide typography.
 */
export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  showText = true,
}) => {
  const dimensions = {
    sm: { img: 'h-9', textMain: 'text-base', textSub: 'text-[9px]' },
    md: { img: 'h-11', textMain: 'text-xl', textSub: 'text-[10px]' },
    lg: { img: 'h-14', textMain: 'text-2xl', textSub: 'text-[11px]' },
  }[size];

  const textColor = variant === 'dark' ? 'text-white' : 'text-slate-950';
  const subTextColor = variant === 'dark' ? 'text-slate-400' : 'text-slate-500';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Official Badge Image */}
      <img
        src={logoImg}
        alt="MP Photo Guide Logo"
        referrerPolicy="no-referrer"
        className={`${dimensions.img} w-auto object-contain rounded-full shadow-2xs border border-gray-100/80 bg-white`}
      />

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col justify-center leading-tight">
          <div className="flex items-center gap-1">
            <span className={`font-black tracking-tight ${textColor} ${dimensions.textMain}`}>
              MP PHOTO
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600" />
          </div>
          <span className={`font-bold tracking-[0.2em] uppercase ${subTextColor} ${dimensions.textSub}`}>
            GUIDE
          </span>
        </div>
      )}
    </div>
  );
};

