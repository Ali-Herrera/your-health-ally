import { Button, Group, Textarea } from "@mantine/core";
import { IconSend } from '@tabler/icons-react';

import { theme } from "./config/theme";



export const ChatInput = () => {

    const { colors, white, black } = theme;
    
	<Group justify="center">
		<Textarea
			placeholder="What questions do you have?"
			aria-label="Type your message here"
			radius="md"
			style={{
				width: "90%",
			}}
		/>
		<Button
			color={colors?.darkPink?.[3]}
			size="sm"
			radius="xl"
			justify="center"
			p={0}
			aria-label="Send message"
			style={{
				width: "5%",
				// "&:hover": {
				//   backgroundColor: colors?.darkPink?.[8],
				//   color: colors?.darkPink?.[6],
				// },
				// "$:active": {
				//   backgroundColor: colors?.darkPink?.[8],
				//   color: colors?.darkPink?.[6],
				// },
			}}
		>
			<IconSend size={20} style={{ bottom: "5px", alignSelf: "center" }} />
		</Button>
	</Group>;
};
