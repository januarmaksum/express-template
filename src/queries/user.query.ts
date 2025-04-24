// import prisma from '../database/prisma.client';

export class UserQuery {
  // async getUsers() {
  //   return prisma.user.findMany();
  // }
  async getUsers() {
    return [
      {
        id: '1',
        displayName: 'John Doe',
        username: 'jhon_doe',
      },
    ];
  }

  async getUserById() {
    // return prisma.user.findUnique({ where: { id } });
  }

  async createUser() {
    // return prisma.user.create({ data: user });
  }

  async updateUser() {
    // return prisma.user.update({ where: { id }, data: user });
  }

  async deleteUser() {
    // return prisma.user.delete({ where: { id } });
  }
}

export const userQuery = new UserQuery();
