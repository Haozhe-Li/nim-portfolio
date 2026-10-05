'use client'

import { useEffect } from 'react'
import Clarity from '@microsoft/clarity'

const CLARITY_PROJECT_ID = 'yshn0y6mi4'

export function MicrosoftClarity() {
  useEffect(() => {
    Clarity.init(CLARITY_PROJECT_ID)
  }, [])

  return null
}
