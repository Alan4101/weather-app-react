import {} from '@testing-library/react'
import { sortDays, days } from './weather.helper'

describe('testing helpers',()=>{
  it('testing sorted days', ()=>{
    expect(sortDays(0)).toEqual(days)
    
    const expectedArr =[...[...days].splice(3), ...days.slice(0,3)]
    expect(sortDays(3)).toEqual(expectedArr)

  })
})
