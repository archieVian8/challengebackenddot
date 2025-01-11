import { Controller, Post, Body, Get, Query, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { EventOrganizerService } from './eventorganizer.service';
import { JwtAuthGuard } from '../../auth/jwt.auth.guard';

@Controller('eventorganizer')
export class EventOrganizerController {
  constructor(private readonly eventOrganizerService: EventOrganizerService) {}

  @Post('sign-up')
  async signUp(@Body() data: any) {
    try {
      await this.eventOrganizerService.signUp(data);
      return { message: 'Event Organizer successfully created' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('sign-in')
  async signIn(@Body() body: { email: string; password: string }) {
    try {
      return await this.eventOrganizerService.signIn(body.email, body.password)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }

  @Post('refresh-token')
  async refreshToken(@Body() body: { refreshToken: string }) {
    try {
      return await this.eventOrganizerService.refreshAccessToken(body.refreshToken);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }

  @Get('all-eventorganizers')
  @UseGuards(JwtAuthGuard)
  async getAllEventOrganizers() {
    try {
      return await this.eventOrganizerService.getAllEventOrganizers();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('profile-id')
  @UseGuards(JwtAuthGuard)
  async viewProfileEventOrganizerById(@Query('userId') userId: string) {
    try {
      const organizer = await this.eventOrganizerService.viewProfileEventOrganizerById(Number(userId));
      return organizer;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}

