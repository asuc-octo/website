import CMS from 'netlify-cms';

import HomePagePreview from './preview-templates/HomePagePreview';
import AboutPagePreview from './preview-templates/AboutPagePreview';
import ArticlePreview from './preview-templates/ArticlePreview';
import ProjectsPagePreview from './preview-templates/ProjectsPagePreview';
import ContactPagePreview from './preview-templates/ContactPagePreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('home', HomePagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('pricing', ProjectsPagePreview);
CMS.registerPreviewTemplate('contact', ContactPagePreview);
CMS.registerPreviewTemplate('blog', ArticlePreview);
