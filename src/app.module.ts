import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from '@hapi/joi';
import Subscriber from './subscribers/subscriber.entity';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SubscribersService } from './subscribers/subscribers.service';
import { SubscribersModule } from './subscribers/subscribers.module';

@Module({
  imports: [
    DatabaseModule,
    SubscribersModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
