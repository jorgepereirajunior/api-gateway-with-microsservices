import { Controller, Get, Inject, Req, UseGuards } from '@nestjs/common'

import { ClientProxy } from '@nestjs/microservices'

import { AuthGuard } from '../../guards/auth/auth.guard'
import { firstValueFrom } from 'rxjs'

@Controller('user')
export class UserController {
  constructor(
    @Inject('USER-SERVICE')
    private readonly userClient: ClientProxy
  ) {}

  @UseGuards(AuthGuard)
  @Get()
  async getUserProfile(@Req() req) {
    const userId = req.user.userId

    const user$ = this.userClient.send('get-user-profile', userId)

    return await firstValueFrom(user$)
  }
}
