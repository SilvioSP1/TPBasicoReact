import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-tertiary">
        <Link to={'/'}>
            <h1 className="text-center flex py-4 text-white flex-col text-5xl font-roboto">Rick And Morty</h1>
        </Link>
    </div>
  );
}

export default Header;