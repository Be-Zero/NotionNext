jest.mock('@/hooks/useAdjustStyle', () => jest.fn())
jest.mock('@/lib/global', () => ({
  GlobalContextProvider: ({ children }) => children
}))
jest.mock('@/themes/theme', () => ({
  getBaseLayoutByTheme:
    () =>
    ({ children }) =>
      children
}))
jest.mock('@/lib/utils', () => ({
  getQueryParam: () => null
}))
jest.mock('@/lib/utils/errorHandler', () => ({
  __esModule: true,
  default: {
    createErrorBoundary: children => children
  }
}))
jest.mock('@/blog.config', () => ({
  __esModule: true,
  default: { THEME: 'test' }
}))
jest.mock('@/components/ExternalPlugins', () => () => null)
jest.mock('@/components/PWAInstaller', () => () => null)
jest.mock('@/components/SEO', () => () => null)
jest.mock('@clerk/localizations', () => ({ zhCN: {} }))
jest.mock(
  '@vercel/speed-insights/next',
  () => ({
    SpeedInsights: () =>
      require('react').createElement('div', { 'data-testid': 'speed-insights' })
  }),
  { virtual: true }
)

import { render, screen } from '@testing-library/react'
import MyApp from '@/pages/_app'

describe('Next.js app Speed Insights integration', () => {
  it('renders the Speed Insights component globally', () => {
    render(<MyApp Component={() => <main>Page content</main>} pageProps={{}} />)

    expect(screen.getByTestId('speed-insights')).toBeInTheDocument()
  })
})
