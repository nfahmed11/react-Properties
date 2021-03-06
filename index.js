class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Joe" from="Paul" bangs={2} />
        <Hello to="Jose" />

        <Hello
          to="Ringo"
          from="Paul"
          bangs={4}
          img="https://images.unsplash.com/photo-1536053341826-c373a78370b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3782&q=80"
        />

        <Hello
          to="Carolina"
          img="https://images.unsplash.com/photo-1536053341826-c373a78370b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3782&q=80"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
