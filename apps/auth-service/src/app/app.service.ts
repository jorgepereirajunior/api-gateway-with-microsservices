import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AppService {
  constructor(private readonly jwtService: JwtService) {}
  login(credential: { username: string; password: string }) {
    // ⭕ coded without DB logic
    if (credential.username === 'admin' && credential.password === '123456') {
      const payload = {
        sub: '123',
        username: credential.username,
        role: 'admin'
      }

      const token = this.jwtService.sign(payload)

      return { token }
    }

    throw new UnauthorizedException('Invalid credentials')
  }

  async validateToken(token: string) {
    try {
      const decoded = this.jwtService.verify(token)
      return { valid: true, userId: decoded.sub, role: decoded.role }
    } catch (err) {
      return { valid: false, userId: null, role: null }
    }
  }
}
