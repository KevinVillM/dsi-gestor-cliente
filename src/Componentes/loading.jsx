import react from 'react'
import {CircularProgress} from "@mui/material";
import Container from "@mui/material/Container";


export default function loading(){

    return <>
        <Container>
            <CircularProgress/>
        </Container>
    </>

}