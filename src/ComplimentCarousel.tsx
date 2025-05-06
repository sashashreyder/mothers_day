import './ComplimentCarousel.css';

const compliments = [
    {
      text: 'Ты моё самое тёплое воспоминание',
      img: 'https://png.pngtree.com/png-clipart/20231003/original/pngtree-beautiful-guinea-pig-png-image_13081832.png', //+
    },
    {
      text: 'Ты учишь меня любить по-настоящему',
      img: 'https://www.pngarts.com/files/2/Disney-Valentines-Day-PNG-Download-Image.png', //+
    },
    {
      text: 'Ты делаешь дом домом',
      img: 'https://png.pngtree.com/png-vector/20240607/ourmid/pngtree-happy-bear-family-cartoon-png-image_12638244.png',
    },
    {
      text: 'С тобой я чувствую себя в безопасности',
      img: 'https://static.vecteezy.com/system/resources/thumbnails/026/849/879/small_2x/pink-heart-hugging-yourself-png.png',
    },
    {
      text: 'Ты умеешь сделать обычный день особенным',
      img: 'https://artpoin.com/wp-content/uploads/2021/08/mickei2123232323231312323231233.png',
    },
    {
      text: 'Ты красивая, умная и сильная',
      img: 'https://artpoin.com/wp-content/uploads/2023/11/artpoin-mickey62.png', //+
    },
    {
      text: 'Ты всегда знаешь, что сказать',
      img: 'https://ustroim-prazdnik.info/_ph/15/394348439.png?1567752224', //+
    },
    {
      text: 'Ты делаешь этот мир мягче',
      img: 'https://png.pngtree.com/png-vector/20231123/ourmid/pngtree-exotic-shorthair-cat-white-brown-png-image_10691434.png',
    },
    {
      text: 'Ты даришь свет даже в серые дни',
      img: 'https://static.vecteezy.com/system/resources/thumbnails/018/972/609/small_2x/cute-sun-illustration-design-png.png',
    },
    {
      text: 'Ты мой главный человек',
      img: 'https://png.pngtree.com/png-clipart/20220404/original/pngtree-mothers-day-hug-silhouette-png-image_7512406.png',
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



