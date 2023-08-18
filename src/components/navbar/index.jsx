import styles from "./styles.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1>LOGO</h1>
      </div>
      <nav id="nav">
        <i className="fa-solid fa-bars" id="btn-mobile"></i>
        <ul className={styles.navbar}>
          <li>
            <a href="#home">Início</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#consequence">Consequências</a>
          </li>
          <li>
            <a href="#in-brazil">Atualmente</a>
          </li>
          {/* <li>
              <i class="fa-solid fa-circle-half-stroke" id="switchTheme"></i>
            </li> */}
        </ul>
      </nav>
    </div>
  );
}
