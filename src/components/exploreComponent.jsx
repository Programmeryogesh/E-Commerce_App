
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Button from '@mui/joy/Button';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from '../store/actions/productActions';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ExploreComponent() {
    const [expanded, setExpanded] = React.useState(false);

    const { productId } = useParams()
    const [ProductData, setProductData] = React.useState()
    async function GetData() {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const result = await response.json();
        setProductData(result);
    }
    React.useEffect(() => {
        GetData()
    }, [])

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const dispatch = useDispatch()
    const productInCart = useSelector((state) => state.cart.products);
    // console.log(productInCart);
    function isItemInCart() {
        return productInCart.some((oneObj) => oneObj.id == ProductData.id)
    }
    return (
        <>
            {ProductData &&
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Card sx={{ maxWidth: 1000, backgroundColor: "whitesmoke" }} >
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    {ProductData.title[0]}
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={ProductData.title}
                            subheader={ProductData.category}
                        />
                        <CardMedia
                            component="img"
                            sx={{ objectFit: "contain" }}
                            height="500"
                            image={ProductData.image}
                            alt="Paella dish"
                        />
                        <CardContent sx={{ textAlign: "center" }}>
                            <Typography level="body-xs">Total price:</Typography>
                            <Typography fontSize="20px" fontWeight="lg">
                                ${ProductData.price}
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography variant="body2" color="black" fontSize={20}>
                                {ProductData.description}
                            </Typography>
                        </CardContent>

                        <CardActions disableSpacing>
                            {isItemInCart() ? (
                                <Button
                                    onClick={() => dispatch(setProducts(ProductData))}
                                    variant="outlined"
                                    disabled
                                    size="md"
                                    aria-label="Explore Bahamas Islands"
                                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 , fontSize:"20px",padding:"10px 20px"  }}
                                >
                                    Already Added
                                </Button>
                            ) : (
                                <Button
                                    onClick={() => dispatch(setProducts(ProductData))}
                                    variant="contained"
                                    size="md"
                                    aria-label="Explore Bahamas Islands"
                                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 , fontSize:"20px",padding:"10px 20px" , backgroundColor:"#007af3" , color:"white" }}
                                >
                                    Add To Cart
                                </Button>
                            )}
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            {/* <CardContent>
                                <Typography paragraph>Method:</Typography>
                                <Typography paragraph>
                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                    aside for 10 minutes.
                                </Typography>
                                <Typography paragraph>
                                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                    medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                    occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                    large plate and set aside, leaving chicken and chorizo in the pan. Add
                                    pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                    stirring often until thickened and fragrant, about 10 minutes. Add
                                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                </Typography>
                                <Typography paragraph>
                                    Add rice and stir very gently to distribute. Top with artichokes and
                                    peppers, and cook without stirring, until most of the liquid is absorbed,
                                    15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                    mussels, tucking them down into the rice, and cook again without
                                    stirring, until mussels have opened and rice is just tender, 5 to 7
                                    minutes more. (Discard any mussels that don&apos;t open.)
                                </Typography>
                                <Typography>
                                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                                </Typography>
                            </CardContent> */}
                        </Collapse>
                    </Card>
                </Box>
            }
        </>
    );
}