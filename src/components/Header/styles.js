import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    Drawer: {
        display: 'center',
        justifyContent: 'center',
        color: 'turquoise',
    }
}));