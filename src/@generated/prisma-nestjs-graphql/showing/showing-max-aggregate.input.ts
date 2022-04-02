import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ShowingMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    deletedAt?: true;

    @Field(() => Boolean, {nullable:true})
    RoomId?: true;

    @Field(() => Boolean, {nullable:true})
    FilmId?: true;

    @Field(() => Boolean, {nullable:true})
    startDate?: true;

    @Field(() => Boolean, {nullable:true})
    endDate?: true;
}
