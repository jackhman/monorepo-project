import { Module } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { UserModule } from "../user/user.module"
import { PassportModule } from "@nestjs/passport"
import { JwtModule } from "@nestjs/jwt"
import { jwtConstants } from "./constants"
import { JwtStrategy } from "./jwt.strategy"
import { LocalStrategy } from "./local.strategy"

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: 3600 }
    })
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
