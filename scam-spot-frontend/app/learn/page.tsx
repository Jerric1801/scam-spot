import Link from 'next/link';

export default function LearnPage() {
  return (
    <div>
      <h1>Learn About Scams</h1>

      {/* In-Page Navigation */}
      <nav>
        <ul>
          <li>
            <Link href="#introduction">Introduction to Scams</Link>
          </li>
          <li>
            <Link href="#types-of-scams">Types of Scams</Link>
          </li>
          <li>
            <Link href="#staying-safe">How to Stay Safe from Scams</Link>
          </li>
        </ul>
      </nav>

      {/* Section: Introduction to Scams */}
      <section id="introduction">
        <h2>Introduction to Scams</h2>
        <p>
          This section will provide a general introduction to what scams are, why they are harmful, and their prevalence in today's world.
          {/* Add introductory content here */}
        </p>
      </section>

      {/* Section: Types of Scams */}
      <section id="types-of-scams">
        <h2>Types of Scams</h2>
        <p>
          Explore different categories of scams, such as phishing scams, romance scams, investment scams, and more. Provide examples and explain how they work.
          {/* Add content about types of scams */}
        </p>
      </section>

      {/* Section: How to Stay Safe from Scams */}
      <section id="staying-safe">
        <h2>How to Stay Safe from Scams</h2>
        <p>
          Offer practical advice and tips on how to recognize scam attempts, protect personal information, and what to do if someone suspects they've been scammed.
          {/* Add content on scam prevention and safety */}
        </p>
      </section>
    </div>
  );
}