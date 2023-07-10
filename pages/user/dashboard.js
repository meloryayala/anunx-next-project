import { getSession } from 'next-auth/client'
import { useState } from 'react'

import {
  Button,
  Container,
  Grid,
  Typography,
  Link,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import TemplateDefault from '../../templates/Default'
import Card from '../../src/components/Card'
import ProductsModel from '../../src/models/products'
import dbConnect from '../../src/utils/dbConnect'
import { formatCurrency } from '../../src/utils/currency'
import axios from 'axios'
import useToasty from '../../src/contexts/Toasty'


const useStyles = makeStyles((theme) => ({
  buttonAdd: {
    margin: '30px auto',
    display: 'block',
  },
  emptyProducts: {
    margin: '50px auto',
  }
}))

const Dashboard = ({ products }) => {
  const classes = useStyles()
  const [productId, setProductId] = useState()
  const [openConfirmModal, setOpenConfirmModal] = useState(false)
  const [removedProducts, setRemovedProducts] = useState([])
  const { setToasty } = useToasty()

  const handleCloseModal = () => setOpenConfirmModal(false)

  const handleClickRemove = productId => {
    setProductId(productId)
    setOpenConfirmModal(true)

  }

  const handleConfirmRemove = () => {
    axios.delete('/api/products/delete', {
      data: {
        id: productId
      }
    })
      .then(handleSuccess)
      .catch(handleError)
  }

  const handleSuccess = () => {
    setOpenConfirmModal(false)
    setRemovedProducts([...removedProducts, productId])
    setToasty({
      open: true,
      severity: 'success',
      text: 'Advertisement removed successfully!',
    })
  }

  const handleError = () => {
    setOpenConfirmModal(false)
    setToasty({
      open: true,
      severity: 'error',
      text: 'Oops, an error has ocurred!'
    })
  }

  return (
    <TemplateDefault>

      <Dialog
        open={openConfirmModal}
        onClose={handleCloseModal}
      >
        <DialogTitle>Do you relly want to remove this advertisement?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you delete this product, the action can not be reverted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmRemove} color="primary" autoFocus>
            Remove
          </Button>
        </DialogActions>
      </Dialog>

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
        {
          products.length === 0 &&
          <Typography component="div" variant="body1" align="center" color="primary" className={classes.emptyProducts}>
            No advertisements published
          </Typography>
        }
        <Grid container spacing={4}>
          {
            products.map(product => {

              if (removedProducts.includes(product._id)) return null

              return (
                <Grid key={product._id} item xs={12} sm={6} md={4}>
                  <Card
                    image={`/uploads/${product.files[0].name}`}
                    title={product.title}
                    subtitle={formatCurrency(product.price)}
                    actions={
                      <>
                        <Button size="small" color="primary">
                          Edit
                        </Button>
                        <Button onClick={() => handleClickRemove(product._id)} size="small" color="primary">
                          Remove
                        </Button>
                      </>
                    }
                  />
                </Grid>
              )
            })
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
