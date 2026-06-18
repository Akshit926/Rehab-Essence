
import logoImg from '../assets/logo.png';

// Declare LeafIcon component outside of Logo component for the icon-only variant
const LeafIcon = ({ svgClass }) => (
  <svg 
    className={`${svgClass} text-[#00A8A8] transition-transform duration-300 hover:scale-110`} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path 
      d="M20 70C20 40 45 20 70 20C70 45 50 70 20 70Z" 
      fill="currentColor" 
      fillOpacity="0.85"
    />
    <path 
      d="M38 78C38 58 55 45 72 45C72 61 58 78 38 78Z" 
      fill="#B3E5FC" 
      fillOpacity="0.9"
    />
    <circle cx="20" cy="70" r="6" fill="#0046A5" />
  </svg>
);

export default function Logo({ variant = 'horizontal', className = '', size = 'md' }) {
  // Size presets mapping to widths. 
  // Per guidelines: Minimum digital size is 200px wide. 
  // We use padding to ensure the required clear space (around the height of 'R') is maintained.
  const widthClasses = {
    sm: 'w-[200px]',
    md: 'w-[220px]',
    lg: 'w-[280px]'
  };

  const currentWidth = widthClasses[size] || widthClasses.md;

  if (variant === 'icon') {
    const iconSizes = {
      sm: 'h-8 w-8',
      md: 'h-12 w-12',
      lg: 'h-20 w-20'
    };
    return <LeafIcon svgClass={iconSizes[size] || iconSizes.md} />;
  }

  // Render the official logo.png for all other variants
  return (
    <div className={`inline-flex items-center justify-center p-2 ${className}`}>
      <img 
        src={logoImg} 
        alt="Dr. Pallavi Bhat's Rehab Essence" 
        className={`${currentWidth} h-auto object-contain`}
      />
    </div>
  );
}
