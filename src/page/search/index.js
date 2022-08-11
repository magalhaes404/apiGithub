// @mui material components
import Card from "@mui/material/Card";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "page/search/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

import { toast } from 'react-toastify';

import { useState } from 'react';

import httpCommon from 'page/api';

import Users from 'page/users';

function Basic() {
	const [loading,setLoading] = useState(false);
	const [values,setValues] = useState({
		'name_user' : ''
	});
	const [user,setUsers] = useState({
		'login':'',
		'bio':'',
		'link':'',
	});
	const [concluded,setConcluded] = useState(false);
	const verificationUser = async () => {
		console.log('ok init');
		if(values.name_user.toString() !== "")
		{
			try{
			setLoading(true);
			const url = '/users/'.concat(values.name_user);
			const response = await httpCommon.get(url,null);
			console.log(response.data);
				setUsers({
					...user,
					'login':response.data.login,
					'bio':response.data.bio,
					'link':response.data.html_url,
				});
				setConcluded(true);
			}
			catch(erro){
				toast.error("Usuário não encontrado no github. Verifique se você digitou o nome corretamente");
			}
			finally{
				setLoading(false);
			}	
		}
		else{
			toast.error("informe um nome de usuário válido do github");
		}
	};
	
	const handleChange = (event) => {
		console.log('handleChange => ',event.target.value);
		setValues({
			...values,
			[event.target.name]: event.target.value
		});
	};
	
  return (concluded === false) 
  ?
  
  (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput name="name_user" value={values.name_user} type="text" label="Nome usuario" onChange={handleChange} fullWidth />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton disabled={loading} variant="gradient" color="info" onClick={verificationUser} fullWidth>
                 Pesquisar
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  )
  
  :
  
  ( <Users user={user}/>)
  
  ;
}
export default Basic;
