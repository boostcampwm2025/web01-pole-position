import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

type TokenResponse = {
  access_token: string;
  token_type: string;
  scope: string;
};

@Injectable()
export class GithubOAuthClient {
  constructor(private readonly http: HttpService) {}

  async exchangeCodeForToken(code: string): Promise<string> {
    // redirect_uri로 전달받은 일회성 인가 코드 -> Access Token 발급받아오기
    const res = await firstValueFrom(
      this.http.post<TokenResponse>(
        'https://github.com/login/oauth/access_token',
        {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          redirect_uri: process.env.GITHUB_REDIRECT_URI,
          code,
        },
        {
          headers: {
            Accept: 'application/json',
          },
        },
      ),
    );

    return res.data.access_token;
  }

  async getUserOrgs(accessToken: string): Promise<string[]> {
    const res = await firstValueFrom(
      this.http.get<Array<{ login: string }>>('https://api.github.com/user/orgs', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/vnd.github+json',
        },
      }),
    );
    return res.data.map((o) => o.login);
  }
}
