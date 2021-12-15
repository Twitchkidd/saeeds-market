// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import InternationalSectionHeadingsLayout from 'src/layouts/InternationalSectionHeadingsLayout'
import NewItemsLayout from 'src/layouts/NewItemsLayout'
import WhatsNewHeadersLayout from 'src/layouts/WhatsNewHeadersLayout'
import DeliveryLinksLayout from 'src/layouts/DeliveryLinksLayout'
import TagLinesLayout from 'src/layouts/TagLinesLayout'
import TitlesLayout from 'src/layouts/TitlesLayout'
import ProductsLayout from 'src/layouts/ProductsLayout';
import MainLayout from 'src/layouts/MainLayout/MainLayout';

const Routes = () => {
  return (
    <Router>
      <Set wrap={InternationalSectionHeadingsLayout}>
        <Route path="/international-section-headings/new" page={InternationalSectionHeadingNewInternationalSectionHeadingPage} name="newInternationalSectionHeading" />
        <Route path="/international-section-headings/{id:Int}/edit" page={InternationalSectionHeadingEditInternationalSectionHeadingPage} name="editInternationalSectionHeading" />
        <Route path="/international-section-headings/{id:Int}" page={InternationalSectionHeadingInternationalSectionHeadingPage} name="internationalSectionHeading" />
        <Route path="/international-section-headings" page={InternationalSectionHeadingInternationalSectionHeadingsPage} name="internationalSectionHeadings" />
      </Set>
      <Set wrap={NewItemsLayout}>
        <Route path="/new-items/new" page={NewItemNewNewItemPage} name="newNewItem" />
        <Route path="/new-items/{id:Int}/edit" page={NewItemEditNewItemPage} name="editNewItem" />
        <Route path="/new-items/{id:Int}" page={NewItemNewItemPage} name="newItem" />
        <Route path="/new-items" page={NewItemNewItemsPage} name="newItems" />
      </Set>
      <Set wrap={WhatsNewHeadersLayout}>
        <Route path="/whats-new-headers/new" page={WhatsNewHeaderNewWhatsNewHeaderPage} name="newWhatsNewHeader" />
        <Route path="/whats-new-headers/{id:Int}/edit" page={WhatsNewHeaderEditWhatsNewHeaderPage} name="editWhatsNewHeader" />
        <Route path="/whats-new-headers/{id:Int}" page={WhatsNewHeaderWhatsNewHeaderPage} name="whatsNewHeader" />
        <Route path="/whats-new-headers" page={WhatsNewHeaderWhatsNewHeadersPage} name="whatsNewHeaders" />
      </Set>
      <Set wrap={DeliveryLinksLayout}>
        <Route path="/delivery-links/new" page={DeliveryLinkNewDeliveryLinkPage} name="newDeliveryLink" />
        <Route path="/delivery-links/{id:Int}/edit" page={DeliveryLinkEditDeliveryLinkPage} name="editDeliveryLink" />
        <Route path="/delivery-links/{id:Int}" page={DeliveryLinkDeliveryLinkPage} name="deliveryLink" />
        <Route path="/delivery-links" page={DeliveryLinkDeliveryLinksPage} name="deliveryLinks" />
      </Set>
      <Set wrap={TagLinesLayout}>
        <Route path="/tag-lines/new" page={TagLineNewTagLinePage} name="newTagLine" />
        <Route path="/tag-lines/{id:Int}/edit" page={TagLineEditTagLinePage} name="editTagLine" />
        <Route path="/tag-lines/{id:Int}" page={TagLineTagLinePage} name="tagLine" />
        <Route path="/tag-lines" page={TagLineTagLinesPage} name="tagLines" />
      </Set>
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
