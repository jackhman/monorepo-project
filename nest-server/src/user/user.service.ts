import { Injectable } from "@nestjs/common"

@Injectable()
export class UserService {
  constructor()
  login(): string {
    return "Hello login!"
  }
}
