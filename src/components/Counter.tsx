import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  title: string;
  icon: React.ReactNode;
}

export function Counter({ end, suffix = '', duration = 2000, title, icon }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function: easeOutQuart
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOut * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return (
    <div ref={ref} className="flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-4">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-black text-[#002060] mb-2 tracking-tighter">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-gray-500 font-bold uppercase tracking-widest text-center">
        {title}
      </div>
    </div>
  );
}
