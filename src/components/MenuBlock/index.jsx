import { Button } from "..";

function MenuBlock({img, title, text, price}) {
  return (
    <div className='menu__block'>
      <img className='menu__image' src={img} alt="" />
      <div className="menu__content">
        <h3 className='menu__title'>{title}</h3>
        <p className='menu__text'>{text}</p>
        <div className="menu__bottom">
          <span className='menu__price'>{price} ₽/шт.</span>
          <a href='#form'><Button size='m' >Заказать</Button></a>
        </div>
      </div>
    </div>
  )
}

export default MenuBlock
