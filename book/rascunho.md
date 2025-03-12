src/
├── app/
│   ├── app.module.ts
│   ├── app.controller.ts
│   ├── app.service.ts
├── common/
│   ├── filters/
│   │   └── http-exception.filter.ts
│   ├── guards/
│   │   └── roles.guard.ts
│   ├── decorators/
│   │   └── roles.decorator.ts
│   ├── utils/
│   │   └── password.utils.ts
├── config/
│   ├── app.config.ts
│   ├── jwt.config.ts
│   ├── prisma.config.ts
├── modules/
│   ├── auth/
│   │   ├── auth.module.ts
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── dto/
│   │   │   ├── login.dto.ts
│   │   │   ├── register.dto.ts
│   │   ├── strategies/
│   │   │   └── jwt.strategy.ts
│   │   ├── interfaces/
│   │   │   └── jwt-payload.interface.ts
│   ├── users/
│   │   ├── users.module.ts
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   ├── dto/
│   │   │   ├── create-user.dto.ts
│   │   │   ├── update-user.dto.ts
│   │   ├── entities/
│   │   │   └── user.entity.ts
│   │   ├── repositories/
│   │   │   └── users.repository.ts
│   ├── pets/
│   │   ├── pets.module.ts
│   │   ├── pets.controller.ts
│   │   ├── pets.service.ts
│   │   ├── dto/
│   │   │   ├── create-pet.dto.ts
│   │   │   ├── update-pet.dto.ts
│   │   ├── entities/
│   │   │   └── pet.entity.ts
│   │   ├── repositories/
│   │   │   └── pets.repository.ts
├── shared/
│   ├── database/
│   │   ├── prisma.service.ts
│   │   ├── database.module.ts
│   ├── jwt/
│   │   ├── jwt.module.ts
│   │   ├── jwt.service.ts
├── main.ts