import { css } from '../styled-system/css';

export default function Home() {
    return (
        <div className={css({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            bgColor: '#333333'
        })}>
            <p className={css({ fontSize: "4xl", fontWeight: 'bold' })}>
                Hello 🐼!
            </p>
        </div>
    )
}