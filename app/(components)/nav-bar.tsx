import { css } from "@/styled-system/css";
import { Text } from "@radix-ui/themes";
import Link from "next/link";

export default function NavBar() {
    return (
        <div className={css({
            width: '100%',
            display: 'flex',
            position: 'absolute',
            top: 0,
            justifyContent: 'center',
            alignItems: 'center',
            p: 5,
        })}>
            <div className={css({
                width: '50vw',
                minWidth: '200px',
                display: 'flex',
                justifyContent: 'space-around',
                bgColor: '#ffffff',
                borderRadius: '10px',
                py: 2,
                px: 3,
                boxShadow: '10px 10px 10px #00000080',
                border: '.5px solid lightgray'
            })}>
                <Link href="/"><Text size={'5'}>HOME</Text></Link>
                <Link href="/blogs"><Text size={'5'}>BLOG</Text></Link>
                <Link href="/projects"><Text size={'5'}>PROJECT</Text></Link>
                <Link href="/settings"><Text size={'5'}>SETTINGS</Text></Link>
            </div>
        </div>
    )
}