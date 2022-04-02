import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomUncheckedCreateNestedManyWithoutCinemaInput } from '../room/room-unchecked-create-nested-many-without-cinema.input';

@InputType()
export class CinemaUncheckedCreateWithoutClusterCinemaInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => RoomUncheckedCreateNestedManyWithoutCinemaInput, {nullable:true})
    Room?: RoomUncheckedCreateNestedManyWithoutCinemaInput;
}
