import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const advantages = [
    {
      icon: "Clock",
      title: "Скорость",
      description: "Мастер приедет в любую точку города за 3 часа. Вся работа от 1 дня"
    },
    {
      icon: "ShieldCheck",
      title: "Гарантия качества",
      description: "Даём гарантию 2 года на все виды работ"
    },
    {
      icon: "Wallet",
      title: "Честные цены",
      description: "Окончательная стоимость не изменится после осмотра"
    },
    {
      icon: "Truck",
      title: "Бесплатная доставка",
      description: "Вывезем и привезём вашу мебель абсолютно бесплатно"
    },
    {
      icon: "Star",
      title: "Опыт 10+ лет",
      description: "Работаем с 2015 года. Сотни довольных клиентов"
    },
    {
      icon: "Sparkles",
      title: "Премиум материалы",
      description: "Работаем только с качественными тканями европейского производства"
    }
  ];

  const services = [
    {
      title: "Перетяжка диванов",
      description: "Полная замена обивки, ремонт каркаса, замена пружинных блоков",
      price: "от 8 000 ₽"
    },
    {
      title: "Перетяжка кресел",
      description: "Реставрация обивки, укрепление конструкции, новый наполнитель",
      price: "от 4 500 ₽"
    },
    {
      title: "Перетяжка стульев",
      description: "Замена ткани, ремонт ножек, обновление сидений",
      price: "от 1 800 ₽"
    },
    {
      title: "Ремонт мебели",
      description: "Восстановление механизмов, замена фурнитуры, укрепление каркаса",
      price: "от 2 000 ₽"
    },
    {
      title: "Перетяжка кухонных уголков",
      description: "Полное обновление обивки кухонной мебели",
      price: "от 12 000 ₽"
    },
    {
      title: "Изготовление чехлов",
      description: "Пошив съёмных чехлов на заказ из любых материалов",
      price: "от 3 500 ₽"
    }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/982e1aa9-74e7-4bd6-b00e-5e1bb2840800/files/b9851e0d-d489-4faa-b1db-23449b52bc51.jpg",
      title: "Классический диван",
      description: "До и после реставрации"
    },
    {
      image: "https://cdn.poehali.dev/projects/982e1aa9-74e7-4bd6-b00e-5e1bb2840800/files/a2794186-f5c2-4ed3-9e51-9f7a8a0cd9cb.jpg",
      title: "Кресло с бархатной обивкой",
      description: "Изумрудный бархат"
    },
    {
      image: "https://cdn.poehali.dev/projects/982e1aa9-74e7-4bd6-b00e-5e1bb2840800/files/5cff354a-da61-4158-88d6-4c8646b917e1.jpg",
      title: "Реставрация дивана",
      description: "Бежевый лен"
    },
    {
      image: "https://cdn.poehali.dev/projects/982e1aa9-74e7-4bd6-b00e-5e1bb2840800/files/13c8bd45-32c8-42cb-a10a-6ada40f6fb82.jpg",
      title: "Обеденные стулья",
      description: "Бордовый велюр"
    },
    {
      image: "https://cdn.poehali.dev/projects/982e1aa9-74e7-4bd6-b00e-5e1bb2840800/files/06e717ba-e6a5-4bea-8aef-9643b7242c8b.jpg",
      title: "Элитные стулья",
      description: "Резной каркас"
    },
    {
      image: "https://cdn.poehali.dev/projects/982e1aa9-74e7-4bd6-b00e-5e1bb2840800/files/ca81c434-70c1-499a-802c-b83603d3b7f9.jpg",
      title: "Работа мастера",
      description: "Процесс перетяжки"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Здравствуйте! Меня зовут ${formData.name}. Хочу заказать перетяжку мебели.`;
    const whatsappUrl = `https://wa.me/79298333318?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: "", phone: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img 
              src="https://cdn.poehali.dev/files/b41176a0-bbe2-405b-854e-028bd40e1f5f.jpeg" 
              alt="Мастерская Тах-та" 
              className="h-16 w-16 md:h-20 md:w-20 object-contain"
            />
            <div>
              <h1 className="text-xl md:text-3xl font-bold text-primary">Мастерская Тах-та</h1>
              <p className="text-xs md:text-sm text-muted-foreground">Перетяжка и ремонт мягкой мебели</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="text-right">
              <p className="text-muted-foreground text-sm">Работаем ежедневно с 9:00 до 19:00</p>
              <a href="tel:+79298333318" className="text-primary text-xl font-bold hover:text-primary/80 transition-colors">
                +7 (929) 833-33-18
              </a>
            </div>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-accent mb-6 animate-fade-in">
            Перетяжка мебели<br />Новороссийск - Геленджик
          </h2>
          <p className="text-2xl text-accent/90 max-w-2xl mx-auto mb-4 animate-fade-in">
            Бесплатный выезд мастера
          </p>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8 animate-fade-in">
            Работаем быстро и качественно. Гарантия 2 года на все виды работ
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 animate-scale-in font-semibold">
            Заказать перетяжку
          </Button>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-primary mb-3">
            Почему выбирают именно нас?
          </h3>
          <p className="text-center text-muted-foreground mb-10">Наши преимущества</p>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {advantages.map((item, idx) => (
              <Card key={idx} className="border-2 border-primary/20 hover:border-accent transition-all hover:shadow-lg bg-card">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} size={24} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">Наши работы</h3>
          <p className="text-center text-muted-foreground mb-12">Примеры выполненных проектов</p>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((item, idx) => (
              <div key={idx} className="group cursor-pointer" onClick={() => setSelectedImage(item.image)}>
                <div className="overflow-hidden rounded-lg border-2 border-primary/20 mb-4 hover:border-accent transition-all">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-semibold text-primary mb-1">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-accent hover:text-accent/80 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={40} />
          </button>
          <img 
            src={selectedImage} 
            alt="Увеличенное изображение"
            className="max-w-full max-h-full object-contain animate-scale-in rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <section id="services" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">Наши услуги</h3>
          <p className="text-center text-muted-foreground mb-12">Полный спектр работ по ремонту мебели</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <Card key={idx} className="border-2 border-primary/20 hover:border-accent transition-all hover:shadow-lg bg-card">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold text-primary mb-2">{service.title}</h4>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-2xl font-bold text-accent">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">Как мы работаем</h3>
          <p className="text-center text-muted-foreground mb-12">Простой процесс от заявки до результата</p>
          <div className="space-y-6">
            {[
              { num: "01", title: "Оставляете заявку", text: "Звоните или пишете нам в WhatsApp" },
              { num: "02", title: "Выезд мастера", text: "Мастер приезжает к вам для осмотра и замеров — бесплатно" },
              { num: "03", title: "Выбор материалов", text: "Подбираем ткань и согласовываем цену" },
              { num: "04", title: "Забираем мебель", text: "Бесплатно вывозим мебель в мастерскую" },
              { num: "05", title: "Выполняем работу", text: "Перетяжка и ремонт от 1 до 5 дней" },
              { num: "06", title: "Доставляем готовую", text: "Привозим обновлённую мебель обратно" }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start bg-background p-6 rounded-lg border-2 border-primary/20 hover:border-accent transition-all">
                <div className="text-5xl font-bold text-accent/40 min-w-[80px]">{step.num}</div>
                <div>
                  <h4 className="text-2xl font-semibold text-primary mb-2">{step.title}</h4>
                  <p className="text-muted-foreground text-lg">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">Заказать перетяжку</h3>
          <p className="text-center text-muted-foreground mb-12">Оставьте заявку, и мастер свяжется с вами в течение 15 минут</p>
          <Card className="border-2 border-primary/20 bg-card">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Ваше имя *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-background border-2 border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Телефон *</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-background border-2 border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" size="lg">
                  Отправить заявку в WhatsApp
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
              <div className="mt-8 pt-8 border-t border-border text-center space-y-3">
                <div className="flex items-center justify-center gap-2 text-primary">
                  <Icon name="Phone" size={20} />
                  <a href="tel:+79298333318" className="text-xl font-bold hover:text-primary/80 transition-colors">
                    +7 (929) 833-33-18
                  </a>
                </div>
                <p className="text-muted-foreground">Работаем ежедневно с 9:00 до 19:00</p>
                <p className="text-muted-foreground">г. Новороссийск, ул. Кутузовская, 117</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">Как нас найти</h3>
          <p className="text-center text-muted-foreground mb-12">г. Новороссийск, ул. Кутузовская, 117</p>
          <div className="max-w-5xl mx-auto">
            <div className="rounded-lg overflow-hidden border-2 border-primary/20 shadow-xl">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Adc7c0e9ab9e8f7f4e3d2b3c0f9e8d7c6d5b4a3c2b1a0&amp;source=constructor"
                width="100%"
                height="500"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                title="Карта с адресом"
              ></iframe>
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-primary/20 bg-background">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-2">Адрес мастерской</h4>
                      <p className="text-muted-foreground">г. Новороссийск, ул. Кутузовская, 117</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 bg-background">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-2">Режим работы</h4>
                      <p className="text-muted-foreground">Ежедневно с 9:00 до 19:00</p>
                      <p className="text-muted-foreground text-sm mt-1">Без выходных</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <a 
          href="https://wa.me/79298333318" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 animate-scale-in"
        >
          <Icon name="MessageCircle" size={28} className="text-white" />
        </a>
        <a 
          href="https://t.me/+79298333318" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#0088cc] hover:bg-[#0077b5] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 animate-scale-in"
        >
          <Icon name="Send" size={26} className="text-white" />
        </a>
        <a 
          href="https://vk.me/public_id" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#0077FF] hover:bg-[#0066DD] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 animate-scale-in"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.785 16.241s.288-.032.436-.193c.136-.148.132-.426.132-.426s-.019-1.302.574-1.494c.584-.189 1.334 1.258 2.128 1.813.602.42 1.06.328 1.06.328l2.127-.03s1.112-.07.585-.962c-.043-.073-.308-.662-1.588-1.872-1.34-1.267-1.16-1.062.453-3.254.983-1.335 1.376-2.149 1.253-2.497-.117-.332-.84-.244-.84-.244l-2.396.015s-.178-.025-.31.056c-.129.079-.212.263-.212.263s-.379 1.028-.884 1.902c-1.065 1.841-1.491 1.939-1.665 1.824-.404-.267-.303-1.073-.303-1.645 0-1.788.265-2.533-.517-2.726-.26-.064-.451-.106-1.116-.113-.853-.009-1.576.003-1.984.207-.271.136-.48.439-.353.456.157.021.513.098.702.36.244.338.235 1.098.235 1.098s.14 2.105-.327 2.367c-.32.18-.76-.187-1.704-1.865-.483-.85-.848-1.79-.848-1.79s-.07-.176-.196-.27c-.152-.114-.365-.15-.365-.15l-2.276.015s-.342.01-.467.162c-.111.135-.009.413-.009.413s1.781 4.253 3.795 6.396c1.847 1.966 3.944 1.836 3.944 1.836h.952z"/>
          </svg>
        </a>
      </div>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">Отзывы клиентов</h3>
          <p className="text-center text-muted-foreground mb-12">Что говорят о нашей работе</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Елена Михайловна",
                date: "15 ноября 2024",
                text: "Отличная работа! Перетянули диван и два кресла. Мастер приехал в день обращения, подобрали красивую ткань. Всё сделали за 3 дня. Мебель выглядит как новая!",
                rating: 5
              },
              {
                name: "Андрей К.",
                date: "2 ноября 2024",
                text: "Обратился по рекомендации друзей. Качество работы на высоте, цены адекватные. Особенно порадовало, что привезли и забрали мебель бесплатно. Рекомендую!",
                rating: 5
              },
              {
                name: "Ольга Сергеевна",
                date: "20 октября 2024",
                text: "Спасибо огромное мастерам! Старый бабушкин диван выглядит роскошно. Думали уже выбрасывать, но решили попробовать восстановить. Результат превзошёл все ожидания!",
                rating: 5
              },
              {
                name: "Дмитрий Р.",
                date: "8 октября 2024",
                text: "Перетягивали кухонный уголок. Работу выполнили качественно и в срок. Мастер дал хорошие советы по выбору ткани. Всё честно, без скрытых доплат.",
                rating: 5
              },
              {
                name: "Марина В.",
                date: "25 сентября 2024",
                text: "Очень довольна результатом! Отреставрировали старинное кресло, которое досталось от прабабушки. Мастера настоящие профессионалы своего дела. Буду обращаться ещё!",
                rating: 5
              },
              {
                name: "Игорь Петрович",
                date: "10 сентября 2024",
                text: "Сделали перетяжку офисных стульев. Быстро, качественно, по разумной цене. Ребята работают профессионально, вежливые. Советую всем!",
                rating: 5
              }
            ].map((review, idx) => (
              <Card key={idx} className="border-2 border-primary/20 hover:border-accent transition-all bg-card">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <p className="font-semibold text-primary">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4 border-t-2 border-border">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-4">
            <img 
              src="https://cdn.poehali.dev/files/b41176a0-bbe2-405b-854e-028bd40e1f5f.jpeg" 
              alt="Мастерская Тах-та" 
              className="h-20 w-20 object-contain"
            />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-accent">Мастерская Тах-та</h2>
          <p className="text-primary-foreground/90 mb-6">Перетяжка и ремонт мягкой мебели с 2015 года</p>
          <div className="flex gap-4 justify-center mb-6">
            <a href="tel:+79298333318" className="text-xl font-bold text-accent hover:text-accent/80 transition-colors">
              +7 (929) 833-33-18
            </a>
          </div>
          <p className="text-sm text-primary-foreground/70">© 2024 Мастерская Тах-та. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;