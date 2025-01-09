import { Controller, Post, Body, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';

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

  @Get('all-user')
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get('profile-id')
  async viewProfileById(@Query('userId') userId: string) {
    try {
      return await this.userService.viewProfileById(Number(userId));
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
