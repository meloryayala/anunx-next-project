import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
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
    adsCover: {
        backgroundColor: theme.palette.secondary.mark,
        position: 'absolute',
        padding: '6px 10px',
        bottom: 0,
        left: 0,
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
}))

export default useStyles