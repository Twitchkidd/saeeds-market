// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'
import ProductsSectionHeadersLayout from 'src/layouts/ProductsSectionHeadersLayout'
import InternationalSectionHeadersLayout from 'src/layouts/InternationalSectionHeadersLayout'
import DeliveryTextsLayout from 'src/layouts/DeliveryTextsLayout'
import BusinessInfosLayout from 'src/layouts/BusinessInfosLayout';
import PrimaryCallToActionTextsLayout from 'src/layouts/PrimaryCallToActionTextsLayout';
import HeroImagesLayout from 'src/layouts/HeroImagesLayout';
import TagLinesLayout from 'src/layouts/TagLinesLayout';
import MainLayout from 'src/layouts/MainLayout/MainLayout';

const Routes = () => {
  return (
    <Router>
      <Set wrap={ProductsSectionHeadersLayout}>
        <Route path="/products-section-headers/new" page={ProductsSectionHeaderNewProductsSectionHeaderPage} name="newProductsSectionHeader" />
        <Route path="/products-section-headers/{id:Int}/edit" page={ProductsSectionHeaderEditProductsSectionHeaderPage} name="editProductsSectionHeader" />
        <Route path="/products-section-headers/{id:Int}" page={ProductsSectionHeaderProductsSectionHeaderPage} name="productsSectionHeader" />
        <Route path="/products-section-headers" page={ProductsSectionHeaderProductsSectionHeadersPage} name="productsSectionHeaders" />
      </Set>
      <Set wrap={InternationalSectionHeadersLayout}>
        <Route path="/international-section-headers/new" page={InternationalSectionHeaderNewInternationalSectionHeaderPage} name="newInternationalSectionHeader" />
        <Route path="/international-section-headers/{id:Int}/edit" page={InternationalSectionHeaderEditInternationalSectionHeaderPage} name="editInternationalSectionHeader" />
        <Route path="/international-section-headers/{id:Int}" page={InternationalSectionHeaderInternationalSectionHeaderPage} name="internationalSectionHeader" />
        <Route path="/international-section-headers" page={InternationalSectionHeaderInternationalSectionHeadersPage} name="internationalSectionHeaders" />
      </Set>
      <Set wrap={DeliveryTextsLayout}>
        <Route path="/delivery-texts/new" page={DeliveryTextNewDeliveryTextPage} name="newDeliveryText" />
        <Route path="/delivery-texts/{id:Int}/edit" page={DeliveryTextEditDeliveryTextPage} name="editDeliveryText" />
        <Route path="/delivery-texts/{id:Int}" page={DeliveryTextDeliveryTextPage} name="deliveryText" />
        <Route path="/delivery-texts" page={DeliveryTextDeliveryTextsPage} name="deliveryTexts" />
      </Set>
      <Set wrap={BusinessInfosLayout}>
        <Route path="/business-infos/new" page={BusinessInfoNewBusinessInfoPage} name="newBusinessInfo" />
        <Route path="/business-infos/{id:Int}/edit" page={BusinessInfoEditBusinessInfoPage} name="editBusinessInfo" />
        <Route path="/business-infos/{id:Int}" page={BusinessInfoBusinessInfoPage} name="businessInfo" />
        <Route path="/business-infos" page={BusinessInfoBusinessInfosPage} name="businessInfos" />
      </Set>
      <Private unauthenticated="landing">
        <Set wrap={MainLayout}>
          <Route path="/admin" page={AdminPage} name="admin" />
        </Set>
        <Set wrap={TagLinesLayout}>
          <Route path="/admin/tag-lines/new" page={TagLineNewTagLinePage} name="newTagLine" />
          <Route path="/admin/tag-lines/{id:Int}/edit" page={TagLineEditTagLinePage} name="editTagLine" />
          <Route path="/admin/tag-lines/{id:Int}" page={TagLineTagLinePage} name="tagLine" />
          <Route path="/admin/tag-lines" page={TagLineTagLinesPage} name="tagLines" />
        </Set>
        <Set wrap={PrimaryCallToActionTextsLayout}>
          <Route path="/primary-call-to-action-texts/new" page={PrimaryCallToActionTextNewPrimaryCallToActionTextPage} name="newPrimaryCallToActionText" />
          <Route path="/primary-call-to-action-texts/{id:Int}/edit" page={PrimaryCallToActionTextEditPrimaryCallToActionTextPage} name="editPrimaryCallToActionText" />
          <Route path="/primary-call-to-action-texts/{id:Int}" page={PrimaryCallToActionTextPrimaryCallToActionTextPage} name="primaryCallToActionText" />
          <Route path="/primary-call-to-action-texts" page={PrimaryCallToActionTextPrimaryCallToActionTextsPage} name="primaryCallToActionTexts" />
        </Set>
        <Set wrap={HeroImagesLayout}>
          <Route path="/hero-images/new" page={HeroImageNewHeroImagePage} name="newHeroImage" />
          <Route path="/hero-images/{id:Int}/edit" page={HeroImageEditHeroImagePage} name="editHeroImage" />
          <Route path="/hero-images/{id:Int}" page={HeroImageHeroImagePage} name="heroImage" />
          <Route path="/hero-images" page={HeroImageHeroImagesPage} name="heroImages" />
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
