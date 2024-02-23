import { MantineThemeOverride } from "@mantine/core"

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
            "#B83075", // 5 = Light Logo Color
            "#9E2B65", // 6 = Medium Logo Color
            "#92255C", 
            "#872657", // 8 = Dark Logo Color
            "#7D214F", 
            "#731C48",
        ],
        green: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
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
                //   variant: "filled",
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
}