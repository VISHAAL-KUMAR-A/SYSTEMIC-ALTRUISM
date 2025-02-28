import { useState, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [items, setItems] = useState([
    {
      title: "VibeCoder",
      slug: "vibecoder",
      funding: "10,500",
      description: "An innovative \"Vibe coding\" tool with features like drawing tools, Spotify integration, UI component library, smart code explanations, and built-in design assets.",
      deadline: "March 5, 2025",
      imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67b5c392403527acaf03a1fe_Untitled_design__97_-removebg-preview%20(1).png"
    },
    {
      title: "BiasBuster",
      slug: "biasbuster",
      funding: "10,500",
      description: "A Chrome extension and web platform to detect and remove bias from news articles, ensuring objective and balanced content.",
      deadline: "March 5, 2025",
      imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67bb5db36ed0be37fca5e661_Untitled_design__99_-removebg-preview%20(1).png"
    },
    {
      title: "CPATech",
      slug: "cpatech",
      funding: "10,500",
      description: "Build a secure financial management dashboard with APIs and AI insights to showcase your full-stack skills and land a job.",
      deadline: "March 4, 2025",
      imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67b5c9b32006000c9ae96781_Untitled_design__98_-removebg-preview%20(1).png"
    },
    {
      title: "GymAI",
      slug: "gymai",
      funding: "10,500",
      description: "Develop an AI-powered fitness tracking MVP that accurately detects user movements, counts reps and sets, and provides real-time feedback using a front-end interface and a back-end for motion analysis.",
      deadline: "March 3, 2025",
      imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67b4a01e55d408ac25a8027e_67360c9f15ea2678f5d3009a_AI%20gym%20(1).png"
    },
    {
      title: "ElevateMind",
      slug: "elevatemind",
      funding: "10,500",
      description: "Develop an iOS app that integrates with Apple Watch to provide health insights, burnout detection, and AI-driven goal tracking, offering high achievers personalized milestones and progress prompts.",
      deadline: "March 3, 2025",
      imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67b49f4c9301912449c875ef_Untitled_design__95_-removebg-preview%20(1).png"
    },
    {
      title: "GaiaAI",
      slug: "gaiaai",
      funding: "15,000",
      description: "Build a web app that uses voice input, AI-driven transcription, and metadata tagging to connect like-minded users based on their vision for the future.",
      deadline: "March 3, 2025",
      imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67b0414b66f48f117fc2a1ef_Untitled_design__89_-removebg-preview%20(1).png"
    },
    {
      title: "DeepVidFlutterDeveloper",
      slug: "deepvidflutterdeveloper",
      funding: "10,500",
      description: "Develop a fully functional Flutter-based mobile app for DeepVid AI, replicating its web features for iOS and Android with a focus on UI/UX and performance.",
      deadline: "March 4, 2025",
      imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67ae3102c8b2598c29271e20_Untitled_design__88_-removebg-preview%20(1).png"
    },
    {
      title: "InstaCreatorBot",
      slug: "instacreatorbot",
      funding: "10,500",
      description: "Content Format Strategist & Recruiter: Identifies and recruits content creators who have demonstrated viral success with specific content formats.",
      deadline: "March 5, 2025",
      imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67a43d2e9a689859246d30bc_InstaCreatorBot.png"
    },
    {
      title: "WemotionsDevelopment",
      slug: "wemotionsdevelopment",
      funding: "10,500",
      description: "A Flutter Developer to replicate and refine Wemotion, enhancing UI/UX, optimizing the codebase, and boosting performance with complete creative freedom.",
      deadline: "March 3, 2025",
      imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67a4304c9e19aa773139e865_wemotionbg%20(1).png"
    },
    {
      title: "RhinoplastyAI",
      slug: "rhinoplastyai",
      funding: "13,000",
      description: "Develop an innovative Rhinoplasty AI tool to visualize nose reshaping outcomes, with the opportunity to become a founder, earn equity, and receive funding and resources.",
      deadline: "March 5, 2025",
      imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/678aa7e4a878b043204af093_co-ordinate__13_-removebg-preview%20(2)%20(1).png"
    },
    {
      title: "VeneersAI",
      slug: "veneersai",
      funding: "10,500",
      description: "Build a SaaS AI tool for veneers visualization, earn equity, salary, and launch your entrepreneurial journey with world-class support.",
      deadline: "March 5, 2025",
      imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/678f85ca8a461c052072aada_file%20(4)%20(2).png"
    },
    {
      title: "VideoVerse",
      slug: "videoverse",
      funding: "13,000",
      description: "Seeking a Creative AI Developer to build innovative video and music generation tools using APIs for an exciting project at Startupathon.",
      deadline: "March 4, 2025",
      imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67753b29ebf0ae769c34c810_co-ordinate__6_-removebg-preview%20(1).png"
    },
    {
      title: "MaitreyaAI",
      slug: "maitreyaai",
      funding: "12,500",
      description: "A visionary project blending Buddhist teachings and modern AI to inspire and engage a global audience.",
      deadline: "March 3, 2025",
      imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/6772cdbbb2e956bd6271a565_co-ordinate__5_-removebg-preview%20(1).png"
    },
    {
      title: "AscensionStudio",
      slug: "ascensionstudio",
      funding: "27,500",
      description: "Become the CEO of Ascension Studio, leading the creation of AI-driven films and stories. No formal qualifications needed, just passion and vision.",
      deadline: "March 5, 2025",
      imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/676b02b16db7e993e9c05db3_co-ordinate__2_-removebg-preview%20(1).png"
    },
    {
      title: "MarketBuilder",
      slug: "marketbuilder",
      funding: "13,000",
      description: "Develop and implement a trading bot to monitor blockchain transactions, identify profitable opportunities, and automate token trading strategies.",
      deadline: "March 4, 2025",
      imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/674090c479beddc1a9373325_market%20logo%20(1)%20(1).png"
    },
    {
      title: "BurnTech",
      slug: "burntech",
      funding: "10,500",
      description: "Develop a next-generation community platform for Burning Man, improving existing apps and leading the project to redefine how burners connect and engage.",
      deadline: "March 3, 2025",
      imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67408c56608c7b2c25dd8466_Your_paragraph_text__9_-removebg-preview%20(1).png"
    },
    {
      title: "MemeMates",
      slug: "mememates",
      funding: "40,500",
      description: "Meme-based dating app, creating vibrant user experiences that resonate with Gen Z!",
      deadline: "March 4, 2025",
      imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/670edb224a6fd5c2a4360b54_Your_paragraph_text-removebg-preview%20(1).png"
    },
    {
      title: "RebuildChartable",
      slug: "rebuildchartable",
      funding: "23,000",
      description: "A co-founder and lead developer to create an innovative AI startup, where you'll develop(MVP) and own 20% of the company.",
      deadline: "March 4, 2025",
      imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/670edb224a6fd5c2a4360b54_Your_paragraph_text-removebg-preview%20(1).png"
    },
    {
      title: "Partner Loyalty Checker",
      slug: "partner-loyalty-checker",
      funding: "23,000",
      description: "AI-based platform for detecting dating profiles on popular apps, offering users essential relationship security insights",
      deadline: "March 4, 2025",
      imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/66f792101c70a6d80f9e5794_paertner-loyalty-scanner-hero.png"
    },
    {
      title: "DailyFixHackathon",
      slug: "dailyfixhackathon",
      funding: "40,500",
      description: "An AI-powered communication aggregator that consolidates, prioritizes, and automates responses across multiple messaging platforms.",
      deadline: "March 3, 2025",
      imageUrl: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/66deb5e70cc5c77d366cf9ac_Untitled_design__62_-removebg-preview%20(1).png"
    }
  ]);
  const navbarRef = useRef(null);
  const contentRefs = useRef([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setItems(data));
      
    // Check for overlapping elements on scroll
    const handleScroll = () => {
      if (!navbarRef.current) return;
      
      const navbarRect = navbarRef.current.getBoundingClientRect();
      
      contentRefs.current.forEach(ref => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        
        // Check if element overlaps with navbar
        if (rect.top < navbarRect.bottom && rect.bottom > navbarRect.top) {
          ref.classList.add('overlapped');
        } else {
          ref.classList.remove('overlapped');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Add elements to contentRefs
  const addToRefs = (el) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };
  
  useEffect(() => {
    // Add timeline animation on scroll
    const handleTimelineScroll = () => {
      const timeline = document.getElementById('startupathon-guide');
      if (!timeline) return;
      
      const timelineRect = timeline.getBoundingClientRect();
      const timelineItems = timeline.querySelectorAll('.timeline_item');
      const progressBar = timeline.querySelector('.timeline_progress-bar-3');
      
      // Calculate how much of the timeline is visible
      const timelineTop = timelineRect.top;
      const timelineBottom = timelineRect.bottom;
      const windowHeight = window.innerHeight;
      
      // If timeline is visible at all
      if (timelineBottom > 0 && timelineTop < windowHeight) {
        // Calculate progress percentage
        const visibleHeight = Math.min(windowHeight, timelineBottom) - Math.max(0, timelineTop);
        const percentVisible = Math.min(100, (visibleHeight / timelineRect.height) * 100);
        
        // Update progress bar height
        progressBar.style.height = `${percentVisible}%`;
        
        // Animate timeline items based on their position
        timelineItems.forEach((item, index) => {
          const itemRect = item.getBoundingClientRect();
          const itemMiddle = itemRect.top + (itemRect.height / 2);
          
          // If item is in viewport
          if (itemMiddle < windowHeight && itemMiddle > 0) {
            // Add active class with delay based on index
            setTimeout(() => {
              item.classList.add('timeline_item-active');
            }, index * 200);
          } else {
            item.classList.remove('timeline_item-active');
          }
        });
      }
    };
    
    // Add the timeline scroll handler
    window.addEventListener('scroll', handleTimelineScroll);
    // Initial call to set initial state
    handleTimelineScroll();
    
    return () => {
      window.removeEventListener('scroll', handleTimelineScroll);
    };
  }, []);
  
  useEffect(() => {
    // Add click event listeners for smooth scrolling
    const setupSmoothScrolling = () => {
      const links = document.querySelectorAll('a[href^="#"]');
      
      links.forEach(link => {
        link.addEventListener('click', function(e) {
          const href = this.getAttribute('href');
          
          // Only process internal links
          if (href.startsWith('#')) {
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
              window.scrollTo({
                top: targetElement.offsetTop - 100, // Offset for header
                behavior: 'smooth'
              });
            }
          }
        });
      });
    };
    
    setupSmoothScrolling();
  }, []);
  
  useEffect(() => {
    // Function to check if element is in viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
          rect.bottom >= 0
      );
    };

    // Function to handle scroll and check which elements to animate
    const handleAnimationOnScroll = () => {
      // Select all h1 elements with animations
      const animatedHeadings = document.querySelectorAll(`
        .startupathon-title,
        .rewards-title,
        .challenges-title,
        .guide-title,
        .tips-title,
        .stories-title,
        .fellowship-head,
        .completed-title,
        .founder-network-title,
        .exciting-career-title,
        .animated-career-title
      `);
      
      // Check each heading
      animatedHeadings.forEach(heading => {
        if (isInViewport(heading)) {
          heading.classList.add('visible');
        } else {
          // Optional: remove the class when scrolled away to reset animation
          // heading.classList.remove('visible');
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleAnimationOnScroll);
    
    // Run once on initial load to check for elements already in viewport
    handleAnimationOnScroll();

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleAnimationOnScroll);
    };
  }, []);
  
  return (
    <div className="app">
      <nav className="navbar" ref={navbarRef}>
        <a href="/" className="nav-link brand">
          <img 
            src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/678a14a9d3a398bc1e9633b3_Persist%20Startupathon%20White.svg" 
            alt="Persist Startupathon Logo" 
            className="logo"
          />
        </a>
        <a href="#ongoing" className="nav-link">Ongoing Startupathon</a>
        <a href="#completed" className="nav-link">Completed Startupathon</a>
        <a href="#guide" className="nav-link" onClick={(e) => {
          e.preventDefault();
          document.querySelector('.guide-section').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }}>Startupathon Guide</a>
        <a href="#howtowin" className="nav-link">How To Win</a>
        <a href="#mentor" className="nav-link">Mentor Network</a>
        <button className="fellowship-btn">Apply For Fellowship</button>
      </nav>
      
      <div className="content-section" ref={addToRefs}>
        <img 
          src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66b7a9b742a15fc71db053f3_pv%20team%20cropped.png" 
          alt="Group" 
          className="hero-image"
        />
      </div>
      
      <div className="content-section" ref={addToRefs}>
        <h1 className="startupathon-title">STARTUPATHON</h1>
        <h2 className="startupathon-subtitle">Your Chance to Build,Lead,Succeed as a Founder</h2>
      </div>
      
      <div className="content-section video-container" ref={addToRefs}>
        <iframe 
          src="https://www.loom.com/embed/996f59a2e5c34fd38b86544833c23dde" 
          frameBorder="0" 
          allowFullScreen
          className="loom-video"
        ></iframe>
      </div>
      
      <div className="content-section button-container" ref={addToRefs}>
        <button className="action-btn" onClick={() => {
          document.getElementById('ongoing').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}>Ongoing Startupathon <img loading="lazy" src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6775840568c26049e42dd070_sound-on.png" alt="" className="image-38"/></button>
        <button className="action-btn">Startupathon Guide
        <img loading="lazy" src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/677584067844b40361f47c65_user-guide.png" alt="" className="image-38"/>
        </button>
        <button className="action-btn">Past Startupathons
        <img loading="lazy" src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6775840659c6695bc2177369_checked.png" alt="" className="image-38"/>
        </button>
        <button className="action-btn">Mentor Network
        <img loading="lazy" src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/677584060ab4f3d12b8ebd4c_help.png" alt="" className="image-38"/>
        </button>
      </div>
      
      <div className="content-section" ref={addToRefs}>
        <h1 className="rewards-title">Startupathon Success Comes with Extraordinary Rewards</h1>
        
        <div className="rewards-container">
          <div className="reward-item">
            <div className="reward-content">
            <img src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb0_icons8-salary-100.png" loading="lazy" alt="" className="reward-icon"/>
              <h3>Competitive Salary</h3>
            </div>
          </div>
          
          <div className="reward-item">
            <div className="reward-content">
            <img src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56e32a2b11cb90771_icons8-funding-100.png" loading="lazy" alt="" className="reward-icon"/>
              <h3>≥ $10,000 USD in Company Funding</h3>
            </div>
          </div>
          
          <div className="reward-item">
            <div className="reward-content">
            <img src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a417e_icons8-equity-100.png" loading="lazy" alt="" className="reward-icon"/>
              <h3>≥ 10% Founder Equity</h3>
            </div>
          </div>
          
          <div className="reward-item">
            <div className="reward-content">
            <img src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae2d9fa700f0bce8284f3_aws.png" loading="lazy" alt="" className="reward-icon"/>
              <h3>≥ $100,000 USD AWS Credits</h3>
            </div>
          </div>
          
          <div className="reward-item">
            <div className="reward-content">
            <img src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb7_icons8-chat-gpt-100.png" loading="lazy" alt="" className="reward-icon"/>
              <h3>$1,000 OpenAI Credits</h3>
            </div>
          </div>
          
          <div className="reward-item">
            <div className="reward-content">
            <img src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae3f61195ced8cfc850c8_ibm.png" loading="lazy" alt="" className="reward-icon"/>
              <h3>$120,000 USD IBM Cloud Credits</h3>
            </div>
          </div>
          
          <div className="reward-item">
            <div className="reward-content">
            <img src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f508ad153ee0fc9169_icons8-twilio-is-a-cloud-communications-platform-as-a-service-company-100.png" loading="lazy" alt="" className="reward-icon"/>
              <h3>$2,500 Twilio Credits</h3>
            </div>
          </div>
          
          <div className="reward-item">
            <div className="reward-content">
            <img src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a4146_icons8-airtable-100.png" loading="lazy" alt="" className="reward-icon"/>
              <h3>$2,000 Airtable Credits</h3>
            </div>
          </div>
        </div>
      </div>
      
      <div id="ongoing" className="content-section" ref={addToRefs}>
        <h1 className="challenges-title">Ongoing Startupathon Challenges</h1>
        <h2 className="sec-subhead">Start your journey—tackle live challenges, earn equity, and lead the future.</h2>
        
        <div className="challenges-grid">
          {items.map((item, index) => (
            <div key={index} className="challenge-box" style={{ 
              border: '1px solid #e0e0e0', 
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
              <div className="challenge-header">
                <img 
                  src={item.imageUrl} 
                  loading="lazy" 
                  alt={item.title} 
                  className="challenge-logo" 
                />
                <h3 className="challenge-title">{item.title}</h3>
              </div>
              <div className="funding-info">
                <span>Initial Funding Offered: </span>
                <span className="funding-amount">${item.funding}</span>
              </div>
              <p className="challenge-description">{item.description}</p>
              <div className="deadline-info">
                <img src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/678a08bb798234106f88d71f_burning.png" loading="lazy" alt="" className="deadline-icon" />
                <span>Deadline approaching! Apply by {item.deadline}!</span>
              </div>
              <button 
                className="challenge-button"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(`View details for: ${item.slug}`);
                }}
              >
                <div className="button-text">View Challenge Details</div>
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div id="guide" className="guide-section">
        <h1 className="guide-title">Found an idea that matches your skills?</h1>
        <h2 className="guide-subtitle">Here's a simple guide on how the Startupathon process works once you find a project idea that suits your skills.</h2>
        
        <div id="startupathon-guide" className="timeline_component-2">
          <div className="timeline_progress-3">
            <div className="timeline_progress-bar-3"></div>
          </div>
          <div data-w-id="71f1e103-bcd8-f4ab-4e8a-1bd996ec975b" className="timeline_item step-1">
            <div id="w-node-_71f1e103-bcd8-f4ab-4e8a-1bd996ec975c-7f93c08f" className="timeline_left">
              <div className="timeline_date-text-2">Dive into the Challenge Details Video</div>
            </div>
            <div id="w-node-_71f1e103-bcd8-f4ab-4e8a-1bd996ec975f-7f93c08f" className="timeline_centre">
              <div className="timeline_circle step-1"></div>
            </div>
            <div id="w-node-_71f1e103-bcd8-f4ab-4e8a-1bd996ec9761-7f93c08f" className="timeline_right">
              <div className="timeline_text-2">It all starts here!</div>
              <div className="margin-bottom-xlarge">
                <div className="text-block-67">Receive an exciting task—your startup idea—with a detailed video to spark creativity and clarify our vision.</div>
                <div className="text-block-67 step-tip">💡<span className="text-span-11">Pro Tip </span>: Pay attention—it's more than just instructions. It's your roadmap to success!</div>
              </div>
              <div className="timeline_image-wrapper"></div>
            </div>
          </div>
          <div data-w-id="71f1e103-bcd8-f4ab-4e8a-1bd996ec9776" className="timeline_item">
            <div id="w-node-_71f1e103-bcd8-f4ab-4e8a-1bd996ec9777-7f93c08f" className="timeline_left">
              <div className="timeline_date-text-2">Build, Submit &amp; Shine</div>
            </div>
            <div id="w-node-_71f1e103-bcd8-f4ab-4e8a-1bd996ec977a-7f93c08f" className="timeline_centre">
              <div className="timeline_circle step-two-tp-o-add-khana-kaho"></div>
            </div>
            <div className="timeline_right">
              <div className="margin-bottom-xlarge">
                <div className="text-block-67">Create a prototype that showcases your approach, then submit your work with a Loom video presentation (no GitHub repo or complex code required). Your creative solution is what matters most.</div>
                <div className="text-block-67 step-tip">💡<strong>Stay ahead:</strong> Submit on time or early to show your dedication!</div>
              </div>
              <div className="timeline_image-wrapper">
                <img width="480" sizes="100vw" alt="" src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66ed580f0a3687eea6bbc802_Image%202.png" loading="lazy" srcSet="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66ed580f0a3687eea6bbc802_Image%25202-p-500.png 500w, https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66ed580f0a3687eea6bbc802_Image%202.png 960w" />
              </div>
            </div>
          </div>
          <div data-w-id="71f1e103-bcd8-f4ab-4e8a-1bd996ec9794" className="timeline_item">
            <div id="w-node-_71f1e103-bcd8-f4ab-4e8a-1bd996ec9795-7f93c08f" className="timeline_left">
              <div className="timeline_date-text-2">Get Feedback, Level Up!</div>
            </div>
            <div id="w-node-_71f1e103-bcd8-f4ab-4e8a-1bd996ec9798-7f93c08f" className="timeline_centre">
              <div className="timeline_circle feedback"></div>
            </div>
            <div className="timeline_right">
              <div className="margin-bottom-medium">
                <div className="text-block-67">Three days after submission, we review your work. If it stands out, you're in! If not, we'll share feedback on how to improve. The cycle continues until we find the perfect fit.</div>
                <div className="text-block-67 step-tip">💡<span className="text-span-11">Pro Tip </span>: This feedback is <strong>gold</strong>. Use it to sharpen your submission or learn what it takes to win!</div>
              </div>
            </div>
          </div>
          <div data-w-id="71f1e103-bcd8-f4ab-4e8a-1bd996ec97ca" className="timeline_item">
            <div id="w-node-_71f1e103-bcd8-f4ab-4e8a-1bd996ec97cb-7f93c08f" className="timeline_left">
              <div className="timeline_date-text-2">Claim Your Crown</div>
            </div>
            <div id="w-node-_71f1e103-bcd8-f4ab-4e8a-1bd996ec97ce-7f93c08f" className="timeline_centre">
              <div className="timeline_circle selected"></div>
            </div>
            <div className="timeline_right">
              <div className="margin-bottom-medium">
                <div className="timeline_text-2 violet-text">Ace the challenge to become the project leader.</div>
                <div className="text-block-67">Lead the Project. Ace the challenge, and take charge as BOSS. Enjoy ownership, 20% equity, and a competitive salary. Turn vision into impact with top-tier talent!</div>
              </div>
            </div>
          </div>
          <div className="overlay-fade-bottom"></div>
        </div>
      </div>
      
      <div className="tips-section">
        <h1 className="tips-title">Work Smart, Win Big: Pro Tips from Swapnil Sharma, CTO of Ovadrive (A Startupathon Success)</h1>
        
        <div className="tips-video-wrap">
          <div className="video-9 loom-video w-video w-embed">
            <iframe 
              className="embedly-embed" 
              src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fpn_HoowYNTQ%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dpn_HoowYNTQ&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fpn_HoowYNTQ%2Fhqdefault.jpg&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=youtube" 
              width="940" 
              height="528" 
              scrolling="no" 
              allowFullScreen 
              title="Maximize Your Webapp's Potential with V0 by Vercel and Claude"
            ></iframe>
          </div>
        </div>
      </div>
      
      <div className="stories-section">
        <h1 className="stories-title">Our Hiring Process: Shared Through Candidate Stories</h1>
        
        <div className="stories-video-wrap">
          <div className="video-9 loom-video w-video w-embed">
            <iframe 
              className="embedly-embed" 
              src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.loom.com%2Fembed%2F0847b9257f144fd0830a8536dfbc8e81&amp;display_name=Loom&amp;url=https%3A%2F%2Fwww.loom.com%2Fshare%2F0847b9257f144fd0830a8536dfbc8e81%3Fsid%3D841fa6ba-1690-45ed-bc33-6ff84d4f85d8&amp;image=https%3A%2F%2Fcdn.loom.com%2Fsessions%2Fthumbnails%2F0847b9257f144fd0830a8536dfbc8e81-3fb333027ee2e702.gif&amp;type=text%2Fhtml&amp;schema=loom" 
              width="940" 
              height="705" 
              scrolling="no" 
              allowFullScreen 
              title="How We Empower Leaders Without Resumes"
            ></iframe>
          </div>
        </div>
      </div>
      
      <div id="past-startupathon" className="fellowship-content-wrap">
        <h2 className="fellowship-head">Got an idea of your own?</h2>
        <h3 className="fellowship-subhead">We are always on the lookout for visionaries with great startup ideas, ready to become successful founders. If that's you, apply below for our Fellowship program.</h3>
        <a href="/startupathon-fellowship" target="_blank" className="fellowship-cta-on-startupathon">Apply For Fellowship</a>
      </div>
      
      <div id="completed" className="completed-section">
        <h1 className="completed-title">Completed Startupathon Challenges</h1>
        <h2 className="completed-subtitle">People like you have cracked Startupathon challenges and are now leading thriving startups.</h2>
        
        <div className="completed-startuathon-list">
          {/* Neighborgood */}
          <div className="completed-startupathon-item">
            <div className="complet-pro-info">
              <a href="https://neighborgood.io/" target="_blank" className="link-block-14">
                <h2 className="pro-head">Neighborgood</h2>
                <div className="companylogo">
                  <img src="https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/673377d2636812ab650f04a9_65ca66431f754cba27bad9c4_NaighborGood(Logo)%20(1).png" loading="lazy" alt="Neighborgood" className="company-logo-img" />
                </div>
              </a>
            </div>
            <div className="complete-hired-perosn-info-wrap">
              <div className="completed-hero-img-wrap">
                <img src="https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67bdf32ed73b9d632859a762_purnedu.jpg" loading="lazy" alt="Purnendu Thamb" className="founder-image" />
              </div>
              <div className="completed-hero-text-info">
                <div className="selected-candi-name">Purnendu Thamb</div>
                <div className="selecetd-candi-designation">Lead Developer, Neighborgood.</div>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/purnendu-thamb-00b1b8227/" target="_blank" className="social-link">
                    <img src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66e81ea7c52c2eb1db6a973f_ico_soc-03.svg" loading="lazy" alt="LinkedIn Icon" className="social-icon" />
                  </a>
                </div>
                <a href="https://neighborgood.io/" className="project-link">
                  <p className="comp-pro-desc">NeighborGood aims to create the simplest platform for neighborhoods to connect, using an AI agent that acts as a social extrovert to find activities for people to enjoy together.</p>
                </a>
              </div>
            </div>
            <div className="funding-info-wrap">
              <div className="funding-label">Initial Funding Offered:&nbsp;&nbsp;</div>
              <div className="funding-amount">$61,500</div>
            </div>
            <a href="/completed-startupathon-projects/Neighbourgood" target="_blank" className="view-details-btn">
              <div className="button-text">View More Details</div>
            </a>
          </div>
          
          {/* Devisai */}
          <div className="completed-startupathon-item">
            <div className="complet-pro-info">
              <a href="https://devisai.com/" target="_blank" className="link-block-14">
                <h2 className="pro-head">Devisai</h2>
                <div className="companylogo">
                  <img src="https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67337868855fe0c9f7b045d4_669e94c2faad8d3cb3423756_logo-ChXaPMO6%20(1)%20(1).png" loading="lazy" alt="Devisai" className="company-logo-img" />
                </div>
              </a>
            </div>
            <div className="complete-hired-perosn-info-wrap">
              <div className="completed-hero-img-wrap">
                <img src="https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/672cfb9ed3dd86dcb2c1763e_Naman%20Jain(Devis%20AI)-min.jpg" loading="lazy" alt="Naman Jain" className="founder-image" />
              </div>
              <div className="completed-hero-text-info">
                <div className="selected-candi-name">Naman Jain</div>
                <div className="selecetd-candi-designation">Leader, DevisAI.</div>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/naman-jain-444a3b266/" target="_blank" className="social-link">
                    <img src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66e81ea7c52c2eb1db6a973f_ico_soc-03.svg" loading="lazy" alt="LinkedIn Icon" className="social-icon" />
                  </a>
                </div>
                <a href="https://devisai.com/" className="project-link">
                  <p className="comp-pro-desc">Generate up to 20 meme tokens daily. Users vote, and the top-voted coin gets featured on pump.fun with their website, Twitter, and Telegram channel</p>
                </a>
              </div>
            </div>
            <div className="funding-info-wrap">
              <div className="funding-label">Initial Funding Offered:&nbsp;&nbsp;</div>
              <div className="funding-amount">$10,500</div>
            </div>
            <a href="/completed-startupathon-projects/Devisai" target="_blank" className="view-details-btn">
              <div className="button-text">View More Details</div>
            </a>
          </div>
          
          {/* Ovadrive */}
          <div className="completed-startupathon-item">
            <div className="complet-pro-info">
              <a href="https://heyova.com/" target="_blank" className="link-block-14">
                <h2 className="pro-head">Ovadrive</h2>
                <div className="companylogo">
                  <img src="https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/6733779d03d7829a1662283e_ova%20drive.png" loading="lazy" alt="Ovadrive" className="company-logo-img" />
                </div>
              </a>
            </div>
            <div className="complete-hired-perosn-info-wrap">
              <div className="completed-hero-img-wrap">
                <img src="https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67be0e24132d70b9cdf2b58c_1667138991083%20(2).jpg" loading="lazy" alt="Yash Rastogi" className="founder-image" />
              </div>
              <div className="completed-hero-text-info">
                <div className="selected-candi-name">Yash Rastogi</div>
                <div className="selecetd-candi-designation">Lead Developer, Ovadrive.</div>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/yash-rastogi-coder/" target="_blank" className="social-link">
                    <img src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66e81ea7c52c2eb1db6a973f_ico_soc-03.svg" loading="lazy" alt="LinkedIn Icon" className="social-icon" />
                  </a>
                </div>
                <a href="https://heyova.com/" className="project-link">
                  <p className="comp-pro-desc">Ovadrive is designed to turn your phone into an assistant following you everywhere, learning all about your life and helping to utilize that.</p>
                </a>
              </div>
            </div>
            <div className="funding-info-wrap">
              <div className="funding-label">Initial Funding Offered:&nbsp;&nbsp;</div>
              <div className="funding-amount">$61,500</div>
            </div>
            <a href="/completed-startupathon-projects/Ovadrive" target="_blank" className="view-details-btn">
              <div className="button-text">View More Details</div>
            </a>
          </div>
          
          {/* Tatbox */}
          <div className="completed-startupathon-item">
            <div className="complet-pro-info">
              <a href="#" className="link-block-14">
                <h2 className="pro-head">Tatbox</h2>
                <div className="companylogo">
                  <img src="https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67337d10dc66acd4e1b2861c_tatbox-logo.png" loading="lazy" alt="Tatbox" className="company-logo-img" />
                </div>
              </a>
            </div>
            <div className="complete-hired-perosn-info-wrap">
              <div className="completed-hero-img-wrap">
                <img src="https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/672cfb53b2fa46d7dc9b50b0_photo_2024-09-06_18-18-26.jpg" loading="lazy" alt="Youssif Taha" className="founder-image" />
              </div>
              <div className="completed-hero-text-info">
                <div className="selected-candi-name">Youssif Taha</div>
                <div className="selecetd-candi-designation">Leader, Tatbox.</div>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/youssiftaha/" target="_blank" className="social-link">
                    <img src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66e81ea7c52c2eb1db6a973f_ico_soc-03.svg" loading="lazy" alt="LinkedIn Icon" className="social-icon" />
                  </a>
                </div>
                <a href="#" className="project-link">
                  <p className="comp-pro-desc">Tat Box revolutionizes the tattoo industry, offering enthusiasts and artists a seamless, personalized experience with advanced AI and a vibrant marketplace for unique designs.</p>
                </a>
              </div>
            </div>
            <div className="funding-info-wrap">
              <div className="funding-label">Initial Funding Offered:&nbsp;&nbsp;</div>
              <div className="funding-amount">$61,500</div>
            </div>
            <a href="/completed-startupathon-projects/Tatbox" target="_blank" className="view-details-btn">
              <div className="button-text">View More Details</div>
            </a>
          </div>
          
          {/* FaceSearchAI */}
          <div className="completed-startupathon-item">
            <div className="complet-pro-info">
              <a href="https://www.facesearchai.com/" target="_blank" className="link-block-14">
                <h2 className="pro-head">FaceSearchAI</h2>
                <div className="companylogo">
                  <img src="https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67bdfc988b2c2be172f014c5_FaceSeachLogo.svg" loading="lazy" alt="FaceSearchAI" className="company-logo-img" />
                </div>
              </a>
            </div>
            <div className="complete-hired-perosn-info-wrap">
              <div className="completed-hero-img-wrap">
                <img src="https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/672cfb18c39d7dc97fd85562_1712099226969.jpg" loading="lazy" alt="Adil Sameer" className="founder-image" />
              </div>
              <div className="completed-hero-text-info">
                <div className="selected-candi-name">Adil Sameer</div>
                <div className="selecetd-candi-designation">Leader, FaceSearchAI</div>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/adilsameer/" target="_blank" className="social-link">
                    <img src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66e81ea7c52c2eb1db6a973f_ico_soc-03.svg" loading="lazy" alt="LinkedIn Icon" className="social-icon" />
                  </a>
                </div>
                <a href="https://www.facesearchai.com/" className="project-link">
                  <p className="comp-pro-desc">Find anyone online with face recognition search engine. Search for people by photo and verify you are talking to the person they claim to be.</p>
                </a>
              </div>
            </div>
            <div className="funding-info-wrap">
              <div className="funding-label">Initial Funding Offered:&nbsp;&nbsp;</div>
              <div className="funding-amount">$10,500</div>
            </div>
            <a href="/completed-startupathon-projects/facesearchai" target="_blank" className="view-details-btn">
              <div className="button-text">View More Details</div>
            </a>
          </div>
          
          {/* AIBiden */}
          <div className="completed-startupathon-item">
            <div className="complet-pro-info">
              <a href="#" className="link-block-14">
                <h2 className="pro-head">AIBiden</h2>
                <div className="companylogo">
                  <img src="https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/673386ff292b29985473f0f4_bidenAI.png" loading="lazy" alt="AIBiden" className="company-logo-img" />
                </div>
              </a>
            </div>
            <div className="complete-hired-perosn-info-wrap">
              <div className="completed-hero-img-wrap">
                <img src="https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/672cfad4f9c25356d5d2b58e_Rohan%20nimbalkar%20(AIBiden)-min.jpg" loading="lazy" alt="Rohan Nimbalkar" className="founder-image" />
              </div>
              <div className="completed-hero-text-info">
                <div className="selected-candi-name">Rohan Nimbalkar</div>
                <div className="selecetd-candi-designation">Leader, AIBiden.</div>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/rohan-nimbalkar-42b998268/" target="_blank" className="social-link">
                    <img src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66e81ea7c52c2eb1db6a973f_ico_soc-03.svg" loading="lazy" alt="LinkedIn Icon" className="social-icon" />
                  </a>
                </div>
                <a href="#" className="project-link">
                  <p className="comp-pro-desc">AIBiden - An AI version of President Biden that answers questions previously asked to the real President, generating AI responses in video format using his voice.</p>
                </a>
              </div>
            </div>
            <div className="funding-info-wrap">
              <div className="funding-label">Initial Funding Offered:&nbsp;&nbsp;</div>
              <div className="funding-amount">$10,500</div>
            </div>
            <a href="/completed-startupathon-projects/aibiden" target="_blank" className="view-details-btn">
              <div className="button-text">View More Details</div>
            </a>
          </div>
        </div>
        
        {/* See More link */}
        <div className="see-more-container">
          <a href="#" className="see-more-link" onClick={(e) => e.preventDefault()}>
            See More
            <span className="see-more-arrow">→</span>
          </a>
        </div>
        
        {/* Animated career heading */}
        <div className="animated-career-section">
          <h1 className="animated-career-title">
            You are just one <span className="animated-highlight">Startupathon Challenge</span> away from an exciting career as the <span className="animated-highlight">founder of a company</span>, with a <span className="animated-highlight">full salary</span> and <span className="animated-highlight">ownership</span> in what you build.
          </h1>
          
          {/* Twitter embed with animation */}
          <div className="twitter-embed-container">
            <iframe 
              id="twitter-widget-0" 
              scrolling="no" 
              frameBorder="0" 
              allowTransparency="true" 
              allowFullScreen="true" 
              className="twitter-embed" 
              title="X Post" 
              src="https://platform.twitter.com/embed/Tweet.html?dnt=false&embedId=twitter-widget-0&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&frame=false&hideCard=false&hideThread=false&id=1814625998136029202&lang=en&origin=https%3A%2F%2Fpersistventures.com%2Fstartupathon%23ongoing-pro&sessionId=2fa803cc9117e498e73115e42a3c26001898429a&theme=light&widgetsVersion=2615f7e52b7e0%3A1702314776716&width=550px"
              style={{ width: '550px', height: '552px' }}
              data-tweet-id="1814625998136029202"
            ></iframe>
          </div>
          
          {/* Subscription section */}
          <div className="subscription-container">
            <div className="subscription-wrap">
              <h4 className="subscription-heading">
                Sign up to get notified first about new Startupathon projects and receive updates through our newsletter.
              </h4>
              <div className="subscription-form-block">
                <form 
                  method="post" 
                  name="Newsletters-Subscription" 
                  data-name="Newsletters Subscription" 
                  action="https://hook.eu2.make.com/a3z5hntfgfufx36ug8oqo0o82cj96i7s" 
                  id="newsletter-subscription-form" 
                  className="subscription-form"
                >
                  <input 
                    className="subscription-input" 
                    maxLength="256" 
                    name="email" 
                    placeholder="Enter your email ID" 
                    type="email" 
                    id="subscription-email" 
                    required 
                  />
                  <input 
                    type="submit" 
                    data-wait="Please wait..." 
                    className="subscription-button" 
                    value="Subscribe" 
                  />
                </form>
                <div className="subscription-success" role="region" aria-label="Subscription success">
                  <div className="success-text">
                    Thank you! <br />We'll notify you as soon as a new Startupathon challenge is added.
                  </div>
                </div>
                <div className="subscription-error" role="region" aria-label="Subscription failure">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="footer-section">
          <div className="footer-content-wrapper">
            <div className="footer-content">
              <div className="footer-content-left">
                <div className="footer-logo-container">
                  <a href="/" className="footer-logo-link">
                    <img 
                      src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/623b0335353b456141200393_pv%20logo-min.png" 
                      loading="lazy" 
                      alt="persist ventures logo" 
                      className="footer-logo"
                    />
                  </a>
                  <h2 className="footer-brand-name">persist ventures</h2>
                </div>
                <div className="footer-description">
                  <div className="footer-text">
                    <p className="footer-paragraph">
                      We partner with entrepreneurs and businesses to help scale and grow their ideas. 
                      With a diverse team skilled in every sector there is no business we can not help get a leg up.
                    </p>
                  </div>
                  <div className="footer-social-grid">
                    <a 
                      aria-label="Instagram link" 
                      href="https://www.instagram.com/persistventures/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="footer-social-link"
                    >
                      <div className="social-icon">
                        <svg aria-hidden="true" role="img" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                        </svg>
                      </div>
                    </a>
                    <a 
                      aria-label="LinkedIn link" 
                      href="https://www.linkedin.com/company/persist-ventures/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="footer-social-link"
                    >
                      <div className="social-icon">
                        <svg aria-hidden="true" role="img" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-content-right">
                <div className="footer-links-container">
                  <div className="footer-links-column">
                    <div className="footer-links-header">
                      <h3 className="footer-heading">Quick links</h3>
                    </div>
                    <a href="/" target="_blank" rel="noopener noreferrer" className="footer-link">Home</a>
                    <a href="/investor-application" target="_blank" rel="noopener noreferrer" className="footer-link">Investor Application</a>
                    <a href="/apply-for-a-full-time-position" target="_blank" rel="noopener noreferrer" className="footer-link">Job Application</a>
                    <a href="/apply-to-accelerator" target="_blank" rel="noopener noreferrer" className="footer-link">Apply To Startup Accelerator</a>
                    <a href="https://get-a-job.persistventures.com/" target="_blank" rel="noopener noreferrer" className="footer-link">Career Accelerator Program</a>
                    <a href="/our-team" target="_blank" rel="noopener noreferrer" className="footer-link">Our team</a>
                  </div>
                  <div className="footer-links-column">
                    <div className="footer-links-header">
                      <h3 className="footer-heading">Legal</h3>
                    </div>
                    <a href="/terms-of-service" target="_blank" rel="noopener noreferrer" className="footer-link">Terms of service</a>
                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="footer-link">Privacy policy</a>
                    <a href="https://dia.wiki" target="_blank" rel="noopener noreferrer" className="footer-link">Decentralized Intelligence Agency</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="copyright-text">All rights reserved © 2025 persistventures.com</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
export default App;