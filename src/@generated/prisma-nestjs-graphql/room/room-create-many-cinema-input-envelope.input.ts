import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomCreateManyCinemaInput } from './room-create-many-cinema.input';

@InputType()
export class RoomCreateManyCinemaInputEnvelope {

    @Field(() => [RoomCreateManyCinemaInput], {nullable:false})
    data!: Array<RoomCreateManyCinemaInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
