import { IsEmail, IsString, MinLength } from 'class-validator';
import { UserRole } from 'src/modules/users/entities/user.entity/user.entity';


export class RegisterDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  role: UserRole;
}