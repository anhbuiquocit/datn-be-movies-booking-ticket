import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Admin } from 'src/@generated/prisma-nestjs-graphql/admin/admin.model';
const prisma = new PrismaClient();
@Injectable()
export class AdminService {
  async findOne(username: string): Promise<Admin> {
    const adminFind = await prisma.admin.findUnique({
      where: {
        username,
      },
    });
    return adminFind;
  }
}
