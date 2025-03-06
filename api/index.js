const express = require("express");
const connectDB = require("./db");
const app = express();
const Item = require("./models/item");
const Challenge = require("./models/challenge");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Update the initialChallenges array with all the correct image URLs
const initialChallenges = [
  {
    title: "VibeCoder",
    slug: "vibecoder",
    funding: "10,500",
    description: "An innovative \"Vibe coding\" tool with features like drawing tools, Spotify integration, UI component library, smart code explanations, and built-in design assets.",
    deadline: "March 5, 2025",
    imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67b5c392403527acaf03a1fe_Untitled_design__97_-removebg-preview%20(1).png",
    isVisible: true
  },
  {
    title: "BiasBuster",
    slug: "biasbuster",
    funding: "10,500",
    description: "A Chrome extension and web platform to detect and remove bias from news articles, ensuring objective and balanced content.",
    deadline: "March 5, 2025",
    imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67bb5db36ed0be37fca5e661_Untitled_design__99_-removebg-preview%20(1).png",
    isVisible: true
  },
  {
    title: "VeneersAI",
    slug: "veneersai",
    funding: "10,500",
    description: "Build a SaaS AI tool for veneers visualization, earn equity, salary, and launch your entrepreneurial journey with world-class support.",
    deadline: "March 5, 2025",
    imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/678f85ca8a461c052072aada_file%20(4)%20(2).png",
    isVisible: true
  },
  {
    title: "VideoVerse",
    slug: "videoverse",
    funding: "13,000",
    description: "Seeking a Creative AI Developer to build innovative video and music generation tools using APIs for an exciting project at Startupathon.",
    deadline: "March 4, 2025",
    imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67753b29ebf0ae769c34c810_co-ordinate__6_-removebg-preview%20(1).png",
    isVisible: true
  },
  {
    title: "MaitreyaAI",
    slug: "maitreyaai",
    funding: "12,500",
    description: "A visionary project blending Buddhist teachings and modern AI to inspire and engage a global audience.",
    deadline: "March 3, 2025",
    imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/6772cdbbb2e956bd6271a565_co-ordinate__5_-removebg-preview%20(1).png",
    isVisible: true
  },
  {
    title: "AscensionStudio",
    slug: "ascensionstudio",
    funding: "27,500",
    description: "Become the CEO of Ascension Studio, leading the creation of AI-driven films and stories. No formal qualifications needed, just passion and vision.",
    deadline: "March 5, 2025",
    imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/676b02b16db7e993e9c05db3_co-ordinate__2_-removebg-preview%20(1).png",
    isVisible: true
  },
  {
    title: "MarketBuilder",
    slug: "marketbuilder",
    funding: "13,000",
    description: "Develop and implement a trading bot to monitor blockchain transactions, identify profitable opportunities, and automate token trading strategies.",
    deadline: "March 4, 2025",
    imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/674090c479beddc1a9373325_market%20logo%20(1)%20(1).png",
    isVisible: true
  },
  {
    title: "BurnTech",
    slug: "burntech",
    funding: "10,500",
    description: "Develop a next-generation community platform for Burning Man, improving existing apps and leading the project to redefine how burners connect and engage.",
    deadline: "March 3, 2025",
    imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67408c56608c7b2c25dd8466_Your_paragraph_text__9_-removebg-preview%20(1).png",
    isVisible: true
  },
  {
    title: "MemeMates",
    slug: "mememates",
    funding: "40,500",
    description: "Meme-based dating app, creating vibrant user experiences that resonate with Gen Z!",
    deadline: "March 4, 2025",
    imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/670edb224a6fd5c2a4360b54_Your_paragraph_text-removebg-preview%20(1).png",
    isVisible: true
  },
  {
    title: "RebuildChartable",
    slug: "rebuildchartable",
    funding: "23,000",
    description: "A co-founder and lead developer to create an innovative AI startup, where you'll develop(MVP) and own 20% of the company.",
    deadline: "March 4, 2025",
    imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/670edb224a6fd5c2a4360b54_Your_paragraph_text-removebg-preview%20(1).png",
    isVisible: true
  },
  {
    title: "Partner Loyalty Checker",
    slug: "partner-loyalty-checker",
    funding: "23,000",
    description: "AI-based platform for detecting dating profiles on popular apps, offering users essential relationship security insights",
    deadline: "March 4, 2025",
    imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/66f792101c70a6d80f9e5794_paertner-loyalty-scanner-hero.png",
    isVisible: true
  },
  {
    title: "DailyFixHackathon",
    slug: "dailyfixhackathon",
    funding: "40,500",
    description: "An AI-powered communication aggregator that consolidates, prioritizes, and automates responses across multiple messaging platforms.",
    deadline: "March 3, 2025",
    imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/66deb5e70cc5c77d366cf9ac_Untitled_design__62_-removebg-preview%20(1).png",
    isVisible: true
  },
  {
    title: "CPATech",
    slug: "cpatech",
    funding: "10,500",
    description: "Build a secure financial management dashboard with APIs and AI insights to showcase your full-stack skills and land a job.",
    deadline: "March 4, 2025",
    imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67b5c9b32006000c9ae96781_Untitled_design__98_-removebg-preview%20(1).png",
    isVisible: true
  },
  {
    title: "GymAI",
    slug: "gymai",
    funding: "10,500",
    description: "Develop an AI-powered fitness tracking MVP that accurately detects user movements, counts reps and sets, and provides real-time feedback using a front-end interface and a back-end for motion analysis.",
    deadline: "March 3, 2025",
    imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67b4a01e55d408ac25a8027e_67360c9f15ea2678f5d3009a_AI%20gym%20(1).png",
    isVisible: true
  },
  {
    title: "ElevateMind",
    slug: "elevatemind",
    funding: "10,500",
    description: "Develop an iOS app that integrates with Apple Watch to provide health insights, burnout detection, and AI-driven goal tracking, offering high achievers personalized milestones and progress prompts.",
    deadline: "March 3, 2025",
    imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67b49f4c9301912449c875ef_Untitled_design__95_-removebg-preview%20(1).png",
    isVisible: true
  },
  {
    title: "GaiaAI",
    slug: "gaiaai",
    funding: "15,000",
    description: "Build a web app that uses voice input, AI-driven transcription, and metadata tagging to connect like-minded users based on their vision for the future.",
    deadline: "March 3, 2025",
    imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67b0414b66f48f117fc2a1ef_Untitled_design__89_-removebg-preview%20(1).png",
    isVisible: true
  },
  {
    title: "DeepVidFlutterDeveloper",
    slug: "deepvidflutterdeveloper",
    funding: "10,500",
    description: "Develop a fully functional Flutter-based mobile app for DeepVid AI, replicating its web features for iOS and Android with a focus on UI/UX and performance.",
    deadline: "March 4, 2025",
    imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67ae3102c8b2598c29271e20_Untitled_design__88_-removebg-preview%20(1).png",
    isVisible: true
  },
  {
    title: "InstaCreatorBot",
    slug: "instacreatorbot",
    funding: "10,500",
    description: "Content Format Strategist & Recruiter: Identifies and recruits content creators who have demonstrated viral success with specific content formats.",
    deadline: "March 5, 2025",
    imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67a43d2e9a689859246d30bc_InstaCreatorBot.png",
    isVisible: true
  },
  {
    title: "WemotionsDevelopment",
    slug: "wemotionsdevelopment",
    funding: "10,500",
    description: "A Flutter Developer to replicate and refine Wemotion, enhancing UI/UX, optimizing the codebase, and boosting performance with complete creative freedom.",
    deadline: "March 3, 2025",
    imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67a4304c9e19aa773139e865_wemotionbg%20(1).png",
    isVisible: true
  },
  {
    title: "RhinoplastyAI",
    slug: "rhinoplastyai",
    funding: "13,000",
    description: "Develop an innovative Rhinoplasty AI tool to visualize nose reshaping outcomes, with the opportunity to become a founder, earn equity, and receive funding and resources.",
    deadline: "March 5, 2025",
    imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/678aa7e4a878b043204af093_co-ordinate__13_-removebg-preview%20(2)%20(1).png",
    isVisible: true
  },
];

