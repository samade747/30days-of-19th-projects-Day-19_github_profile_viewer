"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/app/components/ui/card";
import Image from "next/image"; // Importing Image from Next.js

// Define the UserProfile type for strict type checking
type UserProfile = {
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  followers: number;
  following: number;
  location: string;
  public_repos: number;
  public_gists: number;
  name: string;
};

// Define the UserRepo type for repository structure
type UserRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
};

export default function GithubProfileViewer() {
  const [username, setUsername] = useState<string>("");
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [userRepos, setUserRepos] = useState<UserRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const fetchUserData = async (): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const profileResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      if (!profileResponse.ok) {
        throw new Error("Failed to fetch user profile");
      }

      const profileData: UserProfile = await profileResponse.json();
      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      if (!reposResponse.ok) {
        throw new Error("Failed to fetch repos");
      }

      const reposData: UserRepo[] = await reposResponse.json();
      setUserProfile(profileData);
      setUserRepos(reposData);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addComment = (): void => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="container">
      <input
        className="input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub Username"
      />
      <button className="btn" onClick={fetchUserData}>
        Fetch Profile
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        userProfile && (
          <>
            <Card>
              <CardHeader>
                {/* Optimized Image rendering using Next.js Image */}
                <Image
                  src={userProfile.avatar_url}
                  alt={userProfile.login}
                  width={100}
                  height={100}
                  className="avatar-image"
                />
                <CardTitle>{userProfile.name}</CardTitle>
                <CardDescription>{userProfile.bio}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Location: {userProfile.location}</p>
                <p>Followers: {userProfile.followers}</p>
                <p>Following: {userProfile.following}</p>
                <p>Public Repos: {userProfile.public_repos}</p>
              </CardContent>
              <CardFooter>
                <a
                  href={userProfile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </CardFooter>
            </Card>

            {/* Light indicators based on user's activity */}
            <div className="lights-panel">
              <div className={`light ${userProfile.public_repos > 0 ? 'on' : 'off'}`}></div>
              <div className={`light ${userProfile.followers > 0 ? 'on' : 'off'}`}></div>
              <div className={`light ${userProfile.following > 0 ? 'on' : 'off'}`}></div>
            </div>

            {/* Display repositories */}
            <div className="repos-section">
              <h3>Repositories</h3>
              {userRepos.map((repo) => (
                <Card key={repo.id}>
                  <CardTitle>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      {repo.name}
                    </a>
                  </CardTitle>
                  <CardDescription>{repo.description}</CardDescription>
                  <CardContent>
                    <p>Stars: {repo.stargazers_count}</p>
                    <p>Forks: {repo.forks_count}</p>
                    <p>Open Issues: {repo.open_issues_count}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Comments Section */}
            <div className="comments-section">
              <h3>Comments</h3>
              <input
                className="comment-input"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment"
              />
              <button className="comment-btn" onClick={addComment}>
                Add Comment
              </button>
              <div className="comment-list">
                {comments.map((comment, index) => (
                  <div key={index} className="comment-item">
                    {comment}
                  </div>
                ))}
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
}
