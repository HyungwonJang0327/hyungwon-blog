'use client';
import { css } from '@/styled-system/css';
import {
    Button, Switch, Box, Text,
    useThemeContext, Theme,
} from '@radix-ui/themes';


export default function ClientRootLayout({ children, themeColor }: {
    children: React.ReactNode;
    themeColor: string;
}) {
    const { appearance = 'light' } = useThemeContext()
    return (
        <Theme accentColor={themeColor as any}
            appearance={'dark'}>
            <Box className={css({
                backgroundColor: appearance === 'light'
                    ? '#ffffff'
                    : '#333333',
                flexGrow: 1
            })}>
                {children}
                <Text>{appearance}</Text>
            </Box>
        </Theme >
    )
}