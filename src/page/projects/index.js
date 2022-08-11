import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "page/component/dashboardlayout";

import httpCommon from 'page/api';

import { toast } from 'react-toastify';

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  CircularProgress,
  Link
} from '@mui/material';


import MDButton from "components/MDButton";

function Tables() {
  const { user } = useParams();
  const [loading,setLoading] = useState(false);
  const [projects,setProjects] = useState([]);
  
  const get = async () => {
		try{
			setLoading(true);
			const url = '/users/'.concat(user).concat('/repos');
			const response = await httpCommon.get(url,null);
			console.log(response.data);
			setProjects(response.data);
		}
		catch(erro){
			toast.error("Usuário não encontrado no github. Verifique se você digitou o nome corretamente");
		}
		finally{
			setLoading(false);
		}	
  };
  
  useEffect(() => {
	get();  
  }, []);
  
  return (
    <DashboardLayout>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Projetos
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                
      <Table >
        <MDBox component="thead">
            <TableRow >
                <TableCell>
					Nome
                </TableCell>
                <TableCell>
					Linguagem
                </TableCell>
            </TableRow>
        </MDBox>
        <TableBody >
			{
				(loading === true) 
					? 
						<Grid
						  container
						  spacing={0}
						  direction="column"
						  alignItems="center"
						  justify="center"
						  style={{ minHeight: '5vh' ,minWidth: '150vh' }}
						>
							<CircularProgress variante="indeterminate" />
						</Grid>
					:
				projects.map((row) => (
					
							<TableRow {...row}>
								<TableCell>{row.name}</TableCell>
								<TableCell>{row.language}</TableCell>
								<TableCell>
									<Link href={row.html_url} target="_blank">
										<MDButton color="info">
											Ver
										</MDButton>
									</Link>
								</TableCell>
							</TableRow>
						)
				)
			}
        </TableBody>
      </Table>

              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
