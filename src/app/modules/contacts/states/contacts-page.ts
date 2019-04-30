import { ListView } from 'src/app/core/states/list-view.state';
import { Contacts } from 'src/app/models/contacts';
export interface ContactsPage extends ListView {
    records: Contacts[];
    formStatus: string;
}
