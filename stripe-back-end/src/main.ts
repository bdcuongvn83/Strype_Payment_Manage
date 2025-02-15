import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 🔥 Bật CORS cho frontend chạy trên localhost:5173
  app.enableCors({
    origin: 'http://localhost:5173', // Chỉ cho phép frontend của bạn
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Cho phép gửi cookie/token nếu cần
  });

  await app.listen(3000);
}
bootstrap();
