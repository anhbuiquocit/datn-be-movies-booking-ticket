import { ShowingAggregateArgs } from './../../@generated/prisma-nestjs-graphql/showing/showing-aggregate.args';
import { GqlAuthGuard } from './../auth/gql-auth-guard';
import { UseGuards } from '@nestjs/common';
import { ShowingService } from './showing.service';
import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { Showing } from 'src/@generated/prisma-nestjs-graphql/showing/showing.model';
import { FindManyShowingArgs } from 'src/@generated/prisma-nestjs-graphql/showing/find-many-showing.args';
import { CreateOneShowingArgs } from 'src/@generated/prisma-nestjs-graphql/showing/create-one-showing.args';
import { UpdateOneShowingArgs } from 'src/@generated/prisma-nestjs-graphql/showing/update-one-showing.args';
import { DeleteOneShowingArgs } from 'src/@generated/prisma-nestjs-graphql/showing/delete-one-showing.args';
import { AggregateShowing } from 'src/@generated/prisma-nestjs-graphql/showing/aggregate-showing.output';

@Resolver()
export class ShowingResolver {
  constructor(private showingService: ShowingService) {}
  // @UseGuards(GqlAuthGuard)
  @Query(() => [Showing])
  async showingConnection(@Args() args: FindManyShowingArgs) {
    return this.showingService.connection(args);
  }
  @UseGuards(GqlAuthGuard)
  @Mutation(() => Showing)
  async createShowing(@Args() args: CreateOneShowingArgs) {
    return this.showingService.createOne(args);
  }
  @UseGuards(GqlAuthGuard)
  @Mutation(() => Showing)
  async updateShowing(@Args() args: UpdateOneShowingArgs) {
    return this.showingService.updateOne(args);
  }
  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  async deleteShowing(@Args() args: DeleteOneShowingArgs) {
    return this.showingService.deleteOne(args);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => AggregateShowing)
  async ShowingAggregate(@Args() args: ShowingAggregateArgs) {
    return this.showingService.showingAggregate(args);
  }
}
