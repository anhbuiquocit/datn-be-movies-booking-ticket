import { InputType, Field } from '@nestjs/graphql';
@InputType()
export class BookingItemInput {
  @Field(() => String)
  showingId: string;
  @Field(() => Number)
  amount: number;
  @Field(() => Number)
  price: number;
  @Field(() => String, { nullable: true })
  promotionId: string;
  @Field(() => String, { nullable: true })
  listSeat: string;
  @Field(() => String)
  roomId: string;
}
