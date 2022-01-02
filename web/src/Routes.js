// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router';
import MainLayout from 'src/layouts/MainLayout/MainLayout';
import TagLineTextsLayout from 'src/layouts/TagLineTextsLayout';
import PrimaryCallToActionTextsLayout from 'src/layouts/PrimaryCallToActionTextsLayout';
import DeliveryTextsLayout from 'src/layouts/DeliveryTextsLayout';
import HeroImagesLayout from 'src/layouts/HeroImagesLayout';
import ProductTypesLayout from 'src/layouts/ProductTypesLayout';
import ProductsLayout from 'src/layouts/ProductsLayout';
import CountriesLayout from 'src/layouts/CountriesLayout';
import NewItemsLayout from 'src/layouts/NewItemsLayout';
import WhatsNewTextsLayout from 'src/layouts/WhatsNewTextsLayout';
import ProductsSectionHeadersLayout from 'src/layouts/ProductsSectionHeadersLayout';
import InternationalSectionHeadersLayout from 'src/layouts/InternationalSectionHeadersLayout';
import BusinessInfosLayout from 'src/layouts/BusinessInfosLayout';

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="landing">
        <Set wrap={MainLayout}>
          <Route path="/admin" page={AdminPage} name="admin" />
        </Set>
        <Set wrap={TagLineTextsLayout}>
          <Route path="/admin/tag-line-texts/new" page={TagLineTextNewTagLineTextPage} name="newTagLineText" />
          <Route path="/admin/tag-line-texts/{id:Int}/edit" page={TagLineTextEditTagLineTextPage} name="editTagLineText" />
          <Route path="/admin/tag-line-texts/{id:Int}" page={TagLineTextTagLineTextPage} name="tagLineText" />
          <Route path="/admin/tag-line-texts" page={TagLineTextTagLineTextsPage} name="tagLineTexts" />
        </Set>
        <Set wrap={PrimaryCallToActionTextsLayout}>
          <Route path="/admin/primary-call-to-action-text/new" page={PrimaryCallToActionTextNewPrimaryCallToActionTextPage} name="newPrimaryCallToActionText" />
          <Route path="/admin/primary-call-to-action-text/{id:Int}/edit" page={PrimaryCallToActionTextEditPrimaryCallToActionTextPage} name="editPrimaryCallToActionText" />
          <Route path="/admin/primary-call-to-action-text/{id:Int}" page={PrimaryCallToActionTextPrimaryCallToActionTextPage} name="primaryCallToActionText" />
          <Route path="/admin/primary-call-to-action-text" page={PrimaryCallToActionTextPrimaryCallToActionTextsPage} name="primaryCallToActionTexts" />
        </Set>
        <Set wrap={DeliveryTextsLayout}>
          <Route path="/admin/delivery-text/new" page={DeliveryTextNewDeliveryTextPage} name="newDeliveryText" />
          <Route path="/admin/delivery-text/{id:Int}/edit" page={DeliveryTextEditDeliveryTextPage} name="editDeliveryText" />
          <Route path="/admin/delivery-text/{id:Int}" page={DeliveryTextDeliveryTextPage} name="deliveryText" />
          <Route path="/admin/delivery-text" page={DeliveryTextDeliveryTextsPage} name="deliveryTexts" />
        </Set>
        <Set wrap={HeroImagesLayout}>
          <Route path="/admin/hero-image/new" page={HeroImageNewHeroImagePage} name="newHeroImage" />
          <Route path="/admin/hero-image/{id:Int}/edit" page={HeroImageEditHeroImagePage} name="editHeroImage" />
          <Route path="/admin/hero-image/{id:Int}" page={HeroImageHeroImagePage} name="heroImage" />
          <Route path="/admin/hero-image" page={HeroImageHeroImagesPage} name="heroImages" />
        </Set>
        <Set wrap={WhatsNewTextsLayout}>
          <Route path="/admin/whats-new-text/new" page={WhatsNewTextNewWhatsNewTextPage} name="newWhatsNewText" />
          <Route path="/admin/whats-new-text/{id:Int}/edit" page={WhatsNewTextEditWhatsNewTextPage} name="editWhatsNewText" />
          <Route path="/admin/whats-new-text/{id:Int}" page={WhatsNewTextWhatsNewTextPage} name="whatsNewText" />
          <Route path="/admin/whats-new-text" page={WhatsNewTextWhatsNewTextsPage} name="whatsNewTexts" />
        </Set>
        <Set wrap={NewItemsLayout}>
          <Route path="/admin/new-items/new" page={NewItemNewNewItemPage} name="newNewItem" />
          <Route path="/admin/new-items/{id:Int}/edit" page={NewItemEditNewItemPage} name="editNewItem" />
          <Route path="/admin/new-items/{id:Int}" page={NewItemNewItemPage} name="newItem" />
          <Route path="/admin/new-items" page={NewItemNewItemsPage} name="newItems" />
        </Set>
        <Set wrap={CountriesLayout}>
          <Route path="/admin/countries/new" page={CountryNewCountryPage} name="newCountry" />
          <Route path="/admin/countries/{id:Int}/edit" page={CountryEditCountryPage} name="editCountry" />
          <Route path="/admin/countries/{id:Int}" page={CountryCountryPage} name="country" />
          <Route path="/admin/countries" page={CountryCountriesPage} name="countries" />
        </Set>
        <Set wrap={ProductTypesLayout}>
          <Route path="/admin/product-types/new" page={ProductTypeNewProductTypePage} name="newProductType" />
          <Route path="/admin/product-types/{id:Int}/edit" page={ProductTypeEditProductTypePage} name="editProductType" />
          <Route path="/admin/product-types/{id:Int}" page={ProductTypeProductTypePage} name="productType" />
          <Route path="/admin/product-types" page={ProductTypeProductTypesPage} name="productTypes" />
        </Set>
        <Set wrap={ProductsLayout}>
          <Route path="/admin/products/new" page={ProductNewProductPage} name="newProduct" />
          <Route path="/admin/products/{id:Int}/edit" page={ProductEditProductPage} name="editProduct" />
          <Route path="/admin/products/{id:Int}" page={ProductProductPage} name="product" />
          <Route path="/admin/products" page={ProductProductsPage} name="products" />
        </Set>
        <Set wrap={InternationalSectionHeadersLayout}>
          <Route path="/admin/international-section-header/new" page={InternationalSectionHeaderNewInternationalSectionHeaderPage} name="newInternationalSectionHeader" />
          <Route path="/admin/international-section-header/{id:Int}/edit" page={InternationalSectionHeaderEditInternationalSectionHeaderPage} name="editInternationalSectionHeader" />
          <Route path="/admin/international-section-header/{id:Int}" page={InternationalSectionHeaderInternationalSectionHeaderPage} name="internationalSectionHeader" />
          <Route path="/admin/international-section-header" page={InternationalSectionHeaderInternationalSectionHeadersPage} name="internationalSectionHeaders" />
        </Set>
        <Set wrap={ProductsSectionHeadersLayout}>
          <Route path="/admin/products-section-header/new" page={ProductsSectionHeaderNewProductsSectionHeaderPage} name="newProductsSectionHeader" />
          <Route path="/admin/products-section-header/{id:Int}/edit" page={ProductsSectionHeaderEditProductsSectionHeaderPage} name="editProductsSectionHeader" />
          <Route path="/admin/products-section-header/{id:Int}" page={ProductsSectionHeaderProductsSectionHeaderPage} name="productsSectionHeader" />
          <Route path="/admin/products-section-header" page={ProductsSectionHeaderProductsSectionHeadersPage} name="productsSectionHeaders" />
        </Set>
        <Set wrap={BusinessInfosLayout}>
          <Route path="/admin/business-info/new" page={BusinessInfoNewBusinessInfoPage} name="newBusinessInfo" />
          <Route path="/admin/business-info/{id:Int}/edit" page={BusinessInfoEditBusinessInfoPage} name="editBusinessInfo" />
          <Route path="/admin/business-info/{id:Int}" page={BusinessInfoBusinessInfoPage} name="businessInfo" />
          <Route path="/admin/business-info" page={BusinessInfoBusinessInfosPage} name="businessInfos" />
        </Set>
      </Private>
      <Set wrap={MainLayout}>
        <Route path="/" page={LandingPage} name="landing" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;
