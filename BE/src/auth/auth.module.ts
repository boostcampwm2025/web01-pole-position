import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GithubOAuthClient } from './github-oauth.client';

@Module({
  imports: [HttpModule],
  controllers: [AuthController],
  providers: [AuthService, GithubOAuthClient],
})
export class AuthModule {}
