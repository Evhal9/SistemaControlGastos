import banner from '../assets/banner.jpg'

function Home() {


  return (
    <>
      <div className="
        h-[80vh]
        bg-cover
        bg-center
        flex
        flex-col
        items-center
        justify-center
        text-center
        gap-4
      " style={{ backgroundImage: `url(${banner})` }}>
        <p
          className="text-5xl font-semibold text-transparent"
          style={{ WebkitTextStroke: '2px #5356a0ff' }}
        >
          Controlá tus gastos
          <br />
          y mejorá tu economía personal
        </p>

        <p className="text-lg text-black max-w-xl">
          Registrá tus gastos diarios, analizá tus consumos y tomá mejores decisiones financieras
        </p>
      </div>

      <div className="h-8"></div>
    </>
  );
}

export default Home;
