export type ResponseGitHubBranch = {
  name: string;
  commit: GitHubCommit;
  _links: {
    self: string;
    html: string;
  };
  protected: boolean;
  protection: {
    enabled: boolean;
    required_status_checks: {
      enforcement_level: string;
      contexts: string[];
      checks: string[];
    };
  };
  protection_url: string;
};

export type GitHubCommit = {
  sha: string;
  node_id: string;
  commit: {
    author: GitHubUserBasic;
    committer: GitHubUserBasic;
    message: string;
    tree: {
      sha: string;
      url: string;
    };
    url: string;
    comment_count: number;
    verification: {
      verified: boolean;
      reason: string;
      signature: string | null;
      payload: string | null;
      verified_at: string | null;
    };
  };
  url: string;
  html_url: string;
  comments_url: string;
  author: GitHubUser;
  committer: GitHubUser;
  parents: GitHubCommitParent[];
};

export type GitHubUserBasic = {
  name: string;
  email: string;
  date: string;
};

export type GitHubUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};

export type GitHubCommitParent = {
  sha: string;
  url: string;
  html_url: string;
};
