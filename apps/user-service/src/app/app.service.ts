import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  private users = [
    {
      id: '123',
      name: 'Fulano'
    },
    {
      id: '456',
      name: 'Sicrano'
    }
  ]

  getUserProfile(userId: string) {
    return this.users.find((u) => u.id === userId) || null
  }
}
