import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { FormateurListResults } from '../components/formateur/formateur-list-results';
import { FormateurListToolbar } from '../components/formateur/formateur-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { formateurs } from '../__mocks__/formateurs';

const Formateurs = () => (
  <>
    <Head>
      <title>
      Formateurs | IGA Tunisie
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
        <FormateurListToolbar />
        <Box sx={{ mt: 3 }}>
          <FormateurListResults formateurs={formateurs} />
        </Box>
      </Container>
    </Box>
  </>
);
Formateurs.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Formateurs;
