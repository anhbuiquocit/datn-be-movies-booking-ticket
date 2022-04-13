import { FindManyFilmArgs } from './../../@generated/prisma-nestjs-graphql/film/find-many-film.args';
import { FilmWhereInput } from './../../@generated/prisma-nestjs-graphql/film/film-where.input';
import { FilmService } from './film.service';
import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { Film } from 'src/@generated/prisma-nestjs-graphql/film/film.model';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth-guard';
import { CreateOneFilmArgs } from 'src/@generated/prisma-nestjs-graphql/film/create-one-film.args';
import { UpdateOneFilmArgs } from 'src/@generated/prisma-nestjs-graphql/film/update-one-film.args';
import { DeleteOneFilmArgs } from 'src/@generated/prisma-nestjs-graphql/film/delete-one-film.args';
import { FindUniqueFilmArgs } from 'src/@generated/prisma-nestjs-graphql/film/find-unique-film.args';

@Resolver()
export class FilmResolver {
  constructor(private filmService: FilmService) {}
  // @UseGuards(GqlAuthGuard)
  @Query(() => [Film])
  async films(@Args() args: FindManyFilmArgs): Promise<Film[]> {
    return this.filmService.connection(args);
  }

  // @UseGuards(GqlAuthGuard)
  @Query(() => Film)
  async film(@Args() args: FindUniqueFilmArgs) {
    return this.filmService.findOne(args);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Film)
  async createFilmRecord(@Args() args: CreateOneFilmArgs) {
    return this.filmService.createOne(args);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Film)
  async updateFilmRecord(@Args() args: UpdateOneFilmArgs) {
    return this.filmService.updateOne(args);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  async deleteFilmRecord(@Args() args: DeleteOneFilmArgs) {
    return this.filmService.deleteOne(args);
  }
}
