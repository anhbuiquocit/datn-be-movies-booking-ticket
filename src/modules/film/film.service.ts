import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class FilmService {
  async findAll(filmInput) {
    console.log('Film Input: ', filmInput);
    const { id, name, description, director, actor, time, Showing } = filmInput;
    const listFilm = await prisma.film.findMany({
      where: {
        id,
        name,
        description,
        director,
        actor,
        time,
        Showing,
      },
    });
    console.log('listFilm: ', listFilm);
    return listFilm;
  }
}
