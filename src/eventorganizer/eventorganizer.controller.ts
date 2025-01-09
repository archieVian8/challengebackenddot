import { Controller, Post, Body, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import { EventOrganizerService } from './eventorganizer.service';

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
  async signIn(@Body() data: any) {
    try {
      const response = await this.eventOrganizerService.signIn(data);
      return response;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }

  @Get('all-eventorganizers')
  async getAllEventOrganizers() {
    try {
      return await this.eventOrganizerService.getAllEventOrganizers();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('profile-id')
  async viewProfileEventOrganizerById(@Query('userId') userId: string) {
    try {
      const organizer = await this.eventOrganizerService.viewProfileEventOrganizerById(Number(userId));
      return organizer;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}

