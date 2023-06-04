import react from 'react'
import Container from "@mui/material/Container";
import {Grid} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";


function Perfil(){


    return <>
    <Container>
        <Grid container >

            <Grid xs={8}>
                <Avatar/>
            </Grid>
            <Grid xs={4}>
                <Typography>
                    Nombre completo
                </Typography>
            </Grid>

        </Grid>
    </Container>
    </>

}

export default Perfil;