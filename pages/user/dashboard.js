import {
  Button,
  Container,
  Grid,
  Typography,
  Link,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import TemplateDefault from '../../templates/Default'
import Card from '../../src/components/Card'
import ProductsModel from '../../src/models/products'
import { getSession } from 'next-auth/client'
import dbConnect from '../../src/utils/dbConnect'


const useStyles = makeStyles((theme) => ({
  buttonAdd: {
    margin: '30px auto',
    display: 'block',
  }
}))


const Dashboard = ({ products }) => {
  const classes = useStyles()

  console.log(products)

  return (
    <TemplateDefault>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center">
          My advertisements
        </Typography>

        <Link href="/user/publish">
          <Button variant="contained" color="primary" className={classes.buttonAdd}>
            Add new advertisement
          </Button>
        </Link>

      </Container>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {
            products.map(product => (

              <Grid key={product._id} item xs={12} sm={6} md={4}>
                <Card
                  image={`/uploads/${product.files[0].name}`}
                  title={product.title}
                  subtitle={product.price}
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

            ))
          }

        </Grid>
      </Container>
    </TemplateDefault >
  )
}

Dashboard.requireAuth = true


export async function getServerSideProps({ req }) {
  const session = await getSession({ req })
  await dbConnect()

  const products = await ProductsModel.find({ 'user.id': session.userId })

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    }
  }
}

export default Dashboard
