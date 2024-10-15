import { Box, ThemeProps } from "@radix-ui/themes";
import ClientRootLayout from "../(components)/client-root-layout";
import NavBar from "../(components)/nav-bar";

const getDesignData = async (): Promise<{
    accentColor: ThemeProps['accentColor']
}> => {
    try {
        return {
            accentColor: 'green'
        }
    } catch (error) {
        return {
            accentColor: 'indigo'
        }
    }
}

export default async function Layout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const designData = await getDesignData()
    console.log('designData:::', designData)
    return (
        <Box style={{
            flexGrow: 1,
            display: 'flex'
        }}>
            <ClientRootLayout accentColor={designData?.accentColor || 'indigo'}>
                <NavBar />
                {children}
                {/* <ThemePanel /> */}
            </ClientRootLayout>
        </Box>
    )
}