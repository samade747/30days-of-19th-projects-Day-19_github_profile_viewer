// "use client";
// import React, { useState } from "react";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
//   CardFooter,
// } from "@/app/components/ui/card";
// import { Input } from "@/app/components/ui/input";
// import { Button } from "@/app/components/ui/button";
// import { Avatar, AvatarImage, AvatarFallback } from "@/app/components/ui/avatar";
// import {
//   ExternalLinkIcon,
//   ForkliftIcon,
//   LocateIcon,
//   RecycleIcon,
//   StarIcon,
//   UserIcon,

// }  from "lucide-react";
// import clipLoader from "react-spinners/ClipLoader";

// type UserProfile = {
//   login: string;
//   avatar_url: string;
//   html_url: string;
//   bio: string;
//   follwers: number;
//   following: number;
//   location: string;
//   public_repos: number;
//   public_gists: number;
//   name: string;
//   company: string;
//   blog: string;
//   twitter_username: string;
//   created_at: Date;
//   updated_at: Date;
//   total_private_repos: number;
//   private_gists: number;
//   disk_usage: number;
//   collaborators: number;
//   plan: {
//     collaborators: number;
//     name: string;
//     space: number;
//     private_repos: number;
    

//   };

// };


// type UserRepo = {
//   id: number;
//   name: string;
//   html_url: string;
//   description: string;
//   fork: boolean;
//   stargazers_count: number;
//   forks_count: number;
//   open_issues_count: number;
//   created_at: Date;
//   updated_at: Date;
//   pushed_at: Date;
//   language: string;
//   license: {
//     name: string;
//     spdx_id: string;
//     url: string;
//     node_id: string;
// }

// }


// export default function GithubProfileViewer(){
//   const [username, setUsername] = useState<string>('')

//   const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

//   const [userRepos, setUserRepos] = useState<UserRepo[]>([]);

//   const [loading , setLoding] = useState<boolean>(false);

//   const [error, setError] = useState<string | null>(null);


// const fetchUserData = async (): Promise<void> => {
//   setLoding(true);
//   setError(null);

// try {
//   const profileResonse = await fetch(`https://api.github.com/users/${username}`

//   );
//   if (!profileResonse.ok) {
//     throw new Error('Failed to fetch user profile');
//   }

//   const profileData = await profileResonse.json();
//   const reposRespone = await fetch(
//     `https://api.github.com/users/${username}/repos`
//   );
//   if(!reposRespone.ok){
//     throw new Error('Failed to fetch repos');
// }

// if (!reposRespone.ok) {
//   throw new Error('Failed to fetch repos');
// }


//   const reposData = await reposRespone.json();

//   setUserProfile(profileData);
//   setUserRepos(reposData);

// } catch (error: any){
//   setError(error.message);
// } finally{
//   setLoding(false);
// }
// }


// }





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
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/app/components/ui/avatar";
import { ClipLoader } from "react-spinners";

type UserProfile = {
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  followers: number; // Fixed typo
  following: number;
  location: string;
  public_repos: number;
  public_gists: number;
  name: string;
  company: string;
  blog: string;
  twitter_username: string;
  created_at: Date;
  updated_at: Date;
  total_private_repos: number;
  private_gists: number;
  disk_usage: number;
  collaborators: number;
  plan: {
    collaborators: number;
    name: string;
    space: number;
    private_repos: number;
  };
};

type UserRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  fork: boolean;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  language: string;
  license: {
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  };
};

export default function GithubProfileViewer() {
  const [username, setUsername] = useState<string>("");
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [userRepos, setUserRepos] = useState<UserRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(false); // Fixed typo
  const [error, setError] = useState<string | null>(null);

  const fetchUserData = async (): Promise<void> => {
    setLoading(true); // Fixed typo
    setError(null);

    try {
      const profileResponse = await fetch(`https://api.github.com/users/${username}`);
      if (!profileResponse.ok) {
        throw new Error("Failed to fetch user profile");
      }

      const profileData = await profileResponse.json();
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!reposResponse.ok) {
        throw new Error("Failed to fetch repos");
      }

      const reposData = await reposResponse.json();
      setUserProfile(profileData);
      setUserRepos(reposData);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub Username"
      />
      <Button onClick={fetchUserData}>Fetch Profile</Button>
      {loading ? (
        <ClipLoader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        userProfile && (
          <Card>
            <CardHeader>
              <Avatar>
                <AvatarImage src={userProfile.avatar_url} />
                <AvatarFallback>{userProfile.login.charAt(0)}</AvatarFallback>
              </Avatar>
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
              <a href={userProfile.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </CardFooter>
          </Card>
        )
      )}
    </div>
  );
}
