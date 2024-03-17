import React from 'react'
import "./Products.css";
import { Label } from '@mui/icons-material';
import { useShopContext } from '../../Context/ShopContextProvider';
function FilterSidebar() {
  const {setBrand,setProcessor,setStorage,setRam} = useShopContext();
  return (
    <div data-aos="fade-right" className='sidebar'>
       <div className='brand-container'>
            <h3 className='mt-5 text-white'>Brand</h3>
            <label>
            <input onChange={(e)=>setBrand(e.target.value)}  type='radio' name='brand' title='Dell' value={"Dell"} />
            Dell
            </label>

            <label>
            <input onChange={(e)=>setBrand(e.target.value)}  type='radio' name='brand' title='HP' value={"HP"} />
            HP
            </label>

           <label>
           <input onChange={(e)=>setBrand(e.target.value)}  type='radio' name='brand' title='Apple' value={"Apple"} />
           Apple
           </label>

            <label>
            <input onChange={(e)=>setBrand(e.target.value)}  type='radio' name='brand' title='Lenovo' value={"Lenovo"} />
            Lenovo
            </label>

            <label>
            <input onChange={(e)=>setBrand(e.target.value)}  type='radio' name='brand' title='ASUS' value={"ASUS"} />
            ASUS
            </label>

            <label>
            <input onChange={(e)=>setBrand(e.target.value)}  type='radio' name='brand' title='Acer' value={"Acer"} />
            Acer
            </label>
            
            <label>
            <input onChange={(e)=>setBrand(e.target.value)}  type='radio' name='brand' title='Microsoft' value={"Microsoft"} />
            Microsoft
            </label>

           <label>
           <input onChange={(e)=>setBrand(e.target.value)}  type='radio' name='brand' title='MSI' value={"MSI"} />
           MSI
           </label>
            
       </div>

       <div className='processor-container'>
       <h3 className='mt-5 text-white'>Processor</h3>
       <label>
       <input onChange={(e)=>setProcessor(e.target.value)}  type='radio' name='processor' value={"Intel Core i5-1135G7"} />
       Intel Core i5-1135G7
       </label>

       <label>
       <input onChange={(e)=>setProcessor(e.target.value)}  type='radio' name='processor' value={"Intel Core i7-11800H"} />
       Intel Core i7-11800H
       </label>

      <label>
      <input onChange={(e)=>setProcessor(e.target.value)}  type='radio' name='processor' value={"Intel Core i9"} />
      Intel Core i9
      </label>

       <label>
       <input onChange={(e)=>setProcessor(e.target.value)}  type='radio' name='processor'  value={"AMD Ryzen"} />
       AMD Ryzen
       </label>
       
  </div>

  <div className='RAM-container'>
  <h3 className='mt-5 text-white'>RAM</h3>
  <label>
  <input onChange={(e)=>setRam(e.target.value)}  type='radio' name='ram'  value={"8GB"} />
  8GB
  </label>

  <label>
  <input onChange={(e)=>setRam(e.target.value)}  type='radio' name='ram' value={"12GB"} />
  12GB
  </label>

 <label>
 <input onChange={(e)=>setRam(e.target.value)}  type='radio' name='ram'  value={"16GB"} />
 16GB
 </label>

  <label>
  <input onChange={(e)=>setRam(e.target.value)}  type='radio' name='ram'  value={"32GB"} />
  32GB
  </label>
  
</div>

<div className='Storage-container'>
<h3 className='mt-5 text-white'>Storage</h3>
<label>
<input onChange={(e)=>setStorage(e.target.value)}  type='radio' name='storage'  value={"256GB SSD"} />
256GB SSD
</label>

<label>
<input onChange={(e)=>setStorage(e.target.value)}  type='radio' name='storage' value={"512GB SSD"} />
512GB SSD
</label>

<label>
<input  onChange={(e)=>setStorage(e.target.value)} type='radio' name='storage'  value={"1TB SSD"} />
1TB SSD
</label>

</div>

    </div>
  )
}

export default FilterSidebar
