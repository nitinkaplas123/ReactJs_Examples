const Form=(props)=>{
//    const handledInput=event=>{
//        props.onChangeInput(event);
//    }


   return (
    <form onSubmit={props.onFormSubmission}>
    <h2>Item Card Details</h2>
    <div className="input-field">
        <label htmlFor="title">Title</label>
        <input 
        name="title"
        type="text" 
        placeholder="Enter Title" 
        value={props.Item.title}
        onChange={props.handledInput}
        />
    </div>
    <div className="input-field">
        <label htmlFor="price">Price</label>
        <input 
        name="price"
        type="number" 
        placeholder="Enter Price" 
        value={props.Item.price}
        onChange={props.handledInput}
        />
    </div>
    <div className="input-field">
        <label htmlFor="discountedPrice">DiscountedPrice</label>
        <input 
        name="discountedPrice"
        type="number" 
        placeholder="Enter DiscountedPrice" 
        value={props.Item.discountedPrice}
        onChange={props.handledInput}
       
        />
    </div>
    <div className="input-field">
        <label htmlFor="thumbnail">Thumbnail</label>
        <input 
        name="thumbnail"
        type="text" 
        placeholder="Enter Thumbnail Name" 
        value={props.Item.thumbnail}
        onChange={props.handledInput}
        />
    </div>
    <div className="submit-wrap">
      <button>Update</button>
    </div>
</form>
   )
}
export default Form