import './App.css';
import React from 'react';
import Products from './Components/productsPage';

function App() {

  const [data, setData] = React.useState([]);
  const [pageInfo, setPageInfo] = React.useState({
    page_no: 1,
  })
  const [filteredData, setFilteredData] = React.useState([]);
  const [isFiltered, setIsFiltered] = React.useState(false);
  const [distinctItems, setDistinctItems] = React.useState([]);

  React.useEffect(() => {
  fetch('https://fakestoreapi.com/products/')
    .then(res=>res.json())
    .then(json=> setData(json))
  }, [])

  React.useEffect(() => {
    data.map(item => {
      let isPresent = false;
      for (let i = 0; i < distinctItems.length; i++) {
        console.log(distinctItems[i].category, item.category);
        if (distinctItems[i].category === item.category) {
          isPresent = true;
        }
      }
      if (!isPresent) {
        setDistinctItems(prevItems => [...prevItems, item]);
      }
    })
    // const set = new Set(distinctItems)
    // setDistinctItems([...set]);
  }, data)

  function incrementPage () {
    if (pageInfo.page_no >= Math.ceil(data.length / 5)) {
      return;
    }
    setPageInfo(prevPageInfo => ({page_no: prevPageInfo.page_no + 1}));
  }

  function decrementPage () {
    if (pageInfo.page_no <= 1) {
      return;
    }
    setPageInfo(prevPageInfo => ({page_no: prevPageInfo.page_no - 1}));
  }

  function handleChange (e) {
    if (e.target.value !== "") {
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
    }
    data.map(item => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].category === e.target.value) {
          setFilteredData(prevData => ([...prevData, item]));
        }
      }
    })
  }

  return (
    <div className="dropDown-container">
      <select name="catagory" id="catagory" onChange={handleChange}>
        <option value="" selected >Choose Catagory</option>
        {distinctItems.map(item => <option value={item.category}>{item.category}</option>)}
      </select>
      <h1>Page: {pageInfo.page_no}</h1>
      {isFiltered ? <Products info={filteredData} /> :
      <div>
        <Products info={data.slice((pageInfo.page_no - 1) * 5, (pageInfo.page_no - 1) * 5 + 5)} />
        <div className="buttonContainer">
          <button onClick={decrementPage}>prev</button>
          <button onClick={incrementPage}>next</button>
        </div>
      </div>
        
    }
    </div>
  );
}

export default App;