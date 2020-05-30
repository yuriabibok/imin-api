import { Injectable } from '@nestjs/common';
import sequelize from './db/config';
import { Person } from './db/models/Person';

@Injectable()
export class AppService {
  async getHello(): Promise<Person> {
    await sequelize.sync();

    const personRepository = sequelize.getRepository(Person);

    await personRepository.create({ name: 'Luke Skywalker' });
    const person = await personRepository.findOne({ where: { name: 'Luke Skywalker' } });

    return person;
  }
}
