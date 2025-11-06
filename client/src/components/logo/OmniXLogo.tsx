import React from 'react';

interface OmniXLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const OmniXLogo: React.FC<OmniXLogoProps> = ({ 
  className = "", 
  size = 'md',
  showTagline = true
}) => {
  // Size map for the logo
  const sizeMap = {
    sm: "h-10 w-auto",
    md: "h-16 w-auto",
    lg: "h-24 w-auto"
  };

  return (
    <div className={`inline-flex items-center ${className}`}>
      <svg
        className={`${sizeMap[size]}`}
        viewBox="0 0 280 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main background with gradient effect */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#B91C1C" />
          </linearGradient>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F3F4F6" />
          </linearGradient>
        </defs>
        
        {/* Background rectangle with rounded corners */}
        <rect x="5" y="5" width="270" height="80" rx="8" fill="url(#bgGradient)" />
        
        {/* Subtle border */}
        <rect x="5" y="5" width="270" height="80" rx="8" stroke="#991B1B" strokeWidth="1" fill="none" />
        
        {/* Crisis response wave pattern overlay */}
        <path 
          d="M5 50C5 50 30 35 60 50C90 65 120 40 150 50C180 60 210 35 240 50C260 60 275 45 275 45V85H5V50Z" 
          fill="#1A1A1A" 
          opacity="0.8"
        />
        
        {/* OMNI text - improved typography */}
        <g fill="url(#textGradient)" fontFamily="Arial Black, sans-serif" fontSize="22" fontWeight="900">
          {/* O */}
          <path d="M25 25C25 20 30 15 40 15C50 15 55 20 55 25V55C55 60 50 65 40 65C30 65 25 60 25 55V25ZM40 25C35 25 35 25 35 30V50C35 55 35 55 40 55C45 55 45 55 45 50V30C45 25 45 25 40 25Z" />
          
          {/* M */}
          <path d="M65 15H75L85 45L95 15H105V65H95V35L87 55H83L75 35V65H65V15Z" />
          
          {/* N */}
          <path d="M115 15H125L140 45V15H150V65H140L125 35V65H115V15Z" />
          
          {/* I */}
          <path d="M160 15H170V65H160V15Z" />
        </g>
        
        {/* Enhanced separator with crisis symbol */}
        <g fill="white">
          <rect x="185" y="25" width="3" height="40" fill="white" />
          <circle cx="186.5" cy="45" r="8" fill="none" stroke="white" strokeWidth="2" />
          <path d="M182 45L191 45M186.5 40.5L186.5 49.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </g>
        
        {/* X symbol - enhanced design */}
        <g fill="url(#textGradient)" fontFamily="Arial Black, sans-serif" fontSize="28" fontWeight="900">
          <path d="M210 15H225L235 35L245 15H260L245 40L260 65H245L235 45L225 65H210L225 40L210 15Z" />
        </g>
        
        {/* Tagline text - improved positioning and styling */}
        {showTagline && (
          <text
            x="140"
            y="78"
            fontFamily="Arial, sans-serif"
            fontSize="9"
            fill="white"
            textAnchor="middle"
            dominantBaseline="middle"
            fontWeight="600"
            letterSpacing="1px"
          >
            CRISIS RESPONSE • A DIVISION OF OMNIPUBLIC
          </text>
        )}
      </svg>
    </div>
  );
};

export default OmniXLogo;