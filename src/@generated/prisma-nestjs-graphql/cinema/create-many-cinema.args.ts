import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CinemaCreateManyInput } from './cinema-create-many.input';

@ArgsType()
export class CreateManyCinemaArgs {

    @Field(() => [CinemaCreateManyInput], {nullable:false})
    data!: Array<CinemaCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
