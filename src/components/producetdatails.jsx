import { Box } from "@mui/material";
import ProductCard from "./producetCard";

function CardProduct({ ProductData }) {
    return (<>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            { ProductData.map((Product) => (
                <ProductCard key={Product.id} Product ={Product} />
            ))}
        </Box>

    </>)
}

export default CardProduct;