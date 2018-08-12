
const products = [
    {
        id: 1,
        title: "DJI MAVIC PRO",
        quantity: 25,
    },
    {
        id: 2,
        title: "DJI SPARK",
        quantity: 40,
    },
    {
        id: 3,
        title: "PHANTHOM PRO 4",
        quantity: 20,
    },
    {
        id: 4,
        title: "DJI MACIC AIR",
        quantity: 30
    }
]


class ProductService {
    list() {
        return products;
    }
}


export const productService = new ProductService();
