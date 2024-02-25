import { prop, Ref } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

export class UserChatConversations extends TimeStamps {
  @prop({ required: true })
  userId!: number;

  @prop({ required: true })
  title!: string;

  @prop()
  description?: string;

  @prop({ default: 0 })
  order!: number;
}
