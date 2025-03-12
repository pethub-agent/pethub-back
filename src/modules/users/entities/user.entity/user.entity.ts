export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
  }
  
  export class User {
    id: number;
    email: string;
    password: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
  }