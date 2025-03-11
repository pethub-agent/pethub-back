```prisma
model Pet {
  id          String    @id @default(uuid())
  name        String
  ownerId     String
  location    Location? @relation(fields: [locationId], references: [id])
  locationId  String?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

model Location {
  id        String   @id @default(uuid())
  petId     String   @unique
  latitude  Float
  longitude Float
  timestamp DateTime @default(now())

  pet       Pet      @relation(fields: [petId], references: [id])
}
```
