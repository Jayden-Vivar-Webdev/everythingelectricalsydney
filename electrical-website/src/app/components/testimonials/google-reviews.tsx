import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  timeAgo: string;
  text: string;
  helpful: number;
}

interface GoogleReviewsProps {
  reviews?: Review[];
  overallRating?: number;
  totalReviews?: number;
  title?: string;
  subtitle?: string;
  theme?: "light" | "dark";
  showViewAllButton?: boolean;
}

interface StarRatingProps {
  rating: number;
  theme?: "light" | "dark";
}

const defaultReviews: Review[] = [
  {
    id: 1,
    name: "Mel Lehne",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocJ2XQUw5-qbMsvKR1BDsDHcLo1xRiCZobpPMmBLEtZMXOzeeQ=w180-h180-p-rp-mo-br100",
    rating: 5,
    timeAgo: "18th August 2025",
    text: "We lost power late at night and Charlie from Everything Electrical Sydney was a lifesaver. He was at our place within the hour,",
    helpful: 1,
  },
  {
    id: 2,
    name: "Alicia Rigoli",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWT_AwqPjZ8NGHLYGoelvKNlQdnSleukuMh6gj7x94noiQKYCk8=w180-h180-p-rp-mo-br100",
    rating: 5,
    timeAgo: "a year ago",
    text: "Charlie was great to work with. He showed up on time, did the job properly, and made everything easy to understand. Really genuine",
    helpful: 8,
  },
  {
    id: 3,
    name: "Jono T",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocLVBVl5BN5uPbEcsXCyvRPhGMZEMd0x0sBf9IxjUA_3GmNIYw=w180-h180-p-rp-mo-br100",
    rating: 5,
    timeAgo: "a year ago",
    text: "Called these guys up for a late night issue. Arrived quick, found the issue and gave me options for the repairs. Very honest and would",
    helpful: 15,
  },
];

const StarRating: React.FC<StarRatingProps> = ({ rating, theme = "light" }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : theme === "dark"
                ? "text-gray-600"
                : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const GoogleReviews: React.FC<GoogleReviewsProps> = ({
  reviews = defaultReviews,
  overallRating = 4.9,
  totalReviews = 247,
  title = "Google Reviews",
  subtitle = "See what our customers are saying about their experience with us",
  theme = "dark",
  showViewAllButton = true,
}) => {
  const themeClasses = {
    light: {
      section: "bg-white",
      title: "text-gray-900",
      subtitle: "text-gray-600",
      rating: "text-gray-900",
      ratingText: "text-gray-600",
      card: "bg-gray-50 border-gray-200",
      cardText: "text-gray-700",
      name: "text-gray-900",
      time: "text-gray-500",
      border: "border-gray-200",
      helpful: "text-gray-500 hover:text-gray-700",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    dark: {
      section: "bg-gray-900",
      title: "text-white",
      subtitle: "text-gray-300",
      rating: "text-white",
      ratingText: "text-gray-300",
      card: "bg-gray-800 border-gray-700",
      cardText: "text-gray-300",
      name: "text-white",
      time: "text-gray-400",
      border: "border-gray-700",
      helpful: "text-gray-400 hover:text-gray-300",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
    },
  };

  const styles = themeClasses[theme];

  return (
    <section className={`${styles.section} py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <h2
              className={`text-3xl font-bold tracking-tight ${styles.title} sm:text-4xl`}
            >
              {title}
            </h2>
          </div>

          <div className="flex items-center justify-center gap-2 mb-4">
            <StarRating rating={5} theme={theme} />
            <span className={`text-lg font-semibold ${styles.rating}`}>
              {overallRating}
            </span>
            <span className={styles.ratingText}>
              out of 5 based on {totalReviews} reviews
            </span>
          </div>

          <p className={`text-lg ${styles.subtitle} mb-12`}>{subtitle}</p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`${styles.card} rounded-lg p-6 shadow-sm border`}
            >
              <div className="flex items-start gap-4">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`font-semibold ${styles.name}`}>
                      {review.name}
                    </h3>
                    <span className={`text-sm ${styles.time}`}>
                      {review.timeAgo}
                    </span>
                  </div>
                  <StarRating rating={review.rating} theme={theme} />
                </div>
              </div>

              <p
                className={`mt-4 ${styles.cardText} leading-relaxed line-clamp-4`}
              >
                {review.text}
              </p>

              <div className={`mt-4 pt-4 border-t ${styles.border}`}>
                <button
                  className={`text-sm ${styles.helpful} flex items-center gap-1 transition-colors`}
                >
                  <span>👍</span>
                  <span>Helpful ({review.helpful})</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {showViewAllButton && (
          <div className="mt-12 text-center">
            <Link
              href="https://www.google.com/search?sca_esv=4aa5e2d623e5cb5b&cs=0&sxsrf=AE3TifOtyhLPTevLg37IV-tAjk5zUN_Hrw:1752635837282&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_BrlSgmRx-EOxuNNUDKdhET4PZUGcqygSqS6sTRD_9MT86C9S3RqYZirX2hmj7h7LsK4g6onPmnybh8WryNLoJMidzoeH2T1qsHJ26iIXePQyaPpw%3D%3D&q=Everything+Electrical+Sydney+Reviews&sa=X&ved=2ahUKEwiDy4GktcCOAxX44zgGHZWmNWQQ0bkNegQIIhAD&biw=1367&bih=1233&dpr=1"
              className={`inline-flex items-center gap-2 px-6 py-3 ${styles.button} font-semibold rounded-lg transition-colors`}
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              View All Reviews on Google
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default GoogleReviews;
export type { GoogleReviewsProps, Review };
