import { ProductNotification, ProductNotificationLoading } from "@/components/notifications/productNotification"

export default function Home() {
  return (
  <>
  <main>
    <h1>el pepe</h1>
    <ul>
      <ProductNotificationLoading />
      <ProductNotification className="" sonsClassName="" productId={0} time={60}/>
    </ul>
    </main>
  </>
  )
}
