// pages/index.tsx
import React from "react";
import GithubProfileViewer from "@/app/components/github-profile";

export default function Home() {
  return (
    <div>
      <h1>GitHub Profile Viewer</h1>
      <GithubProfileViewer />
    </div>
  );
}
