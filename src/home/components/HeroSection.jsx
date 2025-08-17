import React from "react";

import LeftArrow from "../../assets/icons/LeftArrow.jsx";
import RightArrow from "../../assets/icons/RightArrow.jsx";


import star from "../../assets/img/Star 1.png";

import CheckIcon from "../../assets/icons/CheckIcon.jsx"; 
import { Typography } from "@mui/material";



const reviews = [
  {
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  

];

export default function HeroSection() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        
        <Typography sx={{fontWeight: "bold", fontSize: "40px",color: "primary.main"}} >OUR HAPPY CUSTOMERS </Typography>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{
              border: "1px solid #ddd",
              borderRadius: "50%",
              padding: "8px",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            <LeftArrow />
          </button>
          <button
            style={{
              border: "1px solid #ddd",
              borderRadius: "50%",
              padding: "8px",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            <RightArrow />
          </button>
        </div>
      </div>

   
      <div style={{ display: "flex", gap: "20px" }}>
        {reviews.map((review, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              border: "1px solid #eee",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
        
            <div style={{ display: "flex", marginBottom: "10px" }}>
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={star}
                  alt="star"
                  style={{ width: "20px", height: "20px", marginRight: "3px" }}
                />
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <strong>{review.name}</strong>
              <CheckIcon /> 
            </div>
            <p style={{ marginTop: "8px", color: "#555", fontSize: "14px" }}>
              "{review.text}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}