// Modify the seedDatabase function to force an update
const seedDatabase = async () => {
  try {
    // Force reset the database with the latest challenges
    console.log("Resetting database with updated challenges...");
    await Challenge.deleteMany({});
    await Challenge.insertMany(initialChallenges);
    console.log("Database reset successfully with", initialChallenges.length, "challenges");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Start server
const startServer = async () => {
  try {
    await connectDB();
    
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
  }
};

// Main page endpoint - get only visible challenges
app.get("/", async (req, res) => {
  try {
    const challenges = await Challenge.find({ isVisible: true });
    console.log("Sending", challenges.length, "visible challenges");
    res.json(challenges);
  } catch (error) {
    console.error("Error fetching challenges:", error);
    res.status(500).json({ message: error.message });
  }
});

// Keep the /api/challenges endpoint as well for the App.jsx update
app.get("/api/challenges", async (req, res) => {
  try {
    const challenges = await Challenge.find({ isVisible: true });
    console.log("Sending", challenges.length, "visible challenges");
    res.json(challenges);
  } catch (error) {
    console.error("Error fetching challenges:", error);
    res.status(500).json({ message: error.message });
  }
});

// Admin endpoint - get all challenges
app.get("/api/challenges/all", async (req, res) => {
  try {
    const challenges = await Challenge.find();
    console.log("Sending all", challenges.length, "challenges to admin");
    res.json(challenges);
  } catch (error) {
    console.error("Error fetching all challenges:", error);
    res.status(500).json({ message: error.message });
  }
});

// Update challenge visibility
app.patch("/challenges/:id/visibility", async (req, res) => {
  try {
    const { id } = req.params;
    const { isVisible } = req.body;
    
    console.log("Updating visibility for challenge", id, "to", isVisible);
    
    const updatedChallenge = await Challenge.findByIdAndUpdate(
      id,
      { isVisible },
      { new: true }
    );
    
    if (!updatedChallenge) {
      console.log("Challenge not found:", id);
      return res.status(404).json({ message: "Challenge not found" });
    }
    
    console.log("Challenge updated successfully");
    res.json(updatedChallenge);
  } catch (error) {
    console.error("Error updating challenge visibility:", error);
    res.status(500).json({ message: error.message });
  }
});

// Add a new challenge
app.post("/challenges", async (req, res) => {
  try {
    const newChallenge = new Challenge(req.body);
    const savedChallenge = await newChallenge.save();
    console.log("New challenge created:", savedChallenge.title);
    res.status(201).json(savedChallenge);
  } catch (error) {
    console.error("Error creating challenge:", error);
    res.status(400).json({ message: error.message });
  }
});

// Add this endpoint to reset the database if needed
app.post("/reset-database", async (req, res) => {
  try {
    // Delete all existing challenges
    await Challenge.deleteMany({});
    console.log("Deleted all existing challenges");
    
    // Insert the initial challenges
    await Challenge.insertMany(initialChallenges);
    console.log("Database reset with", initialChallenges.length, "challenges");
    
    res.json({ message: "Database reset successfully" });
  } catch (error) {
    console.error("Error resetting database:", error);
    res.status(500).json({ message: error.message });
  }
});

startServer();
