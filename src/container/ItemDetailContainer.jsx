import { useEffect, useState } from "react";
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([])
  useEffect(() => {
    requestItem();
  }, [])

  async function requestItem() {
    const res = await fetch('item.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (res.ok) {
      const json = await res.json();
      setItem(json[0]);
    } else {
      console.log('Something went wrong while fetching item...');
    }
  }
  return <ItemDetail item={item} />
}

export default ItemDetailContainer;