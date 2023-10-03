import Navbar from '@components/navbar'
import '@styles/globals.css'

export const metadata = {
    title: "Dnd Encyclopedia",
    description: "An encyclopedia about the tabletop roleplaying game Dungeons and Dragons"
}

export default function Layout({ children }: any) {
    return (
        <html lang="en">
            <body className="mx-12 lg:mx-24 bg-fixed bg-gradient-to-b from-black via-black to-red-800 h-screen">
                <Navbar/>
                {children}
            </body>
        </html>
    )
}