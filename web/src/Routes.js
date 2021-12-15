// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import TitlesLayout from 'src/layouts/TitlesLayout'
import ProductsLayout from 'src/layouts/ProductsLayout';
import MainLayout from 'src/layouts/MainLayout/MainLayout';

const Routes = () => {
  return (
    <Router>
      <Set wrap={TitlesLayout}>
        <Route path="/titles/new" page={TitleNewTitlePage} name="newTitle" />
        <Route path="/titles/{id:Int}/edit" page={TitleEditTitlePage} name="editTitle" />
        <Route path="/titles/{id:Int}" page={TitleTitlePage} name="title" />
        <Route path="/titles" page={TitleTitlesPage} name="titles" />
      </Set>
      <Set wrap={ProductsLayout}>
        <Route path="/products/new" page={ProductNewProductPage} name="newProduct" />
        <Route path="/products/{id:Int}/edit" page={ProductEditProductPage} name="editProduct" />
        <Route path="/products/{id:Int}" page={ProductProductPage} name="product" />
        <Route path="/products" page={ProductProductsPage} name="products" />
      </Set>
      <Set wrap={MainLayout}>
        <Route path="/" page={LandingPage} name="landing" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;
