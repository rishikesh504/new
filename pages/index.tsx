import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <h1>my page</h1>
      {/* <ClientSideRendering /> */}
      <Link href ="/ClientSideRendering">Client Side Rendering</Link><br />
      <Link href ="/ServerSideRendering"> Server Side Rendering</Link><br/>
      <Link href ="/StaticSideRendering"> Static Side Rendering</Link>

    </div>
  )
}
