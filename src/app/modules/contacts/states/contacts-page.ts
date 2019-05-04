import { ListView } from 'src/app/core/states/list-view.state';
import { Contact } from 'src/app/modules/contacts/contact';
export interface ContactsPage extends ListView {
    records: Contact[];
    formStatus: string;
}
