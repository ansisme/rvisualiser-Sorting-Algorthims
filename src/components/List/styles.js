import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(5),
        minWidth: 200,
        marginBottom: '30px',
    },
    selectEmpty: {
        marginTop: theme.spacing(5),
    },
    loading: {
        height: '600px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        padding: '30px',
    },
    marginBottom: {
        marginBottom: '30px',
    },
    list: {
        height: '75vh',
        overflow: 'auto',
    },
    grouplength: {
        mmarginTop: '100px',

    }
}));