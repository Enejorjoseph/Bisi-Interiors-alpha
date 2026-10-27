import { ArrowRight, Instagram, Music2 } from "lucide-react";
import Link from "next/link";

const categories = [
  ["Salon Furniture and Equipment", "Professional salon chairs, barber chairs, salon stations, mirrors, and other essential salon equipment."],
  ["Professional Grooming Equipment", "Hair clippers, trimmers, grooming tools, and accessories for barbers, hairstylists, and grooming professionals."],
  ["Office Furniture", "Executive desks, office tables, workstations, and furniture designed to create functional and professional working environments."],
  ["Ergonomic and Luxury Chairs", "Executive chairs, ergonomic office chairs, and premium seating solutions designed to support comfort, style, and productivity."],
  ["Spa Furniture and Equipment", "Spa beds, treatment beds, and accessories for beauty centres, wellness facilities, and spa operators."],
  ["Professional Accessories", "A selection of complementary products and equipment designed to support the daily operations of salons, barbershops, spas, and offices."],
];
const strengths = [
  ["COMPETITIVE PRICING", "We are committed to offering quality products at competitive prices, helping customers make smart purchasing decisions while maintaining the standards they expect."],
  ["QUALITY AND DURABILITY", "We prioritize products selected for their practical functionality, dependable performance, and lasting value."],
  ["WIDE PRODUCT SELECTION", "Our range covers salon furniture, grooming equipment, office furniture, ergonomic chairs, spa beds, and accessories, providing convenient solutions for different professional needs."],
  ["MODERN DESIGN AND COMFORT", "We recognize the importance of appearance, comfort, and functionality. Our product selection focuses on helping customers create attractive and efficient working environments."],
  ["CUSTOMER SATISFACTION", "We place our customers at the centre of our business by seeking to understand their needs and provide suitable products at prices they can afford."],
  ["INTEGRITY AND PROFESSIONALISM", "We believe in building trust through honest business practices, reliability, transparency, and a commitment to delivering value."],
];
export default function AboutPage() {
  return (
    <main>
      <header className="site-header" style={{height:"auto",minHeight:80,padding:"18px 5%",display:"flex",alignItems:"center",justifyContent:"space-between",gap:20}}>
        <Link href="/" aria-label="Bisi Interiors home" style={{fontFamily:"Georgia,serif",fontSize:28,fontWeight:700}}>BISI INTERIORS</Link>
        <nav style={{display:"flex",gap:22,flexWrap:"wrap",fontSize:14}}>
          <Link href="/">Home</Link><Link href="/#products">All Products</Link><Link href="/#salon">Salon Essentials</Link><Link href="/#office">Office Furniture</Link><Link href="/#contact">Contact Us</Link>
        </nav>
      </header>
      <article className="about-page about-full-page">
        <span className="section-kicker">ABOUT BISI INTERIORS NIG LTD</span>
        <h1>Bisi Interiors Nig Ltd</h1>
        <p className="about-lead">Design Spaces • Creating Experiences</p>
        <p className="about-description">Bisi Interiors Nig Ltd is a Nigerian-owned company established in 2026, with its headquarters in Abeokuta, Ogun State, Nigeria. The company was founded with a clear vision of making luxury, quality, and comfort accessible to everyone through competitive pricing and exceptional value.</p>
        <p className="about-description">We specialize in the supply of premium salon furniture and equipment, professional grooming tools, office furniture, ergonomic chairs, spa beds, and a wide range of accessories designed to meet the needs of modern professionals, businesses, and individuals.</p>
        <p className="about-description">Our business is built around providing products that combine elegance, durability, functionality, and affordability. We understand the importance of creating comfortable, attractive, and professional environments, whether in salons, barbershops, spas, offices, or personal spaces.</p>
        <p className="about-description">At Bisi Interiors Nig Ltd, we believe that quality products should be accessible without placing unnecessary financial pressure on our customers. Through our commitment to competitive pricing, modern designs, and customer satisfaction, we strive to deliver products that offer lasting value and meet the evolving needs of the Nigerian market.</p>

        <section className="about-content-section"><h2>OUR PRODUCT CATEGORIES</h2><p>Our product range is organized into the following categories:</p><ol className="about-numbered-list">{categories.map(([title, description])=><li key={title}><strong>{title}:</strong> {description}</li>)}</ol><p>Through these product categories, we aim to provide practical, stylish, and reliable solutions for both established businesses and customers setting up new spaces.</p></section>
        <section className="about-content-section"><h2>OUR VISION</h2><p>To become a trusted and recognized brand in Nigeria and beyond by making luxury, quality, and comfort affordable and accessible to everyone.</p><p>We envision a future where individuals and businesses can create beautiful, functional, and professional spaces without compromising on quality or exceeding their budgets.</p></section>
        <section className="about-content-section"><h2>OUR MISSION</h2><p>Our mission is to provide high-quality salon, spa, and office furniture, grooming equipment, and professional accessories that combine modern design, durability, functionality, and affordability.</p><p>We are committed to delivering excellent customer service, competitive prices, and dependable value while building lasting relationships with our customers through integrity and professionalism.</p></section>
        <section className="about-content-section"><h2>OUR LEADERSHIP</h2><p>Bisi Interiors Nig Ltd is led by its Chief Executive Officer, Harun Olabisi Atobaloye, whose vision is to build a dependable and customer-focused business that makes quality furniture and professional equipment more accessible.</p><p>Through a commitment to service, value, and continuous improvement, the company aims to establish a strong reputation in the furniture, beauty, grooming, and professional equipment markets.</p></section>
        <section className="about-content-section"><h2>OUR STRENGTHS</h2><div className="about-detail-grid">{strengths.map(([title, description])=><div className="about-detail-card" key={title}><h3>{title}</h3><p>{description}</p></div>)}</div></section>
        <section className="about-content-section"><h2>OUR COMMITMENT TO CUSTOMERS</h2><p>At Bisi Interiors Nig Ltd, we are more than furniture and equipment suppliers. We are committed to helping our customers bring their ideas to life by providing products that support comfort, productivity, style, and business growth.</p><p>Whether you are establishing a new barbershop, upgrading a beauty salon, furnishing a corporate office, setting up a spa, or purchasing professional grooming equipment, our goal is to help you find practical and affordable solutions that meet your needs.</p><p>We continually strive to strengthen our product offerings, maintain competitive pricing, and provide a customer experience built on trust, quality, and satisfaction.</p></section>
        <section className="about-content-section"><h2>OUR CORE VALUES</h2><ul className="about-values-list"><li><strong>Quality:</strong> Delivering products that emphasize durability, functionality, and value.</li><li><strong>Affordability:</strong> Making premium products more accessible through competitive pricing.</li><li><strong>Customer Satisfaction:</strong> Prioritizing customer needs and striving to exceed expectations.</li><li><strong>Innovation:</strong> Embracing modern designs and practical solutions for professional spaces.</li><li><strong>Integrity:</strong> Conducting business with honesty, transparency, and accountability.</li><li><strong>Excellence:</strong> Pursuing high standards in our products, service, and business operations.</li></ul></section>
        <section className="about-content-section"><h2>COMPANY INFORMATION</h2><dl className="about-company-info"><div><dt>Company Name</dt><dd>Bisi Interiors Nig Ltd</dd></div><div><dt>Established</dt><dd>2026</dd></div><div><dt>Ownership</dt><dd>Nigerian-owned company</dd></div><div><dt>Headquarters</dt><dd>Abeokuta, Ogun State, Nigeria</dd></div><div><dt>Chief Executive Officer</dt><dd>Harun Olabisi Atobaloye</dd></div><div><dt>Industry</dt><dd>Salon, Spa and Office Furniture; Professional Grooming Equipment and Accessories</dd></div></dl></section>
        <section className="about-content-section"><h2>OUR PROMISE</h2><p>At Bisi Interiors Nig Ltd, our promise is simple: to make quality, comfort, and style attainable through products that offer excellent value for money.</p><p>We believe that every salon owner, barber, business owner, spa operator, and individual deserves access to products that help them work better, feel more comfortable, and create spaces they can be proud of.</p></section>
        <p className="about-closing">ABOUT BISI INTERIORS NIG LTD<br/><span>Design Spaces • Creating Experiences</span></p>
        <p style={{marginTop:32}}><Link className="text-link" href="/#products">Explore our products <ArrowRight size={17}/></Link></p>
      </article>
      <footer className="site-footer" style={{justifyContent:"flex-start"}}><div><strong>BISI INTERIORS NIG LTD</strong><p>Design Spaces • Creating Experiences</p><p>Abeokuta, Ogun State, Nigeria</p><p><a href="mailto:info@bisiinteriorsnig.com">info@bisiinteriorsnig.com</a> · <a href="tel:09032959952">09032959952</a></p><div className="footer-social"><a href="https://www.instagram.com/bisi_interiors?rpxt=MWhscXA2bXF5NGYycg%3D%3D&utm_source=qr" aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={18}/></a><a href="https://www.tiktok.com/@bisi.interiors" aria-label="TikTok" target="_blank" rel="noreferrer"><Music2 size={18}/></a></div></div></footer>
    </main>
  );
}
