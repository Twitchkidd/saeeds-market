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
import InternationalSectionHeaderTextsLayout from 'src/layouts/InternationalSectionHeaderTextsLayout';
import WithFromTextsLayout from 'src/layouts/WithFromTextsLayout';
import ProductsSectionHeaderTextsLayout from 'src/layouts/ProductsSectionHeaderTextsLayout';
import ProductsSectionHeaderImagesLayout from 'src/layouts/ProductsSectionHeaderImagesLayout';
import WeCarryTextsLayout from 'src/layouts/WeCarryTextsLayout';
import BusinessInfosLayout from 'src/layouts/BusinessInfosLayout';

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="landing" role="admin">
        <Set wrap={MainLayout}>
          <Route path="/admin" page={AdminPage} name="admin" />
        </Set>
        <Set wrap={TagLineTextsLayout}>
          <Route path="/admin/tag-line-text/new" page={TagLineTextNewTagLineTextPage} name="newTagLineText" />
          <Route path="/admin/tag-line-text/{id:Int}/edit" page={TagLineTextEditTagLineTextPage} name="editTagLineText" />
          <Route path="/admin/tag-line-text/{id:Int}" page={TagLineTextTagLineTextPage} name="tagLineText" />
          <Route path="/admin/tag-line-text" page={TagLineTextTagLineTextsPage} name="tagLineTexts" />
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
        <Set wrap={InternationalSectionHeaderTextsLayout}>
          <Route path="/admin/international-section-header-text/new" page={InternationalSectionHeaderTextNewInternationalSectionHeaderTextPage} name="newInternationalSectionHeaderText" />
          <Route path="/admin/international-section-header-text/{id:Int}/edit" page={InternationalSectionHeaderTextEditInternationalSectionHeaderTextPage} name="editInternationalSectionHeaderText" />
          <Route path="/admin/international-section-header-text/{id:Int}" page={InternationalSectionHeaderTextInternationalSectionHeaderTextPage} name="internationalSectionHeaderText" />
          <Route path="/admin/international-section-header-text" page={InternationalSectionHeaderTextInternationalSectionHeaderTextsPage} name="internationalSectionHeaderTexts" />
        </Set>
        <Set wrap={WithFromTextsLayout}>
          <Route path="/admin/with-from-text/new" page={WithFromTextNewWithFromTextPage} name="newWithFromText" />
          <Route path="/admin/with-from-text/{id:Int}/edit" page={WithFromTextEditWithFromTextPage} name="editWithFromText" />
          <Route path="/admin/with-from-text/{id:Int}" page={WithFromTextWithFromTextPage} name="withFromText" />
          <Route path="/admin/with-from-text" page={WithFromTextWithFromTextsPage} name="withFromTexts" />
        </Set>
        <Set wrap={ProductsSectionHeaderTextsLayout}>
          <Route path="/admin/products-section-header-text/new" page={ProductsSectionHeaderTextNewProductsSectionHeaderTextPage} name="newProductsSectionHeaderText" />
          <Route path="/admin/products-section-header-text/{id:Int}/edit" page={ProductsSectionHeaderTextEditProductsSectionHeaderTextPage} name="editProductsSectionHeaderText" />
          <Route path="/admin/products-section-header-text/{id:Int}" page={ProductsSectionHeaderTextProductsSectionHeaderTextPage} name="productsSectionHeaderText" />
          <Route path="/admin/products-section-header-text" page={ProductsSectionHeaderTextProductsSectionHeaderTextsPage} name="productsSectionHeaderTexts" />
        </Set>
        <Set wrap={ProductsSectionHeaderImagesLayout}>
          <Route path="/admin/products-section-header-images/new" page={ProductsSectionHeaderImageNewProductsSectionHeaderImagePage} name="newProductsSectionHeaderImage" />
          <Route path="/admin/products-section-header-images/{id:Int}/edit" page={ProductsSectionHeaderImageEditProductsSectionHeaderImagePage} name="editProductsSectionHeaderImage" />
          <Route path="/admin/products-section-header-images/{id:Int}" page={ProductsSectionHeaderImageProductsSectionHeaderImagePage} name="productsSectionHeaderImage" />
          <Route path="/admin/products-section-header-images" page={ProductsSectionHeaderImageProductsSectionHeaderImagesPage} name="productsSectionHeaderImages" />
        </Set>
        <Set wrap={WeCarryTextsLayout}>
          <Route path="/admin/we-carry-text/new" page={WeCarryTextNewWeCarryTextPage} name="newWeCarryText" />
          <Route path="/admin/we-carry-text/{id:Int}/edit" page={WeCarryTextEditWeCarryTextPage} name="editWeCarryText" />
          <Route path="/admin/we-carry-text/{id:Int}" page={WeCarryTextWeCarryTextPage} name="weCarryText" />
          <Route path="/admin/we-carry-text" page={WeCarryTextWeCarryTextsPage} name="weCarryTexts" />
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
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/faq" page={FaqPage} name="faq" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;
