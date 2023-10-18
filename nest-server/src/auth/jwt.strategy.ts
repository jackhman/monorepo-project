import { ExtractJwt, Strategy } from "passport-jwt"
import { PassportStrategy } from "@nestjs/passport"
import { Injectable, UnauthorizedException } from "@nestjs/common"
import { jwtConstants } from "./constants"
// 使用之后会自动校验token是否合法
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret
    })
  }

  async validate(payload: any) {
    return payload
  }

  handleRequest(err, user) {
    console.log(123123)
    console.log(err, user)
    if (err || !user) {
      throw new UnauthorizedException('Token Invalid', "401");
    }
    return user;
  }
}
