import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { MessagePattern, Payload } from '@nestjs/microservices'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('auth-login')
  async login(@Payload() credential: { username: string; password: string }) {
    return this.appService.login(credential)
  }

  @MessagePattern('validate-token')
  async validateToken(@Payload() token: string) {
    return this.appService.validateToken(token)
  }
}
