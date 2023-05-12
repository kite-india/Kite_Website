// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Enquiry, Gallery, Registration, Review, Package, UserInfo } = initSchema(schema);

export {
  Enquiry,
  Gallery,
  Registration,
  Review,
  Package,
  UserInfo
};