import './ComplimentCarousel.css';

const compliments = [
    {
      text: 'Ты самая добрая 🌷',
      img: 'https://i.pinimg.com/564x/3e/2b/1f/3e2b1f5e9f6c1e6e6e6e6e6e6e6e6e6e.jpg',
    },
    {
      text: 'У тебя золотое сердце 💖',
      img: 'https://i.pinimg.com/564x/4a/5b/2c/4a5b2c3d4e5f6g7h8i9j0k1l2m3n4o5p.jpg',
    },
    {
      text: 'Спасибо за твою заботу 💐',
      img: 'https://i.pinimg.com/564x/5c/6d/3e/5c6d3e4f5g6h7i8j9k0l1m2n3o4p5q6r.jpg',
    },
    {
      text: 'Ты сияешь как солнце ☀️',
      img: 'https://i.pinimg.com/564x/6e/7f/4g/6e7f4g5h6i7j8k9l0m1n2o3p4q5r6s7t.jpg',
    },
    {
      text: 'С тобой тепло даже в дождь 🌧️',
      img: 'https://i.pinimg.com/564x/7g/8h/5i/7g8h5i6j7k8l9m0n1o2p3q4r5s6t7u8v.jpg',
    },
    {
      text: 'Ты чудо ✨',
      img: 'https://i.pinimg.com/564x/8h/9i/6j/8h9i6j7k8l9m0n1o2p3q4r5s6t7u8v9w.jpg',
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



