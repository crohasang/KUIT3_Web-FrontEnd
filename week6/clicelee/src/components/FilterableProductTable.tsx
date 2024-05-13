import React, { useState } from 'react';
import { Products } from '../App';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import InputBar from './InputBar';

interface Props {
  product: Products[];
  setProduct: React.Dispatch<React.SetStateAction<Products[]>>;
}

const FilterableProductTable: React.FC<Props> = ({ product, setProduct }) => {
  const [filterText, setFilterText] = useState<string>('');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  // emptyProduct 생성x

  const addProduct = (newProduct: Products) => {
    setProduct((previousData: Products[]) => [...previousData, newProduct]);
  };

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        product={product}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />

      {/* props로 addProduct만을 넘겨줌(emptyProduct는 넘겨주지 않음) */}
      <InputBar addProduct={addProduct} />
    </div>
  );
};

export default FilterableProductTable;
