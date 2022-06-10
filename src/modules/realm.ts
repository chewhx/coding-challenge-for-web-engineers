import * as Realm from 'realm-web';

export const realm = new Realm.App({
	id: process.env.REACT_APP_REALM_APP_ID || '',
});

export const db = realm?.currentUser
	?.mongoClient(process.env.REACT_APP_REALM_MONGO_CLIENT || '')
	?.db(process.env.REACT_APP_REALM_MONGO_DATABASE || '');

