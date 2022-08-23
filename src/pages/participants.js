import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { ParticipantListResults } from '../components/participant/participant-list-results';
import { ParticipantListToolbar } from '../components/participant/participant-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { participants } from '../__mocks__/participants';

const Participants = () => (
  <>
    <Head>
      <title>
      Participants | IGA Tunisie
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <ParticipantListToolbar />
        <Box sx={{ mt: 3 }}>
          <ParticipantListResults participants={participants} />
        </Box>
      </Container>
    </Box>
  </>
);
Participants.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Participants;
