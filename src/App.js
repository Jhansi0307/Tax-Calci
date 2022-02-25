import './App.css'
import React ,{useState}from 'react'
function App() {

const [product,setProduct]=useState({
quantity:'',
price:"",
amount:'',
cgst:'',
sgst:'',
taxamount:'',
grandtotal:'',

  })
const handleChange=(event) => {
setProduct({...product,[event.target.name]:event.target.value})
}
  console.log(product);

  var amount = parseInt(product.quantity)*parseInt(product.price)
console.log(amount);
var taxamount=parseInt(product.cgst)+parseInt(product.sgst)
console.log(taxamount);
var grandtotal=parseInt(amount)+parseInt(taxamount)
console.log(grandtotal);
  return (
    <div className="container">
      <label for="quantity">Quantity     :</label>
      <input type="text"  id="space" name="quantity" min="1" max="10" value={product.quantity} onChange={handleChange} />

<br></br>
      <label for="price">Price   :</label>
      <input type="text" id="space" name="price" min="1" max="10" value={product.price} onChange={handleChange} />
        
     
      <br></br>
      <label for="amount">Amount  :</label>
      <input value={amount} id="space" name="amount" min="1" max="10" />
        
      <br></br>

      <label for="cgst">CGST       :</label>
      <input type="text" id="space" name="cgst" value={product.cgst} onChange={handleChange} />
        
      <br></br>
      <label for="sgst">SGST      :</label>
      <input type="text" id="space" name="sgst" value={product.sgst} onChange={handleChange} />
        
      <br></br>



      <label for="taxamount">TaxAmount        :</label>
      <input type="text"  value={taxamount} id="space" name="taxamount"/>
        
      <br></br>



      <label for="grandtotal">GrandTotal   :</label>
      <input  value={grandtotal} id="space"  name="grandtotal"/>
      




          </div>
    
  )
}

export default App