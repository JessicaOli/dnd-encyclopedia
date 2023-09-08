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
                <div className='main'>
                </div>
                <Navbar />
                <main className='app'>
                    {children}
                </main>
            </body>
        </html>
    )
}