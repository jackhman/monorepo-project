import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { FindUserDto } from '../user/dto/find-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
  ) {}
  async login(user: FindUserDto) {
    const payload = { username: user.userName, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}