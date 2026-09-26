import type { NextConfig } from "next";

const repository = process.env.GITHUB_REPOSITORY ?? "";
const repositoryName = repository.split("/")[1] ?? "";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

const isUserSite = repositoryName.endsWith(".github.io");

const basePath =
  isGitHubActions && repositoryName && !isUserSite
    ? `/${repositoryName}`
    : "";

const nextConfig: NextConfig = {
  output: "export",

  basePath,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
