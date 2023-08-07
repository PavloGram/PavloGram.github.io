function Header() {
  return (
    <header>
      <div>
        <form>
            <input type="text" placeholder="Movie search"></input>
            <button type="submit"></button>
        </form>
        <div >
                <p>We couldn't find the movie</p>
                 <p>Please try another value</p>
              </div>
      </div>
    </header>
  );
}
export default Header;
