import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { FindUserDto } from '../user/dto/find-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
  ) {}

  async validateUser(userName: string, pass: string): Promise<any> {
    const findUserDto: FindUserDto = {
      userName
    }
    const user = await this.userService.findOne(findUserDto);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}