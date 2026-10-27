import Link from "next/link";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

type Product = { id: string; name: string; category: string | null; image_url: string | null; price: number | string | null };

async function searchProducts(query: string): Promise<Product[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key || !query) return [];
  const supabase = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
  const pattern = `%${query.replace(/[,%()]/g, " ").trim()}%`;
  const { data } = await supabase.from("products").select("id,name,category,image_url,price").eq("is_available", true).or(`name.ilike.${pattern},category.ilike.${pattern}`).order("created_at", { ascending: false }).limit(60);
  return (data ?? []) as Product[];
}

export default async function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = (searchParams.q ?? "").trim();
  const products = await searchProducts(query);
  return <main className="search-page">
    <header className="search-page-header"><Link href="/" className="text-link"><ArrowLeft size={17}/> Back to homepage</Link><span className="section-kicker">BISI INTERIORS NIG LTD</span></header>
    <section className="section search-results-section">
      <span className="section-kicker">PRODUCT SEARCH</span>
      <h1>Search results</h1>
      <form className="catalog-search search-page-form" action="/search" method="get"><Search size={19}/><input name="q" defaultValue={query} aria-label="Search products" placeholder="Search salon chairs..."/><button aria-label="Search products" type="submit"><ArrowRight size={18}/></button></form>
      {query ? <p className="search-summary">Results for <strong>“{query}”</strong> · {products.length} found</p> : <p className="search-summary">Search for salon chairs, salon equipment, office furniture and more.</p>}
      <div className="product-grid search-result-grid">{products.map(product => <article className="product-card" key={product.id}><a href={`https://wa.me/2349032959952?text=${encodeURIComponent(`Hello Bisi Interiors, I would like to enquire about ${product.name}.`)}`} target="_blank" rel="noreferrer" className="product-visual">{product.image_url ? <img src={product.image_url} alt={product.name}/> : <span className="product-placeholder">Bisi Interiors</span>}</a><div className="product-info"><h3>{product.name}</h3><p>{Number(product.price || 0) > 0 ? `₦${Number(product.price).toLocaleString("en-NG")}` : "Price on WhatsApp enquiry"}</p><a href={`https://wa.me/2349032959952?text=${encodeURIComponent(`Hello Bisi Interiors, I would like to enquire about ${product.name}.`)}`} target="_blank" rel="noreferrer">Enquire <ArrowRight size={15}/></a></div></article>)}</div>
      {query && products.length === 0 && <div className="search-empty"><h2>No matching products found</h2><p>Try a different search, such as “barber chair” or “office chair”.</p><Link className="button button-primary" href="/#products">Browse all products <ArrowRight size={17}/></Link></div>}
    </section>
  </main>;
}
