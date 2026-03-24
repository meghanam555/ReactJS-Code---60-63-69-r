import { lazy, Suspense } from "react"

export default function LazyLoading(){
    const Home = lazy(()=>import("./Home"))
    return(
        <Suspense fallback={<h1>Loading......</h1>}>
            <Home />
        </Suspense>
    )
}