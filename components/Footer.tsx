import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 text-white flex items-center justify-center">
      <div className="flex justify-around w-full">
        <a href="https://open.spotify.com/artist/1pv1PKaVuugmSNpVlLHYuc?si=MVIYi-s4R86_kkNkcQqK6g" className="text-white hover:text-secondary" target="_blank" rel="noopener noreferrer">
          <img src="/logos/spotify.png" alt="Spotify" className="h-8" />
        </a>
        <a href="https://music.apple.com/in/artist/capsules/1459252380" className="text-white hover:text-secondary" target="_blank" rel="noopener noreferrer">
          <img src="/logos/applemusic.png" alt="Apple Music" className="h-8" />
        </a>
        <a href="https://soundcloud.com/capsulesofficial" className="text-white hover:text-secondary" target="_blank" rel="noopener noreferrer">
          <img src="/logos/soundcloud.png" alt="Soundcloud" className="h-8" />
        </a>
        <a href="https://www.youtube.com/@capsulesofficial" className="text-white hover:text-secondary" target="_blank" rel="noopener noreferrer">
          <img src="/logos/youtube.svg" alt="Youtube" className="h-8" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
