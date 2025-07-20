import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export const OWNER = 'eeennsu';
export const REPO = 'eeennsu.github.io';

export default octokit;
