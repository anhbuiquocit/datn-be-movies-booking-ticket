import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CinemaCreateInput } from './cinema-create.input';

@ArgsType()
export class CreateOneCinemaArgs {

    @Field(() => CinemaCreateInput, {nullable:false})
    data!: CinemaCreateInput;
}
