'use client';
import { css } from '@/styled-system/css';
import {
    Button, Switch, Box, Text,
    useThemeContext, Theme, ThemeProps,
} from '@radix-ui/themes';


export default function ClientRootLayout({ children, accentColor }: {
    children: React.ReactNode;
    accentColor: ThemeProps['accentColor'];
}) {
    const { } = useThemeContext()
    return (
        <Theme accentColor={accentColor}>
            <Box className={css({
                flexGrow: 1
            })}>
                {children}
            </Box>
        </Theme >
    )
}