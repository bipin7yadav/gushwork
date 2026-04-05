import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import ProductCard, { ProductCardProps } from '../components/ProductCard';

const productsList: ProductCardProps[] = [
  {
    id: "hdpe-pipe-20mm",
    title: "HDPE Pipe 20mm (3/4\")",
    image: "/images/hdpe_pipe_coil_orange.png",
    gradeBadge: "PE100 / PE80",
    pressureRating: "PN 6 to PN 16",
    priceRange: "₹45 - ₹65 / meter",
    applications: ["Agriculture", "Drip Irrigation", "Potable Water"]
  },
  {
    id: "hdpe-pipe-110mm",
    title: "HDPE Pipe 110mm (4\")",
    image: "/images/hdpe_pipe_black.png",
    gradeBadge: "IS 4984 Certified",
    pressureRating: "PN 8 to PN 16",
    priceRange: "₹450 - ₹550 / meter",
    applications: ["Water Mains", "Industrial Piping", "Sewage"]
  },
  {
    id: "hdpe-pipe-315mm",
    title: "HDPE Pipe 315mm (12\")",
    image: "/images/hdpe_pipe_blue_coil.png",
    gradeBadge: "High Volume",
    pressureRating: "PN 10",
    priceRange: "₹2,800 - ₹3,200 / meter",
    applications: ["Municipal Water", "Heavy Industries"]
  },
  {
    id: "pe-rt-pipe",
    title: "PE-RT Heating Pipes",
    image: "/images/pert_heating_pipes.png",
    gradeBadge: "Heat Resistant",
    pressureRating: "High Temp",
    priceRange: "₹180 - ₹250 / meter",
    applications: ["Underfloor Heating", "Hot Water"]
  },
  {
    id: "hdpe-fittings",
    title: "HDPE Electrofusion Fittings",
    image: "/images/hdpe_fittings_portfolio.png",
    gradeBadge: "Accessories",
    pressureRating: "Match Pipe PN",
    priceRange: "Varies by Size",
    applications: ["Jointing", "Repairing", "Branching"]
  }
];

export default function ProductsPage() {
  return (
    <main style={{ paddingBottom: '4rem', background: 'var(--color-bg)' }}>
      <Breadcrumb paths={[{ name: "Products" }]} />
      
      <section className="container mt-xl">
        <h1 className="section-title text-left" style={{ marginBottom: '1rem' }}>Our Piping Solutions</h1>
        <p className="section-desc text-left" style={{ maxWidth: '800px', marginBottom: '3rem' }}>
          Explore our wide range of BIS and ISO certified HDPE pipes, coils, and fittings. Whether for agriculture, urban water supply, or industrial transport, we have the right specified piping.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {productsList.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </main>
  );
}
