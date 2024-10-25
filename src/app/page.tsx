import AddCompanyButton from './components/addCompanyButton';
// import ServerComponent from './components/serverComponent';
// import ClientComponent from './components/clientComponent';
// import ServerComponentCopy from './components/serverComponentCopy';
import ErrorButton from './components/errorButton';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl mb-10">Home page {new Date().toTimeString()}</h1>
      <AddCompanyButton />
      {/* <ServerComponent />
      <ClientComponent>
        <ServerComponentCopy />
      </ClientComponent> */}
      <ErrorButton />
    </main>
  );
}
