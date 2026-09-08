import './globals.css'
import type { Metadata } from 'next'
export const metadata:Metadata={title:"Cocoon Tales — Assam's Heritage, Woven for the World",description:"Cocoon Tales connects the world with Assam's Muga silk, Eri silk and heritage handloom traditions.",metadataBase:new URL('https://cocoontales.com'),openGraph:{title:"Cocoon Tales",description:"Assam's heritage, woven for the world.",type:'website',url:'https://cocoontales.com'}}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
