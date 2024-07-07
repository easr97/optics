async function getAllProducts(){
    const res = await fetch("http://localhost:3003/produtcs");
    const resJson = await res.json();

}