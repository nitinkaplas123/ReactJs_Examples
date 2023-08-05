import ListItem from "../Components/ListItem"
import Form from "../Components/Form"
import { useState } from "react"
// const Item={
//         id:0,
//         discountPrice:340,
//         price:450,
//         title:'Title of the Item 1',
//         thumbnail:"logo192.png"
//     }

const Products=()=>{

    //  const [title,setTitle]=useState("");
    //  const [price,setPrice]=useState(0);
    //  const [discountedPrice,setDiscountedPrice]=useState(0);
    //  const [thumbnail,setThumbnail]= useState("");


     const [Item,setItem]=useState({
         id:0,
         discountedPrice:340,
         price:450,
         title:'Title of the Item 1',
         thumbnail:"logo192.png"
     })

    //  const handledTitle=(event)=>{ 
    //     //  setTitle(event.target.value);
    //      setItem({
    //         ...Item,
    //         title: event.target.value
    //      })
    //  }

    //  const handledPrice=(event)=>{
    //     // setPrice(event.target.value);
    //     setItem({
    //         ...Item,
    //         price: event.target.value
    //      })
    // }

    // const handledDiscountedPrice=(event)=>{
    //     // setDiscountedPrice(event.target.value);
    //     setItem({
    //         ...Item,
    //         discountedPrice: event.target.value
    //      })
    // }

    // const handledThumbnail=(event)=>{
    //     // setThumbnail(event.target.value);
    //     setItem({
    //         ...Item,
    //         thumbnail: event.target.value
    //      })
    // }

    const handledInput=(event)=>{
          console.log(event.target.value,event.target.name);
          setItem({
            ...Item,
           [event.target.name]:event.target.value
          })

          console.log("handledInput working fine")
    }

    const submitForm=(event)=>{
        event.preventDefault();
        
        if(Item.discountedPrice>Item.price){
            alert("Discounted Price Cannot be greater than Price");
            return ;
        }

        console.log("Form Submission is working fine!!")

        
    }
     return (
      <div className={"product-wrapper"}>
        <div className={"form"}>
           <Form Item={Item} handledInput={handledInput} onFormSubmission={submitForm}/>
        </div>
        <div>
            <div>
                <ListItem data={Item}/>
            </div>
        </div>
      </div>
     )
}
export default Products