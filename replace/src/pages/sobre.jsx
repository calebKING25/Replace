import "./sobre.css";

function Sobre() {
  return (
    <div>
      <header className="navbar">
        <div className="logo">
          <div className="logo-icon">ↄ</div>
          <span>Replace</span>
        </div>

        <nav>
          <a>Início</a>
          <a>Produtos</a>
          <a>Mercados</a>
          <a>Como funciona</a>
          <a className="active">Sobre</a>
        </nav>

        <div className="nav-buttons">
          <button className="login">Entrar</button>
          <button className="cadastro">Cadastrar</button>
        </div>
      </header>

      <section className="hero-sobre">
        <div className="hero-icon"></div>
        <h1>Sobre a Replace</h1>
        <p>
          Transformando a forma como consumimos, reduzindo desperdícios e
          construindo um futuro mais sustentável.
        </p>
      </section>

      <section className="historia">
        <h2>Nossa história</h2>

        <div className="texto-historia">
          <p>
            A Replace nasceu de uma constatação alarmante: milhões de toneladas
            de alimentos são desperdiçadas todos os anos, enquanto milhões de
            pessoas buscam economia e produtos de qualidade a preços acessíveis.
          </p>

          <p>
            Em 2025, um grupo de empreendedores apaixonados por sustentabilidade
            e tecnologia se uniu para criar uma solução que beneficiasse tanto
            os consumidores quanto os estabelecimentos comerciais. A ideia era
            simples, mas poderosa: conectar pessoas que querem economizar com
            mercados que precisam evitar o desperdício.
          </p>

          <p>
            Hoje, a Replace é mais que uma plataforma de vendas. Somos um
            movimento de conscientização sobre consumo responsável, ajudando
            milhares de famílias a economizar enquanto fazem a diferença para o
            planeta.
          </p>
        </div>
      </section>

      <section className="cards-section">
        <div className="info-card">
          <div className="card-icon"></div>
          <h3>Nossa Missão</h3>
          <p>
            Reduzir o desperdício de alimentos conectando consumidores
            conscientes a produtos de qualidade com preços acessíveis, gerando
            economia e promovendo sustentabilidade.
          </p>
        </div>

        <div className="info-card">
          <div className="card-icon"></div>
          <h3>Nossa Visão</h3>
          <p>
            Ser a maior plataforma de combate ao desperdício de alimentos do
            Brasil, transformando a forma como as pessoas consomem e
            contribuindo para um planeta mais sustentável.
          </p>
        </div>

        <div className="info-card">
          <div className="card-icon"></div>
          <h3>Nossos Valores</h3>
          <ul>
            <li>Sustentabilidade em primeiro lugar</li>
            <li>Transparência e honestidade</li>
            <li>Compromisso com a qualidade</li>
            <li>Impacto social positivo</li>
          </ul>
        </div>
      </section>

      <section className="impacto">
        <h2>Nosso impacto</h2>
        <p>Números que fazem a diferença</p>

        <div className="impacto-grid">
          <div className="impacto-item">
            <div className="impacto-icon"></div>
            <h3>50mil+</h3>
            <span>Usuários ativos</span>
          </div>

          <div className="impacto-item">
            <div className="impacto-icon"></div>
            <h3>200+</h3>
            <span>Mercados parceiros</span>
          </div>

          <div className="impacto-item">
            <div className="impacto-icon"></div>
            <h3>15 ton</h3>
            <span>Alimentos salvos</span>
          </div>

          <div className="impacto-item">
            <div className="impacto-icon"></div>
            <h3>R$ 2M</h3>
            <span>Economizados</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sobre;   