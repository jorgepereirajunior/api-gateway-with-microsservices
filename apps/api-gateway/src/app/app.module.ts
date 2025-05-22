import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthController } from './auth/auth.controller'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { UserController } from './user/user.controller'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH-SERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8877
        }
      },
      {
        name: 'USER-SERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8878
        }
      }
    ])
  ],
  controllers: [AppController, AuthController, UserController],
  providers: [AppService]
})
export class AppModule {}
