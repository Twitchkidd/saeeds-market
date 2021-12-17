// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router';
import BusinessInfosLayout from 'src/layouts/BusinessInfosLayout';
import MenuLinksLayout from 'src/layouts/MenuLinksLayout';
import ImagesLayout from 'src/layouts/ImagesLayout';
import InternationalSectionHeadingsLayout from 'src/layouts/InternationalSectionHeadingsLayout';
import NewItemsLayout from 'src/layouts/NewItemsLayout';
import WhatsNewHeadersLayout from 'src/layouts/WhatsNewHeadersLayout';
import TagLinesLayout from 'src/layouts/TagLinesLayout';
import TitlesLayout from 'src/layouts/TitlesLayout';
import MainLayout from 'src/layouts/MainLayout/MainLayout';

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="landing">
        <Set wrap={MainLayout}>
          <Route path="/admin" page={AdminPage} name="admin" />
        </Set>
        <Set wrap={BusinessInfosLayout}>
          <Route path="/admin/business-infos/new" page={BusinessInfoNewBusinessInfoPage} name="newBusinessInfo" />
          <Route path="/admin/business-infos/{id:Int}/edit" page={BusinessInfoEditBusinessInfoPage} name="editBusinessInfo" />
          <Route path="/admin/business-infos/{id:Int}" page={BusinessInfoBusinessInfoPage} name="businessInfo" />
          <Route path="/admin/business-infos" page={BusinessInfoBusinessInfosPage} name="businessInfos" />
        </Set>
        <Set wrap={MenuLinksLayout}>
          <Route path="/admin/menu-links/new" page={MenuLinkNewMenuLinkPage} name="newMenuLink" />
          <Route path="/admin/menu-links/{id:Int}/edit" page={MenuLinkEditMenuLinkPage} name="editMenuLink" />
          <Route path="/admin/menu-links/{id:Int}" page={MenuLinkMenuLinkPage} name="menuLink" />
          <Route path="/admin/menu-links" page={MenuLinkMenuLinksPage} name="menuLinks" />
        </Set>
        <Set wrap={ImagesLayout}>
          <Route path="/admin/images/new" page={ImageNewImagePage} name="newImage" />
          <Route path="/admin/images/{id:Int}/edit" page={ImageEditImagePage} name="editImage" />
          <Route path="/admin/images/{id:Int}" page={ImageImagePage} name="image" />
          <Route path="/admin/images" page={ImageImagesPage} name="images" />
        </Set>
        <Set wrap={InternationalSectionHeadingsLayout}>
          <Route path="/admin/international-section-headings/new" page={InternationalSectionHeadingNewInternationalSectionHeadingPage} name="newInternationalSectionHeading" />
          <Route path="/admin/international-section-headings/{id:Int}/edit" page={InternationalSectionHeadingEditInternationalSectionHeadingPage} name="editInternationalSectionHeading" />
          <Route path="/admin/international-section-headings/{id:Int}" page={InternationalSectionHeadingInternationalSectionHeadingPage} name="internationalSectionHeading" />
          <Route path="/admin/international-section-headings" page={InternationalSectionHeadingInternationalSectionHeadingsPage} name="internationalSectionHeadings" />
        </Set>
        <Set wrap={NewItemsLayout}>
          <Route path="/admin/new-items/new" page={NewItemNewNewItemPage} name="newNewItem" />
          <Route path="/admin/new-items/{id:Int}/edit" page={NewItemEditNewItemPage} name="editNewItem" />
          <Route path="/admin/new-items/{id:Int}" page={NewItemNewItemPage} name="newItem" />
          <Route path="/admin/new-items" page={NewItemNewItemsPage} name="newItems" />
        </Set>
        <Set wrap={WhatsNewHeadersLayout}>
          <Route path="/admin/whats-new-headers/new" page={WhatsNewHeaderNewWhatsNewHeaderPage} name="newWhatsNewHeader" />
          <Route path="/admin/whats-new-headers/{id:Int}/edit" page={WhatsNewHeaderEditWhatsNewHeaderPage} name="editWhatsNewHeader" />
          <Route path="/admin/whats-new-headers/{id:Int}" page={WhatsNewHeaderWhatsNewHeaderPage} name="whatsNewHeader" />
          <Route path="/admin/whats-new-headers" page={WhatsNewHeaderWhatsNewHeadersPage} name="whatsNewHeaders" />
        </Set>
        <Set wrap={TagLinesLayout}>
          <Route path="/admin/tag-lines/new" page={TagLineNewTagLinePage} name="newTagLine" />
          <Route path="/admin/tag-lines/{id:Int}/edit" page={TagLineEditTagLinePage} name="editTagLine" />
          <Route path="/admin/tag-lines/{id:Int}" page={TagLineTagLinePage} name="tagLine" />
          <Route path="/admin/tag-lines" page={TagLineTagLinesPage} name="tagLines" />
        </Set>
        <Set wrap={TitlesLayout}>
          <Route path="/admin/titles/new" page={TitleNewTitlePage} name="newTitle" />
          <Route path="/admin/titles/{id:Int}/edit" page={TitleEditTitlePage} name="editTitle" />
          <Route path="/admin/titles/{id:Int}" page={TitleTitlePage} name="title" />
          <Route path="/admin/titles" page={TitleTitlesPage} name="titles" />
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
