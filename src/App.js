import {useState,useEffect} from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import MyLoader from './components/ContentLoader';



function App() {

  const [categories,setCategories]= useState([])
  const [sortArray,setSortArray] = useState([]);
  const [pizza,setPizza] = useState([]);
  //Loader Component
  const [myLoader,setMyLoader] = useState(true)

  useEffect(() => {
    fetch('https://635176823e9fa1244e5f58cb.mockapi.io/pizza')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setPizza(data[0].pizza)
      setCategories(data[0].categories)
      setSortArray(data[0].sortTypes)
      setMyLoader(false)
    })
  },[]);    



  

  const [searchInput,setSearchInput] = useState()
  const [currentCategory,setCurrentCategory] = useState("все");
  function searchAndFilter(category){
    setSearchInput(category)
  }

  const [currentSortType, setCurrentSortType] = useState('популярности') 
  function getSortType(type) {
    setCurrentSortType(type)
  }

  return (
    <div className="wrapper">
      <Header searchAndFilter={searchAndFilter}/>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories categories={categories} setCurrentCategory={setCurrentCategory}/>
            <Sort sortArray={sortArray} getSortType={getSortType}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              myLoader ?
               <><MyLoader/><MyLoader/><MyLoader/><MyLoader/><MyLoader/><MyLoader/><MyLoader/><MyLoader/> </>:
               pizza
                .filter(
                  e=>{
                    if(searchInput){
                      return e.title.toLowerCase().includes(searchInput)
                    }else{
                      return e
                    }
                  }
                )
                .filter(
                  el=>{
                  if( "все" === currentCategory.toLowerCase()){
                    return el
                  }else{
                    return el.category.toLowerCase() === currentCategory.toLowerCase()
                  }
                }
                )
                .map((element) => (
                  <PizzaBlock key={element.id} name={element.title} price={element.price} category={element.category} imageUrl={element.imageUrl} rating={element.rating}
                  />
                ))
                .sort((a,b)=>{
                    if(currentSortType === 'цене') {
                      return a.props.price - b.props.price
                    }else if(currentSortType === 'популярности'){
                      return b.props.rating - a.props.rating
                    }else{
                      return a.props.name.localeCompare(b.props.name)
                    }
                  }
                )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

