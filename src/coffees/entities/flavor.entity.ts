/* Flavor Entity - FINAL CODE */
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from './coffee.entity';

@Entity()
export class Flavor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(
    type => Coffee, // eslint-disable-line @typescript-eslint/no-unused-vars
    coffee => coffee.flavors, // what is "flavor" within the Coffee Entity
  )
  coffees: Coffee[];
}
