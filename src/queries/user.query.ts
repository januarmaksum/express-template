export class UserQuery {
  async getUsers() {
    return [
      {
        id: '1',
        displayName: 'John Doe',
        username: 'jhon_doe',
      },
    ];
  }
}

export const userQuery = new UserQuery();
