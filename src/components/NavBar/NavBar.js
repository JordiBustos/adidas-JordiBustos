import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const Navbar = () => {
	return (
		<div className="header">
			<header>
				<nav>
					<ul>
						<li>
							<a href="/">
								<svg
									width="50"
									height="50"
									viewBox="0 0 50 50"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M50.0701 39.7718L31.9254 8.33325L22.2068 13.9395L37.112 39.7718H50.0701ZM32.7817 39.7719L20.7971 19.0254L11.0785 24.6317L19.8235 39.7719H32.7817ZM9.71859 29.7344L15.5095 39.7719H2.55134L0 35.3406L9.71859 29.7344Z"
										fill="black"
									/>
								</svg>
							</a>
						</li>
						<div id="header__links">
							<li>
								<a href="/">Men</a>
							</li>
							<li>
								<a href="/">Women</a>
							</li>
							<li>
								<a href="/">Shop</a>
							</li>
						</div>
						<div className="header__contenedor">
							<li>
								<a class="header__contenedor--icon" href="/">
									<FontAwesomeIcon
										icon={faShoppingCart}
										fontSize="25px"
									/>
								</a>
								<span className="header__contenedor--cartValue">
									0
								</span>
							</li>
						</div>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
