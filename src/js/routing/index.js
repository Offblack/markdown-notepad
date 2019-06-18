import page from 'page';
import * as routes from './routes';


page.base('/markdown-notepad')

page('/', routes.index);

page('/markdown-notepad/editor', routes.editor);
page('/markdown-notepad/editor/:id', routes.editor);

page('*', routes.notFound);
page();