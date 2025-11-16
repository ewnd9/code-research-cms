import { Link } from 'react-router';

export function About() {
  return (
    <main className="flex justify-center items-center pt-16 pb-4">
      <div className="flex flex-col flex-1 gap-16 items-center min-h-0">
        <header className="flex flex-col gap-9 items-center">
          <div className="w-[500px] max-w-[100vw] p-4"></div>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <p>
            About Page for demo, where you can go <Link to="/">Home</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
