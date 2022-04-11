import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { FilmWhereInput } from './../../@generated/prisma-nestjs-graphql/film/film-where.input';
import { FilmService } from './film.service';
import { Resolver, Args, Query } from '@nestjs/graphql';
import { Film } from 'src/@generated/prisma-nestjs-graphql/film/film.model';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth-guard';

@Resolver()
export class FilmResolver {
  constructor(private filmService: FilmService) {}
  @UseGuards(GqlAuthGuard)
  @Query(() => [Film])
  async films(
    @Args('filmInput', { nullable: true }) filmInput: FilmWhereInput,
  ): Promise<Film[]> {
    console.log('flimInput: ', filmInput);
    return this.filmService.findAll(filmInput);
  }
}
