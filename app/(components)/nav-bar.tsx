'use client'
import { css } from "@/styled-system/css";
import { Box, Text, useThemeContext } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname()
    const { accentColor, appearance, radius } = useThemeContext()
    return (
        <Box
            className={css({
                p: 4,
                position: 'absolute',
                top: '20px',
                left: '50%',
                bgColor: '#ffffff',
                boxShadow: '5px 5px 5px #00000080',
                border: '.5px solid lightgray',
                borderRadius: 'md',
                transform: 'translateX(-50%)'
            })}
        >
            <Link href="/">
                <Text
                    color={pathname === '/' ? accentColor : undefined}
                    size={'5'}><b>HOME</b></Text>
            </Link>
            <Link href="/blogs">
                <Text
                    color={pathname === '/blogs' ? accentColor : undefined}
                    size={'5'}><b>BLOG</b></Text>
            </Link>
            <Link href="/projects">
                <Text
                    color={pathname === '/projects' ? accentColor : undefined}
                    size={'5'}><b>PROJECT</b></Text>
            </Link>
            <Link href="/settings">
                <Text size={'5'}
                    color={pathname === '/settings' ? accentColor : undefined}
                ><b>SETTINGS</b></Text>
            </Link>
        </Box>
    )
}