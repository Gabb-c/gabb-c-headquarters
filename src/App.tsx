import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

function App() {
  return (
    <main className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen tw-bg-muted tw-px-4 tw-antialiased">
      <div className="tw-flex tw-flex-col tw-max-w-[40rem] tw-gap-3">
        <section className="tw-flex tw-items-center tw-gap-2">
          <Avatar className="tw-h-14 tw-w-14">
            <AvatarImage src="https://github.com/Gabb-c.png" />
            <AvatarFallback>
              <Skeleton className="tw-h-14 tw-w-14 tw-rounded-full" />
            </AvatarFallback>
          </Avatar>
          <div className="tw-flex tw-flex-col">
            <span className="tw-text-xl tw-font-semibold">Gabb-c</span>
            <p className="tw-text-lg">
              23 y/o caffeine-addicted Full-Stack Engineer trying to build cool stuff.
            </p>
          </div>
        </section>
        <Separator className="tw-bg-foreground/90" />
        <p className="tw-p-4 tw-rounded-lg tw-bg-foreground/90 tw-text-muted">
          Yo! My name is Gabriel, but here you can call me Gabb-c. I'm a Full-Stack Engineer in
          Brazil with a passion to develop highly scalable projects with quality and innovation.
          Thank you for visiting my profile ツ.
        </p>
      </div>
    </main>
  );
}

export default App;
