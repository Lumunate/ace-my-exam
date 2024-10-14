import User from '@/entities/user';
import AppDataSource from '@/utils/typeorm';

export const UserRepository = AppDataSource.getRepository(User).extend({
  async registerUser(userData: Omit<User, 'id' | 'createdAt'>) {
    const user = this.create(userData);

    await this.save(user);

    return user;
  },

  async getUserbyEmail(email: string) {
    return this.findOne({ where: { email } });
  },
});
