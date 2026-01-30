export let productsData = [

];


fetch('https://fakestoreapi.com/products')
    .then((res) => {
        return res.json();
    })
    .then((Data) => {
        // Convert prices from USD to INR (Approx conversion rate: 80)
        const convertedData = Data.map(product => ({
            ...product,
            price: Math.round(product.price * 80)
        }));
        productsData = convertedData;
        // console.log(productsData);
    })
    .catch((err) => {
        console.log(err);
    })