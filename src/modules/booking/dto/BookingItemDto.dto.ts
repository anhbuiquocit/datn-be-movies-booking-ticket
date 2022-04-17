import { InputType, Field } from '@nestjs/graphql';
@InputType()
export class BookingItemInput {
  @Field(() => String)
  userId: string;
  @Field(() => String)
  showingId: string;
  @Field(() => Number)
  amount: number;
  @Field(() => Number)
  price: number;
  @Field(() => String, { nullable: true })
  promotionId: string;
  @Field(() => String)
  listSeat: string;
  @Field(() => String)
  roomId: string;
}
