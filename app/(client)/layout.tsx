import { Box } from "@radix-ui/themes";
import ClientRootLayout from "../(components)/client-root-layout";
import NavBar from "../(components)/nav-bar";

const getDesignData = async (): Promise<{
    themeColor: string
}> => {
    try {
        return {
            themeColor: 'blue'
        }
    } catch (error) {
        return {
            themeColor: 'mint'
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
            <ClientRootLayout themeColor={designData?.themeColor || ''}>
                <NavBar />
                {children}
                {/* <ThemePanel /> */}
            </ClientRootLayout>
        </Box>
    )
}