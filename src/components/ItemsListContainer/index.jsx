import "./styles.css"

export const ItemsListContainer = (props) => {
  return (
    <div className="productsContainer">
      <span className="greeting">{props.greeting}</span>  
    </div>
  )
}