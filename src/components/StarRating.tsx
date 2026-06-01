interface StarRatingProps {
  rating: number;
  size?: number;
  interactive?: boolean;
  onRate?: (r: number) => void;
}

export default function StarRating({ rating, size = 16, interactive = false, onRate }: StarRatingProps) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(star => (
        <svg
          key={star}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill={star <= Math.round(rating) ? "#E63028" : "none"}
          stroke={star <= Math.round(rating) ? "#E63028" : "#444"}
          strokeWidth="1.5"
          className={interactive ? "cursor-pointer hover:scale-110 transition-transform" : ""}
          onClick={() => interactive && onRate?.(star)}
        >
          <polygon points="10,2 12.9,7.6 19,8.5 14.5,12.9 15.6,19 10,16 4.4,19 5.5,12.9 1,8.5 7.1,7.6" />
        </svg>
      ))}
    </div>
  );
}
