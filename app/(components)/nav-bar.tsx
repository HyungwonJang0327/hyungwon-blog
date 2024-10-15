'use client'
import { css } from "@/styled-system/css";
import { Box, Text, useThemeContext, IconButton } from "@radix-ui/themes";
import Link from "next/link";
import { HomeIcon } from "@radix-ui/react-icons"
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname()
    const { accentColor, radius } = useThemeContext()
    return (
        <div
            className={css({
                p: 4,
                position: 'absolute',
                top: '20px',
                left: '50%',
                bgColor: '#ffffff',
                boxShadow: '5px 5px 5px #00000080',
                border: '.5px solid lightgray',
                borderRadius: 'md',
                transform: 'translateX(-50%)',
                width: '50vw',
            })}
        >
            <div className={css({
                display: 'flex',
                justifyContent: "space-around",
                width: '100%',
                alignItems: 'center'
            })}>
                <Link href="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <Text
                        color={pathname === '/' ? accentColor : undefined}
                        size={pathname === '/' ? '5' : '3'}
                        style={{
                            textDecoration: pathname === '/' ? 'underline' : undefined,
                            transition: '.5s'
                        }}
                    ><b>HOME</b></Text>
                </Link>
                <Link href="/blogs">
                    <Text
                        color={pathname === '/blogs' ? accentColor : undefined}
                        size={pathname === '/blogs' ? '5' : '3'}
                        style={{
                            textDecoration: pathname === '/blogs' ? 'underline' : undefined,
                            transition: '.5s'
                        }}
                    ><b>BLOG</b>
                    </Text>
                </Link>
                <Link href="/projects">
                    <Text
                        color={pathname === '/projects' ? accentColor : undefined}
                        size={pathname === '/projects' ? '5' : '3'}
                        style={{
                            textDecoration: pathname === '/projects' ? 'underline' : undefined,
                            transition: '.5s'
                        }}
                    ><b>PROJECTS</b>
                    </Text>
                </Link>
            </div>
        </div>
    )
}