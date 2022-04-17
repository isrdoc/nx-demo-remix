import { utilsPrismaDb } from './utils-prisma-db'

describe('utilsPrismaDb', () => {
  it('should work', () => {
    expect(utilsPrismaDb()).toEqual('utils-prisma-db')
  })
})
