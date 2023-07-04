import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    span: {},
    container: {
        marginBottom: 30
    },
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3)
    },
    formControl: {
        marginBottom: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    loading: {
        display: 'block',
        margin: '10px auto',
    },
    errorMessage: {
        margin: '10px 0',
    },
    orDivider: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8e8e8',
        width: '100%',
        height: 1,
        margin: theme.spacing(7, 0, 4),

        '& span': {
            backgroundColor: 'white',
            padding: '0 30px'
        }
    },
    googleBtn: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
    }
}))

export default useStyles