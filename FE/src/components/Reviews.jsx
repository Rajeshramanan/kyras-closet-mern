import React, { useRef } from 'react';
import { Container, Card } from 'react-bootstrap';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const reviewsData = [
  { id: 1, name: "Anusha.R", ratingScore: 5.0, avatar: "/avatars/anusha.png", comment: "I ordered the Menmai Kurthi last week, and it's even more beautiful in person! The fabric is soft and the fit is perfect." },
  { id: 2, name: "Divya.R", ratingScore: 4.5, avatar: "/avatars/divya.png", comment: "Elora Kurthi is stunning! Material is soft, breathable and stitching is neat. I got many compliments." },
  { id: 3, name: "Priya.S", ratingScore: 5.0, avatar: "/avatars/priya.png", comment: "Quality exceeded expectations. Premium fabric and great tailoring. Delivery was super fast!" },
  { id: 4, name: "Suresh.V", ratingScore: 4.0, avatar: "/avatars/suresh.png", comment: "Exactly as pictured. Colors are vibrant and design is unique. Good price for the quality." },
  { id: 5, name: "Kavya.P", ratingScore: 4.5, avatar: "/avatars/kavya.png", comment: "The saree drapes beautifully! Blouse stitching was perfect. This is my second order." },
  { id: 6, name: "Aisha.K", ratingScore: 5.0, avatar: "/avatars/aisha.png", comment: "Lehanga set was gorgeous! Intricate embroidery and perfect packing. Got many compliments." },

  // ⭐ Extra added reviews (10+ total)
  { id: 7, name: "Meena.T", ratingScore: 4.8, comment: "Loved the fabric and the colour. Very comfortable to wear all day!" },
  { id: 8, name: "Harini.S", ratingScore: 4.9, comment: "Their customer service is excellent. Product was delivered earlier than expected!" },
  { id: 9, name: "Rajesh.K", ratingScore: 4.3, comment: "Bought a kurthi for my sister. She loved it. Quality is worth the price!" },
  { id:10, name: "Vidya.R", ratingScore: 5.0, comment: "Amazing patterns and soft fabrics. My favourite store now!" },
  { id:11, name: "Nandhini.V", ratingScore: 4.7, comment: "Perfect fitting and fast delivery. Very happy with the purchase!" },
  { id:12, name: "Gomathi.J", ratingScore: 4.6, comment: "Colours are exactly like the photos. Material feels premium too!" },
];

const ReviewCard = ({ review }) => {
  const renderStars = (score) => {
    const fullStars = Math.floor(score);
    return [...Array(5)].map((_, i) => (
      <FaStar key={i} color={i < fullStars ? "#FFD700" : "#eee"} size={14} />
    ));
  };

  return (
    <div className="review-card-wrapper">
      <Card className="p-4 review-card">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div className="d-flex">{renderStars(review.ratingScore)}</div>
          <span className="review-rating-badge">
            {review.ratingScore}/5 <FaStar size={12} />
          </span>
        </div>

        <p style={{ fontSize: '0.9rem', color: '#333' }}>{review.comment}</p>

        <div className="d-flex justify-content-end mt-3">
          <p style={{ fontWeight: '600', fontSize: '0.95rem' }}>- {review.name}</p>
        </div>
      </Card>
    </div>
  );
};

const Reviews = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <Container className="my-5">
      <h2 className="section-heading">Customer Reviews & Ratings</h2>

      {/* Scroll buttons */}
      <div className="d-flex justify-content-between align-items-center mb-2 px-3">
        <button onClick={scrollLeft} style={scrollButtonStyle}><FaChevronLeft size={18} /></button>
        <button onClick={scrollRight} style={scrollButtonStyle}><FaChevronRight size={18} /></button>
      </div>

      {/* Manual Scroll Section */}
      <div ref={scrollRef} className="horizontal-scroll-container p-3">
        {reviewsData.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </Container>
  );
};

const scrollButtonStyle = {
  background: "#FF784B",
  border: "none",
  color: "white",
  padding: "10px 14px",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "600"
};

export default Reviews;
