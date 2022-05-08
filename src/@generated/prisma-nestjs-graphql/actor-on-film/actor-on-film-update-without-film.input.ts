import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ActorUpdateOneRequiredWithoutActorOnFilmInput } from '../actor/actor-update-one-required-without-actor-on-film.input';

@InputType()
export class ActorOnFilmUpdateWithoutFilmInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => ActorUpdateOneRequiredWithoutActorOnFilmInput, {nullable:true})
    actor?: ActorUpdateOneRequiredWithoutActorOnFilmInput;
}
