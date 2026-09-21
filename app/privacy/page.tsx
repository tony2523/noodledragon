import type { Metadata } from "next";
import Image from "next/image";

const basePath = import.meta.env.VITE_BASE_PATH ?? "";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy | Noodle Dragon Studio",
  description:
    "How Noodle Dragon Studio handles personal information across our website, apps and games.",
};

export default function PrivacyPage() {
  return (
    <>
      <a className="skip-link" href="#privacy-content">
        Skip to privacy policy
      </a>
      <header className="privacy-header shell">
        <a className="privacy-brand" href={`${basePath}/`} aria-label="Noodle Dragon Studio — home">
          <Image
            src={`${basePath}/brand/logo-horizontal-apps-games.png`}
            alt=""
            width={2172}
            height={724}
            priority
          />
        </a>
        <a className="header-contact" href={`${basePath}/`}>
          Back home <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="privacy-content">
        <section className="privacy-hero shell">
          <p className="eyebrow">PRIVACY / THE PLAIN-SPOKEN VERSION</p>
          <h1>
            Privacy, without
            <br />
            <em>the mystery.</em>
          </h1>
          <div className="privacy-intro">
            <p>
              We collect only the information we need to run Noodle Dragon
              Studio, respond to you, and make our website and products work
              well. This policy explains what that means in practice.
            </p>
            <p className="privacy-date">Last updated 21 September 2026</p>
          </div>
        </section>

        <div className="privacy-layout shell">
          <aside className="privacy-summary">
            <p className="eyebrow">THE SHORT VERSION</p>
            <p>
              No accounts, contact forms or advertising trackers currently run
              on this website. If you email us, we use your details to reply.
            </p>
          </aside>

          <article className="privacy-policy">
            <section>
              <h2>1. Who this policy covers</h2>
              <p>
                This policy applies to Noodle Dragon Studio’s website and to our
                macOS apps, mobile apps and mobile games, unless a product gives
                you a separate privacy notice. A product-specific notice will
                take priority for that product where its practices differ.
              </p>
            </section>

            <section>
              <h2>2. Information we collect</h2>
              <h3>When you visit this website</h3>
              <p>
                We do not currently offer user accounts or a contact form, and
                we do not use advertising trackers. Like most websites, our
                hosting and security providers may process basic technical
                information such as your IP address, browser and device type,
                requested pages, and the date and time of a request. This helps
                deliver the site, keep it secure, and diagnose problems.
              </p>
              <h3>When you contact us</h3>
              <p>
                If you email us, we receive the information you choose to send,
                such as your name, email address, message, and any attachments.
              </p>
              <h3>When you use our products</h3>
              <p>
                An app or game may need limited information to provide a feature,
                support a purchase, fix a fault, or keep the product secure. We
                will explain any product-specific collection in the product, its
                store listing, or a separate notice before it matters to you.
                App stores and payment providers handle purchases under their
                own privacy policies.
              </p>
            </section>

            <section>
              <h2>3. How we use information</h2>
              <p>We may use personal information to:</p>
              <ul>
                <li>reply to enquiries and provide support;</li>
                <li>operate, secure, troubleshoot and improve our services;</li>
                <li>provide features or purchases you request; and</li>
                <li>meet legal, accounting or security obligations.</li>
              </ul>
              <p>
                We do not sell or rent personal information, and this website
                does not serve personalised advertising.
              </p>
            </section>

            <section>
              <h2>4. When information is shared</h2>
              <p>
                We share information only when it is reasonably needed: with
                providers that host or support our services, when you ask us to,
                to protect people or our services, or when the law requires it.
                Providers may process information on our behalf and are expected
                to protect it appropriately.
              </p>
            </section>

            <section>
              <h2>5. Storage, security and overseas providers</h2>
              <p>
                We use reasonable safeguards suited to the information we hold.
                Some providers may process or store information outside New
                Zealand. When that happens, we take reasonable steps to use
                reputable providers and protect the information consistently
                with this policy.
              </p>
            </section>

            <section>
              <h2>6. How long we keep information</h2>
              <p>
                We keep personal information only for as long as it is needed
                for the purpose it was collected, including reasonable support,
                security, legal and record-keeping needs. We then delete or
                anonymise it where practical.
              </p>
            </section>

            <section>
              <h2>7. Your choices and rights</h2>
              <p>
                You may ask to access or correct personal information we hold
                about you, or ask a privacy question, by emailing us. Depending
                on where you live, you may have additional privacy rights. You
                can also contact the New Zealand Office of the Privacy
                Commissioner if you have a concern about how your information
                has been handled.
              </p>
              <a
                className="privacy-external-link"
                href="https://www.privacy.org.nz/your-rights/how-to-complain/"
                target="_blank"
                rel="noreferrer"
              >
                New Zealand privacy guidance <span aria-hidden="true">↗</span>
              </a>
            </section>

            <section>
              <h2>8. Children’s privacy</h2>
              <p>
                This website is intended for a general audience and does not
                knowingly collect personal information from children through an
                account or form. If we release a product intended for children
                that handles personal information, we will provide suitable
                product-specific information and protections.
              </p>
            </section>

            <section>
              <h2>9. Changes to this policy</h2>
              <p>
                We may update this policy as our website, apps or games evolve.
                We will post the current version here and update the date above.
                If a change materially affects a product, we will give notice in
                an appropriate place.
              </p>
            </section>

            <section className="privacy-contact">
              <p className="eyebrow">PRIVACY CONTACT</p>
              <h2>Questions are welcome.</h2>
              <p>
                Noodle Dragon Studio<br />
                Aotearoa New Zealand
              </p>
              <a href="mailto:tony@noodledragon.studio">
                tony@noodledragon.studio <span aria-hidden="true">↗</span>
              </a>
            </section>
          </article>
        </div>
      </main>

      <footer className="shell">
        <a href={`${basePath}/`} className="footer-wordmark">
          Noodle Dragon<span>STUDIO</span>
        </a>
        <p>Apps. Games. A little personality.</p>
        <div>
          <span>© {new Date().getFullYear()} Noodle Dragon Studio</span>
          <a href="#privacy-content">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
