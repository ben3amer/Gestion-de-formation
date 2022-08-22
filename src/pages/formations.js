import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { formations } from '../__mocks__/formations';
import { FormationListToolbar } from '../components/formation/formation-list-toolbar';
import { FormationCard } from '../components/formation/formation-card';
import { DashboardLayout } from '../components/dashboard-layout';

const Formations = () => (
  <>
    <Head>
      <title>
      Formations | IGA Tunisie
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
        <FormationListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {formations.map((formation) => (
              <Grid
                item
                key={formation.id}
                lg={4}
                md={6}
                xs={12}
              >
                <FormationCard formation={formation} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);

Formations.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Formations;
