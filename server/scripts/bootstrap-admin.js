import { connectDB, sequelize } from '../src/config/database.js';
import { User } from '../src/models/User.js';

const main = async () => {
  try {
    await connectDB();

    const email = 'emrecirdi0@gmail.com';

    const existing = await User.findOne({
      where: { email },
    });

    if (existing) {
      console.log('Bu kullanıcı zaten mevcut:', email);
      return;
    }

    const user = await User.create({
      first_name: 'Admin',
      last_name: 'Admin',
      email,
      password: 'Derkenar2026!',
      role: 'admin',
      is_active: true,
      email_verified: true,
      permissions: {},
    });

    console.log('Admin oluşturuldu:', user.email);
  } catch (error) {
    console.error('Admin oluşturulamadı:', error);
    process.exitCode = 1;
  } finally {
    await sequelize.close();
  }
};

main();