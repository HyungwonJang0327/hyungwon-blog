import { css } from "@/styled-system/css";
import { Box, Text } from "@radix-ui/themes";

export default function ClientPage() {
    return (
        <Box
            className={css({
                width: '100%',
                display: 'flex',
                flexGrow: 1
            })}
        >
            <Text>appearance</Text>
        </Box>
    )
}