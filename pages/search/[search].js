import Link from 'next/link'
import slugify from 'slugify'
import {
    Container,
    Paper,
    InputBase,
    IconButton,
    Typography,
    Grid,
    Box,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'

import TemplateDefault from '../../templates/Default'
import Card from '../../src/components/Card'
import { formatCurrency } from '../../src/utils/currency'
import ProductsModel from '../../src/models/products'
import { useState } from 'react'
import { useRouter } from 'next/router'


const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(0, 2),
        marginBottom: 20,
    },
    productLink: {
        textDecoration: 'none'
    }
}))

const List = ({ products, search }) => {
    const classes = useStyles()
    const router = useRouter()
    const [inputSearch, setInputSearch] = useState(search)

    const handleSubmitSearch = inputSearch => {
        router.push(`/search/${inputSearch}`)
    }

    return (
        <TemplateDefault>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Paper component="form" className={classes.searchBox}>
                            <InputBase
                                value={inputSearch}
                                placeholder="E. g. Dinner table"
                                fullWidth
                                onChange={(e) => setInputSearch(e.target.value)}
                            />
                            <IconButton onClick={() => handleSubmitSearch(inputSearch)}>
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <Box className={classes.box}>
                        <Typography component="h6" variant="h6">
                            Advertisements
                        </Typography>

                        <Typography component="span" variant="body1">
                            {products.length} results found for item &quot;{search}&quot;
                        </Typography>
                        <br /> <br />

                        {
                            products.map(product => {
                                const category = slugify(product.category).toLocaleLowerCase()
                                const title = slugify(product.title).toLocaleLowerCase()

                                return (
                                    <Grid key={product._id} item xs={12} sm={6} md={4}>
                                        <Link href={`/${category}/${title}/${product._id}`}>
                                            <a className={classes.productLink}>
                                                <Card
                                                    image={`/uploads/${product.files[0].name}`}
                                                    title={product.title}
                                                    subtitle={formatCurrency(product.price)}
                                                />
                                            </a>
                                        </Link>
                                    </Grid>
                                )
                            })
                        }


                    </Box>
                </Grid>

            </Container>
        </TemplateDefault >
    )
}

export async function getServerSideProps({ query }) {
    const { search } = query

    const products = await ProductsModel.find({
        $or: [
            {
                title: {
                    $regex: search,
                    $options: 'i'
                }
            },
            {
                description: {
                    $regex: search,
                    $options: 'i'
                }
            }
        ]
    })

    return {
        props: {
            products: JSON.parse(JSON.stringify(products)),
            search: search
        }
    }
}

export default List