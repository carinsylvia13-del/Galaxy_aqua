import type { Metadata } from "next";
import { ContactStrip } from "@/components/contact-strip";
import { ProductCatalog } from "@/components/product-catalog";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Galaxy Aqua Solutions purifiers, water dispensers, softeners, commercial treatment systems, membranes and media."
};

export default function ProductsPage() {
  return (
    <>
      <ProductCatalog />

      <ContactStrip
        title="Need help choosing a product?"
        copy="Share the source water and daily requirement."
      />
    </>
  );
}
