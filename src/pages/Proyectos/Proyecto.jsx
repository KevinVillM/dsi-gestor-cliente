import react from 'react'
import {Grid, TextField} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";


function Proyecto(){



    return <>
        <Grid container>
            <Grid item xs={12} className={'mb-4'}>
                <TextField
                    required
                    label={'Nombre del proyecto'}
                />
            </Grid>
            <Grid item xs={12} className={'mb-4'}>
                <TextField
                    required
                    multiline
                    fullWidth
                    rows={6}
                    maxRows={6}
                    label={'Descripción'}/>
            </Grid>

            <Grid item xs={4} className={'mb-4'}>
               <TextField
                   label={'Estado'}
                   required
                   fullWidth
                   defaultValue={'No iniciado'}
                   select>
                   <MenuItem key={'No iniciado'} value={'No iniciado'}>No iniciado</MenuItem>
                   <MenuItem key={'En proceso'} value={'En proceso'}>En proceso</MenuItem>
                   <MenuItem key ={'Finalizado'} value={3}>Finalizado</MenuItem>
               </TextField>


            </Grid>

        </Grid>



    </>
}

export default Proyecto;