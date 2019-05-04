import page from 'page';
import * as routes from './routes';

page('/', routes.index);

page('/editor', routes.editor);
page('/editor/:id', routes.editor);

page('*', routes.notFound);
page();