import React from 'react';
import {Link} from 'react-router-dom';

const ProductCard = ({service}) => {
    const{_id,name,price,image,description,avaialbequantit,minimumquantity}=service
    return (
        
           <div class="card   border-red-50 border bg-white drop-shadow-xl rounded-none">
  <figure class="px-10 pt-10 pb-2 flex justify-center items center">
   <img src={image} alt="Shoes" style={{height:"200px"}} class="rounded-xl " />
  </figure>
  <div class=" items-center pt-8   text-left">
    <h2 class="card-title uppercase px-4">{name}</h2>
    <p  className='font-semibold px-4 text-left text-lg text-blue-600'>{price} $</p>
    <p className='px-4 pt-4 '>Availale:{avaialbequantit} Pcs</p>
    <p className='font-medium px-4 '>Order-Minimun:{minimumquantity}pcs</p>
    <p className='pb-7 py-1 px-4'>{description.slice(0,30)}<span title={description.slice(31,40)}>...</span></p>
    <div class="card-actions mt-3 ">
      <button class="btn hover:bg-black hover:text-white  btn-block rounded-none px-11 btn-primary"><Link to={`purchase/${_id}`}>Purchase</Link></button>
    </div>
  </div>
</div>
      
    );
};

export default ProductCard;