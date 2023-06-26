import {
  Button,
  Container,
  Grid,
  Typography,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import TemplateDefault from '../../templates/Default'
import Card from '../../src/components/Card'


const useStyles = makeStyles((theme) => ({
  buttonAdd: {
    margin: '30px auto',
    display: 'block',
  }
}))


const Dashboard = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="sm">
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
            <Card
              image={'https://source.unsplash.com/random'}
              title="Product XYZ"
              subtitle="$ 50"
              actions={
                <>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                  <Button size="small" color="primary">
                    Remove
                  </Button>
                </>
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title="Product XYZ"
              subtitle="$ 50"
              actions={
                <>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                  <Button size="small" color="primary">
                    Remove
                  </Button>
                </>
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title="Product XYZ"
              subtitle="$ 50"
              actions={
                <>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                  <Button size="small" color="primary">
                    Remove
                  </Button>
                </>
              }
            />
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault >
  )
}


export default Dashboard
