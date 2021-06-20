import { MenuBlock } from '..'
import images from './images'

function Menu() {
  const menu = [
    {
      title: 'Кремовый замок',
      text: 'Нежный крем любого цвета на выбор, вафельная основа',
      price: 150,
      img: images[0]
    },
    {
      title: 'Малиновый рай',
      text: 'Воздушный крем, темная основа и ягода малины',
      price: 190,
      img: images[1]
    },
    {
      title: 'Фейерверк',
      text: 'Разноцветные крем, с бисквитной основой',
      price: 250,
      img: images[2]
    },
    {
      title: 'Шоколадный мир',
      text: 'Ореховая стружка, нежный крем и шоколадная основа',
      price: 200,
      img: images[3]
    },
    {
      title: 'Слезы дракона',
      text: 'Нежный крем любого цвета на выбор, вафельная основа',
      price: 200,
      img: images[4]
    },
    {
      title: 'Летняя фантазия',
      text: 'Украшения в форме сердец, для любимого человека',
      price: 250,
      img: images[5]
    },
    {
      title: 'Мыс безумия',
      text: 'Разноцветная основа, стружка и нежный крем',
      price: 100,
      img: images[6]
    },
    {
      title: 'Облачная сказка',
      text: 'Светлая основа, нежный крем со стружкой сверху',
      price: 150,
      img: images[7]
    },
    {
      title: 'Темный рыцарь',
      text: 'Тёмная основа, нежный крем и вкусные шарики',
      price: 200,
      img: images[8]
    },
  ]

  return (
    <div id='menu' className="price-menu menu">
      {menu.map((el, id) => {
        return <MenuBlock key={el + id} {...el} />
      })}  
    </div>
  )
}

export default Menu
