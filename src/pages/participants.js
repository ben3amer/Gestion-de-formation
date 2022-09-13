import Head from "next/head";
import { Box, Container } from "@mui/material";
import { ParticipantListResults } from "../components/participant/participant-list-results";
import { ParticipantListToolbar } from "../components/participant/participant-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { useEffect, useState } from "react";
import { getParticipants } from "../api/participant";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/auth";

const Participants = () => {
  const router = useRouter();
  const [participants, setParticipants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    } else {
      setIsLoading(true);
      getParticipants().then(({ data }) => setParticipants(data));
      setIsLoading(true);
    }
  }, [isAuthenticated, loading, router]);

  return (
    <>
      <Head>
        <title>Participants | IGA Tunisie</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
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
};
Participants.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Participants;
