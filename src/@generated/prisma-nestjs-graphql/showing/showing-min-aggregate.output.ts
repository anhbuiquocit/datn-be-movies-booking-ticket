import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ShowingMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:true})
    RoomId?: string;

    @Field(() => String, {nullable:true})
    FilmId?: string;

    @Field(() => Int, {nullable:true})
    price?: number;

    @Field(() => Date, {nullable:true})
    startDate?: Date | string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => Date, {nullable:true})
    startTime?: Date | string;

    @Field(() => Date, {nullable:true})
    endTime?: Date | string;
}
