export default function login() {
  return `<form action="/submit" method="post">
    <input type="text" placeholder="enter name" />
    <input type="text" placeholder="enter password" />
    <button>Submit</button>
  </form>`;
}
