import {useState} from 'react';

function Categories({categories,setCurrentCategory}) {
    const [indexCategory,setIndexCategory] = useState(0)
    
    return(
      <div className="categories">
              <ul>
                {categories.map((element,i) => (
                  <li key={i} onClick={()=>{
                    setIndexCategory(i)
                    setCurrentCategory(element)
                  }} className={ indexCategory === i ? 'active':'' }>{element}</li>
                ))}
              </ul>
            </div>
    )
}

export default Categories;