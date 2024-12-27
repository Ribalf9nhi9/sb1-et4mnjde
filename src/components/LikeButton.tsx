import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface LikeButtonProps {
  initialLikes?: number;
}

export default function LikeButton({ initialLikes = 0 }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
    setIsLiked(!isLiked);
  };

  return (
    <button
      onClick={handleLike}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
        isLiked 
          ? 'bg-pink-500/20 text-pink-400' 
          : 'bg-white/10 text-gray-300 hover:bg-white/20'
      }`}
    >
      <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
      <span>{likes}</span>
    </button>
  );
}