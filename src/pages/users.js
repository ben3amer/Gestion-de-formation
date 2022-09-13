import Head from "next/head";
import { Box, Container } from "@mui/material";
import { UserListResults } from "../components/user/user-list-results";
import { UserListToolbar } from "../components/user/user-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { users } from "../__mocks__/users";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "src/contexts/auth";

const Users = () => {
  const { user, isAuthenticated, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, loading, router]);

  return (
    isAuthenticated && (
      <>
        <Head>
          <title>Users | IGA Tunisie</title>
        </Head>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth={false}>
            <UserListToolbar />
            <Box sx={{ mt: 3 }}>
              <UserListResults users={users} />
            </Box>
          </Container>
        </Box>
      </>
    )
  );
};

Users.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Users;
