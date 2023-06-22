import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import TemplateDefault from '../../templates/Default'


const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6)
  },
  cardMedia: {
    paddingTop: '56%',
  },
  buttonAdd: {
    margin: '30px auto',
    display: 'block',
  }
}))


const Dashboard = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="sm" className={classes.container}>
        <Typography component="h1" variant="h2" align="center">
          My advertisements
        </Typography>
        <Button variant="contained" color="primary" className={classes.buttonAdd}>
          Add new advertisement
        </Button>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image={'https://source.unsplash.com/random'}
                title="Title ads"
              />
              <CardContent>
                <Typography component="h2" variant="h5">
                  Product XYZ
                </Typography>
                <Typography>
                  $ 50
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Edit
                </Button>
                <Button size="small" color="primary">
                  Remove
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image={'https://source.unsplash.com/random'}
                title="Title ads"
              />
              <CardContent>
                <Typography component="h2" variant="h5">
                  Product XYZ
                </Typography>
                <Typography>
                  $ 50
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Edit
                </Button>
                <Button size="small" color="primary">
                  Remove
                </Button>
              </CardActions>
            </Card>
          </Grid>

          

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image={'https://source.unsplash.com/random'}
                title="Title ads"
              />
              <CardContent>
                <Typography component="h2" variant="h5">
                  Product XYZ
                </Typography>
                <Typography>
                  $ 50
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Edit
                </Button>
                <Button size="small" color="primary">
                  Remove
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}


export default Dashboard
