import { Film } from './../../@generated/prisma-nestjs-graphql/film/film.model';
import { Injectable, HttpException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class FilmService {
  async connection(args): Promise<Film[]> {
    const { where, orderBy, cursor, take, skip, distinct } = args;
    const listFilm = await prisma.film.findMany({
      where,
      orderBy,
      cursor,
      take,
      skip,
      distinct,
    });
    return listFilm;
  }
  async findOne(args): Promise<Film> {
    const { where } = args;
    const film = await prisma.film.findUnique({
      where,
    });
    return film;
  }
  async createOne(args): Promise<Film> {
    const { data } = args;
    const filmCreate = await prisma.film.create({
      data,
    });
    return filmCreate;
  }
  async updateOne(args): Promise<Film> {
    const { data, where } = args;
    const filmUpdate = await prisma.film.update({
      where,
      data,
    });
    return filmUpdate;
  }
  async deleteOne(args): Promise<boolean> {
    const { where } = args;
    const filmDelete = await prisma.film.delete({
      where,
    });
    return true;
  }
}
