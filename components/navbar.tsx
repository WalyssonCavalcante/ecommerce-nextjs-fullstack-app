import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="hover:text-blue-600">
          Meu Ecommerce
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600">
            Inicio
          </Link>
          <Link href="/products" className="hover:text-blue-600">
            Produtos
          </Link>
          <Link href="/checkout" className="hover:text-blue-600">
            Pagamento
          </Link>
        </div>
        <div className="flex items-center space-x-4"></div>
      </div>
    </nav>
  );
};
