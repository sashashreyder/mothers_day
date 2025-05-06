import './ComplimentCarousel.css';

const compliments = [
    {
      text: 'Ты моё самое тёплое воспоминание',
      img: 'https://i.pinimg.com/564x/31/3f/9e/313f9eb13e60a0f790b85f37b7e2d16f.jpg',
    },
    {
      text: 'Ты учишь меня любить по-настоящему',
      img: 'https://i.pinimg.com/564x/70/44/c6/7044c69ad5e71534038d8f3f4071ffb3.jpg',
    },
    {
      text: 'Ты делаешь дом домом',
      img: 'https://i.pinimg.com/564x/6c/b4/f5/6cb4f5a6b12276ef87094e69cfb2e179.jpg',
    },
    {
      text: 'С тобой я чувствую себя в безопасности',
      img: 'https://i.pinimg.com/564x/9c/32/01/9c32012f10a1fd911a3e5954208db234.jpg',
    },
    {
      text: 'Ты умеешь сделать обычный день особенным',
      img: 'https://i.pinimg.com/564x/5b/f8/b2/5bf8b2b7b80d49cf06e0fd7b52fcf2d3.jpg',
    },
    {
      text: 'Ты красивая, умная и сильная',
      img: 'https://i.pinimg.com/564x/62/4b/5a/624b5a30850db632314cba104d18265d.jpg',
    },
    {
      text: 'Ты всегда знаешь, что сказать',
      img: 'https://i.pinimg.com/564x/ba/e7/bb/bae7bbc946d3271e770ec95eb6e8f4f4.jpg',
    },
    {
      text: 'Ты делаешь этот мир мягче',
      img: 'https://i.pinimg.com/564x/d9/9d/40/d99d4032dbf73082e30f85f7ff3fa79a.jpg',
    },
    {
      text: 'Ты даришь свет даже в серые дни',
      img: 'https://i.pinimg.com/564x/8b/3f/5c/8b3f5c9dd9de95e2a2e43d7b205e51b6.jpg',
    },
    {
      text: 'Ты мой главный человек',
      img: 'https://i.pinimg.com/564x/65/50/16/6550162e541b876725a4de95b3e6eb8f.jpg',
    },
  ];  
  
function ComplimentCarousel() {
  const duplicated = [...compliments, ...compliments, ...compliments]; 

  return (
    <div className="carousel-outer">
      <div className="carousel-track">
        {duplicated.map((item, index) => (
          <div key={index} className="carousel-card">
            <img
              src={item.img}
              alt="placeholder"
              className="w-20 h-20 rounded-full mb-2 object-cover"
            />
            <p className="text-rose-600 font-semibold text-center whitespace-nowrap">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComplimentCarousel;



