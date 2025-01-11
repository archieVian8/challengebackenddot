import { Controller, Post, Body, Get, Query, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../../auth/jwt.auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('sign-up')
  async signUp(@Body() body: any) {
    try {
      return await this.userService.signUp(body);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('sign-in')
  async signIn(@Body() body: { email: string; password: string }) {
    try {
      return await this.userService.signIn(body.email, body.password);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }

  @Post('refresh-token')
  async refreshToken(@Body() body: { refreshToken: string }) {
    try {
      return await this.userService.refreshAccessToken(body.refreshToken);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }

  @Get('all-user')
  @UseGuards(JwtAuthGuard)
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get('profile-id')
  @UseGuards(JwtAuthGuard)
  async viewProfileById(@Query('userId') userId: string) {
    try {
      return await this.userService.viewProfileById(Number(userId));
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
