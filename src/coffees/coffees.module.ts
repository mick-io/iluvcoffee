import { Connection } from 'typeorm';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Event } from '../events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import coffeesConfig from './config/coffees.config';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

@Module({
  imports: [
    ConfigModule.forFeature(coffeesConfig),
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
  ],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    {
      provide: COFFEE_BRANDS,
      inject: [Connection],
      useFactory: async (connection: Connection) => {
        const coffeeBrands = await Promise.resolve(['Buddy Brew', 'Nescafe']);
        return coffeeBrands;
      },
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
