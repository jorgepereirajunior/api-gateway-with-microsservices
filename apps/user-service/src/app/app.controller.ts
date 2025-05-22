import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { MessagePattern, Payload } from '@nestjs/microservices'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('get-user-profile')
  getUserProfile(@Payload() userId: string) {
    return this.appService.getUserProfile(userId)
  }
}
