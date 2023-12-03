import '@styles/globals.css'

export const metadata = {
  title: 'Bingo des Connards, le premiers jeu à boire sans boissons',
  description: 'no desc',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className='bg-gray-950 h-screen flex'>{children}</body>
    </html>
  )
}