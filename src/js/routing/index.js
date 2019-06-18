import page from 'page';
import * as routes from './routes';

page.base('/markdown-notepad')

page('/', routes.index);

page('/editor', routes.editor);
page('/editor/:id', routes.editor);

page('*', routes.notFound);
page();