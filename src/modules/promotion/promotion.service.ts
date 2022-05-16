import { PromotionAggregateArgs } from './../../@generated/prisma-nestjs-graphql/promotion/promotion-aggregate.args';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Promotion } from 'src/@generated/prisma-nestjs-graphql/promotion/promotion.model';
const prisma = new PrismaClient();

@Injectable()
export class PromotionService {
  async connection(args): Promise<Promotion[]> {
    const { where, orderBy, cursor, take, skip, distinct } = args;
    const listConnection = await prisma.promotion.findMany({
      where,
      orderBy,
      cursor,
      take,
      skip,
      distinct,
    });
    return listConnection;
  }
  async promotionAggregate(args: PromotionAggregateArgs) {
    const { where, orderBy, cursor, take, skip, _count, _min, _max } = args;
    const aggregations = await prisma.promotion.aggregate({
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
  async createOne(args): Promise<Promotion> {
    const { data } = args;
    const itemCreate = await prisma.promotion.create({
      data,
    });
    return itemCreate;
  }
  async updateOne(args): Promise<Promotion> {
    const { data, where } = args;
    const itemUpdate = await prisma.promotion.update({
      where,
      data,
    });
    return itemUpdate;
  }
  async deleteOne(args): Promise<boolean> {
    const { where } = args;
    const itemDelete = await prisma.promotion.delete({
      where,
    });
    return true;
  }
}
