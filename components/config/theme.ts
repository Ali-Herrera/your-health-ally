import { MantineThemeOverride } from "@mantine/core";

// To generate a color array:
// 1. Go to: https://omatsuri.app/color-shades-generator
// 2. Set saturation shift to 0% and drag darken/lighten % slider all the way to the right.
// 3. Slowly drag darken/lighten slider to the left until desired primary shade is the 7th item.
// 4. Copy and paste the color array into this theme object and delete any items past 9.

export const theme: MantineThemeOverride = {
	colors: {
		pink: [
			"#EF96C3", // 0 = Lightest
			"#E265A5",
			"#DB5197",
			"#D4408B",
			"#CC3180",
			"#B83075", // 5 = Light
			"#9E2B65", // 6 = Medium
			"#92255C",
			"#872657", // 8 = Dark
			"#7D214F",
			"#731C48",
		],
		green: [
			"#28A99E", // 0 = Lightest
			"#05998C",
			"#048C7F",
			"#037C6E",
			"#016458", // 4 = Light
			"#036C5F", // 5 = Medium
			"#025043", // 6 = Dark
			"#004A3E",
			"#004539",
			"#003F34",
		],
		yellow: [
			"#FFFAE4", // 0 = Lightest
			"#FEF4CF",
			"#FAE8A0", // 2 = From Color Palette Idea Doc
			"#F7DB6E",
			"#F5D043",
			"#F4C929",
			"#F3C519",
			"#D8AE0B",
			"#C09A00",
			"#A68500",
		],
		orange: [
			"#FFF3E5",
			"#FDE5D2",
			"#F6C8A5", // 2 = From Color Palette Idea Doc
			"#EFAA74",
			"#EB914C",
			"#E88131",
			"#E77722",
			"#CD6616",
			"#B7590F",
			"#A04C04",
		],
	},
	black: "#1A1910",
	white: "#F9F9F9",

	primaryColor: "pink",
	primaryShade: 8,

	components: {
		Avatar: {
			defaultProps: {
				radius: 100,
			},
			styles: () => ({
				placeholder: {
					fontWeight: 500,
				},
			}),
		},
		Button: {
			defaultProps: {
				loaderPosition: "right",
				radius: "md",
				variant: "filled",
				color: "primaryColor",
			},
			//@ts-ignore
			styles: (theme, params) => ({
				root: {
					fontStretch: "100%",
					":hover": {
						backgroundColor:
							params.variant === "filled" ? theme.colors.fuchsia[6] : undefined,
						color:
							params.variant === "filled" ? theme.colors.fuchsia[0] : undefined,
					},
					":active": {
						backgroundColor:
							params.variant === "filled" ? theme.colors.fuchsia[6] : undefined,
						color:
							params.variant === "filled" ? theme.colors.fuchsia[0] : undefined,
					},
					":disabled": {
						backgroundColor: "#E4E6E7",
						filter: "grayscale(100%)",
					},
				},
			}),
		},
	},
};
