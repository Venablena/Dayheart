logout() {
  auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
}
