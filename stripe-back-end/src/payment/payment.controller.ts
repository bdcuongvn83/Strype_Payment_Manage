import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('checkout')
  async createPaymentIntent(@Body() body: { amount: number }) {
    const { amount } = body;
    console.log('createPaymentIntent: body: ', body);
    const paymentIntent = await this.paymentService.createPaymentIntent(
      amount,
      'usd',
    );
    return { clientSecret: paymentIntent.client_secret };
  }
}
