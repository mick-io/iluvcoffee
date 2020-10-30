import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity() // sql table === 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  brand: string;

  @Column({ default: 0 })
  recommendations: number;

  @JoinTable() // Join the 2 tables - only the OWNER-side does this
  @ManyToMany(
    type => Flavor, // eslint-disable-line @typescript-eslint/no-unused-vars
    flavor => flavor.coffees, // what is "coffee" within the Flavor Entity
    {
      cascade: true, // ['insert']
    },
  )
  flavors: Flavor[];
}
