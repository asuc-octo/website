import CMS from 'netlify-cms';

import HomePagePreview from './preview-templates/HomePagePreview';
import AboutPagePreview from './preview-templates/AboutPagePreview';
// import ProjectsPagePreview from './preview-templates/ProjectsPagePreview';
// import BerkeleyMobilePreview from './preview-templates/BerkeleyMobilePreview';
// import BerkeleyTimePreview from './preview-templates/BerkeleyTimePreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('home', HomePagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
// CMS.registerPreviewTemplate('projects', ProjectsPagePreview);
// CMS.registerPreviewTemplate('berkeleyMobile', BerkeleyMobilePreview);
// CMS.registerPreviewTemplate('berkeleyTime', BerkeleyTimePreview);

// CMS.registerPreviewTemplate('blog', ArticlePreview);
