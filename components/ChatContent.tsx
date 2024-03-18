import { Avatar, Group, Stack, Text } from "@mantine/core";
import { theme } from "./config/theme";

type Author = "User" | "AI";

export type ChatItem = {
	author: Author;
	content: string;
	isError?: boolean;
};

type Props = {
	chatItems: ChatItem[];
};

const { colors, black } = theme;

export const ChatContent = ({ chatItems }: Props) =>
	chatItems.map((chatItem: ChatItem, index: number) => (
		<Stack
			key={index}
			className="chatLog"
			gap="md"
			// style={{ padding: '20px' }}
		>
			<Group
				className="chatUser"
				style={{
					padding: index === chatItems.length - 1 ? "10px" : "16px",
					borderRadius: "10px",
				}}
			>
				<Avatar
					color={
						chatItem.author === "User"
							? colors?.teal?.[6]
							: colors?.darkPink?.[6]
					}
				>
					AH
				</Avatar>
				{chatItem.author === "User" ? (
					<Text c="dimmed">{chatItem.content}</Text>
				) : (
					<Text c={black}>{chatItem.content}</Text>
				)}
				{/*  */}
				{/* TODO: <div
            className={clsx("ml-5 mt-1 box-border", {
              "text-white": !chatItem.isError,
              "text-red-500": chatItem.isError,
            })}
          >   
          </div> */}
			</Group>
		</Stack>
	));
