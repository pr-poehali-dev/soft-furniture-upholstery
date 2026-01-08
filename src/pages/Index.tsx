import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const services = [
    {
      icon: "Armchair",
      title: "Перетяжка мягкой мебели",
      description: "Профессиональная перетяжка диванов, кресел, стульев. Используем только премиальные ткани европейского качества."
    },
    {
      icon: "Truck",
      title: "Доставка и вывоз",
      description: "Бесплатный вывоз мебели из вашего дома и доставка после реставрации. Работаем аккуратно и бережно."
    },
    {
      icon: "Sparkles",
      title: "Реставрация каркаса",
      description: "Восстановление деревянных элементов, укрепление конструкции, замена пружинных блоков и наполнителя."
    },
    {
      icon: "Palette",
      title: "Индивидуальный дизайн",
      description: "Подберем ткань под ваш интерьер. Более 500 образцов материалов в наличии."
    }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/982e1aa9-74e7-4bd6-b00e-5e1bb2840800/files/a2794186-f5c2-4ed3-9e51-9f7a8a0cd9cb.jpg",
      title: "Кресло с бархатной обивкой",
      description: "Изумрудный бархат, латунные ножки"
    },
    {
      image: "https://cdn.poehali.dev/projects/982e1aa9-74e7-4bd6-b00e-5e1bb2840800/files/5cff354a-da61-4158-88d6-4c8646b917e1.jpg",
      title: "Реставрация классического дивана",
      description: "Бежевый лен, полная замена наполнителя"
    },
    {
      image: "https://cdn.poehali.dev/projects/982e1aa9-74e7-4bd6-b00e-5e1bb2840800/files/06e717ba-e6a5-4bea-8aef-9643b7242c8b.jpg",
      title: "Обеденные стулья",
      description: "Бордовый велюр, резной каркас"
    }
  ];

  const process = [
    { step: "01", title: "Консультация", text: "Бесплатный выезд мастера, оценка работы" },
    { step: "02", title: "Выбор материалов", text: "Подбор тканей и фурнитуры" },
    { step: "03", title: "Вывоз мебели", text: "Аккуратная транспортировка в мастерскую" },
    { step: "04", title: "Реставрация", text: "Профессиональная работа мастеров" },
    { step: "05", title: "Доставка", text: "Возврат обновленной мебели" }
  ];

  const team = [
    { name: "Алексей Волков", role: "Главный мастер", experience: "18 лет опыта" },
    { name: "Марина Соколова", role: "Дизайнер", experience: "12 лет опыта" },
    { name: "Дмитрий Петров", role: "Мастер-реставратор", experience: "15 лет опыта" }
  ];

  const reviews = [
    { name: "Елена К.", text: "Превосходная работа! Старый бабушкин диван выглядит как новый. Спасибо мастерам!", rating: 5 },
    { name: "Михаил Р.", text: "Профессиональный подход, точно в срок. Качество материалов на высоте.", rating: 5 },
    { name: "Ольга С.", text: "Очень довольна результатом. Кресла получились роскошные!", rating: 5 }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-accent/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Мастерская Люкс</h1>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="text-foreground hover:text-accent transition-colors">Услуги</a>
            <a href="#portfolio" className="text-foreground hover:text-accent transition-colors">Портфолио</a>
            <a href="#process" className="text-foreground hover:text-accent transition-colors">Процесс</a>
            <a href="#team" className="text-foreground hover:text-accent transition-colors">Команда</a>
            <a href="#reviews" className="text-foreground hover:text-accent transition-colors">Отзывы</a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">Контакты</a>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-primary">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (929) 833-33-18
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-bold text-primary mb-6 animate-fade-in">
            Перетяжка мебели<br />премиум-класса
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
            Вдыхаем новую жизнь в вашу любимую мебель. Европейское качество, внимание к деталям, роскошные материалы.
          </p>
          <div className="flex gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary">
              Бесплатная консультация
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
              Наши работы
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center text-primary mb-4">Наши услуги</h3>
          <p className="text-center text-muted-foreground mb-12">Полный спектр услуг по реставрации мебели</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="border-2 border-accent/20 hover:border-accent transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-2">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center text-primary mb-4">Портфолио</h3>
          <p className="text-center text-muted-foreground mb-12">Примеры наших лучших работ</p>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, idx) => (
              <div key={idx} className="group cursor-pointer" onClick={() => setSelectedImage(item.image)}>
                <div className="overflow-hidden rounded-lg border-2 border-accent/20 mb-4 hover:border-accent transition-all">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-semibold text-primary mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in cursor-pointer"
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

      <section id="process" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center text-primary mb-4">Процесс работы</h3>
          <p className="text-center text-muted-foreground mb-12">Прозрачность на каждом этапе</p>
          <div className="max-w-4xl mx-auto">
            {process.map((item, idx) => (
              <div key={idx} className="flex gap-6 mb-8 items-start">
                <div className="text-6xl font-bold text-accent/20">{item.step}</div>
                <div className="flex-1">
                  <h4 className="text-2xl font-semibold text-primary mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center text-primary mb-4">Наша команда</h3>
          <p className="text-center text-muted-foreground mb-12">Мастера своего дела</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, idx) => (
              <Card key={idx} className="text-center border-2 border-accent/20">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={48} className="text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-1">{member.name}</h4>
                  <p className="text-muted-foreground mb-2">{member.role}</p>
                  <p className="text-sm text-accent">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center text-primary mb-4">Отзывы</h3>
          <p className="text-center text-muted-foreground mb-12">Что говорят наши клиенты</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={idx} className="border-2 border-accent/20">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-primary">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-5xl font-bold text-center text-primary mb-4">Свяжитесь с нами</h3>
          <p className="text-center text-muted-foreground mb-12">Оставьте заявку, и мы перезвоним в течение 15 минут</p>
          <Card className="border-2 border-accent/20">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Ваше имя</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Сообщение</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Расскажите о вашей мебели"
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-primary" size="lg">
                  Отправить заявку
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-accent/20 text-center space-y-2">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Icon name="Phone" size={20} className="text-accent" />
                  <span>+7 (929) 833-33-18</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Icon name="Mail" size={20} className="text-accent" />
                  <span>info@luxury-furniture.ru</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Icon name="MapPin" size={20} className="text-accent" />
                  <span>Москва, ул. Мастеров, д. 15</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Мастерская Люкс</h2>
          <p className="text-primary-foreground/80 mb-6">Перетяжка мебели премиум-класса с 2005 года</p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" size="icon" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
              <Icon name="Youtube" size={20} />
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/60 mt-8">© 2024 Мастерская Люкс. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;