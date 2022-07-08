
import Stack from '@mui/material/Stack';

import LinearProgress from '@mui/material/LinearProgress';

export const Loader = ({ pageEnd }) => {

    return (
        <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2} ref = {pageEnd}>
            <LinearProgress color="success" />
            <LinearProgress color="success" />
        </Stack>
    )

}