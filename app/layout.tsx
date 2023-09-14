import Navbar from '@components/navbar'
import '@styles/globals.css'

export const metadata = {
    title: "Dnd Encyclopedia",
    description: "An encyclopedia about the rpg Dungeons and Dragons"
}

export default function Layout({ children }: any) {
    return (
        <html lang='en'>
            <body>
                <Navbar />
                <div className='main bg-gradient-to-b from-black via-black to-red-800'>
                </div>
                <main className='app'>
                    {children}
                </main>
            </body>
        </html>
    )
}