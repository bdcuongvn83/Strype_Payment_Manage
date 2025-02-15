import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { ConfigModule } from '@nestjs/config/dist/config.module';

@Module({
  imports: [ConfigModule], // ✅ Import ConfigModule
  providers: [PaymentService],
  controllers: [PaymentController],
})
export class PaymentModule {}
