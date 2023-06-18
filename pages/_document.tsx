import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang="en"
              // className='snap-mandatory snap-y'
        >
            <Head/>
            <body className='h-screen w-full overflow-hidden'>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
