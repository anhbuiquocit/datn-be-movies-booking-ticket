import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CinemaScalarWhereInput } from './cinema-scalar-where.input';
import { CinemaUpdateManyMutationInput } from './cinema-update-many-mutation.input';

@InputType()
export class CinemaUpdateManyWithWhereWithoutClusterCinemaInput {

    @Field(() => CinemaScalarWhereInput, {nullable:false})
    where!: CinemaScalarWhereInput;

    @Field(() => CinemaUpdateManyMutationInput, {nullable:false})
    data!: CinemaUpdateManyMutationInput;
}
