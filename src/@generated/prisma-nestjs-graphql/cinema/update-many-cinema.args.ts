import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CinemaUpdateManyMutationInput } from './cinema-update-many-mutation.input';
import { CinemaWhereInput } from './cinema-where.input';

@ArgsType()
export class UpdateManyCinemaArgs {

    @Field(() => CinemaUpdateManyMutationInput, {nullable:false})
    data!: CinemaUpdateManyMutationInput;

    @Field(() => CinemaWhereInput, {nullable:true})
    where?: CinemaWhereInput;
}
