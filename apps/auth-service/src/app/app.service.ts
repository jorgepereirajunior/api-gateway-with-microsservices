import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AppService {
  constructor(private readonly jwtService: JwtService) {}
  login(credential: { username: string; password: string }) {
    // ⭕ coded without DB logic
    if (credential.username === 'admin' && credential.password === 'password') {
      const payload = {
        sub: '123',
        username: credential.username,
        password: credential.password
      }

      const token = this.jwtService.sign(payload)

      return { token }
    }

    throw new UnauthorizedException('Invalid credentials')
  }
  getData(): { message: string } {
    return { message: 'Hello API' }
  }
}
