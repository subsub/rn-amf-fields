import amf from './index'

test('All modules load correctly', () => {

  for (i in amf) {
    expect(amf[i]).not.toBe(undefined)
  }

})
