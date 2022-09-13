import Head from "next/head";
import { Box, Container } from "@mui/material";
import { FormateurListResults } from "../components/formateur/formateur-list-results";
import { FormateurListToolbar } from "../components/formateur/formateur-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { useAuth } from "src/contexts/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getFormateurs } from "src/api/formateur";

const Formateurs = () => {
  const router = useRouter();
  const { isAuthenticated, loading } = useAuth();
  const [formateurs, setFormateurs] = useState([]);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, loading, router]);

  useEffect(() => {
    getFormateurs().then(({ data }) => setFormateurs(data));
  }, []);
  return (
    <>
      <Head>
        <title>Formateur | IGA Tunisie</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
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
};
Formateurs.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Formateurs;
