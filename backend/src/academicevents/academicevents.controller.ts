import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    Query,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { AcademiceventsService } from './academicevents.service';
  
  @Controller('academicevents')
  export class AcademiceventsController {
    constructor(private readonly academiceventsService: AcademiceventsService) {}
  
    @Post('create')
    async createAcademicEvent(@Body() body: any) {
      try {
        return await this.academiceventsService.createAcademicEvent(body);
      } catch (error) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
    }
  
    @Get('all')
    async viewAllAcademicEvents() {
      return await this.academiceventsService.viewAllAcademicEvents();
    }
  
    @Get('jenjang')
    async viewAcademicEventsByJenjang(@Query('eventsJenjang') eventsJenjang: string) {
        try {
            const result = await this.academiceventsService.viewAcademicEventsByJenjang(eventsJenjang);
            if (Array.isArray(result) && result.length === 0) {
                return { message: 'Academic events belum tersedia' }; 
            }

        return result; 
    } catch (error) {
        throw new HttpException(error.message || 'Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

  
    @Get('held')
    async viewAcademicEventsByHeld(@Query('eventsHeld') eventsHeld: string) {
    try {
        const result = await this.academiceventsService.viewAcademicEventsByHeld(eventsHeld);
        if (Array.isArray(result) && result.length === 0) {
            return { message: 'Academic events belum tersedia' }; 
        }

    return result; 
    } catch (error) {
        throw new HttpException(error.message || 'Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
  
    @Get('by-jenjang-held')
    async viewAcademicEventsByJenjangHeld(
    @Query('eventsJenjang') eventsJenjang: string,
    @Query('eventsHeld') eventsHeld: string,
    ) {
    try {
        const result = await this.academiceventsService.viewAcademicEventsByJenjangHeld(eventsJenjang, eventsHeld);

        if (Array.isArray(result) && result.length === 0) {
        return { message: 'Academic events belum tersedia' };
        }

        return result;
    } catch (error) {
        throw new HttpException(error.message || 'Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    }

    @Post('join')
    async joinAcademicEvent(@Body() body: any) {
      return await this.academiceventsService.joinAcademicEvent(body);
    }
  
    @Get('applicants-id/:idAcademicEvents')
    async viewAcademicEventsApplicants(
    @Param('idAcademicEvents') idAcademicEvents: number,
    @Query('idOrganizer') idOrganizer: number,
    ) {
    return this.academiceventsService.viewAcademicEventsApplicants(
        Number(idAcademicEvents),
        Number(idOrganizer),
    );
    }
  
    @Get('academicevents-id/:id')
    async viewAcademicEventsById(@Param('id') id: number) {
      return await this.academiceventsService.viewAcademicEventsById(Number(id)); 
    }

    @Put('update/:idAcademicEvents')
    async updateAcademicEvent(
      @Param('idAcademicEvents') idAcademicEvents: number,
      @Query('idOrganizer') idOrganizer: number,
      @Body() body: any,
    ) {
      try {
        return await this.academiceventsService.updateAcademicEvent(
          Number(idAcademicEvents),
          Number(idOrganizer),
          body,
        );
      } catch (error) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
    }

    @Delete('delete/:idAcademicEvents')
    async deleteAcademicEvent(
      @Param('idAcademicEvents') idAcademicEvents: number,
      @Query('idOrganizer') idOrganizer: number,  
    ) {
      try {
        return await this.academiceventsService.deleteAcademicEvent(
          Number(idAcademicEvents),
          Number(idOrganizer),
        );
      } catch (error) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
    }
    
    @Get('by-organizer/:idOrganizer')
    async viewAcademicEventsByOrganizerId(@Param('idOrganizer') idOrganizer: number) {
      return await this.academiceventsService.viewAcademicEventsByOrganizerId(Number(idOrganizer));
    }
    
}
  