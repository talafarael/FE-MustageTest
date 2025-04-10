import './App.css'
import { Router } from './router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
function App() {
  const queryClient = new QueryClient()

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Theme>
          <Router />
        </Theme>
      </QueryClientProvider>
    </div>
  )
}

export default App
