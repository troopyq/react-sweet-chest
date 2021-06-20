
import './assets/scss/app.scss';
import { Button, Header, Menu, Section, Slider, Gallery, Form, Footer } from './components';

import woman from './assets/img/женщина.png'

function App() {
   

 return (
   <div className="wrapper">
    <header>
      <Header />
      <Section>
        <div className="sec-1">
        <Button size='s' color='w' >Вкуснейшие</Button>
        <h1>Пирожные и капкейки <br /> от 150 ₽/шт. с доставкой <br /> по Санкт Петербургу</h1>
        <p>Приготовим за 3 часа в день заказа. <br />
            Доставка на авто в холодильнике.</p>
        <Button size='l'>Перейти в каталог</Button>
        <span>9 различных видов на выбор</span>
        </div>
      </Section>
    </header>
    <main>
      <Section white style={{marginTop: '0px'}} >
        <div className="sec-2">
          <h2>Для любых событий и дорогих вам людей</h2>
          <Menu />
        </div>
      </Section>
      <Section className='bg-3' >
        <div className="sec-3">
          <Button size='s' color='w' >Не нашли то что нужно?</Button>
          <h2>Приготовим заказ любой сложности по фото или эскизу</h2>
          <p>Загрузите фотографию или эскиз капкейков и мы рассчитаем стоимость за 30 минут</p>
          <Button size='l' >Загрузить фотографию</Button>
        </div>
      </Section>
      <Section white >
        <div className="sec-4">
          <div className="sec-4__text">
            <Button size='s' color='w' >Кто будет готовить?</Button>
            <h2>Лично приготовлю и всё красиво упакую для вашего события</h2>
            <ul>
              <li>Проконсультирую по выбору капкейков и придумаю нестандартную идею</li>
              <li>Приготовлю капкейки для вашего события, которые обязательно всем понравятся</li>
              <li>Аккуратно и красиво всё упакую, если вы хотите сделать приятный подарок</li>
            </ul>
            <Button size='l' >Задать вопрос Юлии</Button>
          </div>

          <div className="sec-4__image">
            <img src={woman} alt="" />
            <div className="woman__block">
              <div className="woman__up">Юлия Кондратьева</div>
              <div className="woman__low">ваш кондитер</div>
            </div>
          </div>
        </div>
      </Section>
      <Section >
        <div className="sec-5">
          <h2>Почитайте отзывы довольных клиентов</h2>
          <Slider />
        </div>
      </Section>
      <Section white notcont>
        <div className="sec-6">
          <h2>Сделали более 3.000 заказов за 2 года</h2>
          <h3>Посмотрите фото реальных заказов из нашего instagram</h3>
        </div>
        <Gallery />
      </Section>
      <Section>
        <Form />
      </Section>
    </main>
    <Footer />
   </div>
 )
}

export default App;
