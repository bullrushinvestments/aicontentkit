import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AIContentKit',
  description: 'AIContentKit is a no-code platform that uses AI to help small businesses and e-commerce platforms automate their content creation process for social media and blogs, saving time and improving engagement.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">AIContentKit</h1>
      <p className="mt-4 text-lg">AIContentKit is a no-code platform that uses AI to help small businesses and e-commerce platforms automate their content creation process for social media and blogs, saving time and improving engagement.</p>
    </main>
  )
}
