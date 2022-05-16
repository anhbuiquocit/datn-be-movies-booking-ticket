import { CreateOneFilmArgs } from './../../@generated/prisma-nestjs-graphql/film/create-one-film.args';
import { FilmError } from './film.error';
import { MyApolloError } from 'src/util/handleException/MyError';
import { FilmAggregateArgs } from './../../@generated/prisma-nestjs-graphql/film/film-aggregate.args';
import { FindManyReviewFilmArgs } from './../../@generated/prisma-nestjs-graphql/review-film/find-many-review-film.args';
import { CreateOneReviewFilmArgs } from './../../@generated/prisma-nestjs-graphql/review-film/create-one-review-film.args';
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
      select: {
        ReviewFilm: true,
        // Showing: {
        //   include: {
        //     film: {
        //       select: {
        //         id: true,
        //         name: true,
        //       },
        //     },
        //   },
        // },
        Showing: true,
        actor: true,
        createdAt: true,
        deletedAt: true,
        description: true,
        id: true,
        image: true,
        director: true,
        imageDescription1: true,
        imageDescription2: true,
        imageDescription3: true,
        name: true,
        trailler: true,
        time: true,
        updatedAt: true,
        ActorOnFilm: true,
        categoryId: true,
      },
    });
    console.log('listFilm: ', listFilm);
    return listFilm;
  }
  async filmAggregate(args: FilmAggregateArgs) {
    const { where, orderBy, cursor, take, skip, _count, _min, _max } = args;
    const aggregations = await prisma.film.aggregate({
      where,
      orderBy,
      cursor,
      take,
      skip,
      _count,
      _min,
      _max,
    });
    return aggregations;
  }
  async findOne(args): Promise<Film> {
    const { where } = args;
    const film = await prisma.film.findUnique({
      where,
    });
    return film;
  }
  async createOne(args: CreateOneFilmArgs): Promise<Film> {
    const { data } = args;
    if (!data) {
      throw new MyApolloError(FilmError.INVALID_INPUT_PARAMS);
    }
    if (!data.name) {
      throw new MyApolloError(FilmError.INVALID_NAME_OF_FILM);
    }
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
  async addComment(
    args: { filmId: string; comment: string },
    user: { userId: string; username: string },
  ) {
    await prisma.reviewFilm.create({
      data: {
        user: {
          connect: {
            id: user.userId,
          },
        },
        film: {
          connect: {
            id: args.filmId,
          },
        },
        comment: args.comment,
      },
    });
    return true;
  }

  async reviewFilmConnection(
    args: FindManyReviewFilmArgs,
    user: { userId: string; username: string },
  ) {
    const { where, orderBy, cursor, take, skip, distinct } = args;
    const lstComment = await prisma.reviewFilm.findMany({
      where,
      orderBy,
      cursor,
      take,
      skip,
      distinct,
      select: {
        id: true,
        user: true,
        userId: true,
        film: true,
        filmId: true,
        comment: true,
      },
    });
    console.log('lstComment: ', lstComment);
    return lstComment;
  }
  async checkAvailableShowing(filmId: string) {
    if (!filmId) throw new MyApolloError(FilmError.INVALID_INPUT_PARAMS);
    const filmExist = await prisma.showing.count({
      where: {
        film: {
          id: filmId,
        },
      },
    });
    if (filmExist > 0) return true;
    return false;
  }
}
