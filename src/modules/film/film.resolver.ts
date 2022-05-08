import { FilmAggregateArgs } from './../../@generated/prisma-nestjs-graphql/film/film-aggregate.args';
import { AggregateFilm } from './../../@generated/prisma-nestjs-graphql/film/aggregate-film.output';
import { FindManyReviewFilmArgs } from './../../@generated/prisma-nestjs-graphql/review-film/find-many-review-film.args';
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
import { CreateOneReviewFilmArgs } from 'src/@generated/prisma-nestjs-graphql/review-film/create-one-review-film.args';
import { CurrentUser } from '../users/user.decorator.grapql';
import { FilmReivew } from './dto/filmReview.dto';
import { ReviewFilm } from 'src/@generated/prisma-nestjs-graphql/review-film/review-film.model';

@Resolver()
export class FilmResolver {
  constructor(private filmService: FilmService) {}
  // @UseGuards(GqlAuthGuard)
  @Query(() => [Film])
  // @Query(() => String)
  async films(@Args() args: FindManyFilmArgs): Promise<Film[]> {
    // return JSON.stringify(this.filmService.connection(args));
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
  @Query((type) => AggregateFilm)
  async filmAggregate(@Args() args: FilmAggregateArgs) {
    return this.filmService.filmAggregate(args);
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

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  async addComment(
    @Args('data') data: FilmReivew,
    @CurrentUser() user: { userId: string; username: string },
  ) {
    return this.filmService.addComment(data, user);
  }

  // @UseGuards(GqlAuthGuard)
  @Query(() => [ReviewFilm])
  async reviewFilmsConnection(
    @Args() args: FindManyReviewFilmArgs,
    @CurrentUser() user: { userId: string; username: string },
  ) {
    return this.filmService.reviewFilmConnection(args, user);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  async checkAvailableShowing(
    @Args('filmId') filmId: string,
  ): Promise<boolean> {
    return this.filmService.checkAvailableShowing(filmId);
  }
}
