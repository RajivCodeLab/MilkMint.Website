import './styles/globals.css'

export const metadata = {
  title: 'MilkMint - Smart Milk Delivery & Billing App for Vendors',
  description: 'Track deliveries, auto-generate bills, and manage customers with MilkMint. Built for milk vendors, dairies, and societies. Join early access today!'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-background text-darktext font-body">
        <div className="min-h-screen antialiased">
          {children}
        </div>
      </body>
    </html>
  )
}
