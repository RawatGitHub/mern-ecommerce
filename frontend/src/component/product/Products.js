import { useEffect, useState } from "react";
import Loader from "../layout/loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, clearErrors } from "../../actions/productAction";
import ProductCard from "../home/ProductCard";
import Pagination from "react-js-pagination";
import { useParams } from "react-router";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";
import { useAlert } from "react-alert";
import "./Products.css";
const categories = [
  "Computer & Laptops",
  "Men's wear",
  "Women's wear",
  "Electronics",
  "Home Appliances",
  "Kitchen Appliances",
  "Beauty & Makeup",
  "Mobiles & Earphones",
  "TV & LCDs",
  "Bags & bagpacks",
  "Men's Grooming",
  "Women's Grooming",
  "Cleaners",
];
const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 200000]);
  const [category, setCategory] = useState("");
  const alert = useAlert();
  const { keyword } = useParams();
  const {
    loading,
    error,
    products,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProducts(keyword, currentPage, price, category));
  }, [dispatch, error, alert, keyword, currentPage, price, category]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="All Products" />
          <h2 className="productsHeading">All Products</h2>
          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              disabled={loading}
              max={200000}
            />

            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  key={category}
                  className="category-link"
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {resultPerPage < filteredProductsCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Products;
