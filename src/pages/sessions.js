import Head from "next/head";
import { Box, Container } from "@mui/material";
import { SessionListResults } from "../components/session/session-list-results";
import { SessionListToolbar } from "../components/session/session-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "src/contexts/auth";
import { getSessions } from "src/api/session";
import { getFormateurById } from "src/api/formateur";
import { getFormationById} from "src/api/formation";


const Sessions = () => {
  const router = useRouter();
  const { user, isAuthenticated, loading } = useAuth();
  const [sessions, setSessions] = useState([]);
  const [formateurs, setFormateurs] = useState([]);
  const [formations, setFormations] = useState([]);
  const [criteria, setCriteria] = useState("");

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, loading, router]);

  useEffect(() => {
    getSessions(criteria).then((res) => setSessions(res.data));
  }, [criteria]);

  useEffect(() => {
    sessions.map(
      (session) => (getFormateurById(session.idFormateur).then((res) => setFormateurs(res.data) )))
  }
  );
  useEffect(() => {
    sessions.map(
      (session) => (getFormationById(session.idFormation).then((res) => setFormations(res.data) )))
  }
  );

  const getCriteria = (criteria) => {
    setCriteria(criteria);
  };

  return (
    isAuthenticated && (
      <>
        <Head>
          <title> Sessions | IGA Tunisie</title>
        </Head>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth={false}>
            <SessionListToolbar setCriteria={getCriteria} />
            <Box sx={{ mt: 3 }}>
              <SessionListResults sessions={sessions} formateurs={formateurs} formations={formations}/>
            </Box>
          </Container>
        </Box>
      </>
    )
  );
};

Sessions.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Sessions;
