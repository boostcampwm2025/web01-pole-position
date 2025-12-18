import { Controller, Get, Query, Res } from '@nestjs/common';
import type { Response } from 'express';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('api/auth/login')
  login(@Res() res: Response) {
    const params = new URLSearchParams({
      client_id: process.env.GITHUB_CLIENT_ID ?? '',
      redirect_uri: process.env.GITHUB_REDIRECT_URI ?? '',
      scope: 'read:org',
    });

    return res.redirect(`https://github.com/login/oauth/authorize?${params.toString()}`);
  }

  @Get('auth/github/callback')
  async callback(@Query('code') code?: string) {
    if (!code) {
      return { success: false, message: '코드가 없습니당' };
    }
    return await this.authService.verifyCohortByGithubOAuth(code);
  }
}
