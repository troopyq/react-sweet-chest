import './Form.scss'

import {Button} from '..'

function Form() {
  return (
    <div id='form' className='form'>
      <div className="form__title">
        <h2>Чтобы сделать заказ, укажите ваш телефон</h2>
        <p>Мы перезвоним в течении 15 минут, чтобы уточнить ваши пожелания</p>
      </div>
      <form >
        <div className="fields">
          <div className="phone">
            <input id='phone' type="number" placeholder='Номер телефона'/>
          </div>
          <Button size='l' params={{style: {width: '380px', height: '86px', marginRight: '0px'}}} >Сделать заказ</Button>
        </div>
        <label id='license-label' htmlFor="license"><input id='license' type="checkbox" /> Нажамая на кнопку, вы соглашаетесь с условиями обработки персональных данных</label>
      </form>
    </div>
  )
}

export default Form
