// @mui material components
import Divider from "@mui/material/Divider";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "page/component/dashboardlayout";

import ProfileInfoCard from "page/users/component/card";

function Users(data) {
  console.log("init users => ",data.user);
  console.log("login => ",data.user.login);
  return (
    <DashboardLayout>
        <MDBox mt={5} mb={3}>
              <ProfileInfoCard
                title={data.user.login}
                description={data.user.bio}
				repository={data.user.link}
				url={'app/'.concat(data.user.login)}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
        </MDBox>
    </DashboardLayout>
  );
}

export default Users;
