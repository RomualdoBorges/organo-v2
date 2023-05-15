import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="https://www.facebook.com/" target="">
              <img src="/imagens/fb.png" alt=""></img>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" target="">
              <img src="/imagens/tw.png" alt=""></img>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="">
              <img src="/imagens/ig.png" alt=""></img>
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imagens/logo.png" alt="" />
      </section>
      <section>
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  );
};

export default Rodape;
