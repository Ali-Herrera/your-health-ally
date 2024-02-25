import { prop, Ref } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { UserChatConversations } from "./UserChatConversations";

export class UserMessages extends TimeStamps {
  @prop()
  userId!: number;

  @prop({ ref: UserChatConversations, required: true })
  userChatConversationId!: Ref<UserChatConversations>;

  @prop({ required: true })
  chatMessageId!: number;

  @prop({ required: true })
  messageText!: string;

  @prop({ default: 0 })
  order!: number;
}
