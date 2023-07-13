import { Skeleton } from "./components/ui/skeleton"

export default function Loading() {
    return (
        <main className="m-24 rounded-md grid grid-cols-4 gap-12">
        {
          Array.from({length: 12}, (_, index) => index + 1).map((id) => (
            <div className="col-span-4 md:col-span-2 bg-white p-8 shadow" key={id}>
              <Skeleton className="h-6 w-1/2 mb-4"></Skeleton>
              <Skeleton className="h-6 w-1/4 mb-4"></Skeleton>
              <Skeleton className="h-52 rounded-md bg-slate-200 w-full mb-4"></Skeleton>
            </div>
          ))
        }
      </main>
    )
}