import location from './../../assets/img/location.svg'
import phone from './../../assets/img/phone.svg'

function Header() {
  return (
    <div className='container'>
      <div className="row">
        <div className="logo">Сладкий сундук</div>

        <div className='row'>
        <div className="adress">
          <img src={location} alt="" />
          <p>г. Санкт Петербург,<br /> ул. Куйбышева 31</p>
        </div>

        <div className="phone">
          <img src={phone} alt="" />

          <div className="phone__text">
            <a href='tel: +78128449549' className='phone__number'>8 (812) 844-95-49</a>
            <p>Ежедневно с 9:00 до 20:00</p>
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Header
