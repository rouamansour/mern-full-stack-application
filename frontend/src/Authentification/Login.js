import { useState } from "react";
import { useNavigate} from 'react-router-dom';
import Axios from "../Axios/Api";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const objetuser = {
            email: email,
            password: password
        };
        console.log("/users/login/", objetuser);
        await Axios.post("/users/login/", objetuser).then((res) => {
            localStorage.setItem("CC_Token",
                JSON.stringify(res.data.accessToken));
            localStorage.setItem("refreshToken",
                JSON.stringify(res.data.refreshToken));
            localStorage.setItem("user", JSON.stringify(objetuser));
            navigate("/montres");
        }).catch(error => {
            console.log(error)
        });
    }
    return (
        <>
            <div className="container">
                <Box sx={{
                    marginTop: 10, marginLeft: 40, border: "solid blue",
                    width: 300, padding: 10
                }}>
                    <form style={{ marginLeft: 8 }}>
                        <div>
                            <TextField
                                variant="outlined"
                                label="Email"
                                onChange={(event) => setEmail(event.target.value)}
                                required />
                        </div>
                        <div>
                            <TextField
                                variant="outlined"
                                type="password"
                                label="Password"
                                onChange={(event) => setPassword(event.target.value)
                                }
                                required />
                        </div>
                        <div>
                            <Button color="error"
                                variant="contained" onClick={(event) => handleSubmit(event)}>Valider</Button>
                        </div>
                    </form>
                </Box>
            </div>
        </>
    );
}
export default Login; 