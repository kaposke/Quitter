import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) { }

  async validateUser(username: string, password: string) {
    console.log(username, password);
    const user = await this.userService.getByUsername(username, true);
    console.log(user);
    if (!user)
      return null;

    if (!(await compare(password, user.password)))
      return null;

    // Remove password
    const { password: _, ...result } = user;

    return result;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      // eslint-disable-next-line @typescript-eslint/camelcase
      access_token: this.jwtService.sign(payload),
    };
  }

}
