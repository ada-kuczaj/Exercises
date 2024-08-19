function Header() {
  return ( //kiedy zwracasz kilka linii musisz użyć nawiasów ()
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return ( //kiedy zwracasz kilka linii musisz użyć nawiasów ()
    <div>
      <Header></Header> 
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

// <Header></Header> to przykład użycia komponentu Header w innym komponencie
// <Header /> to skrócony zapis

export default App;
