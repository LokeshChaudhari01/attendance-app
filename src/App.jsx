import "./index.css";
import Main from "./components/Main";
import { DataProvider } from "./Context/DataContext";
import SplitText from "./components/SplitText";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
      // refetchInterval: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <header className="mx-4 my-6 rounded-xl bg-emerald-600 py-4 text-center text-2xl sm:text-3xl font-semibold text-slate-50 shadow-sm">
          <SplitText
            text="Attendance Tracker"
            className="text-5xl font-normal text-center"
            delay={50}
            duration={0.4}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </header>
        <main className="min-h-screen bg-slate-50">
          <Main />
        </main>
      </DataProvider>
    </QueryClientProvider>
  );
}

export default App;
