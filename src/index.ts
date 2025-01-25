import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// similar to mongoose import, then mongoose.connect()

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
      data: {
          email : username,
          password,
          firstName,
          lastName
      }
    });
    console.log(res);
  }

  insertUser("admin1", "123456", "swastik", "panigrahi");