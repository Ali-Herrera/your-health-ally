import { MantineThemeOverride } from "@mantine/core"

// To generate a color array:
// 1. Go to: https://omatsuri.app/color-shades-generator
// 2. Set saturation shift to 0% and drag darken/lighten % slider all the way to the right.
// 3. Slowly drag darken/lighten slider to the left until desired primary shade is the 7th item.
// 4. Copy and paste the color array into this theme object and delete any items past 9.

export const theme: MantineThemeOverride = {
    colors: {

    },
    black: "#1A1A1A",
    white: "#EDEDED",

    primaryColor: "",
    primaryShade: ,

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