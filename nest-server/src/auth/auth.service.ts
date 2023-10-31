import { Injectable } from "@nestjs/common"
import { FindUserDto } from "@shared/dto/user/user.dto"
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
  removeToken() {
    this.token = null
  }

  constructor(private jwtService: JwtService) {}
  async login(user: FindUserDto) {
    const payload = { username: user.userName, userId: user.id }
    const token = this.jwtService.sign(payload)
    this.setToken(token)
    return {
      token
    }
  }

  logout() {
    this.removeToken()
  }
}
