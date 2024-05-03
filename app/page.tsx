import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <form className="flex-auto p-6">
        <div className="flex flex-wrap">
          <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
       
          <h1 className="flex-auto font-medium text-slate-900">Learn Shaddy</h1>
          <Button variant="secondary">Click me</Button>
        </div>
      </form>
    </main>
  );
}
