// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router';
import PrimaryCallToActionTextsLayout from 'src/layouts/PrimaryCallToActionTextsLayout';
import HeroImagesLayout from 'src/layouts/HeroImagesLayout';
import TagLinesLayout from 'src/layouts/TagLinesLayout';
import MainLayout from 'src/layouts/MainLayout/MainLayout';

const Routes = () => {
  return (
    <Router>
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
