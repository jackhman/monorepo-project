import { Module } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { PassportModule } from "@nestjs/passport"
import { JwtModule } from "@nestjs/jwt"
import { jwtConstants } from "./constants"
import { JwtStrategy } from "./jwt.strategy"

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "1 days" }
    })
  ],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
