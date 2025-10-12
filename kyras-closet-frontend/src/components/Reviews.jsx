import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const reviewsData = [
  { id: 1, name: "Anusha.R", ratingScore: 5.0, avatar: "/avatars/anusha.png", comment: "I ordered the Menmai Kurthi last week, and it's even more beautiful in person! The fabric is soft, the fit is perfect, and I got so many compliments when I wore it. Delivery was super quick too. Definitely shopping again!" },
  { id: 2, name: "Divya.R", ratingScore: 4.5, avatar: "/avatars/divya.png", comment: "I bought the Elora Kurthi, and it's absolutely stunning! The material is soft and breathable, perfect for daily-wear and the stitching is very neat. I got so many compliments when I wore it to a family function. Highly recommend this shop!" },
  { id: 3, name: "Priya.S", ratingScore: 5.0, avatar: "/avatars/priya.png", comment: "The quality of this purchase exceeded my expectations. Premium fabric and great tailoring. Everything was seamless, and delivery was super quick. Fantastic experience with Kyra's Closet! Highly recommend to everyone." },
  { id: 4, name: "Suresh.V", ratingScore: 4.0, avatar: "/avatars/suresh.png", comment: "The dress arrived on time and was exactly as pictured online. The colors are vibrant and the design is unique. The price is also very reasonable for the quality provided. Will check back soon for the new collections coming up." },
  { id: 5, name: "Kavya.P", ratingScore: 4.5, avatar: "/avatars/kavya.png", comment: "Absolutely love the fit and fall of this saree. It drapes beautifully and the blouse piece was stitched perfectly. This is my second purchase from Kyra's Closet and I am extremely happy with their consistent quality and service." },
  { id: 6, name: "Aisha.K", ratingScore: 5.0, avatar: "/avatars/aisha.png", comment: "My Lehanga set is gorgeous! The embroidery work is intricate and high-quality. It was packed nicely and arrived in perfect condition. I got endless compliments at the wedding. Will be a repeat customer for sure." },
];

const ReviewCard = ({ review }) => {
  const renderStars = (score) => {
    const stars = [];
    const fullStars = Math.floor(score);
    for (let i = 0; i < 5; i++) {
      stars.push(<FaStar key={i} color={i < fullStars ? "#FFD700" : "#f0f0f0"} size={14} />);
    }
    return stars;
  };

  return (
    <div className="review-card-wrapper">
      <Card className="p-4 review-card">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div className="d-flex flex-column">
            <div className="d-flex">{renderStars(review.ratingScore)}</div>
          </div>
          <span className="review-rating-badge">
            {review.ratingScore}/5 <FaStar size={12} />
          </span>
        </div>
        
        <p className="flex-grow-1" style={{ fontSize: '0.9rem', color: '#333' }}>
          {review.comment}
        </p>
        
        <div className="d-flex align-items-center justify-content-between mt-3">
            
            <p className="mb-0 text-right" style={{ fontWeight: '600', fontSize: '0.95rem', color: '#444' }}>
                - {review.name}
            </p>
        </div>
      </Card>
    </div>
  );
};


const Reviews = () => {
  return (
    <Container className="my-5">
      <h2 className="section-heading">Customer Reviews and Ratings</h2>
      
      <div className="horizontal-scroll-container p-3"> 
        {reviewsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </Container>
  );
};

export default Reviews;