import React from "react";

const FAQPage = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1 color="white">Frequently Asked Questions</h1>
      <p>1. What animals do you offer for adoption?</p>
      <p>
        We provide a variety of animals for adoption, including dogs, cats,
        rabbits, birds, and more. Our available pets may vary based on our
        current rescues.
      </p>

      <p>2. How can I adopt a pet from your center?</p>
      <p>
        To adopt a pet, visit our center during our operating hours. Our staff
        will guide you through the adoption process, including meeting the pets
        and completing necessary paperwork.
      </p>

      {/* Add more FAQ questions and answers */}
    </div>
  );
};

export default FAQPage;
