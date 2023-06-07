// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Activity, Enquiry, Gallery, Registration, Review, Package, UserInfo } = initSchema(schema);

export {
  Activity,
  Enquiry,
  Gallery,
  Registration,
  Review,
  Package,
  UserInfo
};