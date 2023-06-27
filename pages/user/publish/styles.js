import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3)
    },
    boxContainer: {
        paddingBottom: theme.spacing(3)
    },
    thumbsContainer: {
        display: 'flex',
        marginTop: 15,
        flexWrap: 'wrap'
    },
    dropzone: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '10px',
        margin: '0 15px 15px 0',
        width: 200,
        height: 150,
        backgroundColor: theme.palette.background.default,
        border: '2px dashed black',

    },
    thumb: {
        width: 200,
        height: 150,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        position: 'relative',
        margin: '0 15px 15px 0',

        '&:hover $mask': {
            display: 'flex'
        }
    },
    mask: {
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: '100%',
        width: '100%',
    },
    adsCover: {
        backgroundColor: theme.palette.secondary.mark,
        position: 'absolute',
        padding: '6px 10px',
        bottom: 0,
        left: 0,
    },
    inputLabel: {
        fontWeight: 400,
        color: theme.palette.primary.main,
    }

}))

export default useStyles