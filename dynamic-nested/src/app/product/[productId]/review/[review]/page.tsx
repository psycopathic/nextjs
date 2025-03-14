export default function review({params}:{
    params:{
        productId:string,
        review:string
    }
}){
    return <h1>Review of product {params.productId} is {params.review}</h1>;
}