import './App.css';

function App() {
  return (
 <main>
   <div>Empty Value</div>
   <form className='' onSubmit={(e) => e.preventDefault()}>
     <label htmlFor="addColor"></label>
     <input 
      autoFocus
      type="text" 
      id='addColor'
      placeholder='Add colour name'
      />

   </form>
 </main>
  );
}

export default App;
