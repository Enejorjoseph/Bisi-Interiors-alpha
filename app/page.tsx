import {
  ArrowRight, UserRound, ShoppingCart, ChevronDown,
  ShieldCheck, Truck, Headset, Award, Armchair, Scissors, Sofa, Lamp, Menu, Heart, Instagram, Music2
} from "lucide-react";

const categories = [
  { title: "Salon Essentials", subtitle: "Furniture & professional tools", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=85", target: "/products?category=Salon%20Essentials" },
  { title: "Office Furniture", subtitle: "Furniture for better workspaces", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85", target: "/products?category=Office%20Furniture" },
  { title: "Others", subtitle: "More for your space", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85", target: "/products?category=Others" },
];

type Product = { id: string; name: string; category: string | null; image_url: string | null; is_featured: boolean; price: number | string };

async function getProducts(): Promise<Product[]> {
  const { createClient } = await import("@supabase/supabase-js");
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return [];
  const supabase = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
  const { data } = await supabase.from("products").select("id,name,category,image_url,is_featured,price").eq("is_available", true).order("created_at", { ascending: false });
  return (data ?? []) as Product[];
}

function Brand() {
  return (
    <a className="brand" href="/" aria-label="Bisi Interiors home">
      <img className="brand-emblem" src="/images/bisi-monogram.jpg" alt="" />
      <img className="brand-wordmark" src="/images/bisi-wordmark.jpg" alt="Bisi Interiors — Designing Spaces. Creating Experiences." />
    </a>
  );
}

function renderProductSection(id: string, title: string, description: string, items: Product[], whatsappNumber: string, tone = "") {
  return <section className={`section products-section reference-products ${tone}`} id={id}><div className="products-heading"><div><span className="section-kicker">BISI INTERIORS NIG LTD</span><h2>{title}</h2><p>{description}</p></div><a className="text-link" href={`/products?category=${encodeURIComponent(title)}`}>View All <ArrowRight size={17}/></a></div><div className="product-grid">{items.slice(0, 8).map(product => {const enquiry=`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello Bisi Interiors, I would like to enquire about ${product.name}.`)}`;return <article className="product-card" key={`${id}-${product.id}`}><a href={`/products?product=${encodeURIComponent(product.id)}`} className="product-visual" aria-label={`View ${product.name}`}>{product.image_url?<img src={product.image_url} alt={product.name} loading="lazy"/>:<span className="product-placeholder"><Armchair size={76} strokeWidth={.9}/></span>}<span className="product-heart" aria-hidden="true"><Heart size={18}/></span></a><div className="product-info"><h3>{product.name}</h3><p className="product-price">{Number(product.price || 0)>0?`₦${Number(product.price).toLocaleString('en-NG',{minimumFractionDigits:2,maximumFractionDigits:2})}`:'Price on WhatsApp enquiry'}</p><a href={`/products?product=${encodeURIComponent(product.id)}`}>View product <ArrowRight size={15}/></a></div></article>})}{items.length===0&&<p className="empty-products">Our collection is being updated. Please enquire with us on WhatsApp.</p>}</div></section>;
}

export default async function Home() {
  const products = await getProducts();
  const whatsappNumber = "2349032959952";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Bisi Interiors, I would like to enquire about a product.")}`;
  return <main>
    <header className="site-header reference-header">
      <div className="header-inner reference-header-inner"><Brand />
        <div className="header-actions"><a aria-label="Admin dashboard" className="icon-button account-icon" href="/admin"><UserRound size={22}/></a><a aria-label="View products" className="icon-button cart-button" href="/products"><ShoppingCart size={23}/><span className="cart-count">0</span></a></div>
      </div>
      <nav className="main-nav reference-main-nav" aria-label="Main navigation"><a className="nav-link active" href="#home">Home</a><a className="nav-link" href="/about">About Us</a><a className="nav-link" href="/products">All Products</a><a className="nav-link" href="/products?category=Salon%20Essentials">Salon Essentials</a><a className="nav-link" href="/products?category=Office%20Furniture">Office Furniture</a><a className="nav-link" href="#contact">Contact Us</a></nav>
    </header>
      <section className="hero" id="home">
        <div className="hero-main">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" />PREMIUM BARBER COLLECTION</div>
            <h1>High End<br />Barber Chair</h1>
            <p className="hero-description">Elevate your barbershop with premium comfort<br className="desktop-break" /> and timeless style.</p>
            
            <div className="hero-actions">
              <a className="button button-primary" href={whatsappLink} target="_blank" rel="noreferrer">
                <span className="whatsapp-mark">◉</span>
                <span className="button-label"><strong>ENQUIRE ON WHATSAPP</strong><small>Get Price &amp; Availability</small></span>
                <ArrowRight size={19} />
              </a>
              <a className="button button-secondary" href="/products?product=featured-chair"><strong>VIEW PRODUCT DETAILS</strong><ArrowRight size={19} /></a>
            </div>
          </div>
          <div className="hero-product"><img src="/images/chair.png" alt="Premium beige barber chair with chrome base and footrest" /></div>
        </div>
      </section>
    <section className="section categories-section reference-categories" id="categories"><div className="products-heading"><div><span className="section-kicker">FIND WHAT YOU NEED</span><h2>Shop by Category</h2><p>Find exactly what your space needs.</p></div><a className="text-link" href="/products">All categories <ArrowRight size={17}/></a></div><div className="category-grid category-strip">{categories.map(({title,subtitle,image,target})=><a href={target} className="category-card" key={title}><span className="category-image"><img src={image} alt={title} loading="lazy"/></span><span className="category-card-copy"><span className="category-title">{title}</span><span className="category-subtitle">{subtitle}</span><span className="category-arrow"><ArrowRight size={17}/></span></span></a>)}</div></section>
    {renderProductSection("salon-essentials", "Salon Essentials", "Furniture and professional tools for salons and barbershops.", products.filter(p => /salon|barber|shampoo|clipper|trimmer|groom|waiting|mirror|tool|steriliz|steamer|trolley|razor|scissor/i.test(`${p.name} ${p.category ?? ""}`)), whatsappNumber, "salon-products-section")}
    {renderProductSection("office-furniture", "Office Furniture", "Functional, comfortable furniture for professional workspaces.", products.filter(p => /office|desk|cabinet|ergonomic|conference|staff|visitor|mesh/i.test(`${p.name} ${p.category ?? ""}`)), whatsappNumber, "office-products-section")}
    {renderProductSection("new-arrivals", "New Arrivals", "Explore the latest additions to our collection.", products.slice(0, 8), whatsappNumber, "new-arrivals-section")}
    {renderProductSection("best-sellers", "Best Sellers", "Popular picks for your workspace and business.", products.filter(p => p.is_featured).length ? products.filter(p => p.is_featured) : products, whatsappNumber, "best-sellers-section")}
    <section className="contact-section" id="contact"><div><span className="section-kicker">LET'S CREATE SOMETHING GREAT</span><h2>Ready to elevate your space?</h2><p>Tell us what you need. Our team will help you find the right fit.</p></div><a className="button button-primary contact-button" href={whatsappLink} target="_blank" rel="noreferrer">Enquire on WhatsApp <ArrowRight size={18}/></a></section>
    <footer className="site-footer reference-footer" id="footer">
      <div className="footer-about"><Brand/><p className="footer-tagline">Design Spaces • Creating Experiences</p><h3>About Us</h3><p>Bisi Interiors Nig Ltd is a Nigerian-owned company based in Abeokuta, Ogun State, supplying quality salon furniture, grooming equipment, office furniture, ergonomic chairs, spa beds, and professional accessories at competitive prices.</p><a className="footer-about-link" href="/about">About Bisi Interiors Nig Ltd <ArrowRight size={14}/></a><h3>Company Details</h3><small><strong>Bisi Interiors Nig Ltd</strong></small><small>Abeokuta, Ogun State, Nigeria</small><small>Established in 2026</small><small><a href="mailto:info@bisiinteriorsnig.com">info@bisiinteriorsnig.com</a></small><small><a href="tel:09032959952">09032959952</a> · <a href="tel:08104368156">08104368156</a> · <a href="tel:09063285852">09063285852</a></small><div className="footer-social"><a href="https://www.instagram.com/bisi_interiors?rpxt=MWhscXA2bXF5NGYycg%3D%3D&utm_source=qr" aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={18}/></a><a href="https://www.tiktok.com/@bisi.interiors" aria-label="TikTok" target="_blank" rel="noreferrer"><Music2 size={18}/></a></div></div>
      <div className="footer-column"><strong>QUICK LINKS</strong><a href="#home">Home</a><a href="/about">About Us</a><a href="/products">All Products</a><a href="/products?category=Salon%20Essentials">Salon Essentials</a><a href="/products?category=Office%20Furniture">Office Furniture</a><a href="#contact">Contact Us</a><a href="#contact">Delivery enquiries</a><a href="#contact">Customer support</a></div>
      <div className="footer-column"><strong>SALON ESSENTIALS</strong><a href="/products?category=Salon%20Essentials">Salon Chairs</a><a href="/products?category=Salon%20Essentials">Shampoo Beds</a><a href="/products?category=Salon%20Essentials">Clippers and Trimmers</a><a href="/products?category=Salon%20Essentials">Salon Equipment</a><a href="/products?category=Salon%20Essentials">Waiting Sofas</a><a href="/products?category=Salon%20Essentials">Salon Mirrors</a></div>
      <div className="footer-column"><strong>OFFICE FURNITURE</strong><a href="/products?category=Office%20Furniture">Executive Desks</a><a href="/products?category=Office%20Furniture">Office Cabinets</a><a href="/products?category=Office%20Furniture">Staff Desks</a><a href="/products?category=Office%20Furniture">Office Chairs</a><a href="/products?category=Office%20Furniture">Office Ergonomic Chairs</a><a href="/products?category=Office%20Furniture">Conference Desks</a><a href="/products">Others</a></div>
      <div className="footer-bottom"><span>© 2026 Bisi Interiors Nig Ltd. All rights reserved.</span><span>Design Spaces • Creating Experiences</span><a href="/admin" className="footer-admin">Admin</a></div>
    </footer>
  </main>;
}
