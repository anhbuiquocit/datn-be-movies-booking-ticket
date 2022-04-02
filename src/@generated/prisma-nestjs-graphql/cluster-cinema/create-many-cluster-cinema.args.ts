import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClusterCinemaCreateManyInput } from './cluster-cinema-create-many.input';

@ArgsType()
export class CreateManyClusterCinemaArgs {

    @Field(() => [ClusterCinemaCreateManyInput], {nullable:false})
    data!: Array<ClusterCinemaCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
