import React from "react";

const AnotherBodyComponent = () => {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>


      {/* Hero Section */}
      <section
        style={{
          background: "url('https://via.placeholder.com/1500x400') no-repeat center/cover",
          color: "white",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <h2>Welcome to the best place to shop online!</h2>
        <p>Find amazing products at unbeatable prices.</p>
        <button
          style={{
            padding: "0.8rem 2rem",
            fontSize: "1.2rem",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#ff6600",
            color: "white",
            cursor: "pointer",
          }}
        >
          Shop Now
        </button>
      </section>

      {/* Featured Products */}
      <section id="products" style={{ padding: "2rem" }}>
        <h3>Featured Products</h3>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Product Cards */}
          {[1, 2, 3, 4].map((id) => (
            <div
              key={id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1rem",
                width: "200px",
                textAlign: "center",
              }}
            >
              <img
                src={`https://via.placeholder.com/200?text=Product+${id}`}
                alt={`Product ${id}`}
                style={{ width: "100%", borderRadius: "4px" }}
              />
              <h4>Product {id}</h4>
              <p>$ {id * 20}.00</p>
              <button
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#007bff",
                  border: "none",
                  borderRadius: "4px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ backgroundColor: "#f4f4f4", padding: "2rem" }}>
        <h3>About Us</h3>
        <p>
          We are passionate about delivering quality products to our customers with excellent
          service. Our mission is to make shopping simple and enjoyable.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: "2rem" }}>
        <h3>Contact Us</h3>
        <p>Email: support@myecommercestore.com</p>
        <p>Phone: +1 (555) 123-4567</p>
      </section>
    </div>
  );
};

export default AnotherBodyComponent;
