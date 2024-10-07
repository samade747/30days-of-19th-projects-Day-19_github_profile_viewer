"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/app/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/app/components/ui/avatar";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import ClipLoader from "react-spinners/ClipLoader";

type UserProfile = {
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  followers: number;
  following: number;
  location: string;
  public_repos: number;
  name: string;
};

export default function GithubProfileViewer() {
  const [username, setUsername] = useState<string>("");
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUserData = async (): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const profileResponse = await fetch(`https://api.github.com/users/${username}`);
      if (!profileResponse.ok) throw new Error("Failed to fetch user profile");

      const profileData = await profileResponse.json();
      setUserProfile(profileData);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-xl">
      <h1 className="text-3xl font-semibold text-center mb-6">GitHub Profile Viewer</h1>

      <Input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub Username"
        className="mb-4"
      />

      <Button onClick={fetchUserData} className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Fetch Profile
      </Button>

      {loading ? (
        <div className="flex justify-center mt-4">
          <ClipLoader color="#3B82F6" />
        </div>
      ) : error ? (
        <p className="text-red-500 mt-4">{error}</p>
      ) : (
        userProfile && (
          <Card className="mt-6">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={userProfile.avatar_url} alt="Avatar" />
                  <AvatarFallback>{userProfile.login.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg font-semibold">{userProfile.name}</CardTitle>
                  <CardDescription className="text-gray-500">{userProfile.bio}</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-2">
              <p>Location: {userProfile.location}</p>
              <p>Followers: {userProfile.followers}</p>
              <p>Following: {userProfile.following}</p>
              <p>Public Repos: {userProfile.public_repos}</p>
              <p>Login: {userProfile.login}</p>




            </CardContent>

            <CardDescription>{userProfile.bio}</CardDescription>

            <CardDescription> 
              <a
                href={`https://github.com/${userProfile.login}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on GitHub
              </a>

            </CardDescription>

            



            <CardFooter>
              <a
                href={userProfile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </CardFooter>
          </Card>
        )
      )}
    </div>
  );
}
