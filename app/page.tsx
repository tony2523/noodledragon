import Image from "next/image";

const flavourCards = [
  {
    number: "01",
    kicker: "Pick up & play",
    title: "Easy to start. Hard to put down.",
    copy: "We make mobile games that feel instantly familiar, then surprise you with one more delightful twist.",
    className: "card-coral",
    doodle: "✦",
  },
  {
    number: "02",
    kicker: "Full of flavour",
    title: "Characters worth rooting for.",
    copy: "Expressive worlds, playful humour and a little bit of weirdness give every game its own personality.",
    className: "card-teal",
    doodle: "●",
  },
  {
    number: "03",
    kicker: "Made with care",
    title: "Small details. Big smiles.",
    copy: "From the first tap to the fiftieth level, we tune every moment to feel polished, friendly and rewarding.",
    className: "card-gold",
    doodle: "+",
  },
];

const process = [
  {
    step: "01",
    title: "Find the fun",
    copy: "We start with a tiny, irresistible idea and prototype until the core loop feels great in your hands.",
  },
  {
    step: "02",
    title: "Add the noodles",
    copy: "Characters, colour, sound and a dash of chaos turn a good mechanic into a world with real flavour.",
  },
  {
    step: "03",
    title: "Release the dragon",
    copy: "We polish, playtest and launch—then keep listening to players so the game can grow.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Noodle Dragon Studio — home">
          <Image
            src="/brand/logo-header-flat.png"
            alt=""
            width={768}
            height={400}
            className="brand-logo"
            priority
          />
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#flavour">Our flavour</a>
          <a href="#process">How we work</a>
          <a href="#about">About</a>
        </nav>

        <a className="button button-small button-dark" href="#contact">
          Say kia ora <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Independent game studio · Aotearoa</p>
          <h1>
            Little games.
            <br />
            <em>Big personality.</em>
          </h1>
          <p className="hero-lede">
            We’re Noodle Dragon Studio, a New Zealand team creating colourful
            mobile games packed with charm, character and just the right amount
            of chaos.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#flavour">
              See what we’re cooking <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="#about">
              Meet the studio <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="hero-stats" aria-label="Studio highlights">
            <div>
              <strong>100%</strong>
              <span>Made in NZ</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>Playful ideas</span>
            </div>
            <div>
              <strong>1</strong>
              <span>Hungry dragon</span>
            </div>
          </div>
        </div>

        <div className="hero-art" aria-label="Noodle Dragon Studio mascot">
          <div className="sun-disc" />
          <span className="pixel pixel-one" />
          <span className="pixel pixel-two" />
          <span className="spark spark-one">✦</span>
          <span className="spark spark-two">+</span>
          <span className="scribble">Play!</span>
          <Image
            src="/brand/mascot.png"
            alt="A cheerful pink dragon eating a bowlful of noodles"
            width={1254}
            height={1254}
            className="mascot"
            priority
          />
          <div className="art-sticker">
            <span aria-hidden="true">★</span>
            <strong>Freshly<br />made fun</strong>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          <span>TAP</span><b>✦</b><span>PLAY</span><b>✦</b><span>SMILE</span><b>✦</b>
          <span>REPEAT</span><b>✦</b><span>TAP</span><b>✦</b><span>PLAY</span><b>✦</b>
        </div>
      </div>

      <section className="flavour section-shell" id="flavour">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Our flavour</p>
            <h2>Games with a little more <em>bite.</em></h2>
          </div>
          <p>
            We believe the best mobile games fit into your day—and stick in
            your memory. That means simple controls, satisfying play and a
            world you’ll want to visit again.
          </p>
        </div>

        <div className="flavour-grid">
          {flavourCards.map((card) => (
            <article className={`flavour-card ${card.className}`} key={card.number}>
              <div className="card-topline">
                <span>{card.number}</span>
                <span className="card-doodle" aria-hidden="true">{card.doodle}</span>
              </div>
              <p>{card.kicker}</p>
              <h3>{card.title}</h3>
              <div className="card-rule" />
              <p className="card-copy">{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process" id="process">
        <div className="process-inner section-shell">
          <div className="process-intro">
            <p className="eyebrow eyebrow-light"><span /> How we work</p>
            <h2>From tiny idea to <em>tiny obsession.</em></h2>
            <p>
              Our process is fast, curious and player-first. We make the fun
              visible early, then layer in everything that makes it feel like
              Noodle Dragon.
            </p>
          </div>

          <div className="process-list">
            {process.map((item) => (
              <article className="process-row" key={item.step}>
                <span>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
                <b aria-hidden="true">↗</b>
              </article>
            ))}
          </div>
        </div>
        <div className="noodle-line" aria-hidden="true">〰 〰 〰 〰 〰 〰 〰 〰</div>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-art">
          <div className="about-frame">
            <Image
              src="/brand/logo.png"
              alt="Noodle Dragon Studio logo with pink dragon, game controller and pixel heart"
              width={1536}
              height={1024}
              className="full-logo"
            />
          </div>
          <span className="location-tag">36.8509° S · 174.7645° E</span>
        </div>

        <div className="about-copy">
          <p className="eyebrow"><span /> Made down under</p>
          <h2>Kia ora from <em>Aotearoa.</em></h2>
          <p className="about-lede">
            Noodle Dragon Studio is an independent mobile game design company
            based in New Zealand.
          </p>
          <p>
            We’re here to make bright, generous games for pockets everywhere—
            the kind with loads of heart, a strong point of view and enough
            noodle-fuelled mischief to keep things interesting.
          </p>
          <div className="values">
            <span>Player-first</span>
            <span>Joyfully original</span>
            <span>Made with care</span>
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <span className="contact-spark spark-left" aria-hidden="true">✦</span>
        <span className="contact-spark spark-right" aria-hidden="true">✦</span>
        <p className="eyebrow eyebrow-centred"><span /> Let’s make something fun</p>
        <h2>Got a bright idea?<br /><em>We’re all ears.</em></h2>
        <p>
          Collaborations, publishing conversations, friendly hellos—send them
          our way. The dragon is house-trained. Mostly.
        </p>
        <a className="button button-contact" href="mailto:tony@noodledragon.studio">
          tony@noodledragon.studio <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer>
        <a className="footer-brand" href="#top">
          <Image src="/brand/logo-square.png" alt="" width={48} height={48} />
          <span>Noodle Dragon Studio</span>
        </a>
        <p>Independent mobile games, made in New Zealand.</p>
        <div className="footer-links">
          <a href="#flavour">Our flavour</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
        <small>© {new Date().getFullYear()} Noodle Dragon Studio</small>
      </footer>
    </main>
  );
}
