'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { ReactNode, useState } from 'react'

function QueryProvide({ children }: {children: ReactNode}) {
	const [queryClient] = useState(() => new QueryClient())
	return (
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
	)
}

export default QueryProvide