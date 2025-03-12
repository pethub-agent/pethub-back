import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule as Jwt, JwtService } from '@nestjs/jwt';


@Module({
  imports: [
    Jwt.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('jwt.expiresIn')
      }),
      inject: [ConfigService]
    })
  ],
  providers: [JwtService]
})
export class JwtModule {}
