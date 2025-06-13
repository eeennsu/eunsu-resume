import { octokit } from '@lib/api';
import { withApiHandler } from '@lib/api/next-api';
import { NextResponse } from 'next/server';

export const GET = withApiHandler(async () => {
  try {
    const response = await octokit.request('GET /repos/{owner}/{repo}/branches/{branch}', {
      owner: 'eeennsu',
      repo: 'eunsu-resume',
      branch: process.env.NODE_ENV === 'production' ? 'main' : 'dev',
    });

    return NextResponse.json(response.data);
  } catch (error: unknown) {
    console.log('error!', error);
    return NextResponse.json({ error }, { status: 500 });
  }
});

export const dynamic = 'force-dynamic';
