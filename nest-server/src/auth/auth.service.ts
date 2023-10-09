import { Injectable } from "@nestjs/common"
import { FindUserDto } from "../user/dto/find-user.dto"
import { JwtService } from "@nestjs/jwt"

@Injectable()
export class AuthService {
  private token: string
  getToken() {
    return this.token
  }
  setToken(token: string) {
    this.token = token
  }

  constructor(private jwtService: JwtService) {}
  async login(user: FindUserDto) {
    const payload = { username: user.userName, sub: user.id }
    const token = this.jwtService.sign(payload)
    this.setToken(token)
    return {
      token
    }
  }
}
