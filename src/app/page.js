import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/products">Products</Link>
    </div>
  )
}

export default Home