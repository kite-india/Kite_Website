// @ts-check
import { initSchema } from '@aws-amplify/datastore'
import { schema } from './schema'

const { Gallery, Registration, Review, Package, UserInfo } = initSchema(schema)

export { Gallery, Registration, Review, Package, UserInfo }
