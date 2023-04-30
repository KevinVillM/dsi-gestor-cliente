import React from 'react'
import {Card, CardActionArea, CardContent, Grid, Icon} from "@mui/material";
import Typography from "@mui/material/Typography";
function click(){
    alert("Click")
}

function OpcionCard(props){

    return (<>
        <Card variant={"outlined"} >
            <CardActionArea onClick={click} >
                <CardContent>
                    <Grid container spacing={1}>
                        <Grid item xs={12} textAlign={"center"} >
                            <Typography variant={"h5"}>{props.titulo}</Typography>
                        </Grid>
                    </Grid>

                    <Typography>{props.desc}</Typography>
                </CardContent>
            </CardActionArea>

        </Card>
    </>
    )

}

export default OpcionCard;