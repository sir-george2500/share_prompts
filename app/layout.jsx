import '@styles/globals.css';
//importing Component
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: 'promptspace',
  description: 'Discover and share Powereful AI prompt',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>
      <main className='app'>
        <Nav/>
        {children}
      </main>
      </body>
    </html>
  )
}