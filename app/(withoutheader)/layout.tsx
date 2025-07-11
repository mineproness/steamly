import '@/app/globals.css'
import { GetInfomationUser, GetMessage } from '@/app/server'
import Session from './Session.'
import { redirect } from 'next/navigation'
import Head from 'next/head';
import HandleStatus from '@/components/HandleStatus';
import { Metadata } from 'next';
import FullWraper from '@/components/FullWraper';
export const revalidate = 0;
export const metadata : Metadata = {
  title: {
    template:"Steamly - %s",
    default: "Steamly"
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GetSession =  GetInfomationUser()
  const message =  GetMessage()
  const [Message  , session] = await Promise.all([message , GetSession])
  return (
    <html lang="en" >
      <Head>
        <link
          rel="stylesheet"
          data-purpose="Layout StyleSheet"
          title="Web Awesome"
          href="/css/app-wa-86cd56275caec687041f80b17dc62e32.css?vsn=d"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.2/css/all.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-duotone-thin.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-duotone-solid.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-duotone-regular.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-duotone-light.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-thin.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-solid.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-regular.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-light.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.2/css/duotone-thin.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.2/css/duotone-regular.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.2/css/duotone-light.css"
        />
      </Head>
      <HandleStatus GetInfomationUser={session}/>
      <Session value={{ user: session, message: Message }}>
   <FullWraper/>
        <body >{children}</body>
      </Session>
    </html>
  )
}
