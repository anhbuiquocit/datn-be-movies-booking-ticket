import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomUpdateWithoutShowingInput } from './room-update-without-showing.input';
import { RoomCreateWithoutShowingInput } from './room-create-without-showing.input';

@InputType()
export class RoomUpsertWithoutShowingInput {

    @Field(() => RoomUpdateWithoutShowingInput, {nullable:false})
    update!: RoomUpdateWithoutShowingInput;

    @Field(() => RoomCreateWithoutShowingInput, {nullable:false})
    create!: RoomCreateWithoutShowingInput;
}
