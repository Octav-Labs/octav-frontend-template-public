# Octav Frontend Template

![Octav Logo](https://octav.fi/wp-content/uploads/2025/04/664389576848949e02d53bc4_octav-long-white.png)

A modern frontend template built with React, Next.js, and Shadcn UI. This template provides a complete foundation for building web applications with Octav Portfolio API integration.

## Tech Stack

- Next.js 15 with App Router
- React 19
- Tailwind CSS v4
- Shadcn UI
- TypeScript
- Radix UI primitives
- React Query for data fetching

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```env

# Octav API Key (REQUIRED for Octav API)
# Get your API key at https://data.octav.fi
OCTAV_API_KEY=your_octav_api_key_here
```

### Getting Your Octav API Key

1. Visit [https://data.octav.fi](https://data.octav.fi)
2. Sign up or log in to your account
3. Navigate to your API keys section
4. Create a new API key or copy your existing one
5. Add it to your `.env.local` file as `OCTAV_API_KEY`
6. Ask the Octav team for Credits

**Important:** Never commit your `.env.local` file to version control. It's already included in `.gitignore`.

## Project Structure

```
├── app/                 # Next.js app directory
├── components/         # Reusable UI components
├── contexts/          # React contexts
├── lib/              # Utility functions and configurations
├── services/         # API services and integrations
└── public/           # Static assets
```

## Octav Portfolio API Integration

This template includes an example of integration with the [Octav Portfolio API](https://api-docs.octav.fi/api-models/portfolio) to fetch and display portfolio data for blockchain addresses.

### NextJS API Endpoint

The template includes a NextJS API route at `/app/api/portfolio/route.ts` that acts as a secure proxy to the Octav API. This endpoint:

- **Securely stores your API key** on the server (never exposed to the client)
- **Handles authentication** with the Octav API
- **Validates request parameters**
- **Returns formatted error messages** for better debugging

#### API Endpoint Structure

```
GET /api/portfolio?addresses=<address>&includeImages=true&includeExplorerUrls=true
```

**Query Parameters:**

- `addresses` (required): Single wallet address
- `includeImages` (optional): Include image URLs for assets, chains, and protocols
- `includeExplorerUrls` (optional): Include blockchain explorer URLs
- `waitForSync` (optional): Wait for fresh data if cache is stale

**Example Request:**

```typescript
// In your component
const { data, isLoading, error } = useGetPortfolio({
  address: '0x6426af179aabebe47666f345d69fd9079673f6cd',
  includeImages: true,
  includeExplorerUrls: true,
});
```

### React Query Hook

The template provides a `useGetPortfolio` hook that uses React Query for data fetching:

```typescript
import { useGetPortfolio } from '@/services/octav/loader';

function MyComponent() {
  const { data, isLoading, error } = useGetPortfolio({
    address: '0x6426af179aabebe47666f345d69fd9079673f6cd',
    includeImages: true,
    includeExplorerUrls: true,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Portfolio for {data.address}</h2>
      <p>Net Worth: ${data.networth}</p>
      <p>Cash Balance: ${data.cashBalance}</p>
      <p>Daily Income: ${data.dailyIncome}</p>
      <p>Daily Expense: ${data.dailyExpense}</p>
    </div>
  );
}
```

### Portfolio Data Structure

The API returns comprehensive portfolio data including:

- **Portfolio Summary**: Net worth, cash balance, daily income/expense, fees
- **Assets by Protocol**: Organized by protocol (wallet, lending, staking, DEX, etc.)
- **Chain Distribution**: Assets organized by blockchain

See the complete type definitions in `/types/portfolio.ts` for all available fields.

### Error Handling

The API endpoint and React Query hook include comprehensive error handling:

- **Missing API Key**: Clear error message if `OCTAV_API_KEY` is not set
- **Invalid Address**: Validation error for malformed addresses
- **API Errors**: Octav API error messages are passed through to the component
- **Network Errors**: Handled gracefully with user-friendly messages

Example error display:

```typescript
if (error) {
  return (
    <div className="p-4 border border-red-300 bg-red-50 rounded-md">
      <p className="font-semibold text-red-800">Error</p>
      <p className="text-red-600">{error.message}</p>
    </div>
  );
}
```

### Example Component

Check out `/components/example/portfolio.tsx` for a complete example of how to use the portfolio API in your components.

## Octav API Documentation

For complete API documentation, visit:

- **Portfolio API**: [https://api-docs.octav.fi/api-models/portfolio](https://api-docs.octav.fi/api-models/portfolio)
- **API Access & Pricing**: [https://api-docs.octav.fi/getting-started/api-access](https://api-docs.octav.fi/getting-started/api-access)
- **Get API Key**: [https://data.octav.fi](https://data.octav.fi)
- **Supported Chains**: [https://api-docs.octav.fi/additional-informations/chains-supported-by-octav](https://api-docs.octav.fi/additional-informations/chains-supported-by-octav)
- **Protocol Types**: [https://api-docs.octav.fi/additional-informations/protocol-types-supported-by-octav](https://api-docs.octav.fi/additional-informations/protocol-types-supported-by-octav)

## Project Structure

```
├── app/
│   ├── api/
│   │   └── portfolio/
│   │       └── route.ts          # NextJS API endpoint for Octav Portfolio API
│   └── (dashboard)/
│       └── page.tsx
├── components/
│   ├── example/
│   │   └── portfolio.tsx         # Example portfolio component
│   └── ui/                        # UI components
├── services/
│   └── octav/
│       ├── loader.ts              # React Query hook (useGetPortfolio)
│       └── portfolio.ts           # Portfolio API service
├── types/
│   └── portfolio.ts               # TypeScript types for portfolio data
└── public/                        # Static assets
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Octav API Documentation](https://api-docs.octav.fi)
- [React Query Documentation](https://tanstack.com/query/latest)
- [Shadcn Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
