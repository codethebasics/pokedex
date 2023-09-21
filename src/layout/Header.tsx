import PokeballImg from "../assets/img/pokeball.png";

function Header() {
  return (
    <div className="container-sm bg-gradient-to-r from-red-600 to-red-700 border-b-neutral-950 border-b-4 flex items-center justify-between p-3">
      <div>
        <span className="text-white font-semibold text-xl selection:bg-red-700">
          Pokedex
        </span>
      </div>
      <div>
        <img
          src={PokeballImg}
          alt="pokeball"
          width={45}
          className="transition-all cursor-pointer hover:opacity-70"
        />
      </div>
    </div>
  );
}

export default Header;
