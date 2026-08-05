import React from 'react'

interface MarqueeProps {
  items: string[]
  reverse?: boolean
  pauseOnHover?: boolean
  className?: string
}

export const Marquee: React.FC<MarqueeProps> = ({ 
  items, 
  reverse = false, 
  pauseOnHover = true,
  className = "" 
}) => {
  return (
    <div className={`flex w-full overflow-x-hidden border-y-base border-bw bg-white py-3 ${className}`}>
      <div className={`flex min-w-full shrink-0 items-center justify-around gap-12 ${reverse ? 'flex-row-reverse animate-marquee-reverse' : 'animate-marquee'} ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}>
        {items.map((item, index) => (
          <span key={index} className="text-xl font-heading uppercase tracking-tighter text-bw whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
      {/* Duplicate for seamless loop */}
      <div className={`flex min-w-full shrink-0 items-center justify-around gap-12 ${reverse ? 'flex-row-reverse animate-marquee-reverse' : 'animate-marquee'} ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`} aria-hidden="true">
        {items.map((item, index) => (
          <span key={`dup-${index}`} className="text-xl font-heading uppercase tracking-tighter text-bw whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
