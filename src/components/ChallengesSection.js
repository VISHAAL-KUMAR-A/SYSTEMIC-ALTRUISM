import React, { useEffect } from "react";

const ChallengesSection = () => {
  useEffect(() => {
    // Function to handle the zoom effect
    const handleChallengeZoom = () => {
      const challengeButtons = document.querySelectorAll(".challenge-button");
      const challengesGrid = document.querySelector(".challenges-grid");

      // Create overlay element for clicking outside
      const overlay = document.createElement("div");
      overlay.className = "challenges-overlay";
      document.body.appendChild(overlay);

      // Add click event to each button
      challengeButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();

          // Get the parent challenge box
          const challengeBox = button.closest(".challenge-box");

          // If already active, deactivate
          if (challengeBox.classList.contains("active")) {
            challengeBox.classList.remove("active");
            challengesGrid.classList.remove("has-active-box");
            overlay.classList.remove("active");
            return;
          }

          // Remove active class from all boxes
          document.querySelectorAll(".challenge-box.active").forEach((box) => {
            box.classList.remove("active");
          });

          // Add active class to clicked box
          challengeBox.classList.add("active");
          challengesGrid.classList.add("has-active-box");
          overlay.classList.add("active");
        });
      });

      // Handle click outside to close
      overlay.addEventListener("click", () => {
        document.querySelectorAll(".challenge-box.active").forEach((box) => {
          box.classList.remove("active");
        });
        challengesGrid.classList.remove("has-active-box");
        overlay.classList.remove("active");
      });

      // Allow clicking on active box without closing
      document.querySelectorAll(".challenge-box").forEach((box) => {
        box.addEventListener("click", (e) => {
          if (box.classList.contains("active")) {
            e.stopPropagation();
          }
        });
      });

      // Cleanup function
      return () => {
        challengeButtons.forEach((button) => {
          button.removeEventListener("click", () => {});
        });
        overlay.removeEventListener("click", () => {});
        if (document.body.contains(overlay)) {
          document.body.removeChild(overlay);
        }
      };
    };

    // Call the function
    handleChallengeZoom();
  }, []); // Empty dependency array means this runs once on component mount

  return ()
};

export default ChallengesSection;
