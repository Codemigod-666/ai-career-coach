import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = db;
}


// globalThis.prisma: This global variable ensures that the Prisma client instance is
// reused across hot reloads during development. Without this, each time your app reloads, 
//, a new instance of the Prisma would be created, potentially to connection issues. 