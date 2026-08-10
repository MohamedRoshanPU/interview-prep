import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const LIMIT = 10;

interface ProductsResponse {
  limit: number;
  total: number;
  skip: number;
  products: any[];
}

const Pagination: React.FC = () => {
  const { data, error, loading } = useFetch<ProductsResponse>(
    "https://dummyjson.com/products?limit=0",
  );

  const [currentPage, setCurrentPage] = useState(1);

  const allProducts = [...(data?.products ?? [])];
  const totalPages = Math.ceil(allProducts.length / LIMIT);

  const offset = (currentPage - 1) * LIMIT;

  const paginatedProducts = allProducts.splice(offset, LIMIT);

  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div>
        <div className="flex flex-col gap-1">
          <h2>Products</h2>
          <div className="w-2xl bg-white rounded-md h-125 p-2 overflow-auto">
            <div className="flex flex-col gap-1">
              {paginatedProducts.map((product: any) => {
                return (
                  <div key={product.id} className="p-1 flex items-center gap-2">
                    <div className="w-20 h-20 border rounded">
                      <img
                        src={product.thumbnail}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="grow rounded border flex flex-col h-20 justify-between p-2">
                      <div>
                        <p>{product?.title}</p>
                      </div>
                      <p>{product?.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            className="px-2 py-1 rounded-full bg-blue-50"
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(
              (page) => {
                return (
                  <button
                    key={page}
                    className={`px-2 py-1 rounded-full bg-blue-50 ${currentPage === page && "border border-blue-600"}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                );
              },
            )}
          </div>
          <button
            className="px-2 py-1 rounded-full bg-blue-50"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
