import React from "react";
import Header from "../../components/Header"
import MapView from "../../components/MapView"
import ListsView from "../../components/ListsView"

/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'

const SAMPLE_SPACE_IMG = "https://picture.liquidspace.com/Index?emptyImageUrl=https%3a%2f%2fliquidspace.com%2fContent%2fImages%2fliquid-holder.jpg&etag=3VHAQUH8mPG3%2fl0DpXbRHQ%3d%3d&crop=true&aux=V7JAMkTDESJFBvMvC%2fdR7IGG9G7kCpbp9ocqpLZZ2VbLjeLKjn6m9aoyuM1T0NbVaVx1C8OH0Kt5yArRFP%2bYMw%3d%3d"

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Header />
      <div className="h-screen flex bg-gray-50 overflow-hidden">
        <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
          <main className="flex-1 flex overflow-hidden">
            <div className="flex-1 flex xl:overflow-hidden">
              {/* Primary column */}
              <section
                aria-labelledby="primary-heading"
                className="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last"
              >
                {/* <h1 id="primary-heading" className="sr-only">
                  Account
                </h1> */}
                {/* Your content */}
                {/* {
                  [1,2,3,4,5,5,6].map(() => {
                    return (
                      <Card style={{maxHeight: 318, maxWidth: "32%", margin: 2}}>
                        <ImageHeader imageSrc="http://via.placeholder.com/600x250" />
                        <CardBody>Body</CardBody>
                        <CardFooter>Footer</CardFooter>
                    </Card>
                    )
                  })
                } */}
                <div className="p-3">Storage space available in <span className="font-medium">San Francisco, CA</span></div>
                <ListsView />
              </section>

              {/* Secondary column (hidden on smaller screens) */}
              <aside className="hidden lg:block lg:flex-shrink-0 lg:order-first">
                {/* TODO: remove custom 28 rem with a tailwind class like w-96 */}
                <div className="h-full relative flex flex-col border-r border-gray-200 bg-white" style={{ width: '28rem'}}>
                  {/* Your content */}
                  <MapView />
                </div>
              </aside>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

