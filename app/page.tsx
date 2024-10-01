import { Button, Switch, Text } from '@radix-ui/themes';
import { css } from '../styled-system/css';

export default function Home() {
    return (
        <div className={css({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            bgColor: '#333333',
            flexDirection: 'column'
        })}>
            <Text className={css({ fontSize: "4xl", fontWeight: 'bold', color: '#ffffff', margin: '100px' })}>
                Hello 🐼!
            </Text>
            <Button color='blue' className={css({ color: '#000000' })}>
                <Text>mint color theme</Text>
            </Button>
            <Switch className={css({})} />
            <Switch />
        </div>
    )
}