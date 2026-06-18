import React, { useEffect, useRef } from 'react';
import backgroundVideo from '../../assets/3D_flight_through_technology_void_202605311826.mp4';

export default function ScrollVideo() {
  const videoRef = useRef(null);
  const targetTimeRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Prevent auto-playback so we can manually control currentTime
    video.pause();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      
      const progress = Math.min(1, Math.max(0, scrollTop / scrollHeight));
      if (video.duration && !isNaN(video.duration)) {
        targetTimeRef.current = progress * video.duration;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Force initial frame mapping
    handleScroll();

    let animationFrameId;
    const ease = 0.08; // Lerp damping coefficient (lower is smoother/slower)

    const updateVideoFrame = () => {
      if (video && video.duration && !isNaN(video.duration)) {
        const diff = targetTimeRef.current - video.currentTime;
        // Only trigger update if difference is noticeable to save resources
        if (Math.abs(diff) > 0.005) {
          video.currentTime = video.currentTime + diff * ease;
        }
      }
      animationFrameId = requestAnimationFrame(updateVideoFrame);
    };

    animationFrameId = requestAnimationFrame(updateVideoFrame);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden select-none">
      <video
        ref={videoRef}
        src={backgroundVideo}
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover opacity-60"
      />
      {/* Dark premium overlay vignette to ensure readability */}
      <div className="absolute inset-0 bg-black/65 pointer-events-none" />
    </div>
  );
}
