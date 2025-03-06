import { useState, useEffect } from "react";
import "./AdminDashboard.css";
import { apiUrl } from "../main";
function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("challenges");
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // New state for the add challenge form
  const [showAddForm, setShowAddForm] = useState(false);
  const [newChallenge, setNewChallenge] = useState({
    title: "",
    slug: "",
    funding: "",
    description: "",
    deadline: "",
    imageUrl: "",
    isVisible: true,
  });

  // Fetch challenges on component mount
  useEffect(() => {
    fetchChallenges();
  }, []);

  // Function to fetch challenges
  const fetchChallenges = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(apiUrl + "/api/challenges/all");

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched challenges:", data);
      setChallenges(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching challenges:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  // Function to toggle challenge visibility
  const handleVisibilityToggle = async (id, currentVisibility) => {
    try {
      const response = await fetch(
        apiUrl + "/challenges/" + id + "/visibility",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isVisible: !currentVisibility }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to update visibility (${response.status})`);
      }

      // Update local state to reflect the change
      setChallenges(
        challenges.map((challenge) =>
          challenge._id === id
            ? { ...challenge, isVisible: !currentVisibility }
            : challenge
        )
      );
    } catch (err) {
      console.error("Error updating visibility:", err);
      alert(`Failed to update visibility: ${err.message}`);
    }
  };

  // Handle input changes for the new challenge form
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewChallenge({
      ...newChallenge,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Generate slug from title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  // Handle title change to auto-generate slug
  const handleTitleChange = (e) => {
    const title = e.target.value;
    setNewChallenge({
      ...newChallenge,
      title,
      slug: generateSlug(title),
    });
  };

  // Submit new challenge
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(apiUrl + "/challenges", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newChallenge),
      });

      if (!response.ok) {
        throw new Error(`Failed to add challenge: ${response.status}`);
      }

      const addedChallenge = await response.json();

      // Add the new challenge to the list
      setChallenges([...challenges, addedChallenge]);

      // Reset form and hide it
      setNewChallenge({
        title: "",
        slug: "",
        funding: "",
        description: "",
        deadline: "",
        imageUrl: "",
        isVisible: true,
      });
      setShowAddForm(false);

      alert("Challenge added successfully!");
    } catch (error) {
      console.error("Error adding challenge:", error);
      alert(`Failed to add challenge: ${error.message}`);
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Left Panel */}
      <div className="admin-sidebar">
        <div className="admin-logo">
          <h2>Admin Panel</h2>
        </div>
        <nav className="admin-nav">
          <ul>
            <li
              className={activeTab === "challenges" ? "active" : ""}
              onClick={() => setActiveTab("challenges")}
            >
              Challenges
            </li>
            <li
              className={activeTab === "completers" ? "active" : ""}
              onClick={() => setActiveTab("completers")}
            >
              Completers
            </li>
            <li
              className={activeTab === "founders" ? "active" : ""}
              onClick={() => setActiveTab("founders")}
            >
              Founders
            </li>
            <li
              className={activeTab === "subscribers" ? "active" : ""}
              onClick={() => setActiveTab("subscribers")}
            >
              Subscribers
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="admin-content">
        {activeTab === "challenges" && (
          <div className="challenges-management">
            <div className="challenges-header">
              <h1>Challenges Management</h1>
              <button
                className="add-challenge-btn"
                onClick={() => setShowAddForm(!showAddForm)}
              >
                {showAddForm ? "Cancel" : "Add Challenge"}
              </button>
            </div>

            {showAddForm && (
              <div className="add-challenge-form">
                <h3>Add New Challenge</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={newChallenge.title}
                      onChange={handleTitleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="slug">Slug:</label>
                    <input
                      type="text"
                      id="slug"
                      name="slug"
                      value={newChallenge.slug}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="funding">Funding:</label>
                    <input
                      type="text"
                      id="funding"
                      name="funding"
                      value={newChallenge.funding}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                      id="description"
                      name="description"
                      value={newChallenge.description}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="deadline">Deadline:</label>
                    <input
                      type="text"
                      id="deadline"
                      name="deadline"
                      value={newChallenge.deadline}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input
                      type="text"
                      id="imageUrl"
                      name="imageUrl"
                      value={newChallenge.imageUrl}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group checkbox">
                    <label htmlFor="isVisible">
                      <input
                        type="checkbox"
                        id="isVisible"
                        name="isVisible"
                        checked={newChallenge.isVisible}
                        onChange={handleInputChange}
                      />
                      Visible on main page
                    </label>
                  </div>

                  <button type="submit" className="submit-btn">
                    Add Challenge
                  </button>
                </form>
              </div>
            )}

            {loading ? (
              <div className="loading">Loading challenges...</div>
            ) : error ? (
              <div className="error">
                <p>Error loading challenges: {error}</p>
                <button
                  onClick={fetchChallenges}
                  className="retry-btn"
                  style={{ backgroundColor: "#4a4a82" }}
                >
                  Retryy
                </button>
              </div>
            ) : (
              <div className="challenges-table-container">
                <table className="challenges-table">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Title</th>
                      <th>Funding</th>
                      <th>Deadline</th>
                      <th>Description</th>
                      <th>Visibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    {challenges.map((challenge, index) => (
                      <tr key={challenge._id}>
                        <td>{index + 1}</td>
                        <td>{challenge.title}</td>
                        <td>${challenge.funding}</td>
                        <td>{challenge.deadline}</td>
                        <td className="description-cell">
                          {challenge.description.length > 100
                            ? `${challenge.description.substring(0, 100)}...`
                            : challenge.description}
                        </td>
                        <td>
                          <div className="visibility-toggle">
                            <label className="switch">
                              <input
                                type="checkbox"
                                checked={challenge.isVisible}
                                onChange={() =>
                                  handleVisibilityToggle(
                                    challenge._id,
                                    challenge.isVisible
                                  )
                                }
                              />
                              <span className="slider round"></span>
                            </label>
                            <span className="visibility-label">
                              {challenge.isVisible ? "Visible" : "Hidden"}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {activeTab !== "challenges" && (
          <div className="section-not-available">
            <h1>
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}{" "}
              Management
            </h1>
            <p>This section is not available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
