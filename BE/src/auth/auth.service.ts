import { Injectable } from '@nestjs/common';
import { GithubOAuthClient } from './github-oauth.client';
import { resolveCohortFromOrgs } from './cohort-rules';

@Injectable()
export class AuthService {
  constructor(private readonly github: GithubOAuthClient) {}

  async verifyCohortByGithubOAuth(code: string) {
    // ✅ code -> access token
    const accessToken = await this.github.exchangeCodeForToken(code);

    // ✅ access token으로 내 org 목록 조회
    const orgLogins = await this.github.getUserOrgs(accessToken);

    // ✅ org 목록 -> cohort 판정
    const cohort = resolveCohortFromOrgs(orgLogins);

    return {
      accessTokenReceived: Boolean(accessToken),
      orgLogins,
      cohort,
    };
  }
}
