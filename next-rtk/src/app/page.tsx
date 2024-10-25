import styles from "./page.module.css";
import AddUsers from "./components/addusers";
import DisplayUsers from "./components/displayusers";

export default function Home() {
  return (
    <div>
      <main>
        <AddUsers />
        <DisplayUsers />
      </main>
    </div>
  );
}
